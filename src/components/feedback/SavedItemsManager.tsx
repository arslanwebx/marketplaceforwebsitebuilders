import React, { useState, useEffect } from 'react';
import { Bookmark, Star, ArrowRight, Trash2 } from 'lucide-react';
import type { Service, Builder, Project } from '@/types/marketplace';
import { formatCurrency } from '@/lib/formatters';

interface SavedItemsManagerProps {
  allServices: Service[];
  allBuilders: Builder[];
  allProjects: Project[];
}

export default function SavedItemsManager({
  allServices,
  allBuilders,
  allProjects
}: SavedItemsManagerProps) {
  const [activeTab, setActiveTab] = useState<'services' | 'builders' | 'projects'>('services');
  const [savedServiceIds, setSavedServiceIds] = useState<string[]>([]);
  const [savedBuilderIds, setSavedBuilderIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const services = JSON.parse(localStorage.getItem('craftgrid_saved_services') || '[]');
      const builders = JSON.parse(localStorage.getItem('craftgrid_saved_builders') || '[]');
      // Default to saving first items if empty so the prototype shows populated states
      if (services.length === 0) {
        setSavedServiceIds([allServices[0]?.id || '', allServices[1]?.id || '']);
      } else {
        setSavedServiceIds(services);
      }
      if (builders.length === 0) {
        setSavedBuilderIds([allBuilders[0]?.id || '']);
      } else {
        setSavedBuilderIds(builders);
      }
    } catch {
      // ignore
    }
  }, [allServices, allBuilders]);

  const removeSavedService = (id: string) => {
    const updated = savedServiceIds.filter(i => i !== id);
    setSavedServiceIds(updated);
    localStorage.setItem('craftgrid_saved_services', JSON.stringify(updated));
  };

  const removeSavedBuilder = (id: string) => {
    const updated = savedBuilderIds.filter(i => i !== id);
    setSavedBuilderIds(updated);
    localStorage.setItem('craftgrid_saved_builders', JSON.stringify(updated));
  };

  const savedServices = allServices.filter(s => savedServiceIds.includes(s.id));
  const savedBuildersList = allBuilders.filter(b => savedBuilderIds.includes(b.id));

  return (
    <div className="space-y-6">
      
      {/*  */}
      <div className="flex items-center gap-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('services')}
          className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider transition ${
            activeTab === 'services' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          Saved Services ({savedServices.length})
        </button>
        <button
          onClick={() => setActiveTab('builders')}
          className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider transition ${
            activeTab === 'builders' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          Saved Builders ({savedBuildersList.length})
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider transition ${
            activeTab === 'projects' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          Saved Projects (2)
        </button>
      </div>

      {/*  */}
      {activeTab === 'services' && (
        <div>
          {savedServices.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-8 space-y-3">
              <Bookmark className="w-8 h-8 text-slate-300 mx-auto" />
              <h3 className="text-sm font-bold text-slate-800">No saved services yet</h3>
              <p className="text-xs text-slate-500">Browse marketplace services and click the heart icon to save for later.</p>
              <a href="/services" className="inline-block px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg mt-2">
                Browse Services
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedServices.map(service => (
                <div key={service.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
                  <div className="relative aspect-video bg-slate-100">
                    <img src={service.thumbnail} alt={service.title} className="w-full h-full object-cover" />
                    <button
                      onClick={() => removeSavedService(service.id)}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-rose-500 hover:bg-white transition"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="text-[11px] font-semibold text-primary">{service.platform}</span>
                    <a href={`/services/${service.slug}`} className="block font-bold text-sm text-slate-900 hover:text-primary transition line-clamp-2">
                      {service.title}
                    </a>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                      <span className="text-slate-500">By {service.builder.name}</span>
                      <span className="font-bold text-slate-900">{formatCurrency(service.startingPrice)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/*  */}
      {activeTab === 'builders' && (
        <div>
          {savedBuildersList.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-8 space-y-3">
              <Bookmark className="w-8 h-8 text-slate-300 mx-auto" />
              <h3 className="text-sm font-bold text-slate-800">No saved builders yet</h3>
              <p className="text-xs text-slate-500">Save experienced website professionals to your talent shortlist.</p>
              <a href="/talent" className="inline-block px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg mt-2">
                Discover Talent
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedBuildersList.map(builder => (
                <div key={builder.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={builder.avatar} alt={builder.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{builder.name}</h4>
                        <p className="text-xs text-primary">{builder.title}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeSavedBuilder(builder.id)}
                      className="text-slate-400 hover:text-rose-500 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2">{builder.bio}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <span className="font-bold text-slate-900">{formatCurrency(builder.hourlyRate)}/hr</span>
                    <a href={`/talent/${builder.username}`} className="text-primary font-bold hover:underline">
                      View Profile →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/*  */}
      {activeTab === 'projects' && (
        <div className="space-y-3">
          {allProjects.slice(0, 2).map(project => (
            <div key={project.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">{project.client.company} · {project.platform}</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">{project.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">Budget: {formatCurrency(project.budget.min)} – {formatCurrency(project.budget.max)}</p>
              </div>
              <a href={`/projects/${project.slug}`} className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold">
                View Project
              </a>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
