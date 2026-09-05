import React, { useState } from 'react';
import { Plus, Edit2, Pause, Play, Eye, Trash2, ArrowRight } from 'lucide-react';
import type { Service } from '@/types/marketplace';
import { formatCurrency } from '@/lib/formatters';

interface BuilderServiceManagerProps {
  initialServices: Service[];
}

export default function BuilderServiceManager({ initialServices }: BuilderServiceManagerProps) {
  const [services, setServices] = useState<Service[]>(initialServices);

  const toggleStatus = (id: string) => {
    setServices(prev => prev.map(s => {
      if (s.id === id) {
        const nextStatus = s.featured ? false : true;
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('craftgrid_toast', {
            detail: { message: `Service listing status updated.`, type: 'info' }
          }));
        }
        return { ...s, featured: nextStatus };
      }
      return s;
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Manage Published Services</h2>
          <p className="text-xs text-slate-500">Create, edit, and adjust pricing packages for your website services.</p>
        </div>
        <a
          href="/dashboard/builder/services/new"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-xl shadow-xs transition"
        >
          <Plus className="w-4 h-4" />
          <span>New Service Listing</span>
        </a>
      </div>

      <div className="space-y-3">
        {services.map(service => (
          <div
            key={service.id}
            className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm hover:border-slate-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={service.thumbnail}
                alt={service.title}
                className="w-16 h-12 rounded-lg object-cover border border-slate-200"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-soft-primary text-primary font-semibold">
                    {service.platform}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${service.featured ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {service.featured ? 'Active & Featured' : 'Standard'}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mt-1">{service.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Starting at {formatCurrency(service.startingPrice)} · {service.ordersInQueue} orders in queue
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              <a
                href={`/services/${service.slug}`}
                className="p-2 text-slate-500 hover:text-primary hover:bg-slate-50 rounded-lg transition"
                title="View Live Listing"
              >
                <Eye className="w-4 h-4" />
              </a>
              <a
                href={`/dashboard/builder/services/${service.id}/edit`}
                className="p-2 text-slate-500 hover:text-primary hover:bg-slate-50 rounded-lg transition"
                title="Edit Listing"
              >
                <Edit2 className="w-4 h-4" />
              </a>
              <button
                onClick={() => toggleStatus(service.id)}
                className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded-lg text-xs font-semibold text-slate-700 transition"
              >
                {service.featured ? 'Demote' : 'Promote'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
