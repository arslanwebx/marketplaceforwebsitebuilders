import type { Project } from '@/types/marketplace';

export const projects: Project[] = [
  {
    id: 'prj_skincare_01',
    slug: 'shopify-redesign-sustainable-skincare',
    title: 'Shopify redesign for sustainable skincare brand with custom subscription portal',
    category: 'Ecommerce',
    platform: 'Shopify',
    client: {
      id: 'usr_client_01',
      name: 'Olivia Vance',
      company: 'Luminary Brands LLC',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80',
      location: 'Austin, TX',
      verified: true,
      rating: 4.95,
      projectsPosted: 8
    },
    budget: {
      type: 'fixed',
      min: 4500,
      max: 6500,
      currency: 'USD'
    },
    timeline: '3–4 weeks',
    experienceLevel: 'Expert',
    postedAt: '2 hours ago',
    status: 'Open',
    summary: 'Our clean beauty DTC brand is seeking an experienced Shopify architect to redesign our storefront. We need a modern aesthetic, custom bundle builder, Recharge subscription integration, and sub-2-second load times.',
    description: `We are Luminary Brands, an Austin-based sustainable skincare company with over 15,000 active monthly subscribers. Our current Shopify theme is 3 years old, cluttered with unused apps, and converting at only 1.8% on mobile.

We have completed new Figma designs and brand assets. We need a seasoned Shopify Liquid specialist to build a lightning-fast Online Store 2.0 custom theme that brings these designs to life.

Key Objectives:
1. Rebuild our storefront using clean, modular Shopify 2.0 sections so our marketing team can build landing pages independently.
2. Build a custom slide-out AJAX cart with dynamic free-shipping tiers and 1-click upsells.
3. Seamlessly connect our Recharge subscription portal with custom branded styling.
4. Improve mobile PageSpeed score from 34 to 85+.`,
    deliverables: [
      'Complete custom Shopify 2.0 theme built from approved Figma files',
      'Custom AJAX cart drawer with progress meter and cross-sells',
      'Recharge subscription flow styling',
      'Integration with Klaviyo, Okendo reviews, and Google Analytics 4',
      'Loom video walkthrough documentation for marketing staff',
      '30-day post-launch bug warranty'
    ],
    requiredSkills: ['Shopify Liquid', 'Online Store 2.0', 'Recharge', 'Tailwind CSS', 'Mobile Optimization'],
    proposalsCount: 6,
    attachments: [
      { name: 'Luminary_Brand_Guidelines_2025.pdf', size: '4.2 MB', url: '#' },
      { name: 'Figma_Design_Tokens_Export.json', size: '128 KB', url: '#' }
    ]
  },
  {
    id: 'prj_saas_02',
    slug: 'webflow-marketing-site-b2b-saas-startup',
    title: 'Webflow marketing site for B2B SaaS analytics startup',
    category: 'SaaS Websites',
    platform: 'Webflow',
    client: {
      id: 'usr_client_02',
      name: 'Harrison Cole',
      company: 'MetricFlow Systems',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80',
      location: 'San Francisco, CA',
      verified: true,
      rating: 5.0,
      projectsPosted: 3
    },
    budget: {
      type: 'fixed',
      min: 5000,
      max: 7500,
      currency: 'USD'
    },
    timeline: '2–3 weeks',
    experienceLevel: 'Expert',
    postedAt: '4 hours ago',
    status: 'Open',
    summary: 'Series A analytics platform needs a high-impact 10-page Webflow marketing site built with Client-First framework, interactive pricing slider, and CMS documentation.',
    description: `MetricFlow is an enterprise data observability tool. We just raised our Series A and need to revamp our corporate marketing website before our public press announcement next month.

We require a top-tier Webflow developer who uses Finsweet Client-First standards. The site must communicate enterprise security, speed, and modern engineering aesthetics.`,
    deliverables: [
      '10 responsive pages built in Webflow (Home, Features, Solutions x3, Pricing, About, Careers, Contact, Legal)',
      'Finsweet Client-First style architecture',
      'Interactive annual/monthly pricing calculator',
      'HubSpot form integrations with custom UTM tracking'
    ],
    requiredSkills: ['Webflow', 'Client-First CMS', 'HubSpot Integration', 'Micro-interactions'],
    proposalsCount: 9
  },
  {
    id: 'prj_construction_03',
    slug: 'wordpress-website-texas-construction-company',
    title: 'WordPress website for Texas commercial construction company',
    category: 'Business Websites',
    platform: 'WordPress',
    client: {
      id: 'usr_client_03',
      name: 'Bradley Vance',
      company: 'Vanguard Industrial Group',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=crop&q=80',
      location: 'Dallas, TX',
      verified: true,
      rating: 4.88,
      projectsPosted: 5
    },
    budget: {
      type: 'fixed',
      min: 3000,
      max: 4500,
      currency: 'USD'
    },
    timeline: '3 weeks',
    experienceLevel: 'Intermediate',
    postedAt: '6 hours ago',
    status: 'Open',
    summary: 'Seeking a skilled WordPress developer to build a modern corporate portfolio website showcasing our $80M commercial construction projects across Texas.',
    description: `Vanguard Industrial builds commercial distribution centers and manufacturing plants across Texas. Our current site is 7 years old and doesn't reflect the caliber of our multi-million dollar contracts.

We want a clean, fast WordPress site utilizing custom Gutenberg blocks and ACF Pro so our team can easily upload new project case studies, drone photos, and bid requests.`,
    deliverables: [
      'Custom Gutenberg WordPress theme',
      'Portfolio filtering by sector (Industrial, Retail, Healthcare)',
      'Subcontractor bid intake form with file attachments',
      'Mobile optimization and high-speed hosting deployment'
    ],
    requiredSkills: ['WordPress', 'Gutenberg', 'ACF Pro', 'Speed Optimization'],
    proposalsCount: 5
  },
  {
    id: 'prj_coffee_04',
    slug: 'ecommerce-site-independent-coffee-brand',
    title: 'Ecommerce site for independent specialty coffee brand',
    category: 'Ecommerce',
    platform: 'Shopify',
    client: {
      id: 'usr_client_04',
      name: 'Chloe Laurent',
      company: 'Altitude Roast Works',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&auto=format&fit=crop&q=80',
      location: 'Denver, CO',
      verified: true,
      rating: 5.0,
      projectsPosted: 2
    },
    budget: {
      type: 'fixed',
      min: 3500,
      max: 5000,
      currency: 'USD'
    },
    timeline: '2–3 weeks',
    experienceLevel: 'Intermediate',
    postedAt: '8 hours ago',
    status: 'Open',
    summary: 'Artisanal roastery needs a custom Shopify storefront with interactive coffee quiz, subscription roast frequencies, and wholesale inquiry portal.',
    description: `Altitude Roast Works sources single-origin coffee beans directly from ethical farms in Central America and East Africa. We want a vibrant, warm digital storefront that guides customers to their perfect roast through an interactive flavor quiz.`,
    deliverables: [
      'Shopify 2.0 theme design and build',
      'Interactive "Find Your Roast" flavor quiz',
      'Subscription options (Weekly, Bi-weekly, Monthly)',
      'Wholesale bulk order intake form'
    ],
    requiredSkills: ['Shopify', 'Liquid', 'Subscription Commerce', 'UI/UX Design'],
    proposalsCount: 7
  },
  {
    id: 'prj_framer_05',
    slug: 'framer-landing-page-mobile-application',
    title: 'Framer landing page for consumer mobile productivity application',
    category: 'Landing Pages',
    platform: 'Framer',
    client: {
      id: 'usr_client_05',
      name: 'Julian Mercer',
      company: 'FocusFlow Labs',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=240&auto=format&fit=crop&q=80',
      location: 'Toronto, Canada',
      verified: true,
      rating: 4.92,
      projectsPosted: 4
    },
    budget: {
      type: 'fixed',
      min: 1800,
      max: 2800,
      currency: 'USD'
    },
    timeline: '7–10 days',
    experienceLevel: 'Expert',
    postedAt: '12 hours ago',
    status: 'Open',
    summary: 'Fast-paced mobile app startup needs an interactive Framer landing page featuring phone scroll animations, App Store smart badges, and viral referral mechanics.',
    description: `We are launching FocusFlow, an AI-powered calendar and deep-work companion for iOS and Mac. We have high-res 3D device renders and need a Framer specialist who excels at spring physics and scroll-driven interactions.`,
    deliverables: [
      'Interactive Framer landing page with smooth scroll effects',
      'App Store download CTA with universal smart link routing',
      'Press kit and testimonial highlights section',
      'Integration with Loops email for newsletter updates'
    ],
    requiredSkills: ['Framer', 'Micro-animations', 'Mobile UX', 'Conversion Optimization'],
    proposalsCount: 8
  },
  {
    id: 'prj_portal_06',
    slug: 'wealth-management-client-portal-nextjs',
    title: 'Modern client portal & marketing site for boutique wealth management',
    category: 'Web Applications',
    platform: 'Next.js',
    client: {
      id: 'usr_client_06',
      name: 'Eleanor Sterling',
      company: 'Sterling Crest Advisory',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&auto=format&fit=crop&q=80',
      location: 'Boston, MA',
      verified: true,
      rating: 5.0,
      projectsPosted: 6
    },
    budget: {
      type: 'fixed',
      min: 7000,
      max: 11000,
      currency: 'USD'
    },
    timeline: '4–6 weeks',
    experienceLevel: 'Expert',
    postedAt: '1 day ago',
    status: 'Open',
    summary: 'Boutique RIA firm requires a secure Next.js marketing site with password-protected investor report vault and interactive retirement projection calculators.',
    description: `Sterling Crest oversees $450M in high-net-worth client assets. We need a dual-purpose web platform: a pristine, authoritative public marketing site, and a secure client login area where clients can access confidential quarterly PDF statements.`,
    deliverables: [
      'Next.js 15 marketing site with static generation for speed',
      'Secure client authentication with 2FA via Supabase Auth',
      'Encrypted document upload and download vault',
      'Interactive compound interest & asset allocation calculator'
    ],
    requiredSkills: ['Next.js', 'React', 'Supabase', 'TypeScript', 'Fintech Security'],
    proposalsCount: 4
  },
  {
    id: 'prj_astro_07',
    slug: 'high-traffic-news-publication-astro-headless',
    title: 'High-traffic technology media publication on Astro and Sanity CMS',
    category: 'Web Applications',
    platform: 'Astro',
    client: {
      id: 'usr_client_07',
      name: 'Samir Patel',
      company: 'VentureWire Media',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80',
      location: 'New York, NY',
      verified: true,
      rating: 4.97,
      projectsPosted: 11
    },
    budget: {
      type: 'fixed',
      min: 4500,
      max: 6500,
      currency: 'USD'
    },
    timeline: '3–4 weeks',
    experienceLevel: 'Expert',
    postedAt: '1 day ago',
    status: 'Open',
    summary: 'Media publication with 400,000 monthly readers migrating from slow WordPress VIP to Astro + Sanity CMS to slash server bills and ace Core Web Vitals.',
    description: `Our WordPress installation takes 3.8 seconds to load on mobile and costs us $1,200/mo in managed cloud servers. We are migrating our editorial workflow to Sanity CMS with an Astro frontend deployed on Cloudflare Pages.`,
    deliverables: [
      'Astro frontend with 100/100 Core Web Vitals',
      'Sanity CMS content modeling and migration of 1,200 archived articles',
      'Instant search with Pagefind or Algolia',
      'Dynamic ad slot placeholders and newsletter subscribe forms'
    ],
    requiredSkills: ['Astro', 'Sanity CMS', 'TypeScript', 'SEO & Performance'],
    proposalsCount: 5
  },
  {
    id: 'prj_woo_08',
    slug: 'custom-lighting-fixtures-woocommerce-store',
    title: 'Custom lighting manufacturer B2B & B2C WooCommerce redesign',
    category: 'Ecommerce',
    platform: 'WordPress',
    client: {
      id: 'usr_client_08',
      name: 'Matthias Lind',
      company: 'LumenForm Studio',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=240&auto=format&fit=crop&q=80',
      location: 'Chicago, IL',
      verified: true,
      rating: 4.89,
      projectsPosted: 4
    },
    budget: {
      type: 'fixed',
      min: 4000,
      max: 6000,
      currency: 'USD'
    },
    timeline: '3–4 weeks',
    experienceLevel: 'Intermediate',
    postedAt: '2 days ago',
    status: 'Open',
    summary: 'Architectural lighting design studio needs WooCommerce store with custom finish visualizer, spec sheet PDF generator, and trade pricing login.',
    description: `LumenForm manufactures handcrafted architectural light fixtures. We sell to both residential consumers and interior designers who receive trade discounts. We need a modern WooCommerce setup with custom product configurators.`,
    deliverables: [
      'WooCommerce theme with custom metal & glass finish swatches',
      'Automated spec sheet PDF generator for architects',
      'B2B wholesale role-based pricing discounts',
      'Shipping calculator for freight crating'
    ],
    requiredSkills: ['WordPress', 'WooCommerce', 'PHP', 'Custom Fields Pro'],
    proposalsCount: 6
  }
];
