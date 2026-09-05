import type { Category } from '@/types/marketplace';

export const categories: Category[] = [
  {
    id: 'cat_business',
    slug: 'business-websites',
    name: 'Business Websites',
    shortDescription: 'Modern corporate, professional services, and agency websites built to convert visitors.',
    iconName: 'Building2',
    servicesCount: 42,
    averageStartingPrice: 1200
  },
  {
    id: 'cat_ecommerce',
    slug: 'ecommerce',
    name: 'Ecommerce Stores',
    shortDescription: 'High-converting online stores engineered on Shopify, WooCommerce, and modern headless stacks.',
    iconName: 'ShoppingBag',
    servicesCount: 38,
    averageStartingPrice: 1800
  },
  {
    id: 'cat_landing_pages',
    slug: 'landing-pages',
    name: 'Landing Pages',
    shortDescription: 'Conversion-obsessed landing pages crafted in Framer, Webflow, and custom code for ads and launches.',
    iconName: 'Layout',
    servicesCount: 56,
    averageStartingPrice: 650
  },
  {
    id: 'cat_saas',
    slug: 'saas-websites',
    name: 'SaaS Websites',
    shortDescription: 'Clean product marketing sites, interactive pricing tables, and feature tours for tech companies.',
    iconName: 'Sparkles',
    servicesCount: 29,
    averageStartingPrice: 2200
  },
  {
    id: 'cat_web_apps',
    slug: 'web-applications',
    name: 'Web Applications',
    shortDescription: 'Full-stack client portals, internal tools, directories, and custom dashboards.',
    iconName: 'Code2',
    servicesCount: 24,
    averageStartingPrice: 3500
  },
  {
    id: 'cat_redesign',
    slug: 'website-redesign',
    name: 'Website Redesign',
    shortDescription: 'Transform outdated websites into lightning-fast, modern assets with improved IA and branding.',
    iconName: 'RefreshCw',
    servicesCount: 35,
    averageStartingPrice: 1500
  },
  {
    id: 'cat_maintenance',
    slug: 'website-maintenance',
    name: 'Website Maintenance',
    shortDescription: 'Ongoing performance tuning, security patches, plugin audits, and rapid content updates.',
    iconName: 'ShieldCheck',
    servicesCount: 19,
    averageStartingPrice: 400
  },
  {
    id: 'cat_cro',
    slug: 'conversion-optimization',
    name: 'Conversion Optimization',
    shortDescription: 'Heuristic audits, UX improvements, speed fixes, and copy restructuring that drive revenue.',
    iconName: 'TrendingUp',
    servicesCount: 22,
    averageStartingPrice: 950
  }
];

export const platforms = [
  'Webflow',
  'Shopify',
  'WordPress',
  'Framer',
  'Astro',
  'Next.js',
  'React',
  'WooCommerce',
  'Squarespace',
  'Wix Studio',
  'Tailwind CSS'
] as const;

export const specialties = [
  'UI/UX Design',
  'Frontend Development',
  'Full-Stack Development',
  'Ecommerce Architecture',
  'SEO & Performance',
  'Custom Animations',
  'CMS Architecture',
  'API Integrations',
  'Accessibility (WCAG)',
  'Speed Optimization'
] as const;
