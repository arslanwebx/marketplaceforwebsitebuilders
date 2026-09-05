import type { Review } from '@/types/marketplace';

export const reviews: Review[] = [
  {
    id: 'rev_01',
    targetId: 'srv_shopify_01',
    targetType: 'service',
    author: {
      name: 'Olivia Vance',
      company: 'Luminary Brands',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      location: 'Austin, TX'
    },
    rating: 5,
    date: '2 weeks ago',
    comment: 'Daniel delivered our new Shopify storefront 4 days ahead of schedule. The custom slide-out cart and bundle builder alone raised our average order value from $68 to $94 within our first 10 days of launch. Flawless communication.',
    serviceTitle: 'Custom Shopify store design and development',
    projectBudget: 4500
  },
  {
    id: 'rev_02',
    targetId: 'bld_daniel_02',
    targetType: 'builder',
    author: {
      name: 'Marcus Vance',
      company: 'Peak Athletic Apparel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      location: 'New York, NY'
    },
    rating: 5,
    date: '1 month ago',
    comment: 'Best Shopify developer we have ever contracted. Daniel knows Liquid inside and out and solved complex third-party app conflicts that two previous agencies could not fix.',
    projectBudget: 6200
  },
  {
    id: 'rev_03',
    targetId: 'srv_webflow_02',
    targetType: 'service',
    author: {
      name: 'Harrison Cole',
      company: 'MetricFlow Systems',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      location: 'San Francisco, CA'
    },
    rating: 5,
    date: '3 weeks ago',
    comment: 'Maya is a master of Webflow. She used Finsweet Client-First so cleanly that our junior content writers were able to publish blog posts and case studies on day one without any training. Our seed investors loved the site.',
    serviceTitle: 'Conversion-focused Webflow website',
    projectBudget: 5400
  },
  {
    id: 'rev_04',
    targetId: 'bld_maya_01',
    targetType: 'builder',
    author: {
      name: 'Sarah Jenkins',
      company: 'Aura Longevity Clinic',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      location: 'Austin, TX'
    },
    rating: 5,
    date: '1 month ago',
    comment: 'Working with Maya on CraftGrid was the smoothest freelancer engagement I have experienced in 10 years of running digital teams. Clear milestones, prompt Loom walkthroughs, and stunning aesthetics.',
    projectBudget: 3800
  },
  {
    id: 'rev_05',
    targetId: 'srv_wordpress_03',
    targetType: 'service',
    author: {
      name: 'Bradley Vance',
      company: 'Vanguard Industrial',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
      location: 'Dallas, TX'
    },
    rating: 5,
    date: '3 weeks ago',
    comment: 'Sofia rescued our company from an unstable Elementor mess. Her custom Gutenberg blocks are fast, secure, and load under 0.8 seconds. We closed a $1.2M commercial roofing bid directly through the new inquiry form.',
    serviceTitle: 'Modern WordPress website for service businesses',
    projectBudget: 3800
  },
  {
    id: 'rev_06',
    targetId: 'bld_sofia_03',
    targetType: 'builder',
    author: {
      name: 'Claire Beauchamp',
      company: 'Montréal Legal Partners',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      location: 'Toronto, Canada'
    },
    rating: 5,
    date: '2 months ago',
    comment: 'Sofia is bilingual and delivered a seamless English/French WordPress corporate site for our firm. Meticulous code and fantastic communication throughout.',
    projectBudget: 4200
  },
  {
    id: 'rev_07',
    targetId: 'srv_framer_04',
    targetType: 'service',
    author: {
      name: 'Julian Mercer',
      company: 'FocusFlow Labs',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      location: 'London, UK'
    },
    rating: 5,
    date: '2 weeks ago',
    comment: 'Marcus built our Framer marketing page in 8 days flat. We hit #2 Product of the Day on Product Hunt and collected 14,000 waitlist emails with zero downtime. Marcus is phenomenal.',
    serviceTitle: 'High-converting SaaS landing page built in Framer',
    projectBudget: 2900
  },
  {
    id: 'rev_08',
    targetId: 'bld_marcus_04',
    targetType: 'builder',
    author: {
      name: 'Tomás Mendez',
      company: 'HyperScale AI Cloud',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      location: 'Berlin, Germany'
    },
    rating: 5,
    date: '1 month ago',
    comment: 'Marcus understands the nuances of dark-mode SaaS UI better than anyone. The animations are buttery smooth and don’t slow down low-spec laptops.',
    projectBudget: 4800
  },
  {
    id: 'rev_09',
    targetId: 'srv_astro_05',
    targetType: 'service',
    author: {
      name: 'Samir Patel',
      company: 'VentureWire Media',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      location: 'New York, NY'
    },
    rating: 5,
    date: '1 month ago',
    comment: 'Lena cut our hosting bill by 75% and our Google Mobile PageSpeed jumped straight to 100/100. Our organic Google discover traffic has tripled since migrating to Astro.',
    serviceTitle: 'Blazing-fast Astro & Tailwind marketing website',
    projectBudget: 4200
  },
  {
    id: 'rev_10',
    targetId: 'bld_lena_05',
    targetType: 'builder',
    author: {
      name: 'Klaus Fischer',
      company: 'Berlin Tech Review',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      location: 'Berlin, Germany'
    },
    rating: 5,
    date: '2 months ago',
    comment: 'Unbeatable performance engineering. Lena is structured, writes clean TypeScript, and delivered robust Sanity CMS schemas.',
    projectBudget: 5000
  },
  {
    id: 'rev_11',
    targetId: 'srv_nextjs_06',
    targetType: 'service',
    author: {
      name: 'Eleanor Sterling',
      company: 'Sterling Crest Advisory',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80',
      location: 'Boston, MA'
    },
    rating: 5,
    date: '3 weeks ago',
    comment: 'Ethan developed a bulletproof Next.js client portal with Supabase Row Level Security. Our institutional compliance team signed off with zero reservations.',
    serviceTitle: 'Full-stack client portal with Next.js & Supabase',
    projectBudget: 5900
  },
  {
    id: 'rev_12',
    targetId: 'bld_aisha_07',
    targetType: 'builder',
    author: {
      name: 'Tariq Al-Mansoor',
      company: 'Maison Al-Noor',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
      location: 'Dubai, UAE'
    },
    rating: 5,
    date: '1 month ago',
    comment: 'Aisha delivered a masterpiece for our luxury watch brand. High ticket checkout conversion increased by 44% in the first quarter.',
    projectBudget: 9800
  },
  {
    id: 'rev_13',
    targetId: 'srv_cro_09',
    targetType: 'service',
    author: {
      name: 'Jason Reed',
      company: 'OmniSaaS',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      location: 'Austin, TX'
    },
    rating: 5,
    date: '2 weeks ago',
    comment: 'Noah restructured our pricing page and demo request form. In our two-week A/B test, demo bookings increased by 52%. Worth every penny.',
    serviceTitle: 'Conversion optimization audit & landing page overhaul',
    projectBudget: 2400
  },
  {
    id: 'rev_14',
    targetId: 'bld_julian_10',
    targetType: 'builder',
    author: {
      name: 'Wayne Higgins',
      company: 'Higgins Heavy Rigging',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      location: 'Houston, TX'
    },
    rating: 5,
    date: '1 month ago',
    comment: 'Julian has looked after our commercial WordPress site for 2 years. Whenever an update is required, he handles it immediately with zero headaches.',
    projectBudget: 1500
  },
  {
    id: 'rev_15',
    targetId: 'srv_restaurant_11',
    targetType: 'service',
    author: {
      name: 'Marco Bellini',
      company: 'Osteria Bellini',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
      location: 'London, UK'
    },
    rating: 5,
    date: '1 month ago',
    comment: 'Isabella gave our restaurant an online home as warm and inviting as our dining room. Direct reservations through Resy have reached an all-time high.',
    serviceTitle: 'Restaurant & hospitality booking website in Webflow',
    projectBudget: 4600
  }
];
