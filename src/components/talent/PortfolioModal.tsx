import React, { useState } from 'react';
import { Eye, X, ExternalLink } from 'lucide-react';
import type { PortfolioItem } from '@/types/marketplace';

interface PortfolioModalProps {
  items: PortfolioItem[];
}

export default function PortfolioModal({ items }: PortfolioModalProps) {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(item => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-2">
                <Eye className="w-4 h-4" />
                <span>View Full Showcase</span>
              </div>
            </div>

            <div className="p-4 space-y-1">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">{item.category} · {item.platform}</span>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary transition">{item.title}</h4>
              <p className="text-xs text-slate-500 line-clamp-2">{item.description}</p>
              {item.metrics && (
                <p className="text-xs font-semibold text-emerald-600 pt-1">Result: {item.metrics}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-in zoom-in-95 space-y-5">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">{activeItem.category} · {activeItem.platform}</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">{activeItem.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">Completed in {activeItem.completedYear}</p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-video bg-slate-100">
              <img
                src={activeItem.images[0] || activeItem.thumbnail}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 text-xs">
              <h5 className="font-bold text-slate-900 text-sm">Project Overview</h5>
              <p className="text-slate-600 leading-relaxed">{activeItem.description}</p>
              {activeItem.metrics && (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800 font-semibold">
                  Verified Outcome: {activeItem.metrics}
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveItem(null)}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
              >
                Close Showcase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
