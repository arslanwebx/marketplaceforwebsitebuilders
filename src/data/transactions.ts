import type { Payment } from '@/types/marketplace';

export const transactions: Payment[] = [
  {
    id: 'tx_9801',
    orderId: 'ord_cg_9021',
    orderTitle: 'B2B Enterprise Webflow Redesign',
    milestoneTitle: 'Phase 1: Information Architecture & Wireframes',
    date: 'Sep 1, 2025',
    amount: 1800,
    fee: 90,
    net: 1710,
    clientName: 'Olivia Vance',
    builderName: 'Maya Bennett',
    type: 'milestone_released',
    status: 'Completed',
    invoiceUrl: '#'
  },
  {
    id: 'tx_9802',
    orderId: 'ord_cg_9021',
    orderTitle: 'B2B Enterprise Webflow Redesign',
    milestoneTitle: 'Phase 2: High-Fidelity UI Design',
    date: 'Aug 24, 2025',
    amount: 1800,
    fee: 90,
    net: 1710,
    clientName: 'Olivia Vance',
    builderName: 'Maya Bennett',
    type: 'milestone_funded',
    status: 'In Escrow',
    invoiceUrl: '#'
  },
  {
    id: 'tx_9803',
    orderId: 'ord_cg_9021',
    orderTitle: 'B2B Enterprise Webflow Redesign',
    milestoneTitle: 'Phase 3: Webflow Build & Launch',
    date: 'Aug 24, 2025',
    amount: 1800,
    fee: 90,
    net: 1710,
    clientName: 'Olivia Vance',
    builderName: 'Maya Bennett',
    type: 'milestone_funded',
    status: 'In Escrow',
    invoiceUrl: '#'
  },
  {
    id: 'tx_9804',
    orderId: 'ord_cg_9022',
    orderTitle: 'Custom DTC Shopify 2.0 Store Launch',
    milestoneTitle: 'Theme Setup & Homepage Sections',
    date: 'Aug 31, 2025',
    amount: 2250,
    fee: 112.50,
    net: 2137.50,
    clientName: 'Harrison Cole',
    builderName: 'Daniel Brooks',
    type: 'milestone_released',
    status: 'Completed',
    invoiceUrl: '#'
  },
  {
    id: 'tx_9805',
    orderId: 'ord_cg_9024',
    orderTitle: 'Framer Landing Page for FocusFlow App',
    milestoneTitle: 'Full 3-Page Website & Handoff',
    date: 'Aug 21, 2025',
    amount: 2900,
    fee: 145,
    net: 2755,
    clientName: 'Julian Mercer',
    builderName: 'Marcus Reed',
    type: 'payout',
    status: 'Completed',
    invoiceUrl: '#'
  }
];
