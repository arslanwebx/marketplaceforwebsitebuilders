import type { Order } from '@/types/marketplace';

export const orders: Order[] = [
  {
    id: 'ord_cg_9021',
    orderNumber: 'CG-9021',
    title: 'B2B Enterprise Webflow Redesign',
    serviceId: 'srv_webflow_02',
    client: {
      id: 'usr_client_01',
      name: 'Olivia Vance',
      company: 'Luminary Brands LLC',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      email: 'olivia@luminarybrands.test'
    },
    builder: {
      id: 'bld_maya_01',
      name: 'Maya Bennett',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      title: 'Senior Webflow Designer & Developer',
      email: 'maya@mayadesign.test'
    },
    selectedPackageName: 'Growth',
    totalAmount: 5400,
    platformFee: 270,
    netBuilderAmount: 5130,
    status: 'Active',
    createdAt: 'August 24, 2025',
    dueDate: 'September 22, 2025',
    milestones: [
      {
        id: 'ms_9021_1',
        orderId: 'ord_cg_9021',
        title: 'Phase 1: Information Architecture & Wireframes',
        description: 'Site map, content modeling in Client-First, and low-fidelity interactive Figma wireframes for 10 pages.',
        amount: 1800,
        dueDate: 'September 2, 2025',
        status: 'approved',
        deliverables: ['Figma wireframe link', 'Client-First CMS schema doc'],
        approvedAt: 'September 1, 2025'
      },
      {
        id: 'ms_9021_2',
        orderId: 'ord_cg_9021',
        title: 'Phase 2: High-Fidelity UI Design & Design System',
        description: 'Full responsive visual design in Figma with interactive component states, typography tokens, and asset preparation.',
        amount: 1800,
        dueDate: 'September 12, 2025',
        status: 'submitted',
        deliverables: ['High-fidelity Figma link', 'Design tokens export JSON'],
        submittedDeliverableUrl: 'https://figma.com/file/demo-luminary-design-system'
      },
      {
        id: 'ms_9021_3',
        orderId: 'ord_cg_9021',
        title: 'Phase 3: Webflow Build, CMS Setup & Live Launch',
        description: 'Complete Webflow build, custom GSAP interactions, form webhooks, technical SEO schema, and custom domain launch.',
        amount: 1800,
        dueDate: 'September 22, 2025',
        status: 'funded',
        deliverables: ['Webflow staging link', '301 redirect audit', 'Loom tutorial library']
      }
    ],
    activity: [
      { id: 'act_1', timestamp: 'Aug 24, 2025', actor: 'Olivia Vance', action: 'Funded project escrow ($5,400.00)' },
      { id: 'act_2', timestamp: 'Aug 25, 2025', actor: 'Maya Bennett', action: 'Accepted project brief and commenced Phase 1' },
      { id: 'act_3', timestamp: 'Sep 1, 2025', actor: 'Maya Bennett', action: 'Submitted Phase 1 deliverables for client review' },
      { id: 'act_4', timestamp: 'Sep 1, 2025', actor: 'Olivia Vance', action: 'Approved Phase 1 ($1,800.00 released to builder)' },
      { id: 'act_5', timestamp: 'Sep 5, 2025', actor: 'Maya Bennett', action: 'Submitted Phase 2 UI Design for review' }
    ]
  },
  {
    id: 'ord_cg_9022',
    orderNumber: 'CG-9022',
    title: 'Custom DTC Shopify 2.0 Store Launch',
    serviceId: 'srv_shopify_01',
    client: {
      id: 'usr_client_02',
      name: 'Harrison Cole',
      company: 'Peak Botanical Co.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      email: 'harrison@peakbotanical.test'
    },
    builder: {
      id: 'bld_daniel_02',
      name: 'Daniel Brooks',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      title: 'Shopify Ecommerce Specialist',
      email: 'daniel@brooksecom.test'
    },
    selectedPackageName: 'Growth',
    totalAmount: 4500,
    platformFee: 225,
    netBuilderAmount: 4275,
    status: 'Active',
    createdAt: 'August 18, 2025',
    dueDate: 'September 15, 2025',
    milestones: [
      {
        id: 'ms_9022_1',
        orderId: 'ord_cg_9022',
        title: 'Theme Setup & Custom Homepage Liquid Sections',
        description: 'Clean theme architecture and responsive hero/collection sections.',
        amount: 2250,
        dueDate: 'September 1, 2025',
        status: 'approved',
        deliverables: ['Theme preview code'],
        approvedAt: 'August 31, 2025'
      },
      {
        id: 'ms_9022_2',
        orderId: 'ord_cg_9022',
        title: 'AJAX Cart Drawer, Upsells & Apps Integration',
        description: 'Klaviyo, Recharge subscription widget, and custom slide-out cart.',
        amount: 2250,
        dueDate: 'September 15, 2025',
        status: 'submitted',
        deliverables: ['Staging store preview', 'Recharge test account checkout proof'],
        submittedDeliverableUrl: 'https://peak-botanical-preview.myshopify.demo'
      }
    ],
    activity: [
      { id: 'act_21', timestamp: 'Aug 18, 2025', actor: 'Harrison Cole', action: 'Created order and deposited $4,500.00 into CraftGrid Escrow' },
      { id: 'act_22', timestamp: 'Aug 31, 2025', actor: 'Harrison Cole', action: 'Approved Milestone 1 ($2,250.00 released)' },
      { id: 'act_23', timestamp: 'Sep 4, 2025', actor: 'Daniel Brooks', action: 'Submitted Milestone 2 for client review' }
    ]
  },
  {
    id: 'ord_cg_9023',
    orderNumber: 'CG-9023',
    title: 'Modern WordPress Architecture for Vanguard Industrial',
    serviceId: 'srv_wordpress_03',
    client: {
      id: 'usr_client_03',
      name: 'Bradley Vance',
      company: 'Vanguard Industrial Group',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      email: 'bradley@vanguardindustrial.test'
    },
    builder: {
      id: 'bld_sofia_03',
      name: 'Sofia Turner',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      title: 'Modern WordPress Engineer',
      email: 'sofia@turnerweb.test'
    },
    selectedPackageName: 'Growth',
    totalAmount: 3800,
    platformFee: 190,
    netBuilderAmount: 3610,
    status: 'Active',
    createdAt: 'August 28, 2025',
    dueDate: 'September 18, 2025',
    milestones: [
      {
        id: 'ms_9023_1',
        orderId: 'ord_cg_9023',
        title: 'Custom Gutenberg Block System',
        description: 'ACF Pro block definitions and staging server deployment.',
        amount: 1900,
        dueDate: 'September 8, 2025',
        status: 'in_progress',
        deliverables: ['Staging URL', 'Block library demo']
      },
      {
        id: 'ms_9023_2',
        orderId: 'ord_cg_9023',
        title: 'Content Migration & Subcontractor Bid Engine',
        description: 'Migrate 40 project studies and configure secure bid forms.',
        amount: 1900,
        dueDate: 'September 18, 2025',
        status: 'funded',
        deliverables: ['Production deployment', 'Speed audit report']
      }
    ],
    activity: [
      { id: 'act_31', timestamp: 'Aug 28, 2025', actor: 'Bradley Vance', action: 'Order funded in escrow ($3,800.00)' },
      { id: 'act_32', timestamp: 'Aug 29, 2025', actor: 'Sofia Turner', action: 'Staging environment configured' }
    ]
  },
  {
    id: 'ord_cg_9024',
    orderNumber: 'CG-9024',
    title: 'Framer Landing Page for FocusFlow App',
    serviceId: 'srv_framer_04',
    client: {
      id: 'usr_client_05',
      name: 'Julian Mercer',
      company: 'FocusFlow Labs',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      email: 'julian@focusflow.test'
    },
    builder: {
      id: 'bld_marcus_04',
      name: 'Marcus Reed',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      title: 'Framer Designer',
      email: 'marcus@reedframer.test'
    },
    selectedPackageName: 'Growth',
    totalAmount: 2900,
    platformFee: 145,
    netBuilderAmount: 2755,
    status: 'Completed',
    createdAt: 'August 10, 2025',
    dueDate: 'August 22, 2025',
    milestones: [
      {
        id: 'ms_9024_1',
        orderId: 'ord_cg_9024',
        title: 'Complete Framer 3-Page Website & Remoting Handoff',
        description: 'Landing page, Pricing calculator, and interactive Changelog.',
        amount: 2900,
        dueDate: 'August 22, 2025',
        status: 'approved',
        deliverables: ['Framer remix link', 'Custom domain DNS records verified'],
        approvedAt: 'August 21, 2025'
      }
    ],
    activity: [
      { id: 'act_41', timestamp: 'Aug 10, 2025', actor: 'Julian Mercer', action: 'Funded order ($2,900.00)' },
      { id: 'act_42', timestamp: 'Aug 20, 2025', actor: 'Marcus Reed', action: 'Submitted final Framer project' },
      { id: 'act_43', timestamp: 'Aug 21, 2025', actor: 'Julian Mercer', action: 'Approved order and left 5-star review' }
    ]
  }
];
