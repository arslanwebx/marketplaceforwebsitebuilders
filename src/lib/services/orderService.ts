import { orders } from '@/data/orders';
import type { Milestone, MilestoneStatus, Order } from '@/types/marketplace';

export const orderService = {
  getAll: async (): Promise<Order[]> => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('craftgrid_orders');
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          // fallback
        }
      }
    }
    return [...orders];
  },

  getById: async (id: string): Promise<Order | undefined> => {
    const list = await orderService.getAll();
    return list.find(o => o.id === id);
  },

  updateMilestoneStatus: async (orderId: string, milestoneId: string, newStatus: MilestoneStatus, notes?: string): Promise<Milestone | undefined> => {
    const list = await orderService.getAll();
    const order = list.find(o => o.id === orderId);
    if (!order) return undefined;

    const ms = order.milestones.find(m => m.id === milestoneId);
    if (!ms) return undefined;

    ms.status = newStatus;
    if (notes) {
      ms.revisionNotes = notes;
    }
    if (newStatus === 'approved') {
      ms.approvedAt = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    order.activity.unshift({
      id: `act_${Date.now()}`,
      timestamp: 'Just now',
      actor: 'User',
      action: `Updated milestone "${ms.title}" to ${newStatus.replace('_', ' ')}`
    });

    if (typeof window !== 'undefined') {
      localStorage.setItem('craftgrid_orders', JSON.stringify(list));
    }

    return ms;
  }
};
