// Fictional demo company information. Replace before production launch.
export const siteConfig = {
  name: 'CraftGrid',
  tagline: 'Find the right web expert. Build with confidence.',
  description: 'CraftGrid is a specialized marketplace where businesses hire experienced website builders, designers, developers, and web agencies for custom websites and packaged services.',
  url: 'https://craftgrid.test',
  ogImage: 'https://craftgrid.test/brand/og-image.png',

  // Fictional demo company information. Replace before production launch.
  company: {
    name: 'CraftGrid Inc.',
    legalName: 'CraftGrid Technologies Inc.',
    address: '401 Market Row',
    suite: 'Suite 210',
    city: 'Austin',
    state: 'TX',
    postalCode: '78701',
    country: 'United States',
    phone: '+1 (512) 555-0148',
    emails: {
      general: 'hello@craftgrid.test',
      support: 'support@craftgrid.test',
      press: 'press@craftgrid.test',
      billing: 'billing@craftgrid.test',
      disputes: 'disputes@craftgrid.test'
    },
    hours: 'Monday–Friday, 9:00 AM–6:00 PM CT',
    timezone: 'America/Chicago',
    foundedYear: 2024
  },

  // Navigation Links
  nav: {
    main: [
      { label: 'Find Services', href: '/services' },
      { label: 'Find Talent', href: '/talent' },
      { label: 'Browse Projects', href: '/projects' },
      { label: 'How It Works', href: '/how-it-works' }
    ],
    serviceDropdown: [
      { label: 'Business Websites', href: '/services?category=business-websites', description: 'Corporate, professional services, local businesses' },
      { label: 'Ecommerce Stores', href: '/services?category=ecommerce', description: 'Shopify, WooCommerce, custom online storefronts' },
      { label: 'Landing Pages', href: '/services?category=landing-pages', description: 'High-conversion marketing and lead generation' },
      { label: 'SaaS Websites', href: '/services?category=saas-websites', description: 'Product marketing, pricing, and feature tours' },
      { label: 'Web Applications', href: '/services?category=web-applications', description: 'Portal, dashboards, dynamic member sites' },
      { label: 'Website Redesign', href: '/services?category=website-redesign', description: 'Modernize visuals, boost speed and conversions' },
      { label: 'Website Maintenance', href: '/services?category=website-maintenance', description: 'Security, speed optimization, regular updates' }
    ],
    footer: {
      marketplace: [
        { label: 'Browse All Services', href: '/services' },
        { label: 'Find Web Experts', href: '/talent' },
        { label: 'Client Project Requests', href: '/projects' },
        { label: 'Post a Project Brief', href: '/post-project' },
        { label: 'Saved Items', href: '/saved' }
      ],
      platform: [
        { label: 'How CraftGrid Works', href: '/how-it-works' },
        { label: 'Trust & Payment Safety', href: '/trust-safety' },
        { label: 'Service Fees & Escrow', href: '/trust-safety#escrow' },
        { label: 'Client Dashboard', href: '/dashboard/client' },
        { label: 'Builder Dashboard', href: '/dashboard/builder' }
      ],
      company: [
        { label: 'About CraftGrid', href: '/about' },
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Support', href: '/contact' },
        { label: 'Platform Status', href: '/help' },
        { label: 'Admin Portal', href: '/admin' }
      ],
      legal: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Milestone Guidelines', href: '/trust-safety' }
      ]
    }
  },

  // Prototype Demo Credentials & Fast-switch accounts
  demoAccounts: {
    client: {
      id: 'usr_client_01',
      name: 'Olivia Vance',
      email: 'olivia@luminarybrands.test',
      role: 'client' as const,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      company: 'Luminary Brands LLC',
      title: 'Head of Growth'
    },
    builder: {
      id: 'bld_maya_01',
      name: 'Maya Bennett',
      email: 'maya@mayadesign.test',
      role: 'builder' as const,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      title: 'Senior Webflow Designer & Developer',
      location: 'Austin, TX'
    },
    admin: {
      id: 'usr_admin_01',
      name: 'Marcus Hayes',
      email: 'admin@craftgrid.test',
      role: 'admin' as const,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      title: 'Platform Operations'
    }
  }
};
