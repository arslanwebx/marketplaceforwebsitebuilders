import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, DollarSign, Download } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

export default function EarningsChart() {
  const [payoutRequested, setPayoutRequested] = useState(false);

  const monthlyData = [
    { month: 'Apr', amount: 3200, height: '40%' },
    { month: 'May', amount: 4800, height: '60%' },
    { month: 'Jun', amount: 4100, height: '52%' },
    { month: 'Jul', amount: 6500, height: '80%' },
    { month: 'Aug', amount: 7800, height: '95%' },
    { month: 'Sep', amount: 5130, height: '68%' }
  ];

  const handlePayout = () => {
    setPayoutRequested(true);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('craftgrid_toast', {
        detail: { message: 'Withdrawal of $3,420.00 initiated to your connected Stripe account.', type: 'success' }
      }));
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Revenue Performance</span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">Earnings History & Payouts</h3>
        </div>

        <button
          onClick={handlePayout}
          disabled={payoutRequested}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-1.5"
        >
          <ArrowUpRight className="w-4 h-4" />
          <span>{payoutRequested ? 'Withdrawal Pending' : 'Withdraw Available Balance'}</span>
        </button>
      </div>

      {/*  */}
      <div className="pt-4">
        <div className="h-44 flex items-end justify-between gap-3 sm:gap-6 border-b border-slate-200 pb-2">
          {monthlyData.map((item) => (
            <div key={item.month} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
              <span className="text-[11px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition">
                {formatCurrency(item.amount)}
              </span>
              <div
                className="w-full max-w-[48px] bg-primary/20 hover:bg-primary rounded-t-lg transition-all"
                style={{ height: item.height }}
              />
              <span className="text-xs font-semibold text-slate-500 mt-1">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
