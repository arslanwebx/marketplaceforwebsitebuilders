import React, { useState, useMemo, useEffect } from 'react';
import { Search, Star, Bookmark, Check, ArrowRight } from 'lucide-react';
import type { Builder } from '@/types/marketplace';
import { formatCurrency } from '@/lib/formatters';

interface TalentFiltersProps {
  initialBuilders: Builder[];
}

export default function TalentFilters({ initialBuilders }: TalentFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [maxHourlyRate, setMaxHourlyRate] = useState<number>(150);
  const [availability, setAvailability] = useState('');
  const [savedBuilders, setSavedBuilders] = useState<string[]>([]);
  const [inviteModalBuilder, setInviteModalBuilder] = useState<Builder | null>(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('craftgrid_saved_builders') || '[]');
      setSavedBuilders(saved);
    } catch {
      // ignore
    }
  }, []);

  const toggleSaveBuilder = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    let updated: string[];
    if (savedBuilders.includes(id)) {
      updated = savedBuilders.filter(i => i !== id);
      window.dispatchEvent(new CustomEvent('craftgrid_toast', {
        detail: { message: 'Builder removed from saved list', type: 'info' }
      }));
    } else {
      updated = [...savedBuilders, id];
      window.dispatchEvent(new CustomEvent('craftgrid_toast', {
        detail: { message: 'Builder saved to your network', type: 'success' }
      }));
    }
    setSavedBuilders(updated);
    localStorage.setItem('craftgrid_saved_builders', JSON.stringify(updated));
  };

  const platformsList = ['Webflow', 'Shopify', 'WordPress', 'Framer', 'Astro', 'Next.js'];

  const filteredBuilders = useMemo(() => {
    return initialBuilders.filter(b => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = b.name.toLowerCase().includes(q);
        const matchesTitle = b.title.toLowerCase().includes(q);
        const matchesBio = b.bio.toLowerCase().includes(q);
        const matchesSkill = b.skills.some(s => s.toLowerCase().includes(q));
        if (!matchesName && !matchesTitle && !matchesBio && !matchesSkill) return false;
      }

      if (selectedPlatform && !b.platforms.includes(selectedPlatform)) return false;
      if (b.hourlyRate > maxHourlyRate) return false;
      if (availability && b.availability !== availability) return false;

      return true;
    });
  }, [initialBuilders, searchQuery, selectedPlatform, maxHourlyRate, availability]);

  return (
    <div className="space-y-6">
      
      {/*  */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search builders by name, skill, or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
          />
        </div>

        {/*  */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar">
          <button
            onClick={() => setSelectedPlatform('')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              selectedPlatform === ''
                ? 'bg-primary text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Platforms
          </button>
          {platformsList.map(p => (
            <button
              key={p}
              onClick={() => setSelectedPlatform(selectedPlatform === p ? '' : p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedPlatform === p
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/*  */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-slate-700">Max Hourly Rate:</span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="50"
              max="150"
              step="10"
              value={maxHourlyRate}
              onChange={(e) => setMaxHourlyRate(Number(e.target.value))}
              className="accent-primary w-32 cursor-pointer"
            />
            <span className="font-bold text-slate-900 w-12">${maxHourlyRate}/hr</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-700">Availability:</span>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 font-medium text-slate-800 focus:outline-none"
          >
            <option value="">Any Availability</option>
            <option value="Available now">Available now</option>
            <option value="1–2 weeks">1–2 weeks</option>
            <option value="Next month">Next month</option>
          </select>
        </div>

        <span className="text-slate-500 font-medium">
          Showing <strong>{filteredBuilders.length}</strong> website experts
        </span>
      </div>

      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBuilders.map(builder => {
          const isSaved = savedBuilders.includes(builder.id);
          return (
            <div
              key={builder.id}
              className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/*  */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <img
                        src={builder.avatar}
                        alt={builder.name}
                        className="w-13 h-13 rounded-full object-cover border border-slate-200"
                      />
                      {builder.verified && (
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white text-primary flex items-center justify-center shadow-xs text-xs font-bold">
                          ✓
                        </span>
                      )}
                    </div>
                    <div>
                      <a href={`/talent/${builder.username}`} className="hover:text-primary transition">
                        <h3 className="text-base font-bold text-slate-900 leading-tight">{builder.name}</h3>
                      </a>
                      <p className="text-xs text-primary font-medium mt-0.5">{builder.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{builder.location} · <span className="text-emerald-600 font-medium">{builder.availability}</span></p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => toggleSaveBuilder(builder.id, e)}
                    className={`p-1.5 rounded-lg border transition ${
                      isSaved ? 'bg-soft-primary text-primary border-primary/20' : 'text-slate-400 border-slate-200 hover:text-slate-700'
                    }`}
                    title={isSaved ? 'Saved builder' : 'Save to favorites'}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/*  */}
                <div className="mt-3.5 flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 text-xs">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{builder.rating.toFixed(2)}</span>
                    <span className="text-slate-400 font-normal">({builder.reviewsCount})</span>
                  </div>
                  <span className="font-bold text-slate-900">
                    {formatCurrency(builder.hourlyRate)}<span className="font-normal text-slate-400 text-[11px]">/hr</span>
                  </span>
                </div>

                {/*  */}
                <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {builder.bio}
                </p>

                {/*  */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {builder.skills.slice(0, 4).map(skill => (
                    <span key={skill} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                {/*  */}
                {builder.portfolio && builder.portfolio.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {builder.portfolio.slice(0, 2).map(p => (
                      <div key={p.id} className="aspect-video rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                        <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/*  */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`/talent/${builder.username}`}
                  className="flex-1 py-2 px-3 text-center bg-primary hover:bg-primary-hover text-white rounded-lg text-xs font-semibold shadow-xs transition"
                >
                  View Profile
                </a>
                <button
                  onClick={() => setInviteModalBuilder(builder)}
                  className="py-2 px-3 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold transition"
                >
                  Invite
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/*  */}
      {inviteModalBuilder && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in zoom-in-95">
            <h3 className="text-lg font-bold text-slate-900">
              Invite {inviteModalBuilder.name} to Project
            </h3>
            <p className="text-xs text-slate-500">
              Select one of your open client projects to invite this builder to submit a proposal.
            </p>

            <div className="space-y-2">
              <label className="block p-3 rounded-xl border border-primary bg-soft-primary/30 cursor-pointer">
                <input type="radio" name="invite_project" defaultChecked className="accent-primary mr-2" />
                <span className="font-semibold text-xs text-slate-900">Shopify redesign for sustainable skincare</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">Budget: $4,500 – $6,500</span>
              </label>
              <label className="block p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer">
                <input type="radio" name="invite_project" className="accent-primary mr-2" />
                <span className="font-semibold text-xs text-slate-900">Webflow marketing site for B2B SaaS startup</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">Budget: $5,000 – $7,500</span>
              </label>
            </div>

            <textarea
              rows={3}
              placeholder="Optional personal message to the builder..."
              className="w-full text-xs p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            />

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setInviteModalBuilder(null)}
                className="flex-1 py-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setInviteModalBuilder(null);
                  window.dispatchEvent(new CustomEvent('craftgrid_toast', {
                    detail: { message: `Invitation sent to ${inviteModalBuilder.name}!`, type: 'success' }
                  }));
                }}
                className="flex-1 py-2.5 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-primary-hover shadow-sm"
              >
                Send Invitation
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
