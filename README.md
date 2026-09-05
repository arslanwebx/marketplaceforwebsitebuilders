# CraftGrid – Specialized Website Builders Marketplace

> **Find the right web expert. Build with confidence.**

CraftGrid is a production-grade, two-sided frontend marketplace prototype engineered to connect businesses needing high-converting websites with vetted website builders, designers, developers, and boutique web agencies.

---

## 1. Product Overview

Unlike generic freelance platforms, CraftGrid is built strictly around the domain of website design, development, and maintenance:
- **Packaged Service Listings**: Standardized 3-tier offerings (`Starter`, `Growth`, `Advanced`) across Webflow, Shopify, WordPress, and Framer with defined deliverables, turnarounds, and pricing.
- **Custom Project Requests**: A 5-step project creator with `localStorage` autosave and client budget ranges.
- **Vetted Talent Directory**: Professional builder profiles with verified badges, hourly rates, skills, and interactive portfolio modals.
- **Proposal Review Matrix**: Compare candidate proposals side-by-side with milestone breakdowns.
- **Order Workspace**: Interactive milestone lifecycle controls (`Submit deliverable`, `Approve milestone`, `Request revision`).
- **Milestone Escrow Authorization**: Clean checkout interface demonstrating escrow custody before releasing funds.
- **Direct Messaging Center**: Full-featured messenger with conversation list, project context drawer, attachments preview, and auto-reply simulation.
- **Client & Builder Dashboards**: Role-aware analytics, earnings graphs, active orders, and service listing management.
- **Marketplace Admin Console**: Administrative view covering platform Gross Volume (GMV), active listings, and builder moderation queue.

---

## 2. Tech Stack

