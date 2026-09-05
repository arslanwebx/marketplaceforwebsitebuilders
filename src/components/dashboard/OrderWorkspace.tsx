import React, { useState } from 'react';
import { CheckCircle2, Clock, AlertCircle, FileText, Upload, Send, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import type { Order, Milestone, MilestoneStatus } from '@/types/marketplace';
import { formatCurrency } from '@/lib/formatters';

interface OrderWorkspaceProps {
  initialOrder: Order;
}

export default function OrderWorkspace({ initialOrder }: OrderWorkspaceProps) {
  const [order, setOrder] = useState<Order>(initialOrder);
  const [activeTab, setActiveTab] = useState<'overview' | 'milestones' | 'files' | 'activity'>('milestones');
  const [revisionModalMilestone, setRevisionModalMilestone] = useState<Milestone | null>(null);
  const [revisionNotes, setRevisionNotes] = useState('');
  const [submitDeliverableMilestone, setSubmitDeliverableMilestone] = useState<Milestone | null>(null);
  const [deliverableUrl, setDeliverableUrl] = useState('');

  const handleApproveMilestone = (milestoneId: string) => {
    const updatedMilestones = order.milestones.map(m => {
      if (m.id === milestoneId) {
        return {
          ...m,
          status: 'approved' as MilestoneStatus,
          approvedAt: 'Just now'
        };
      }
      return m;
    });

    const targetMilestone = order.milestones.find(m => m.id === milestoneId);

    const newActivity = [
      {
        id: `act_${Date.now()}`,
        timestamp: 'Just now',
        actor: order.client.name,
        action: `Approved "${targetMilestone?.title}" and released ${formatCurrency(targetMilestone?.amount || 0)} from escrow.`
      },
      ...order.activity
    ];

    setOrder({
      ...order,
      milestones: updatedMilestones,
      activity: newActivity
    });

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('craftgrid_toast', {
        detail: { message: `Milestone approved! Funds released to ${order.builder.name}.`, type: 'success' }
      }));
    }
  };

  const handleRequestRevision = () => {
    if (!revisionModalMilestone) return;

    const updatedMilestones = order.milestones.map(m => {
      if (m.id === revisionModalMilestone.id) {
        return {
          ...m,
          status: 'revision_requested' as MilestoneStatus,
          revisionNotes: revisionNotes
        };
      }
      return m;
    });

    const newActivity = [
      {
        id: `act_${Date.now()}`,
        timestamp: 'Just now',
        actor: order.client.name,
        action: `Requested revision on "${revisionModalMilestone.title}": "${revisionNotes}"`
      },
      ...order.activity
    ];

    setOrder({
      ...order,
      milestones: updatedMilestones,
      activity: newActivity
    });

    setRevisionModalMilestone(null);
    setRevisionNotes('');

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('craftgrid_toast', {
        detail: { message: 'Revision notes sent to builder.', type: 'info' }
      }));
    }
  };

  const handleSubmitMilestone = () => {
    if (!submitDeliverableMilestone) return;

    const updatedMilestones = order.milestones.map(m => {
      if (m.id === submitDeliverableMilestone.id) {
        return {
          ...m,
          status: 'submitted' as MilestoneStatus,
          submittedDeliverableUrl: deliverableUrl || 'https://figma.com/demo-preview-deliverables'
        };
      }
      return m;
    });

    const newActivity = [
      {
        id: `act_${Date.now()}`,
        timestamp: 'Just now',
        actor: order.builder.name,
        action: `Submitted deliverables for review on "${submitDeliverableMilestone.title}"`
      },
      ...order.activity
    ];

    setOrder({
      ...order,
      milestones: updatedMilestones,
      activity: newActivity
    });

    setSubmitDeliverableMilestone(null);
    setDeliverableUrl('');

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('craftgrid_toast', {
        detail: { message: 'Milestone submitted for client review!', type: 'success' }
      }));
    }
  };

  const getStatusBadge = (status: MilestoneStatus) => {
    switch (status) {
      case 'approved':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Approved & Released</span>;
      case 'submitted':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Awaiting Client Approval</span>;
      case 'revision_requested':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">Revision Requested</span>;
      case 'in_progress':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-soft-primary text-primary border border-primary/20">In Progress</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">Funded in Escrow</span>;
    }
  };

  return (
    <div className="space-y-6">
      
      {/*  */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">{order.orderNumber}</span>
            <span className="text-slate-300">·</span>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
              {order.status}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">{order.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
            <span>Client: <strong className="text-slate-800 font-semibold">{order.client.name}</strong> ({order.client.company})</span>
            <span>·</span>
            <span>Builder: <strong className="text-slate-800 font-semibold">{order.builder.name}</strong></span>
            <span>·</span>
            <span>Target Due Date: <strong className="text-slate-800 font-semibold">{order.dueDate}</strong></span>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col items-start lg:items-end justify-between border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100 gap-2">
          <div>
            <span className="text-xs text-slate-400 block uppercase font-medium">Total Escrow Value</span>
            <span className="text-2xl font-black text-slate-900">{formatCurrency(order.totalAmount)}</span>
          </div>
          <a
            href="/messages"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Project Chat</span>
          </a>
        </div>
      </div>

      {/*  */}
      <div className="flex items-center gap-2 border-b border-slate-200 text-xs font-semibold">
        {(['milestones', 'overview', 'files', 'activity'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-3 uppercase tracking-wider transition ${
              activeTab === tab
                ? 'border-b-2 border-primary text-primary font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/*  */}
      {activeTab === 'milestones' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>All payments are safely protected by CraftGrid Escrow</span>
            <span className="font-semibold text-slate-800">{order.milestones.length} Project Milestones</span>
          </div>

          <div className="space-y-4">
            {order.milestones.map((m, idx) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-soft-primary text-primary flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{m.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Due {m.dueDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-base font-bold text-slate-900">{formatCurrency(m.amount)}</span>
                    {getStatusBadge(m.status)}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{m.description}</p>

                {/*  */}
                <div className="bg-slate-50 p-3 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-slate-700 block mb-1">Target Deliverables:</span>
                  {m.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                  {m.submittedDeliverableUrl && (
                    <div className="pt-2 mt-2 border-t border-slate-200">
                      <span className="font-semibold text-slate-700">Submitted Deliverable: </span>
                      <a href={m.submittedDeliverableUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        {m.submittedDeliverableUrl}
                      </a>
                    </div>
                  )}
                  {m.revisionNotes && (
                    <div className="pt-2 mt-2 border-t border-slate-200 text-rose-700">
                      <span className="font-semibold">Revision Notes: </span>
                      <span>{m.revisionNotes}</span>
                    </div>
                  )}
                </div>

                {/*  */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    {m.status === 'submitted' && (
                      <>
                        <button
                          onClick={() => handleApproveMilestone(m.id)}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-xs transition"
                        >
                          Approve Milestone & Release {formatCurrency(m.amount)}
                        </button>
                        <button
                          onClick={() => setRevisionModalMilestone(m)}
                          className="px-3.5 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition"
                        >
                          Request Revision
                        </button>
                      </>
                    )}

                    {(m.status === 'in_progress' || m.status === 'funded' || m.status === 'revision_requested') && (
                      <button
                        onClick={() => setSubmitDeliverableMilestone(m)}
                        className="px-4 py-2 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-xs transition"
                      >
                        Submit Milestone Deliverable (Builder)
                      </button>
                    )}

                    {m.status === 'approved' && (
                      <span className="text-emerald-600 font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Completed on {m.approvedAt}</span>
                      </span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/*  */}
      {activeTab === 'overview' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
          <h3 className="text-base font-bold text-slate-900">Project Agreement & Specifications</h3>
          <p className="text-slate-600 leading-relaxed">
            This workspace governs the production contract between <strong>{order.client.name}</strong> and <strong>{order.builder.name}</strong>. Escrow funds remain protected under CraftGrid terms.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-slate-400 block text-[11px]">Selected Package</span>
              <span className="font-bold text-slate-900 text-sm">{order.selectedPackageName || 'Custom'}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Contract Started</span>
              <span className="font-bold text-slate-900 text-sm">{order.createdAt}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Platform Fee (5%)</span>
              <span className="font-bold text-slate-900 text-sm">{formatCurrency(order.platformFee)}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Builder Net Payout</span>
              <span className="font-bold text-slate-900 text-sm">{formatCurrency(order.netBuilderAmount)}</span>
            </div>
          </div>
        </div>
      )}

      {/*  */}
      {activeTab === 'files' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">Project Assets & Handoffs</h3>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('craftgrid_toast', {
                    detail: { message: 'File upload simulated.', type: 'info' }
                  }));
                }
              }}
              className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload New File</span>
            </button>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-primary" />
                <div>
                  <p className="font-semibold text-slate-800">Luminary_Figma_Design_Tokens.json</p>
                  <p className="text-[11px] text-slate-400">Uploaded by Maya Bennett · 142 KB</p>
                </div>
              </div>
              <button className="text-primary font-semibold hover:underline">Download</button>
            </div>
            <div className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-primary" />
                <div>
                  <p className="font-semibold text-slate-800">Skincare_Brand_Asset_Pack_2025.zip</p>
                  <p className="text-[11px] text-slate-400">Uploaded by Olivia Vance · 24.8 MB</p>
                </div>
              </div>
              <button className="text-primary font-semibold hover:underline">Download</button>
            </div>
          </div>
        </div>
      )}

      {/*  */}
      {activeTab === 'activity' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900">Contract Activity Timeline</h3>
          <div className="space-y-4 text-xs">
            {order.activity.map(act => (
              <div key={act.id} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                <div>
                  <p className="font-semibold text-slate-800">{act.action}</p>
                  <p className="text-[11px] text-slate-400">{act.actor} · {act.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/*  */}
      {revisionModalMilestone && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in zoom-in-95">
            <h3 className="text-lg font-bold text-slate-900">
              Request Milestone Revision
            </h3>
            <p className="text-xs text-slate-500">
              Detail what changes or corrections are needed for <strong>{revisionModalMilestone.title}</strong> before releasing escrow funds.
            </p>

            <textarea
              rows={4}
              value={revisionNotes}
              onChange={(e) => setRevisionNotes(e.target.value)}
              placeholder="e.g. Please update the mobile navigation drawer to match the Figma typography..."
              className="w-full text-xs p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            />

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setRevisionModalMilestone(null)}
                className="flex-1 py-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleRequestRevision}
                disabled={!revisionNotes.trim()}
                className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white rounded-lg text-xs font-semibold shadow-sm"
              >
                Send Revision Notes
              </button>
            </div>
          </div>
        </div>
      )}

      {/*  */}
      {submitDeliverableMilestone && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in zoom-in-95">
            <h3 className="text-lg font-bold text-slate-900">
              Submit Milestone Deliverable
            </h3>
            <p className="text-xs text-slate-500">
              Provide the preview link, repository URL, or staging preview for <strong>{submitDeliverableMilestone.title}</strong>.
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Deliverable URL *</label>
              <input
                type="url"
                value={deliverableUrl}
                onChange={(e) => setDeliverableUrl(e.target.value)}
                placeholder="https://preview.yourproject.com or Figma URL"
                className="w-full text-xs p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setSubmitDeliverableMilestone(null)}
                className="flex-1 py-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitMilestone}
                className="flex-1 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg text-xs font-semibold shadow-sm"
              >
                Submit for Client Approval
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
