import React, { useState } from 'react';
import { Star, MessageSquare, ExternalLink, Check, Clock, DollarSign } from 'lucide-react';
import type { Proposal } from '@/types/marketplace';
import { formatCurrency } from '@/lib/formatters';

interface ProposalComparisonProps {
  projectTitle: string;
  initialProposals: Proposal[];
}

export default function ProposalComparison({
  projectTitle,
  initialProposals
}: ProposalComparisonProps) {
  const [proposals, setProposals] = useState<Proposal[]>(initialProposals);
  const [acceptedId, setAcceptedId] = useState<string | null>(null);

  const handleAcceptProposal = (proposal: Proposal) => {
    setAcceptedId(proposal.id);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('craftgrid_toast', {
        detail: { message: `Proposal from ${proposal.builder.name} accepted! Funding escrow...`, type: 'success' }
      }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Proposal Review Matrix</span>
          <h2 className="text-xl font-bold text-slate-900 mt-0.5">{projectTitle}</h2>
          <p className="text-xs text-slate-500 mt-1">
            Compare candidate proposals side-by-side on price, delivery time, milestones, and builder reputation.
          </p>
        </div>
        <span className="px-3 py-1 bg-soft-primary text-primary text-xs font-bold rounded-full">
          {proposals.length} Proposals Received
        </span>
      </div>

      <div className="space-y-4">
        {proposals.map(proposal => {
          const isAccepted = acceptedId === proposal.id;
          return (
            <div
              key={proposal.id}
              className={`bg-white rounded-2xl border p-6 transition-all ${
                isAccepted
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                  : 'border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/*  */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-start gap-3.5">
                    <img
                      src={proposal.builder.avatar}
                      alt={proposal.builder.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900">{proposal.builder.name}</h3>
                        {proposal.builder.verified && (
                          <span className="text-primary text-xs font-bold">✓</span>
                        )}
                      </div>
                      <p className="text-xs text-primary font-medium">{proposal.builder.title}</p>
                      <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold mt-0.5">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{proposal.builder.rating.toFixed(2)}</span>
                        <span className="text-slate-400 font-normal">({proposal.builder.reviewsCount} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/*  */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                    <span className="font-bold text-slate-900 block mb-1">Proposal Letter:</span>
                    "{proposal.coverLetter}"
                  </div>

                  {/*  */}
                  {proposal.suggestedMilestones && proposal.suggestedMilestones.length > 0 && (
                    <div className="text-xs space-y-1.5 pt-1">
                      <span className="font-bold text-slate-700 block">Suggested Milestones:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {proposal.suggestedMilestones.map((m, i) => (
                          <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs flex justify-between">
                            <span className="font-medium text-slate-800 truncate mr-2">{m.title}</span>
                            <span className="font-bold text-slate-900">{formatCurrency(m.amount)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/*  */}
                <div className="md:border-l md:border-slate-100 md:pl-6 shrink-0 flex flex-col justify-between items-start md:items-end gap-4 min-w-56">
                  <div className="md:text-right">
                    <span className="text-xs text-slate-400 block uppercase font-medium">Proposed Amount</span>
                    <span className="text-2xl font-black text-slate-900 block">{formatCurrency(proposal.proposedPrice)}</span>
                    <span className="text-xs text-slate-500 block mt-1">Est. {proposal.estimatedDays} days turnaround</span>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    {isAccepted ? (
                      <div className="py-2.5 px-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold text-center flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4" />
                        <span>Proposal Accepted</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAcceptProposal(proposal)}
                        className="w-full py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-xs transition"
                      >
                        Accept Proposal
                      </button>
                    )}

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="/messages"
                        className="py-2 px-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold text-center transition flex items-center justify-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Message</span>
                      </a>
                      <a
                        href={`/talent/${proposal.builder.username}`}
                        className="py-2 px-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold text-center transition flex items-center justify-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Profile</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
