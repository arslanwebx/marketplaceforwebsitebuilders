import React, { useState } from 'react';
import { ShieldCheck, Check, CreditCard, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Service, ServicePackage } from '@/types/marketplace';
import { formatCurrency } from '@/lib/formatters';

interface CheckoutFormProps {
  service: Service;
  initialTier?: 'starter' | 'growth' | 'advanced';
}

export default function CheckoutForm({ service, initialTier = 'growth' }: CheckoutFormProps) {
  const [selectedTier, setSelectedTier] = useState<'starter' | 'growth' | 'advanced'>(initialTier);
  const [includeSpeedAudit, setIncludeSpeedAudit] = useState(false);
  const [includeRushDelivery, setIncludeRushDelivery] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card_4242' | 'new_card'>('card_4242');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentPackage: ServicePackage = service.packages[selectedTier];

  const packagePrice = currentPackage.price;
  const speedAddon = includeSpeedAudit ? 350 : 0;
  const rushAddon = includeRushDelivery ? 600 : 0;
  const subtotal = packagePrice + speedAddon + rushAddon;
  const platformFee = Math.round(subtotal * 0.05); // 5% fee
  const total = subtotal + platformFee;

  const handleFundProject = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('craftgrid_toast', {
          detail: { message: 'Project escrow funded successfully! Workspace created.', type: 'success' }
        }));
      }
    }, 1200);
  };

  if (isCompleted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center max-w-xl mx-auto shadow-sm space-y-4 animate-in zoom-in-95">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Project Funded into Escrow!</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Your deposit of <strong>{formatCurrency(total)}</strong> is now held securely in CraftGrid Escrow. {service.builder.name} has been notified to kick off Phase 1.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/orders/ord_cg_9021"
            className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-xl shadow-sm transition"
          >
            Open Order Workspace
          </a>
          <a
            href="/dashboard/client"
            className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition"
          >
            Client Dashboard
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      
      {/*  */}
      <div className="lg:col-span-2 space-y-6">
        
        {/*  */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-900">1. Select Package Tier</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(['starter', 'growth', 'advanced'] as const).map(tier => {
              const pkg = service.packages[tier];
              const isSelected = selectedTier === tier;
              return (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setSelectedTier(tier)}
                  className={`p-4 rounded-xl border text-left transition ${
                    isSelected
                      ? 'border-primary bg-soft-primary/30 ring-2 ring-primary/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">{tier}</span>
                  <span className="text-lg font-black text-slate-900 block mt-1">{formatCurrency(pkg.price)}</span>
                  <span className="text-xs text-slate-600 block mt-1 font-medium">{pkg.title}</span>
                  <span className="text-[11px] text-slate-400 block mt-1">{pkg.deliveryDays} days delivery</span>
                </button>
              );
            })}
          </div>
        </div>

        {/*  */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
          <h2 className="text-base font-bold text-slate-900">2. Optional Add-ons</h2>
          
          <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSpeedAudit}
              onChange={(e) => setIncludeSpeedAudit(e.target.checked)}
              className="accent-primary mt-1"
            />
            <div className="flex-1 text-xs">
              <span className="font-bold text-slate-900 block">Technical PageSpeed & Core Web Vitals Audit (+ $350)</span>
              <span className="text-slate-500">Comprehensive diagnostic ensuring 90+ mobile Lighthouse scores on release.</span>
            </div>
          </label>

          <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={includeRushDelivery}
              onChange={(e) => setIncludeRushDelivery(e.target.checked)}
              className="accent-primary mt-1"
            />
            <div className="flex-1 text-xs">
              <span className="font-bold text-slate-900 block">Priority Rush Delivery (+ $600)</span>
              <span className="text-slate-500">Accelerates delivery schedule by 30% with dedicated weekend sprints.</span>
            </div>
          </label>
        </div>

        {/*  */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-900">3. Payment Authorization (Demo Escrow)</h2>
          <p className="text-xs text-slate-500">
            Payment is authorized and held in escrow. Builders do not receive funds until you approve each completed milestone.
          </p>

          <div className="space-y-2">
            <label className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition ${paymentMethod === 'card_4242' ? 'border-primary bg-soft-primary/20 ring-1 ring-primary' : 'border-slate-200'}`}>
              <div className="flex items-center gap-3 text-xs">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'card_4242'}
                  onChange={() => setPaymentMethod('card_4242')}
                  className="accent-primary"
                />
                <CreditCard className="w-4 h-4 text-slate-500" />
                <span className="font-bold text-slate-800">Visa ending in 4242</span>
                <span className="text-slate-400">Expires 08/28</span>
              </div>
              <span className="text-xs text-primary font-semibold">Demo Saved Card</span>
            </label>
          </div>
        </div>

      </div>

      {/*  */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-24 space-y-5">
        <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
          Order Summary
        </h3>

        {/*  */}
        <div className="flex items-center gap-3">
          <img
            src={service.thumbnail}
            alt={service.title}
            className="w-14 h-14 rounded-xl object-cover border border-slate-200"
          />
          <div>
            <h4 className="text-xs font-bold text-slate-900 line-clamp-2">{service.title}</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">By {service.builder.name}</p>
          </div>
        </div>

        {/*  */}
        <div className="space-y-2 text-xs pt-3 border-t border-slate-100">
          <div className="flex justify-between text-slate-600">
            <span>{currentPackage.name} Package</span>
            <span className="font-semibold text-slate-900">{formatCurrency(packagePrice)}</span>
          </div>

          {includeSpeedAudit && (
            <div className="flex justify-between text-slate-600">
              <span>Speed Audit Add-on</span>
              <span className="font-semibold text-slate-900">$350.00</span>
            </div>
          )}

          {includeRushDelivery && (
            <div className="flex justify-between text-slate-600">
              <span>Rush Delivery</span>
              <span className="font-semibold text-slate-900">$600.00</span>
            </div>
          )}

          <div className="flex justify-between text-slate-600">
            <span>Platform Escrow Fee (5%)</span>
            <span className="font-semibold text-slate-900">{formatCurrency(platformFee)}</span>
          </div>

          <div className="flex justify-between text-sm font-bold text-slate-900 pt-3 border-t border-slate-100">
            <span>Total Escrow Deposit</span>
            <span className="text-primary text-base">{formatCurrency(total)}</span>
          </div>
        </div>

        <button
          onClick={handleFundProject}
          disabled={isProcessing}
          className="w-full py-3.5 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white rounded-xl text-sm font-bold shadow-md transition flex items-center justify-center gap-2"
        >
          <Lock className="w-4 h-4" />
          <span>{isProcessing ? 'Authorizing Escrow...' : `Fund Project (${formatCurrency(total)})`}</span>
        </button>

        {/*  */}
        <div className="text-[11px] text-slate-400 text-center space-y-1 pt-1">
          <p className="flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-bit encrypted demonstration escrow</span>
          </p>
          <p>No credit card info is permanently stored.</p>
        </div>

      </div>

    </div>
  );
}
