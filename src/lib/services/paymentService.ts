import { transactions } from '@/data/transactions';
import type { Payment } from '@/types/marketplace';

export const paymentService = {
  getAll: async (): Promise<Payment[]> => {
    return [...transactions];
  },

  getByClient: async (clientName: string): Promise<Payment[]> => {
    return transactions.filter(t => t.clientName === clientName);
  },

  getByBuilder: async (builderName: string): Promise<Payment[]> => {
    return transactions.filter(t => t.builderName === builderName);
  },

  createEscrowPayment: async (orderId: string, amount: number, clientName: string, builderName: string): Promise<Payment> => {
    const fee = amount * 0.05;
    const payment: Payment = {
      id: `tx_${Date.now()}`,
      orderId,
      orderTitle: 'Website Development Order',
      milestoneTitle: 'Escrow Milestone Deposit',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      amount,
      fee,
      net: amount - fee,
      clientName,
      builderName,
      type: 'milestone_funded',
      status: 'In Escrow',
      invoiceUrl: '#'
    };
    return payment;
  }
};
