import React, { useState } from 'react';
import { Check, Clock, RefreshCw, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import type { Service, ServicePackage } from '@/types/marketplace';
import { formatCurrency } from '@/lib/formatters';

interface ServicePackageTabsProps {
  service: Service;
}

export default function ServicePackageTabs({ service }: ServicePackageTabsProps) {
  const [selectedTier, setSelectedTier] = useState<'starter' | 'growth' | 'advanced'>('growth');

  const currentPackage: ServicePackage = service.packages[selectedTier];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden sticky top-24">
      
      {/*  */}
      <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-center">
        {(['starter', 'growth', 'advanced'] as const).map(tier => {
          const isSelected = selectedTier === tier;
          return (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={`py-3.5 text-xs font-bold uppercase tracking-wider transition ${
                isSelected
                  ? 'bg-white text-primary border-b-2 border-primary -mb-px'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tier}
            </button>
          );
        })}
      </div>

      {/*  */}
      <div className="p-6 space-y-5">
        
        {/*  */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="text-base font-bold text-slate-900 leading-snug">
              {currentPackage.title}
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              {currentPackage.description}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-2xl font-black text-slate-900">
              {formatCurrency(currentPackage.price)}
            </span>
            <span className="text-[11px] text-slate-400 block font-normal">One-time milestone</span>
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <Clock className="w-4 h-4 text-primary" />
            <span>{currentPackage.deliveryDays} Days Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <RefreshCw className="w-4 h-4 text-primary" />
            <span>{currentPackage.revisions} Revisions</span>
          </div>
        </div>

        {/*  */}
        <div className="space-y-2 text-xs">
          <p className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">Included in package:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-slate-700">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>{currentPackage.pagesCount} Pages</strong> design & build</span>
            </li>
            <li className="flex items-center gap-2 text-slate-700">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full Responsive Mobile & Tablet Layout</span>
            </li>
            {currentPackage.cmsSetup && (
              <li className="flex items-center gap-2 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dynamic CMS Collections & Client Editing</span>
              </li>
            )}
            {currentPackage.ecommerceCapability && (
              <li className="flex items-center gap-2 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ecommerce Cart, Checkout & Payment Setup</span>
              </li>
            )}
            {currentPackage.seoSetup && (
              <li className="flex items-center gap-2 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Core Web Vitals & Technical SEO Schema</span>
              </li>
            )}
            {currentPackage.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/*  */}
        <div className="pt-2 space-y-2.5">
          <a
            href={`/checkout/${service.slug}?tier=${selectedTier}`}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-md transition"
          >
            <span>Continue to Order ({formatCurrency(currentPackage.price)})</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`/messages?user=${service.builder.id}&service=${service.id}`}
            className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
          >
            Contact {service.builder.name} for Custom Scope
          </a>
        </div>

        {/*  */}
        <div className="pt-2 flex items-start gap-2.5 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong>CraftGrid Escrow:</strong> Funds are safely held in escrow and released to the builder only after you approve each project milestone.
          </span>
        </div>

      </div>

    </div>
  );
}
