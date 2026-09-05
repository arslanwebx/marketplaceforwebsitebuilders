import { projects } from '@/data/projects';
import type { Project, Proposal } from '@/types/marketplace';

export const projectService = {
  getAll: async (): Promise<Project[]> => {
    return [...projects];
  },

  getBySlug: async (slug: string): Promise<Project | undefined> => {
    return projects.find(p => p.slug === slug);
  },

  getById: async (id: string): Promise<Project | undefined> => {
    return projects.find(p => p.id === id);
  },

  submitProposal: async (proposal: Partial<Proposal>): Promise<Proposal> => {
    const newProposal: Proposal = {
      id: `prop_${Date.now()}`,
      projectId: proposal.projectId || '',
      builderId: proposal.builderId || 'bld_maya_01',
      builder: proposal.builder || {
        id: 'bld_maya_01',
        name: 'Maya Bennett',
        username: 'maya-bennett',
        title: 'Senior Webflow Designer & Developer',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        rating: 4.98,
        reviewsCount: 47,
        verified: true
      },
      proposedPrice: proposal.proposedPrice || 3500,
      estimatedDays: proposal.estimatedDays || 21,
      coverLetter: proposal.coverLetter || '',
      suggestedMilestones: proposal.suggestedMilestones || [],
      submittedAt: 'Just now',
      status: 'pending'
    };

    if (typeof window !== 'undefined') {
      const stored = JSON.parse(localStorage.getItem('craftgrid_proposals') || '[]');
      stored.unshift(newProposal);
      localStorage.setItem('craftgrid_proposals', JSON.stringify(stored));
    }

    return newProposal;
  }
};
