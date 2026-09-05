import React, { useState } from 'react';
import { X, DollarSign, Clock, Send, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/types/marketplace';
import { projectService } from '@/lib/services/projectService';

interface ProposalModalProps {
  project: Project;
}

export default function ProposalModal({ project }: ProposalModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState<number>(project.budget.min || 3500);
  const [deliveryDays, setDeliveryDays] = useState<number>(21);
  const [coverMessage, setCoverMessage] = useState('');
  const [milestones, setMilestones] = useState([
    { title: 'Discovery & High-Fidelity UI Wireframes', amount: 1500, durationDays: 7, deliverable: 'Figma interactive prototype' },
    { title: 'Full Web Development & CMS Setup', amount: 2000, durationDays: 14, deliverable: 'Live staging URL and CMS integration' }
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const addMilestone = () => {
    setMilestones([
      ...milestones,
      { title: `Milestone ${milestones.length + 1}`, amount: 1000, durationDays: 7, deliverable: 'Deliverables list' }
    ]);
  };

  const removeMilestone = (index: number) => {
    if (milestones.length > 1) {
      setMilestones(milestones.filter((_, i) => i !== index));
    }
  };

  const updateMilestone = (index: number, field: string, value: any) => {
    const copy = [...milestones];
    copy[index] = { ...copy[index], [field]: value };
    setMilestones(copy);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!coverMessage.trim()) {
      setError('Please provide a short cover message explaining your approach.');
      return;
    }
    if (price <= 0) {
      setError('Please enter a valid proposed price.');
      return;
    }

    setError('');
    await projectService.submitProposal({
      projectId: project.id,
      proposedPrice: price,
      estimatedDays: deliveryDays,
      coverLetter: coverMessage,
      suggestedMilestones: milestones
    });

    setSubmitted(true);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('craftgrid_toast', {
        detail: { message: 'Your proposal has been submitted to the client!', type: 'success' }
      }));
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-md transition flex items-center justify-center gap-2"
      >
        <span>Submit a Proposal</span>
        <Send className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-in zoom-in-95">
            <button
              onClick={() => {
                setIsOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Proposal Submitted!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {project.client.company} has received your proposal. You will be notified via email and in your messages when they review it.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setSubmitted(false);
                    }}
                    className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover shadow-sm"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Project Proposal</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{project.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Client Budget: ${project.budget.min} – ${project.budget.max} · Timeline: {project.timeline}
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                    {error}
                  </div>
                )}

                {/*  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Proposed Fixed Price (USD) *
                    </label>
                    <div className="relative">
                      <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="number"
                        min="100"
                        step="50"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Estimated Delivery (Days) *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="number"
                        min="1"
                        max="180"
                        value={deliveryDays}
                        onChange={(e) => setDeliveryDays(Number(e.target.value))}
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/*  */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Cover Letter & Relevant Experience *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe how your experience with this platform solves the client's goals..."
                    value={coverMessage}
                    onChange={(e) => setCoverMessage(e.target.value)}
                    className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>

                {/*  */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-700">
                      Suggested Project Milestones ({milestones.length})
                    </label>
                    <button
                      type="button"
                      onClick={addMilestone}
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Milestone</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {milestones.map((ms, index) => (
                      <div key={index} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <input
                            type="text"
                            placeholder="Milestone Title"
                            value={ms.title}
                            onChange={(e) => updateMilestone(index, 'title', e.target.value)}
                            className="flex-1 text-xs font-semibold p-1.5 bg-white border border-slate-200 rounded"
                          />
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-slate-400">$</span>
                            <input
                              type="number"
                              value={ms.amount}
                              onChange={(e) => updateMilestone(index, 'amount', Number(e.target.value))}
                              className="w-20 text-xs p-1.5 bg-white border border-slate-200 rounded text-right font-medium"
                            />
                          </div>
                          {milestones.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeMilestone(index)}
                              className="text-slate-400 hover:text-rose-500 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder="Specific deliverables for this milestone..."
                          value={ms.deliverable}
                          onChange={(e) => updateMilestone(index, 'deliverable', e.target.value)}
                          className="w-full text-xs p-1.5 bg-white border border-slate-200 rounded text-slate-600"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/*  */}
                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center justify-center gap-2"
                  >
                    <span>Send Proposal to Client</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
