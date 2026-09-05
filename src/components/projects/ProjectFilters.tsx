import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, ShieldCheck } from 'lucide-react';
import type { Project } from '@/types/marketplace';
import { formatCurrency } from '@/lib/formatters';

interface ProjectFiltersProps {
  initialProjects: Project[];
}

export default function ProjectFilters({ initialProjects }: ProjectFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedBudgetTier, setSelectedBudgetTier] = useState('');

  const platforms = ['Webflow', 'Shopify', 'WordPress', 'Framer', 'Astro', 'Next.js'];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter(p => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesSummary = p.summary.toLowerCase().includes(q);
        const matchesSkill = p.requiredSkills.some(s => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSummary && !matchesSkill) return false;
      }

      if (selectedPlatform && p.platform !== selectedPlatform) return false;
      if (selectedExperience && p.experienceLevel !== selectedExperience) return false;
      if (selectedBudgetTier === 'under-3000' && p.budget.max > 3000) return false;
      if (selectedBudgetTier === '3000-6000' && (p.budget.max < 3000 || p.budget.min > 6000)) return false;
      if (selectedBudgetTier === 'over-6000' && p.budget.max < 6000) return false;

      return true;
    });
  }, [initialProjects, searchQuery, selectedPlatform, selectedExperience, selectedBudgetTier]);

  return (
    <div className="space-y-6">
      
      {/*  */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects by skills, industry, or brief..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="text-xs p-2 rounded-lg bg-slate-50 border border-slate-200 font-medium text-slate-800 focus:outline-none"
          >
            <option value="">All Platforms</option>
            {platforms.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          <select
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
            className="text-xs p-2 rounded-lg bg-slate-50 border border-slate-200 font-medium text-slate-800 focus:outline-none"
          >
            <option value="">All Experience Levels</option>
            <option value="Entry">Entry Level</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>

          <select
            value={selectedBudgetTier}
            onChange={(e) => setSelectedBudgetTier(e.target.value)}
            className="text-xs p-2 rounded-lg bg-slate-50 border border-slate-200 font-medium text-slate-800 focus:outline-none"
          >
            <option value="">Any Budget</option>
            <option value="under-3000">Under $3,000</option>
            <option value="3000-6000">$3,000 – $6,000</option>
            <option value="over-6000">$6,000+</option>
          </select>
        </div>
      </div>

      {/*  */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Showing <strong>{filteredProjects.length}</strong> active client briefs</span>
        <a
          href="/post-project"
          className="text-primary font-semibold hover:underline"
        >
          Looking for a builder? Post your project →
        </a>
      </div>

      {/*  */}
      <div className="space-y-4">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2.5 flex-1">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="font-semibold text-slate-900">{project.client.company}</span>
                {project.client.verified && (
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Client</span>
                  </span>
                )}
                <span>·</span>
                <span>Posted {project.postedAt}</span>
                <span>·</span>
                <span>{project.client.location}</span>
              </div>

              <a href={`/projects/${project.slug}`} className="block group">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition leading-snug">
                  {project.title}
                </h3>
              </a>

              <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed max-w-3xl">
                {project.summary}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-soft-primary text-primary font-semibold">
                  {project.platform}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                  {project.experienceLevel}
                </span>
                {project.requiredSkills.map(skill => (
                  <span key={skill} className="text-xs px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/*  */}
            <div className="md:border-l md:border-slate-100 md:pl-6 shrink-0 flex flex-col justify-between items-start md:items-end gap-3 min-w-44">
              <div className="md:text-right">
                <span className="text-xs text-slate-400 block uppercase font-medium">Budget</span>
                <span className="text-lg font-bold text-slate-900 block">
                  {formatCurrency(project.budget.min)} – {formatCurrency(project.budget.max)}
                </span>
                <span className="text-xs text-slate-500">{project.timeline} · {project.proposalsCount} proposals</span>
              </div>

              <a
                href={`/projects/${project.slug}`}
                className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-xs transition"
              >
                <span>View & Submit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
