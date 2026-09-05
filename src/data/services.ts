import type { Service } from '@/types/marketplace';

export const services: Service[] = [
  {
    id: 'srv_shopify_01',
    slug: 'custom-shopify-store-design',
    title: 'Custom Shopify store design and development for growing brands',
    shortDescription: 'Bespoke Shopify 2.0 store designed from scratch to maximize conversions, average order value, and mobile speed.',
    fullDescription: `I design and engineer custom Shopify 2.0 themes tailored strictly for direct-to-consumer (DTC) brands that want to stand out from generic drop-shipping templates.

Every store is hand-coded using modern Shopify Liquid, semantic HTML, and performant CSS to ensure sub-2-second load times on mobile networks. Your site will feature custom modular sections that your internal marketing team can rearrange effortlessly without touching code.

I also set up critical e-commerce integrations including Klaviyo email flows, subscription tools (Recharge/Smartrr), customer review widgets, and advanced bundle builders.`,
    category: 'Ecommerce',
    platform: 'Shopify',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80'
    ],
    builderId: 'bld_daniel_02',
    builder: {
      id: 'bld_daniel_02',
      name: 'Daniel Brooks',
      username: 'daniel-brooks',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80',
      title: 'Shopify Ecommerce Specialist & Architect',
      rating: 4.96,
      reviewsCount: 39,
      completedProjectsCount: 54,
      location: 'New York, NY',
      verified: true,
      responseTime: 'within 2 hours'
    },
    startingPrice: 2800,
    startingDeliveryDays: 14,
    rating: 4.97,
    reviewsCount: 38,
    ordersInQueue: 3,
    tags: ['Shopify', 'Ecommerce', 'Liquid', 'DTC Store', 'Mobile First'],
    featured: true,
    packages: {
      starter: {
        id: 'pkg_shop_start',
        name: 'Starter',
        title: 'Core Store Launch',
        description: 'Perfect for new brands launching their flagship product with up to 10 products.',
        price: 2800,
        deliveryDays: 14,
        revisions: 2,
        pagesCount: 5,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: true,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 3,
        features: [
          'Homepage + Product + Collection + Cart + About/Policy templates',
          'Responsive design tested on iOS and Android',
          'Shopify 2.0 drag-and-drop section builder',
          'Klaviyo newsletter integration',
          'Free 14-day post-launch support'
        ]
      },
      growth: {
        id: 'pkg_shop_growth',
        name: 'Growth',
        title: 'High-Conversion DTC Brand',
        description: 'For expanding stores looking to scale past 6-figures with custom cart and upsells.',
        price: 4500,
        deliveryDays: 21,
        revisions: 4,
        pagesCount: 10,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: true,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 6,
        features: [
          'All Starter features included',
          'Custom slide-out AJAX cart with progress bar for free shipping',
          'Product bundle builder & subscription upsells',
          'Advanced filtering & search drawer',
          'Klaviyo, Reviews, Recharge & Google Analytics 4 tracking setup',
          '30-day post-launch support'
        ]
      },
      advanced: {
        id: 'pkg_shop_adv',
        name: 'Advanced',
        title: 'Flagship Shopify Plus Experience',
        description: 'Complete bespoke e-commerce architecture for established enterprise brands.',
        price: 7800,
        deliveryDays: 35,
        revisions: 'Unlimited',
        pagesCount: 18,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: true,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 10,
        features: [
          'All Growth features included',
          'Bespoke custom Liquid sections with micro-animations',
          'Multi-currency & international market configuration',
          'Custom checkout customization (Shopify Plus)',
          'ERP / Inventory sync assistance',
          'Full video training library for client team',
          '60-day post-launch priority support'
        ]
      }
    },
    requirements: [
      'Shopify store admin access (collaborator code)',
      'Brand assets (vector logo, typography licenses, color hex codes)',
      'Product catalog data (high-res images, pricing, SKUs, product descriptions)',
      'Copywriting drafts or reference documents for pages (About, FAQ, Policies)',
      'List of existing apps or required 3rd party integrations'
    ],
    deliveryProcess: [
      { step: 1, title: 'Discovery & IA', description: 'Reviewing your brand aesthetic, catalog hierarchy, and technical integration requirements.' },
      { step: 2, title: 'Figma Prototype', description: 'Presenting high-fidelity mobile and desktop mockups for key pages and product templates.' },
      { step: 3, title: 'Shopify Theme Development', description: 'Hand-coding clean Liquid templates, dynamic sections, and responsive interactions.' },
      { step: 4, title: 'Apps & Tracking Setup', description: 'Configuring payment gateways, taxes, shipping rules, and email automation hooks.' },
      { step: 5, title: 'QA, Speed Audit & Launch', description: 'Testing checkout flows, verifying Core Web Vitals, and handing over ownership.' }
    ],
    faq: [
      { question: 'Will I be able to edit text and images myself later?', answer: 'Yes, 100%. Everything is built using Shopify 2.0 sections so you can modify text, banners, and layouts in the native theme customizer without coding.' },
      { question: 'How do you handle store migrations from WooCommerce or Magento?', answer: 'I can export customer records, order history, and product catalogs directly into your new Shopify store with 301 redirects to protect SEO.' },
      { question: 'Do you charge extra for mobile optimization?', answer: 'No. Mobile UX is built directly into every tier from day one, accounting for over 70% of modern ecommerce traffic.' }
    ]
  },
  {
    id: 'srv_webflow_02',
    slug: 'conversion-focused-webflow-website',
    title: 'I will design and build a conversion-focused Webflow website',
    shortDescription: 'Award-quality Webflow website with custom interactions, Client-First CMS architecture, and lightning performance.',
    fullDescription: `Transform your online presence with a bespoke Webflow site engineered to establish authority and convert qualified B2B leads.

As a certified Webflow Partner, I build websites using Finsweet's industry-standard Client-First style system. This means your website's code is structured, accessible, clean, and remarkably simple for your marketing team to scale and update.

From custom GSAP smooth scrolling animations to dynamic CMS filtering, your brand will look like a category leader.`,
    category: 'Business Websites',
    platform: 'Webflow',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80'
    ],
    builderId: 'bld_maya_01',
    builder: {
      id: 'bld_maya_01',
      name: 'Maya Bennett',
      username: 'maya-bennett',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&auto=format&fit=crop&q=80',
      title: 'Senior Webflow Designer & Developer',
      rating: 4.98,
      reviewsCount: 47,
      completedProjectsCount: 62,
      location: 'Austin, TX',
      verified: true,
      responseTime: 'within 1 hour'
    },
    startingPrice: 3200,
    startingDeliveryDays: 14,
    rating: 4.98,
    reviewsCount: 45,
    ordersInQueue: 2,
    tags: ['Webflow', 'Client-First CMS', 'B2B Website', 'Figma', 'Interactions'],
    featured: true,
    packages: {
      starter: {
        id: 'pkg_wf_start',
        name: 'Starter',
        title: 'Launchpad 5-Page Site',
        description: 'Essential corporate web presence for service firms and funded startups.',
        price: 3200,
        deliveryDays: 14,
        revisions: 2,
        pagesCount: 5,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 2,
        features: [
          'Homepage, About, Services, Case Studies, and Contact',
          'Finsweet Client-First architecture',
          '1 Webflow CMS Collection (e.g. Case Studies or Blog)',
          'Lead capture form connected to Zapier/Make',
          'Basic micro-interactions & responsive layout'
        ]
      },
      growth: {
        id: 'pkg_wf_growth',
        name: 'Growth',
        title: 'Growth & Authority Engine',
        description: 'Comprehensive marketing website with dynamic CMS filters and interactive showcases.',
        price: 5400,
        deliveryDays: 24,
        revisions: 4,
        pagesCount: 10,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 5,
        features: [
          'All Starter features included',
          'Up to 3 CMS Collections (Blog, Team, Case Studies, Careers)',
          'Finsweet Attributes dynamic CMS filters & search',
          'Custom interactive calculators or tabbed feature tours',
          'HubSpot / Salesforce form webhook integration',
          'Full technical SEO schema markup setup'
        ]
      },
      advanced: {
        id: 'pkg_wf_adv',
        name: 'Advanced',
        title: 'Enterprise Category Leader',
        description: 'Flagship web presence with bespoke 3D/GSAP animations and unlimited CMS scalability.',
        price: 8900,
        deliveryDays: 35,
        revisions: 'Unlimited',
        pagesCount: 20,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 8,
        features: [
          'All Growth features included',
          'Unlimited CMS collections & custom relational modeling',
          'Bespoke GSAP interaction animations & scroll triggers',
          'Gated content / Memberstack / Wized client portal readiness',
          'Loom video walkthroughs for your marketing team',
          '45-day post-launch warranty & revision coverage'
        ]
      }
    },
    requirements: [
      'Webflow Workspace invite or Workspace account access',
      'Figma design files (or wireframes if design phase is included)',
      'Brand guidelines (fonts, colors, photography, icons)',
      'Approved page copy or content drafts'
    ],
    deliveryProcess: [
      { step: 1, title: 'Kickoff & Strategy', description: 'Clarifying brand goals, content models, and user conversion paths.' },
      { step: 2, title: 'Figma Review', description: 'Reviewing interactive wireframes and design system components.' },
      { step: 3, title: 'Webflow Build', description: 'Translating Figma to Webflow using semantic Client-First naming conventions.' },
      { step: 4, title: 'CMS & Integrations', description: 'Populating CMS collections, connecting forms, and testing mobile breakpoints.' },
      { step: 5, title: 'Launch & Training', description: 'Connecting custom domain, configuring SSL, and delivering custom Loom tutorials.' }
    ],
    faq: [
      { question: 'Do I need a Webflow plan before we start?', answer: 'You can start on my workspace for development at no cost, and we will transfer the project to your Webflow account when ready to connect your domain.' },
      { question: 'Is Webflow good for SEO?', answer: 'Webflow produces exceptionally clean semantic HTML and allows full control over Open Graph tags, canonical URLs, and schema markup.' }
    ]
  },
  {
    id: 'srv_wordpress_03',
    slug: 'modern-wordpress-website-service-business',
    title: 'Modern WordPress website for service-based businesses',
    shortDescription: 'Clean, secure, custom-built WordPress site with Gutenberg blocks, fast load speeds, and easy client editing.',
    fullDescription: `Say goodbye to brittle, bloated drag-and-drop plugins like Elementor that break upon every update.

I build custom WordPress websites utilizing native Gutenberg Block Editor with custom ACF (Advanced Custom Fields) components. The result is a website that loads in under 1 second, scores 95+ on Google PageSpeed, and guarantees rock-solid security.

Ideal for law firms, medical practices, consultancies, architectural firms, and trade specialists who demand professional reliability.`,
    category: 'Business Websites',
    platform: 'WordPress',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80'
    ],
    builderId: 'bld_sofia_03',
    builder: {
      id: 'bld_sofia_03',
      name: 'Sofia Turner',
      username: 'sofia-turner',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=240&auto=format&fit=crop&q=80',
      title: 'Modern WordPress & WooCommerce Engineer',
      rating: 4.94,
      reviewsCount: 52,
      completedProjectsCount: 71,
      location: 'Toronto, Canada',
      verified: true,
      responseTime: 'within 30 mins'
    },
    startingPrice: 2200,
    startingDeliveryDays: 12,
    rating: 4.95,
    reviewsCount: 49,
    ordersInQueue: 1,
    tags: ['WordPress', 'Gutenberg', 'ACF Pro', 'Security', 'Speed'],
    featured: true,
    packages: {
      starter: {
        id: 'pkg_wp_start',
        name: 'Starter',
        title: 'Professional Service Site',
        description: 'Modern 5-page WordPress site built for service professionals.',
        price: 2200,
        deliveryDays: 12,
        revisions: 2,
        pagesCount: 5,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 2,
        features: [
          'Homepage, Services, About Us, Blog, and Contact page',
          'Custom Gutenberg blocks for simple editing',
          'Spam-protected contact forms with email routing',
          '90+ Google Mobile PageSpeed score guaranteed',
          'SSL configuration & basic security hardening'
        ]
      },
      growth: {
        id: 'pkg_wp_growth',
        name: 'Growth',
        title: 'Lead Generation Machine',
        description: '10-page corporate site with case studies, appointment booking, and CRM sync.',
        price: 3800,
        deliveryDays: 20,
        revisions: 4,
        pagesCount: 10,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 4,
        features: [
          'All Starter features included',
          'Custom Post Types for Case Studies and Team Members',
          'Calendly / HubSpot meeting embed integration',
          'Custom search and filter for resources or case studies',
          'Automated daily backup and security plugin setup'
        ]
      },
      advanced: {
        id: 'pkg_wp_adv',
        name: 'Advanced',
        title: 'Custom Multi-Service Enterprise',
        description: 'Bespoke WordPress system with multilingual support and client portal integration.',
        price: 6400,
        deliveryDays: 30,
        revisions: 'Unlimited',
        pagesCount: 20,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 7,
        features: [
          'All Growth features included',
          'Multi-language WPML / Polylang readiness',
          'Interactive service calculator or quiz',
          'Custom database fields with ACF Pro',
          'Object caching with Redis/Memcached configuration'
        ]
      }
    },
    requirements: [
      'WordPress hosting credentials (cPanel, WP Engine, Kinsta, or Flywheel)',
      'Domain registrar details for DNS record updates',
      'Content text and high-res imagery for all pages'
    ],
    deliveryProcess: [
      { step: 1, title: 'Environment Setup', description: 'Configuring staging server, database, and custom child theme.' },
      { step: 2, title: 'Block Development', description: 'Developing custom Gutenberg block components matching your design.' },
      { step: 3, title: 'Content Entry', description: 'Entering text, optimizing imagery, and formatting typography.' },
      { step: 4, title: 'Security & Speed Audit', description: 'Locking down WordPress login security, enabling Redis cache and CDN.' },
      { step: 5, title: 'Live Migration', description: 'Deploying to live production host with zero downtime.' }
    ],
    faq: [
      { question: 'Do you use Elementor or Divi?', answer: 'No. I specialize exclusively in native Gutenberg blocks and ACF Pro, ensuring maximum speed, clean code, and longevity.' }
    ]
  },
  {
    id: 'srv_framer_04',
    slug: 'high-converting-saas-landing-page-framer',
    title: 'High-converting SaaS landing page built in Framer',
    shortDescription: 'Mesmerizing, interactive Framer marketing page designed to convert paid traffic and showcase your software.',
    fullDescription: `Need a SaaS landing page that commands investor attention and turns trial signups into ARR?

I create high-velocity landing pages in Framer complete with interactive feature widgets, fluid scroll animations, dynamic comparison tables, and frictionless call-to-action sections. 

Framer enables design freedom that blows standard website builders away, allowing us to ship in 7 to 10 days.`,
    category: 'Landing Pages',
    platform: 'Framer',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80'
    ],
    builderId: 'bld_marcus_04',
    builder: {
      id: 'bld_marcus_04',
      name: 'Marcus Reed',
      username: 'marcus-reed',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=crop&q=80',
      title: 'Framer Designer & SaaS Launch Specialist',
      rating: 4.99,
      reviewsCount: 31,
      completedProjectsCount: 44,
      location: 'London, UK',
      verified: true,
      responseTime: 'within 1 hour'
    },
    startingPrice: 1800,
    startingDeliveryDays: 7,
    rating: 4.99,
    reviewsCount: 31,
    ordersInQueue: 2,
    tags: ['Framer', 'Landing Page', 'SaaS', 'Figma', 'Micro-interactions'],
    featured: true,
    packages: {
      starter: {
        id: 'pkg_fr_start',
        name: 'Starter',
        title: 'Single-Page Launch',
        description: 'Single high-impact landing page for product launch or waitlist.',
        price: 1800,
        deliveryDays: 7,
        revisions: 2,
        pagesCount: 1,
        responsiveDesign: true,
        cmsSetup: false,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 2,
        features: [
          'Hero with interactive mockups + Problem/Solution breakdown',
          'Feature highlights grid with hover micro-animations',
          'Testimonial wall and pricing comparison cards',
          'Waitlist / lead capture form connected to Loops or Mailchimp',
          'Mobile, tablet, and desktop perfection'
        ]
      },
      growth: {
        id: 'pkg_fr_growth',
        name: 'Growth',
        title: 'SaaS Complete Launch',
        description: '3-page Framer suite: Landing page, Pricing calculator, and About/Changelog.',
        price: 2900,
        deliveryDays: 12,
        revisions: 3,
        pagesCount: 3,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 4,
        features: [
          'All Starter features included',
          'Interactive annual/monthly pricing tier toggle',
          'Framer CMS Changelog / Product Updates collection',
          'Custom Spline 3D or SVG illustration embeds',
          'Custom Open Graph dynamic cards'
        ]
      },
      advanced: {
        id: 'pkg_fr_adv',
        name: 'Advanced',
        title: 'Full Product Marketing Suite',
        description: '6-page comprehensive Framer web application showcase.',
        price: 4800,
        deliveryDays: 18,
        revisions: 'Unlimited',
        pagesCount: 6,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 6,
        features: [
          'All Growth features included',
          'Solutions by Industry secondary pages',
          'Framer CMS for Customer Stories and Documentation',
          'A/B test ready page variants',
          'Priority turnaround and Slack collaboration'
        ]
      }
    },
    requirements: [
      'Product positioning or slide deck overview',
      'App screenshots, UI recordings, or product demo videos',
      'Framer account for project remoting'
    ],
    deliveryProcess: [
      { step: 1, title: 'Hero Concept', description: 'Designing the hook, value proposition, and hero visual hierarchy.' },
      { step: 2, title: 'Full Canvas Prototype', description: 'Laying out feature sections, social proof, and interactive pricing.' },
      { step: 3, title: 'Framer Animation', description: 'Tuning hover states, spring physics, and viewport triggers.' },
      { step: 4, title: 'Tracking Integration', description: 'Embedding Google Tag Manager, PostHog, or Segment scripts.' },
      { step: 5, title: 'Launch', description: 'Publishing to your custom domain.' }
    ],
    faq: [
      { question: 'How easy is Framer to edit compared to Webflow?', answer: 'Framer is as intuitive as Figma. If your team knows how to edit canvas elements, you will feel right at home instantly.' }
    ]
  },
  {
    id: 'srv_astro_05',
    slug: 'blazing-fast-astro-content-website',
    title: 'Blazing-fast Astro & Tailwind marketing website',
    shortDescription: 'Zero-JS by default, ultra-performant Astro website with 100/100 Lighthouse score and Sanity/Storyblok CMS.',
    fullDescription: `When speed and technical SEO are the number one priorities for your organic traffic, Astro is the modern gold standard.

I build custom Astro websites utilizing Tailwind CSS, TypeScript, and hybrid islands architecture. The output is a site that delivers pure HTML with zero unnecessary client JavaScript, ensuring instantaneous page switches and flawless Core Web Vitals.`,
    category: 'Web Applications',
    platform: 'Astro',
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80'
    ],
    builderId: 'bld_lena_05',
    builder: {
      id: 'bld_lena_05',
      name: 'Lena Park',
      username: 'lena-park',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80',
      title: 'Full-Stack Website Developer & Astro Enthusiast',
      rating: 4.97,
      reviewsCount: 28,
      completedProjectsCount: 37,
      location: 'Berlin, Germany',
      verified: true,
      responseTime: 'within 2 hours'
    },
    startingPrice: 2600,
    startingDeliveryDays: 14,
    rating: 4.97,
    reviewsCount: 28,
    ordersInQueue: 1,
    tags: ['Astro', 'Tailwind CSS', 'TypeScript', 'Performance', 'Headless CMS'],
    featured: true,
    packages: {
      starter: {
        id: 'pkg_ast_start',
        name: 'Starter',
        title: 'Core Astro Site',
        description: 'Speed-obsessed 5-page static site with Markdown or Content Collections.',
        price: 2600,
        deliveryDays: 14,
        revisions: 2,
        pagesCount: 5,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 2,
        features: [
          '100/100 Google Lighthouse scores across all pages',
          'Astro Content Collections with type safety',
          'Tailwind CSS design system',
          'Automated XML sitemap & RSS feed generation'
        ]
      },
      growth: {
        id: 'pkg_ast_growth',
        name: 'Growth',
        title: 'Headless CMS Publication',
        description: 'Astro connected to Sanity, Storyblok, or Strapi CMS for live editorial teams.',
        price: 4200,
        deliveryDays: 21,
        revisions: 4,
        pagesCount: 12,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 4,
        features: [
          'All Starter features included',
          'Sanity or Storyblok headless CMS visual editing integration',
          'Algolia / Pagefind instant client-side search',
          'Automated webhook previews & Vercel/Netlify deployment pipeline'
        ]
      },
      advanced: {
        id: 'pkg_ast_adv',
        name: 'Advanced',
        title: 'Enterprise Headless Platform',
        description: 'Complex multi-author media portal with dynamic API routes and Stripe checkout.',
        price: 6900,
        deliveryDays: 32,
        revisions: 'Unlimited',
        pagesCount: 25,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: true,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 7,
        features: [
          'All Growth features included',
          'Stripe payments / subscription gated member areas',
          'Internationalization (i18n) multi-region routing',
          'Strict WCAG 2.1 AA accessibility audit'
        ]
      }
    },
    requirements: [
      'Content assets or CMS preference',
      'Target deployment host (Vercel, Cloudflare, AWS, Netlify)'
    ],
    deliveryProcess: [
      { step: 1, title: 'Architecture Setup', description: 'Setting up Git repository, Astro configuration, and Tailwind tokens.' },
      { step: 2, title: 'Component Library', description: 'Building semantic, reusable Astro components and layouts.' },
      { step: 3, title: 'CMS Integration', description: 'Connecting schema models to your headless CMS.' },
      { step: 4, title: 'Lighthouse Audit', description: 'Optimizing responsive webp images and layout stability.' },
      { step: 5, title: 'Deploy', description: 'Configuring CI/CD deployment with instant rebuild hooks.' }
    ],
    faq: [
      { question: 'Why Astro over Next.js?', answer: 'For content-heavy marketing sites, Astro ships zero JavaScript by default, resulting in faster load times and lower hosting overhead.' }
    ]
  },
  {
    id: 'srv_nextjs_06',
    slug: 'nextjs-fullstack-web-application-portal',
    title: 'Full-stack client portal with Next.js & Supabase',
    shortDescription: 'Custom web portal featuring secure authentication, database records, client dashboards, and Stripe billing.',
    fullDescription: `Need more than a brochure website? I architect dynamic web applications and client portals with Next.js App Router, TypeScript, Supabase (PostgreSQL), and Tailwind CSS.

Perfect for member-only resource libraries, client project trackers, interactive directory databases, and customized SaaS MVPs.`,
    category: 'Web Applications',
    platform: 'Next.js',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80'
    ],
    builderId: 'bld_ethan_08',
    builder: {
      id: 'bld_ethan_08',
      name: 'Ethan Collins',
      username: 'ethan-collins',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&auto=format&fit=crop&q=80',
      title: 'Next.js & Astro Performance Engineer',
      rating: 4.95,
      reviewsCount: 33,
      completedProjectsCount: 48,
      location: 'Lisbon, Portugal',
      verified: true,
      responseTime: 'within 1 hour'
    },
    startingPrice: 3800,
    startingDeliveryDays: 21,
    rating: 4.96,
    reviewsCount: 33,
    ordersInQueue: 2,
    tags: ['Next.js', 'React', 'Supabase', 'TypeScript', 'Stripe'],
    featured: false,
    packages: {
      starter: {
        id: 'pkg_nxt_start',
        name: 'Starter',
        title: 'MVP Portal',
        description: 'Authentication + single database entity dashboard.',
        price: 3800,
        deliveryDays: 21,
        revisions: 2,
        pagesCount: 6,
        responsiveDesign: true,
        cmsSetup: false,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 2,
        features: [
          'Next.js 15 App Router & Server Components',
          'Supabase Auth (Magic link, Google OAuth)',
          'PostgreSQL relational schema setup with Row Level Security (RLS)',
          'User profile & dashboard UI'
        ]
      },
      growth: {
        id: 'pkg_nxt_growth',
        name: 'Growth',
        title: 'SaaS / Client Portal',
        description: 'Multi-role portal with Stripe subscriptions and file storage.',
        price: 5900,
        deliveryDays: 30,
        revisions: 4,
        pagesCount: 12,
        responsiveDesign: true,
        cmsSetup: false,
        ecommerceCapability: true,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 5,
        features: [
          'All Starter features included',
          'Stripe Customer Portal & recurring webhook handling',
          'Secure file upload to S3 / Supabase Storage with signed URLs',
          'Admin analytics dashboard for site owner'
        ]
      },
      advanced: {
        id: 'pkg_nxt_adv',
        name: 'Advanced',
        title: 'Production SaaS Platform',
        description: 'Enterprise architecture with transactional emails, team workspaces, and audit logs.',
        price: 9500,
        deliveryDays: 45,
        revisions: 'Unlimited',
        pagesCount: 20,
        responsiveDesign: true,
        cmsSetup: false,
        ecommerceCapability: true,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 8,
        features: [
          'All Growth features included',
          'Multi-tenant workspace organization accounts',
          'Resend transactional email workflows',
          'Automated end-to-end testing suite'
        ]
      }
    },
    requirements: [
      'Functional specification or detailed user journey map',
      'Supabase project credentials',
      'Stripe developer account access'
    ],
    deliveryProcess: [
      { step: 1, title: 'Database Schema', description: 'Designing relational database entities and security policies.' },
      { step: 2, title: 'API & Auth', description: 'Wiring authentication flows and protected server actions.' },
      { step: 3, title: 'Frontend UI', description: 'Building accessible client dashboard views and modals.' },
      { step: 4, title: 'Payment Integration', description: 'Configuring webhooks and subscription states.' },
      { step: 5, title: 'Production Deploy', description: 'Deploying with database connection pooling on Vercel.' }
    ],
    faq: [
      { question: 'Do you provide maintenance for custom web apps?', answer: 'Yes, I offer dedicated monthly maintenance retainers covering security updates and feature increments.' }
    ]
  },
  {
    id: 'srv_redesign_07',
    slug: 'complete-website-redesign-modernization',
    title: 'Complete website redesign & brand modernization',
    shortDescription: 'Modernize your outdated company website with clean typography, responsive layout, and fresh visual assets.',
    fullDescription: `Is your current website costing you credibility and leads because it looks like it was designed in 2016?

I conduct an exhaustive audit of your current user flow, identify where prospects are bouncing, and completely redesign your digital presence on your chosen platform (Webflow, WordPress, or Framer). 

Includes brand cleanup, custom iconography, crisp typographic hierarchy, and seamless redirect preservation so you don't lose your existing Google rankings.`,
    category: 'Website Redesign',
    platform: 'Webflow',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80'
    ],
    builderId: 'bld_maya_01',
    builder: {
      id: 'bld_maya_01',
      name: 'Maya Bennett',
      username: 'maya-bennett',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&auto=format&fit=crop&q=80',
      title: 'Senior Webflow Designer & Developer',
      rating: 4.98,
      reviewsCount: 47,
      completedProjectsCount: 62,
      location: 'Austin, TX',
      verified: true,
      responseTime: 'within 1 hour'
    },
    startingPrice: 3400,
    startingDeliveryDays: 18,
    rating: 4.98,
    reviewsCount: 39,
    ordersInQueue: 2,
    tags: ['Redesign', 'UI/UX', 'Modernization', 'Webflow', 'SEO Preservation'],
    featured: true,
    packages: {
      starter: {
        id: 'pkg_red_start',
        name: 'Starter',
        title: 'Visual Refresh',
        description: 'Complete visual overhaul for up to 5 core pages with unchanged structure.',
        price: 3400,
        deliveryDays: 18,
        revisions: 2,
        pagesCount: 5,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 2,
        features: [
          'Full Figma redesign of 5 core pages',
          'Webflow implementation with clean design tokens',
          '301 redirect map for legacy URLs',
          'Speed score improvement from <50 to 90+'
        ]
      },
      growth: {
        id: 'pkg_red_growth',
        name: 'Growth',
        title: 'Full Overhaul & Content Restructure',
        description: 'Comprehensive redesign with improved information architecture and copywriting polish.',
        price: 5800,
        deliveryDays: 28,
        revisions: 4,
        pagesCount: 10,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 4,
        features: [
          'All Starter features included',
          'Content audit & copy restructuring for conversion',
          'New custom component design system',
          'Automated redirect checking to prevent 404 errors'
        ]
      },
      advanced: {
        id: 'pkg_red_adv',
        name: 'Advanced',
        title: 'Enterprise Brand Transformation',
        description: 'Total digital repositioning for 20+ pages with custom interactive features.',
        price: 9200,
        deliveryDays: 40,
        revisions: 'Unlimited',
        pagesCount: 20,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 8,
        features: [
          'All Growth features included',
          'Complete brand book alignment and asset modernization',
          'Detailed before/after conversion rate tracking audit'
        ]
      }
    },
    requirements: [
      'URL of current live website',
      'Google Analytics / Search Console access (optional but recommended)',
      'Vector logo files and company brand materials'
    ],
    deliveryProcess: [
      { step: 1, title: 'Legacy Audit', description: 'Cataloging all current indexed URLs and analytics performance.' },
      { step: 2, title: 'Wireframes', description: 'Rethinking user journeys and conversion touchpoints.' },
      { step: 3, title: 'Design System', description: 'Creating new typography, color palettes, and component cards.' },
      { step: 4, title: 'Build & QA', description: 'Rebuilding on Webflow or WordPress with strict 301 redirects.' },
      { step: 5, title: 'Launch', description: 'Flipping DNS with zero downtime or lost search positions.' }
    ],
    faq: [
      { question: 'Will I lose my existing Google ranking if I redesign?', answer: 'Not when done correctly. We create a complete 1-to-1 301 redirect map and maintain existing metadata so your search visibility is protected.' }
    ]
  },
  {
    id: 'srv_maintenance_08',
    slug: 'wordpress-security-maintenance-speed-service',
    title: 'WordPress security, maintenance & speed tune-up',
    shortDescription: 'Dedicated ongoing monthly maintenance, speed optimization, malware prevention, and weekly plugin updates.',
    fullDescription: `Keep your critical business WordPress site secure, fast, and constantly up to date without risking white-screen crashes.

Includes weekly offsite cloud backups, manual plugin updates verified on a staging site first, continuous uptime monitoring, firewall configuration, and 2 hours of direct developer support each month for content changes.`,
    category: 'Website Maintenance',
    platform: 'WordPress',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80'
    ],
    builderId: 'bld_julian_10',
    builder: {
      id: 'bld_julian_10',
      name: 'Julian Foster',
      username: 'julian-foster',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=crop&q=80',
      title: 'WordPress & WooCommerce Specialist',
      rating: 4.91,
      reviewsCount: 58,
      completedProjectsCount: 88,
      location: 'Austin, TX',
      verified: true,
      responseTime: 'within 1 hour'
    },
    startingPrice: 350,
    startingDeliveryDays: 3,
    rating: 4.93,
    reviewsCount: 56,
    ordersInQueue: 4,
    tags: ['WordPress', 'Maintenance', 'Speed', 'Security', 'Backups'],
    featured: false,
    packages: {
      starter: {
        id: 'pkg_maint_start',
        name: 'Starter',
        title: 'Single Tune-Up & Audit',
        description: 'One-time comprehensive speed optimization and security hardening.',
        price: 350,
        deliveryDays: 3,
        revisions: 1,
        pagesCount: 1,
        responsiveDesign: false,
        cmsSetup: false,
        ecommerceCapability: false,
        seoSetup: false,
        speedOptimization: true,
        integrationsCount: 1,
        features: [
          'Full security malware scan and cleanup',
          'Database optimization & spam removal',
          'Cache and image compression setup',
          'PageSpeed score boosted to 90+'
        ]
      },
      growth: {
        id: 'pkg_maint_growth',
        name: 'Growth',
        title: 'Monthly Care Plan (1 Month)',
        description: 'Complete peace of mind for business websites.',
        price: 550,
        deliveryDays: 30,
        revisions: 'Unlimited',
        pagesCount: 10,
        responsiveDesign: false,
        cmsSetup: false,
        ecommerceCapability: false,
        seoSetup: false,
        speedOptimization: true,
        integrationsCount: 3,
        features: [
          'All Starter features included',
          'Weekly safe plugin & core updates',
          'Daily offsite encrypted cloud backups',
          '2 hours of dedicated content/code updates included',
          '24/7 uptime monitoring with 15-minute emergency response'
        ]
      },
      advanced: {
        id: 'pkg_maint_adv',
        name: 'Advanced',
        title: 'WooCommerce E-Commerce Care',
        description: 'Tailored specifically for active online stores where uptime equals direct revenue.',
        price: 950,
        deliveryDays: 30,
        revisions: 'Unlimited',
        pagesCount: 20,
        responsiveDesign: false,
        cmsSetup: false,
        ecommerceCapability: true,
        seoSetup: false,
        speedOptimization: true,
        integrationsCount: 5,
        features: [
          'All Growth features included',
          'Staging environment testing before all updates',
          'Cart & checkout automated synthetic transaction testing',
          '5 hours of developer support included per month'
        ]
      }
    },
    requirements: [
      'WordPress admin login credentials',
      'Hosting control panel or SSH/SFTP access'
    ],
    deliveryProcess: [
      { step: 1, title: 'Backup Creation', description: 'Taking full independent snapshot of site and database.' },
      { step: 2, title: 'Security Audit', description: 'Running deep malware scans and patching vulnerabilities.' },
      { step: 3, title: 'Speed Optimization', description: 'Configuring modern WebP compression and browser caching.' },
      { step: 4, title: 'Reporting', description: 'Delivering before/after metrics report.' }
    ],
    faq: [
      { question: 'What happens if an update breaks a plugin?', answer: 'We test updates on a clone of your site first. If anything ever breaks, we instantly roll back using our automated restore points.' }
    ]
  },
  {
    id: 'srv_cro_09',
    slug: 'conversion-rate-optimization-audit-makeover',
    title: 'Conversion optimization audit & landing page overhaul',
    shortDescription: 'Heuristic UX review, copy refinement, and visual hierarchy redesign that increases sales leads by 30%–80%.',
    fullDescription: `Stop wasting money sending paid clicks to a landing page that confuses prospective customers.

I conduct an intensive heuristic evaluation of your user journey, analyze heatmaps and session recordings, rewrite value propositions, and redesign high-impact page sections to remove friction.`,
    category: 'Conversion Optimization',
    platform: 'Webflow',
    thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&auto=format&fit=crop&q=80'
    ],
    builderId: 'bld_noah_06',
    builder: {
      id: 'bld_noah_06',
      name: 'Noah Carter',
      username: 'noah-carter',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=240&auto=format&fit=crop&q=80',
      title: 'Conversion-Focused Web Designer & Webflow Partner',
      rating: 4.92,
      reviewsCount: 41,
      completedProjectsCount: 59,
      location: 'Austin, TX',
      verified: true,
      responseTime: 'within 1 hour'
    },
    startingPrice: 1200,
    startingDeliveryDays: 7,
    rating: 4.92,
    reviewsCount: 41,
    ordersInQueue: 1,
    tags: ['CRO', 'UX Audit', 'A/B Testing', 'Landing Pages', 'Copywriting'],
    featured: false,
    packages: {
      starter: {
        id: 'pkg_cro_start',
        name: 'Starter',
        title: 'Heuristic CRO Video Audit',
        description: 'Comprehensive 45-minute video breakdown + actionable 15-point PDF recommendations.',
        price: 1200,
        deliveryDays: 7,
        revisions: 1,
        pagesCount: 1,
        responsiveDesign: false,
        cmsSetup: false,
        ecommerceCapability: false,
        seoSetup: false,
        speedOptimization: false,
        integrationsCount: 1,
        features: [
          'Detailed video teardown of desktop & mobile flows',
          'Friction point analysis & copy rewrite suggestions',
          'Figma annotations for quick developer implementation'
        ]
      },
      growth: {
        id: 'pkg_cro_growth',
        name: 'Growth',
        title: 'Audit + Full Redesign in Figma',
        description: 'Complete high-fidelity Figma redesign of your primary conversion landing page.',
        price: 2400,
        deliveryDays: 14,
        revisions: 3,
        pagesCount: 1,
        responsiveDesign: true,
        cmsSetup: false,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 2,
        features: [
          'All Starter features included',
          'Full high-converting redesign in Figma',
          'Revised headlines and customer objection counter-copy',
          'Interactive prototype ready for user testing'
        ]
      },
      advanced: {
        id: 'pkg_cro_adv',
        name: 'Advanced',
        title: 'Full Turnkey Redesign & Webflow Implementation',
        description: 'Redesign + live code implementation on Webflow with A/B test setup.',
        price: 4500,
        deliveryDays: 21,
        revisions: 'Unlimited',
        pagesCount: 2,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 4,
        features: [
          'All Growth features included',
          'Direct Webflow implementation & styling',
          'PostHog / Google Optimize A/B test variation setup',
          '30-day post-launch conversion monitoring'
        ]
      }
    },
    requirements: ['Current landing page URL', 'Access to heatmap data if installed'],
    deliveryProcess: [
      { step: 1, title: 'Data Review', description: 'Reviewing current traffic bounce rates and drop-off steps.' },
      { step: 2, title: 'Audit Report', description: 'Delivering annotated friction points.' },
      { step: 3, title: 'Implementation', description: 'Designing or coding revised variants.' }
    ],
    faq: [{ question: 'What average conversion lift do you see?', answer: 'Our clients typically see between a 25% and 65% increase in lead completion rates.' }]
  },
  {
    id: 'srv_shopify_plus_10',
    slug: 'luxury-dtc-shopify-plus-flagship',
    title: 'Luxury DTC Shopify Plus flagship store architecture',
    shortDescription: 'World-class e-commerce architecture for luxury fashion, jewelry, and global lifestyle brands.',
    fullDescription: `Tailored for luxury brands with high average order values and discerning international client bases. Custom animations, elegant typography, multi-currency internationalization, and bespoke cart experiences.`,
    category: 'Ecommerce',
    platform: 'Shopify Plus',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop&q=80'],
    builderId: 'bld_aisha_07',
    builder: {
      id: 'bld_aisha_07',
      name: 'Aisha Rahman',
      username: 'aisha-rahman',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&auto=format&fit=crop&q=80',
      title: 'Ecommerce Architect & Shopify Plus Partner',
      rating: 5.0,
      reviewsCount: 26,
      completedProjectsCount: 34,
      location: 'Dubai, UAE',
      verified: true,
      responseTime: 'within 2 hours'
    },
    startingPrice: 6500,
    startingDeliveryDays: 28,
    rating: 5.0,
    reviewsCount: 26,
    ordersInQueue: 1,
    tags: ['Shopify Plus', 'Luxury DTC', 'Global Commerce', 'Liquid', 'Custom UI'],
    featured: false,
    packages: {
      starter: {
        id: 'pkg_lux_start',
        name: 'Starter',
        title: 'Luxury Boutique Store',
        description: 'Up to 8 bespoke pages with editorial product layouts.',
        price: 6500,
        deliveryDays: 28,
        revisions: 3,
        pagesCount: 8,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: true,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 5,
        features: ['Editorial lookbook templates', 'Global currency converter', 'Sub-2s mobile checkout']
      },
      growth: {
        id: 'pkg_lux_growth',
        name: 'Growth',
        title: 'Global Omnichannel DTC',
        description: 'Multi-region flagship with custom checkout branding.',
        price: 9800,
        deliveryDays: 40,
        revisions: 'Unlimited',
        pagesCount: 15,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: true,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 8,
        features: ['All Starter features', 'Shopify Plus checkout extensions', 'Klaviyo VIP segmentation', 'VIP loyalty integration']
      },
      advanced: {
        id: 'pkg_lux_adv',
        name: 'Advanced',
        title: 'Enterprise Headless / Custom Plus',
        description: 'Uncompromising luxury brand experience with bespoke 3D viewer.',
        price: 15000,
        deliveryDays: 60,
        revisions: 'Unlimited',
        pagesCount: 25,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: true,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 12,
        features: ['All Growth features', '3D product visualizer', 'Custom ERP & warehouse sync', 'White-glove launch support']
      }
    },
    requirements: ['High-resolution luxury brand imagery', 'Product catalog data', 'Shopify Plus plan access'],
    deliveryProcess: [
      { step: 1, title: 'Brand Alignment', description: 'Reviewing luxury brand positioning and typography.' },
      { step: 2, title: 'Art Direction', description: 'Designing interactive editorial spreads in Figma.' },
      { step: 3, title: 'Liquid Build', description: 'Hand-coding bespoke responsive theme components.' }
    ],
    faq: [{ question: 'Do you configure Shopify Markets for international duties?', answer: 'Yes, full configuration of localized currencies, taxes, and duty calculations is included.' }]
  },
  {
    id: 'srv_restaurant_11',
    slug: 'hospitality-restaurant-booking-website-webflow',
    title: 'Restaurant & hospitality booking website in Webflow',
    shortDescription: 'Mouth-watering photography layouts, digital seasonal menus, OpenTable/Resy integration, and event inquiry workflows.',
    fullDescription: `Designed specifically for award-winning culinary destinations, boutique hotels, and restaurant groups. Give your guests an unforgettable first impression that drives direct reservations and private dining inquiries.`,
    category: 'Business Websites',
    platform: 'Webflow',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80'],
    builderId: 'bld_isabella_09',
    builder: {
      id: 'bld_isabella_09',
      name: 'Isabella Moore',
      username: 'isabella-moore',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&auto=format&fit=crop&q=80',
      title: 'Brand & Webflow Creative Director',
      rating: 4.97,
      reviewsCount: 29,
      completedProjectsCount: 40,
      location: 'London, UK',
      verified: true,
      responseTime: 'within 2 hours'
    },
    startingPrice: 2800,
    startingDeliveryDays: 14,
    rating: 4.97,
    reviewsCount: 29,
    ordersInQueue: 1,
    tags: ['Webflow', 'Hospitality', 'Restaurant', 'Reservations', 'Menu CMS'],
    featured: false,
    packages: {
      starter: {
        id: 'pkg_rest_start',
        name: 'Starter',
        title: 'Single Location Bistro',
        description: 'Single location restaurant site with menu CMS and reservation widget.',
        price: 2800,
        deliveryDays: 14,
        revisions: 2,
        pagesCount: 5,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 2,
        features: ['Seasonal Menu CMS', 'OpenTable / Resy embed', 'Private dining inquiry form']
      },
      growth: {
        id: 'pkg_rest_growth',
        name: 'Growth',
        title: 'Multi-Location Restaurant Group',
        description: 'Support for up to 3 restaurant concepts under one umbrella brand.',
        price: 4600,
        deliveryDays: 22,
        revisions: 4,
        pagesCount: 10,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 4,
        features: ['All Starter features', 'Location selector & map', 'Catering booking flow', 'Gift card portal integration']
      },
      advanced: {
        id: 'pkg_rest_adv',
        name: 'Advanced',
        title: 'Boutique Hotel & Culinary Resort',
        description: 'Full property showcase with room booking and event spaces.',
        price: 7200,
        deliveryDays: 35,
        revisions: 'Unlimited',
        pagesCount: 18,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 6,
        features: ['All Growth features', 'Bespoke room showcase', 'Event calendar', 'VIP concierge booking integration']
      }
    },
    requirements: ['High-res culinary photography', 'Current PDF menu or dishes list'],
    deliveryProcess: [
      { step: 1, title: 'Concept Design', description: 'Curating culinary aesthetic and typography.' },
      { step: 2, title: 'Menu Modeling', description: 'Setting up easy-to-update menu categories in Webflow CMS.' },
      { step: 3, title: 'Booking Integration', description: 'Embedding Resy or SevenRooms.' }
    ],
    faq: [{ question: 'Can our manager update daily specials easily from a phone?', answer: 'Yes! Webflow Editor lets your managers update menu items and prices in seconds from any smartphone.' }]
  },
  {
    id: 'srv_nocode_12',
    slug: 'nocode-startup-mvp-launch-framer',
    title: 'No-code startup MVP launch site in Framer',
    shortDescription: 'From pitch deck to live venture in 7 days. Designed to validate customer demand and capture early adopters.',
    fullDescription: `Need to launch quickly before speaking with investors or launching on Product Hunt? I build sleek, responsive Framer websites with interactive demos, waitlist forms, and social proof.`,
    category: 'Landing Pages',
    platform: 'Framer',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80'],
    builderId: 'bld_lucas_12',
    builder: {
      id: 'bld_lucas_12',
      name: 'Lucas Martin',
      username: 'lucas-martin',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=240&auto=format&fit=crop&q=80',
      title: 'No-Code Website Specialist & Framer Pro',
      rating: 4.90,
      reviewsCount: 32,
      completedProjectsCount: 46,
      location: 'Toronto, Canada',
      verified: true,
      responseTime: 'within 3 hours'
    },
    startingPrice: 1500,
    startingDeliveryDays: 5,
    rating: 4.91,
    reviewsCount: 32,
    ordersInQueue: 2,
    tags: ['Framer', 'No-Code', 'Startup', 'MVP', 'Rapid Launch'],
    featured: false,
    packages: {
      starter: {
        id: 'pkg_mvp_start',
        name: 'Starter',
        title: 'Rapid Waitlist Page',
        description: 'Single-page waitlist launch ready in 5 business days.',
        price: 1500,
        deliveryDays: 5,
        revisions: 2,
        pagesCount: 1,
        responsiveDesign: true,
        cmsSetup: false,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 2,
        features: ['Value prop hero', 'Social proof counters', 'Airtable / Zapier lead capture']
      },
      growth: {
        id: 'pkg_mvp_growth',
        name: 'Growth',
        title: 'Full Seed Launch Site',
        description: '3-page startup site with product walkthrough and pricing.',
        price: 2500,
        deliveryDays: 9,
        revisions: 3,
        pagesCount: 3,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 4,
        features: ['All Starter features', 'Pricing table', 'Framer CMS updates', 'Analytics tracking']
      },
      advanced: {
        id: 'pkg_mvp_adv',
        name: 'Advanced',
        title: 'Series A Venture Site',
        description: 'Complete 6-page marketing machine with interactive product simulator.',
        price: 4200,
        deliveryDays: 15,
        revisions: 'Unlimited',
        pagesCount: 6,
        responsiveDesign: true,
        cmsSetup: true,
        ecommerceCapability: false,
        seoSetup: true,
        speedOptimization: true,
        integrationsCount: 6,
        features: ['All Growth features', 'Solutions pages', 'Interactive mock calculator', 'Investor pitch deck alignment']
      }
    },
    requirements: ['Startup description and target audience', 'Brand colors and logo'],
    deliveryProcess: [
      { step: 1, title: 'Briefing', description: 'Aligning on core messaging and audience.' },
      { step: 2, title: 'Drafting', description: 'Building the canvas directly in Framer.' },
      { step: 3, title: 'Ship', description: 'Publishing to production.' }
    ],
    faq: [{ question: 'Can you write the copywriting?', answer: 'Yes! I can refine and polish your value propositions for maximum impact.' }]
  }
];
