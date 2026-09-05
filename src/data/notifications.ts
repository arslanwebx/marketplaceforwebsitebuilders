import type { Notification } from '@/types/marketplace';

export const notifications: Notification[] = [
  {
    id: 'notif_01',
    userId: 'usr_client_01',
    category: 'orders',
    title: 'Milestone 2 Submitted for Review',
    description: 'Maya Bennett submitted Phase 2: High-Fidelity UI Design for order #CG-9021.',
    link: '/orders/ord_cg_9021',
    timestamp: '2 hours ago',
    read: false
  },
  {
    id: 'notif_02',
    userId: 'usr_client_01',
    category: 'messages',
    title: 'New message from Maya Bennett',
    description: '"I just uploaded the updated interactive Figma wireframes for the pricing tiers..."',
    link: '/messages',
    timestamp: '3 hours ago',
    read: false
  },
  {
    id: 'notif_03',
    userId: 'usr_client_01',
    category: 'proposals',
    title: 'New proposal received',
    description: 'Daniel Brooks submitted a $5,500 proposal for your Shopify Skincare Redesign project.',
    link: '/dashboard/client/projects/prj_skincare_01/proposals',
    timestamp: '5 hours ago',
    read: false
  },
  {
    id: 'notif_04',
    userId: 'usr_client_01',
    category: 'payments',
    title: 'Escrow Milestone Approved',
    description: 'Phase 1 ($1,800.00) was successfully released to Maya Bennett.',
    link: '/dashboard/client/payments',
    timestamp: '4 days ago',
    read: true
  },
  {
    id: 'notif_05',
    userId: 'usr_client_01',
    category: 'reviews',
    title: 'Review reminder',
    description: 'Order #CG-9024 was completed. Please leave a review for Marcus Reed.',
    link: '/services/high-converting-saas-landing-page-framer#reviews',
    timestamp: '1 week ago',
    read: true
  },
  {
    id: 'notif_06',
    userId: 'usr_client_01',
    category: 'system',
    title: 'Security notice',
    description: 'Two-factor authentication was verified for your account from Austin, TX.',
    link: '/settings',
    timestamp: '2 weeks ago',
    read: true
  }
];
