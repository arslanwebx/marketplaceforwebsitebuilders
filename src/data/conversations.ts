import type { Conversation } from '@/types/marketplace';

export const conversations: Conversation[] = [
  {
    id: 'conv_maya_olivia',
    participant: {
      id: 'bld_maya_01',
      name: 'Maya Bennett',
      role: 'builder',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      title: 'Senior Webflow Designer & Developer',
      online: true,
      lastSeen: 'Active now'
    },
    projectContext: {
      id: 'ord_cg_9021',
      title: 'B2B Enterprise Webflow Redesign',
      amount: 5400,
      status: 'Milestone 2 in Progress'
    },
    lastMessage: {
      text: 'I just uploaded the updated interactive Figma wireframes for the pricing tiers and solutions dropdown. Take a look when you have a moment!',
      timestamp: '10:42 AM',
      unread: true
    },
    messages: [
      {
        id: 'msg_01',
        senderId: 'usr_client_01',
        senderName: 'Olivia Vance',
        senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        text: 'Hi Maya! We loved your portfolio piece for Nexus Intelligence. We have a similar Series A analytics product and need a new Webflow site before our launch next month.',
        timestamp: 'Yesterday at 3:15 PM'
      },
      {
        id: 'msg_02',
        senderId: 'bld_maya_01',
        senderName: 'Maya Bennett',
        senderAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        text: 'Hello Olivia! Thank you for reaching out. Nexus was a fantastic project—we built that using Client-First CMS and custom GSAP micro-interactions. What is your ideal launch date?',
        timestamp: 'Yesterday at 3:40 PM'
      },
      {
        id: 'msg_03',
        senderId: 'usr_client_01',
        senderName: 'Olivia Vance',
        senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        text: 'We are targeting 4 weeks from today. We already funded Milestone 1 ($1,800) in escrow on CraftGrid. Here are our current brand guidelines.',
        timestamp: 'Yesterday at 4:10 PM',
        attachments: [
          { name: 'Luminary_Brand_System_v2.pdf', size: '3.4 MB', type: 'application/pdf' }
        ]
      },
      {
        id: 'msg_04',
        senderId: 'bld_maya_01',
        senderName: 'Maya Bennett',
        senderAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        text: 'I just uploaded the updated interactive Figma wireframes for the pricing tiers and solutions dropdown. Take a look when you have a moment!',
        timestamp: '10:42 AM'
      }
    ]
  },
  {
    id: 'conv_daniel_harrison',
    participant: {
      id: 'bld_daniel_02',
      name: 'Daniel Brooks',
      role: 'builder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      title: 'Shopify Ecommerce Specialist',
      online: true,
      lastSeen: 'Active now'
    },
    projectContext: {
      id: 'ord_cg_9022',
      title: 'Custom DTC Shopify 2.0 Store',
      amount: 4500,
      status: 'Milestone 3 Submitted'
    },
    lastMessage: {
      text: 'The AJAX cart with free-shipping threshold is now deployed to the staging preview URL. Ready for your review!',
      timestamp: 'Yesterday',
      unread: false
    },
    messages: [
      {
        id: 'msg_05',
        senderId: 'bld_daniel_02',
        senderName: 'Daniel Brooks',
        senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        text: 'The AJAX cart with free-shipping threshold is now deployed to the staging preview URL. Ready for your review!',
        timestamp: 'Yesterday at 5:12 PM',
        attachments: [
          { name: 'Shopify_Staging_Preview_Credentials.pdf', size: '140 KB', type: 'application/pdf' }
        ]
      }
    ]
  },
  {
    id: 'conv_sofia_bradley',
    participant: {
      id: 'bld_sofia_03',
      name: 'Sofia Turner',
      role: 'builder',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      title: 'Modern WordPress Engineer',
      online: false,
      lastSeen: '2 hours ago'
    },
    projectContext: {
      id: 'ord_cg_9023',
      title: 'Industrial Construction Gutenberg Site',
      amount: 3800,
      status: 'In Progress'
    },
    lastMessage: {
      text: 'Database migration completed. Testing the project bid submission form on mobile devices now.',
      timestamp: 'Sep 4',
      unread: false
    },
    messages: [
      {
        id: 'msg_06',
        senderId: 'bld_sofia_03',
        senderName: 'Sofia Turner',
        senderAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
        text: 'Database migration completed. Testing the project bid submission form on mobile devices now.',
        timestamp: 'Sep 4 at 11:30 AM'
      }
    ]
  },
  {
    id: 'conv_marcus_julian',
    participant: {
      id: 'bld_marcus_04',
      name: 'Marcus Reed',
      role: 'builder',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      title: 'Framer Designer',
      online: true,
      lastSeen: 'Active now'
    },
    lastMessage: {
      text: 'The 3D interactive phone mockup looks incredible on Framer. Sending you the remoting link in a minute.',
      timestamp: 'Sep 3',
      unread: false
    },
    messages: [
      {
        id: 'msg_07',
        senderId: 'bld_marcus_04',
        senderName: 'Marcus Reed',
        senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        text: 'The 3D interactive phone mockup looks incredible on Framer. Sending you the remoting link in a minute.',
        timestamp: 'Sep 3 at 4:15 PM'
      }
    ]
  }
];