- **Framework**: [Astro 5.x / 7.x](https://astro.build) (Content-first architecture, static generation)
- **Language**: TypeScript with strict configuration
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) with `@tailwindcss/vite` and design tokens
- **Interactive Islands**: [React 19](https://react.dev) (`@astrojs/react`) scoped strictly to client-side state
- **Icons**: [Lucide React](https://lucide.dev)

---

## 3. Brand Identity & Design Tokens

- **Brand Name**: CraftGrid
- **Vector Assets**:
  - `/public/brand/logo.svg`: 2x2 modular grid mark with subtle negative-space 'C' and wordmark
  - `/public/brand/logo-mark.svg`: Standalone 2x2 modular mark for small screens
  - `/public/favicon.svg`: High-contrast favicon
- **Design Tokens** (configured in `src/styles/global.css`):
  - **Primary**: `#635BFF`
  - **Primary Hover**: `#5147E5`
  - **Soft Primary Background**: `#F2F0FF`
  - **Dark Text**: `#101828`
  - **Secondary Text**: `#667085`
  - **Page Background**: `#F8F9FB`
  - **Border**: `#E4E7EC`
  - **Success**: `#079455` | **Warning**: `#DC6803` | **Error**: `#D92D20`

---

## 4. Centralized Demo Company Details

All company information is centralized in [`src/config/site.ts`](src/config/site.ts):
```ts
// Fictional demo company information. Replace before production launch.
company: {
  name: 'CraftGrid Inc.',
  address: '401 Market Row',
  suite: 'Suite 210',
  city: 'Austin',
  state: 'TX',
  postalCode: '78701',
  country: 'United States',
  phone: '+1 (512) 555-0148',
  emails: {
    general: 'hello@craftgrid.test',
    support: 'support@craftgrid.test'
  },
  hours: 'Monday–Friday, 9:00 AM–6:00 PM CT'
}
```

---

## 5. Getting Started

### Prerequisites
- Node.js 18.x or 20.x+
- npm (or pnpm / yarn)

### Installation
```bash
npm install
```

### Run Locally in Development
```bash
npm run dev
```
The application will launch locally at `http://localhost:4321`.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 6. Project Structure

```
marketplaceforwebsitebuilders/
├── public/
│   ├── brand/               # SVG logo and mark assets
│   ├── favicon.svg          # Favicon
│   └── robots.txt           # Crawler instructions
├── src/
│   ├── components/
│   │   ├── checkout/        # Escrow checkout island
│   │   ├── dashboard/       # Workspace & earnings components
│   │   ├── feedback/        # Saved items & notification center
│   │   ├── forms/           # Post project 5-step wizard
│   │   ├── marketplace/     # Filter island, cards (Service, Builder, Project)
│   │   ├── messaging/       # Full messenger island
│   │   ├── navigation/      # Header, Footer, RoleSwitcher, MobileMenu
│   │   ├── projects/        # Proposal submission modal
│   │   ├── services/        # 3-tier package tabs
│   │   ├── talent/          # Directory filters & portfolio lightbox
│   │   └── ui/              # Atom components (Badge, StatCard, RatingStars)
│   ├── config/
│   │   └── site.ts          # Central company & navigation config
│   ├── data/
│   │   ├── builders.ts      # 14 realistic builder profiles
│   │   ├── categories.ts    # Centralized categories and platforms
│   │   ├── conversations.ts # 8 messaging threads
│   │   ├── notifications.ts # Activity alerts
│   │   ├── orders.ts        # 6 active orders with milestone workflows
│   │   ├── projects.ts      # 12 client project requests
│   │   ├── reviews.ts       # 20+ authentic client reviews
│   │   ├── services.ts      # 18 realistic multi-tier service listings
│   │   └── transactions.ts  # Escrow settlements & transactions
│   ├── layouts/
│   │   ├── AdminLayout.astro
│   │   ├── AuthLayout.astro
│   │   ├── BaseLayout.astro
│   │   ├── DashboardLayout.astro
│   │   └── MarketplaceLayout.astro
│   ├── lib/
│   │   ├── services/        # Abstraction layer for future backend integration
│   │   ├── constants.ts
│   │   ├── formatters.ts
│   │   └── utils.ts
│   ├── pages/               # 35+ routes (Marketplace, Details, Dashboards, Admin)
│   ├── styles/
│   │   └── global.css       # Tailwind 4 @theme and design tokens
│   └── types/
│       └── marketplace.ts   # Domain TypeScript contracts
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 7. Routes Map

| Route | Purpose |
| --- | --- |
| `/` | Homepage with split hero composition, categories, featured services, builders & projects |
| `/services` | Services marketplace with real-time multi-faceted filtering & sorting |
| `/services/[slug]` | Service detail page with 3 package tiers, gallery, delivery steps & reviews |
| `/talent` | Talent directory with hourly rate slider, platform chips & invite modal |
| `/talent/[username]` | Builder profile with portfolio lightbox, rate terms, and active services |
| `/projects` | Opportunity board for client project briefs |
| `/projects/[slug]` | Project detail page with deliverables and proposal submission modal |
| `/post-project` | 5-step client project creator with `localStorage` autosave |
| `/login` | Auth login with one-click demo persona switcher |
| `/signup` | Role selector ("I want to hire" vs "I want to build websites") |
| `/onboarding/client` | Multi-step client company setup |
| `/onboarding/builder` | Builder profile creation with live preview card |
| `/dashboard/client` | Client dashboard with active orders, proposals, and spend KPIs |
| `/dashboard/client/projects/[id]/proposals` | Side-by-side proposal comparison matrix |
| `/dashboard/client/payments` | Client escrow payment records & downloadable invoices |
| `/dashboard/builder` | Builder dashboard with overview stats and earnings graph |
| `/dashboard/builder/services` | Builder service management (promote/demote/edit) |
| `/dashboard/builder/services/new` | Service listing creation wizard |
| `/dashboard/builder/proposals` | Builder submitted proposals tracking |
| `/dashboard/builder/earnings` | Builder earnings history, Stripe withdrawal, and settlement table |
| `/messages` | Marketplace direct messenger with project context drawer |
| `/checkout/[service]` | Milestone escrow checkout authorization |
| `/orders/[id]` | Full order workspace with approve, revision, and submission controls |
| `/saved` | Shortlist manager with tabs for Services, Builders, and Projects |
| `/notifications` | Notification center with category filtering and mark-as-read |
| `/settings` | Profile, Notifications, Billing, and Security configuration |
| `/help` | Knowledge base search, category guides, and FAQs |
| `/contact` | Customer support ticket inquiry form and Austin HQ details |
| `/about` | CraftGrid story, mission, and operating principles |
| `/how-it-works` | Step-by-step collaboration guide for clients and builders |
| `/trust-safety` | Milestone escrow and verification guidelines |
| `/terms` | Platform terms of service with prototype disclaimer |
| `/privacy` | Privacy policy with prototype disclaimer |
| `/admin` | Administration portal with GMV stats and builder moderation queue |
| `/404` | Branded custom 404 page ("Looks like this project went off brief") |
| `/sitemap.xml` | Dynamic XML sitemap generator |

---

## 8. Backend Readiness & Future Integration

All data access is encapsulated in `src/lib/services/`:
- `userService.ts`
- `serviceService.ts`
- `projectService.ts`
- `messageService.ts`
- `orderService.ts`
- `paymentService.ts`

To connect a production backend:
1. **Database & Auth (e.g. Supabase / PostgreSQL)**: Replace the local data array reads in `src/lib/services/` with Supabase client queries (`supabase.from('services').select('*')`).
2. **Payments (Stripe Connect)**: Connect the checkout action in `CheckoutForm.tsx` to a server endpoint creating a Stripe PaymentIntent or SetupIntent with destination charges.
3. **Realtime Messaging**: Swap local state dispatch in `MessagingApp.tsx` with Supabase Realtime or WebSocket channels.
4. **File Storage**: Connect file inputs in `OrderWorkspace.tsx` and `PostProjectWizard.tsx` to S3 / Cloudflare R2 signed upload URLs.
