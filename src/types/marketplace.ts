export type UserRole = 'client' | 'builder' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  createdAt: string;
  title?: string;
  company?: string;
  location?: string;
  bio?: string;
}

export interface Client extends User {
  role: 'client';
  company: string;
  companyWebsite?: string;
  industry?: string;
  totalSpent: number;
  projectsPosted: number;
  activeOrdersCount: number;
  rating: number;
  reviewsCount: number;
}

export interface Skill {
  id: string;
  name: string;
  category: 'platform' | 'language' | 'specialty';
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  platform: string;
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  metrics?: string;
  completedYear: number;
}

export interface Builder extends User {
  role: 'builder';
  username: string;
  title: string;
  location: string;
  country: string;
  bio: string;
  hourlyRate: number;
  minimumProjectBudget: number;
  rating: number;
  reviewsCount: number;
  completedProjectsCount: number;
  verified: boolean;
  responseTime: string; // e.g. "within 1 hour"
  availability: 'Available now' | '1–2 weeks' | 'Next month' | 'Booked';
  languages: string[];
  skills: string[];
  platforms: string[];
  portfolio: PortfolioItem[];
  joinedDate: string;
  earningsRank?: string;
}

export interface ServicePackage {
  id: string;
  name: 'Starter' | 'Growth' | 'Advanced';
  title: string;
  description: string;
  price: number;
  deliveryDays: number;
  revisions: number | 'Unlimited';
  pagesCount: number;
  responsiveDesign: boolean;
  cmsSetup: boolean;
  ecommerceCapability: boolean;
  seoSetup: boolean;
  speedOptimization: boolean;
  integrationsCount: number;
  features: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  platform: string;
  thumbnail: string;
  galleryImages: string[];
  builderId: string;
  builder: {
    id: string;
    name: string;
    username: string;
    avatar: string;
    title: string;
    rating: number;
    reviewsCount: number;
    completedProjectsCount: number;
    location: string;
    verified: boolean;
    responseTime: string;
  };
  startingPrice: number;
  startingDeliveryDays: number;
  rating: number;
  reviewsCount: number;
  ordersInQueue: number;
  tags: string[];
  packages: {
    starter: ServicePackage;
    growth: ServicePackage;
    advanced: ServicePackage;
  };
  requirements: string[];
  deliveryProcess: {
    step: number;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  featured?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  platform: string;
  client: {
    id: string;
    name: string;
    company: string;
    avatar: string;
    location: string;
    verified: boolean;
    rating: number;
    projectsPosted: number;
  };
  budget: {
    type: 'fixed' | 'hourly';
    min: number;
    max: number;
    currency: string;
  };
  timeline: string;
  experienceLevel: 'Entry' | 'Intermediate' | 'Expert';
  postedAt: string;
  status: 'Open' | 'Under Review' | 'In Progress' | 'Completed' | 'Closed';
  summary: string;
  description: string;
  deliverables: string[];
  requiredSkills: string[];
  proposalsCount: number;
  attachments?: {
    name: string;
    size: string;
    url: string;
  }[];
}

export interface Proposal {
  id: string;
  projectId: string;
  builderId: string;
  builder: {
    id: string;
    name: string;
    username: string;
    title: string;
    avatar: string;
    rating: number;
    reviewsCount: number;
    verified: boolean;
  };
  proposedPrice: number;
  estimatedDays: number;
  coverLetter: string;
  suggestedMilestones: {
    title: string;
    amount: number;
    durationDays: number;
    deliverable: string;
  }[];
  submittedAt: string;
  status: 'pending' | 'shortlisted' | 'accepted' | 'declined';
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  text: string;
  timestamp: string;
  attachments?: {
    name: string;
    size: string;
    type: string;
  }[];
}

export interface Conversation {
  id: string;
  participant: {
    id: string;
    name: string;
    role: 'client' | 'builder';
    avatar: string;
    title: string;
    online: boolean;
    lastSeen: string;
  };
  projectContext?: {
    id: string;
    title: string;
    amount: number;
    status: string;
  };
  lastMessage: {
    text: string;
    timestamp: string;
    unread: boolean;
  };
  messages: Message[];
}

export type MilestoneStatus = 'funded' | 'in_progress' | 'submitted' | 'revision_requested' | 'approved';

export interface Milestone {
  id: string;
  orderId: string;
  title: string;
  description: string;
  amount: number;
  dueDate: string;
  status: MilestoneStatus;
  deliverables: string[];
  submittedDeliverableUrl?: string;
  revisionNotes?: string;
  approvedAt?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  title: string;
  serviceId?: string;
  projectId?: string;
  client: {
    id: string;
    name: string;
    company: string;
    avatar: string;
    email: string;
  };
  builder: {
    id: string;
    name: string;
    avatar: string;
    title: string;
    email: string;
  };
  selectedPackageName?: 'Starter' | 'Growth' | 'Advanced' | 'Custom';
  totalAmount: number;
  platformFee: number;
  netBuilderAmount: number;
  status: 'Pending' | 'Active' | 'Under Review' | 'Revision Requested' | 'Completed' | 'Cancelled';
  createdAt: string;
  dueDate: string;
  milestones: Milestone[];
  activity: {
    id: string;
    timestamp: string;
    actor: string;
    action: string;
  }[];
}

export interface Review {
  id: string;
  targetId: string; // serviceId or builderId
  targetType: 'service' | 'builder';
  author: {
    name: string;
    company: string;
    avatar: string;
    location: string;
  };
  rating: number;
  date: string;
  comment: string;
  serviceTitle?: string;
  projectBudget?: number;
}

export interface Payment {
  id: string;
  orderId: string;
  orderTitle: string;
  milestoneTitle: string;
  date: string;
  amount: number;
  fee: number;
  net: number;
  clientName: string;
  builderName: string;
  type: 'milestone_funded' | 'milestone_released' | 'payout';
  status: 'Completed' | 'Pending' | 'In Escrow';
  invoiceUrl?: string;
}

export interface Notification {
  id: string;
  userId: string;
  category: 'proposals' | 'messages' | 'orders' | 'payments' | 'reviews' | 'system';
  title: string;
  description: string;
  link: string;
  timestamp: string;
  read: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  iconName: string;
  servicesCount: number;
  averageStartingPrice: number;
}
