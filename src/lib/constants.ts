export const PLATFORM_FEE_PERCENTAGE = 0.05; // 5% marketplace commission

export const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'rating', label: 'Best Rated' },
  { value: 'reviews', label: 'Most Reviewed' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'delivery', label: 'Fastest Delivery' }
] as const;

export const BUDGET_RANGES = [
  { label: 'Any Budget', min: 0, max: Infinity },
  { label: 'Under $1,000', min: 0, max: 1000 },
  { label: '$1,000 – $3,000', min: 1000, max: 3000 },
  { label: '$3,000 – $6,000', min: 3000, max: 6000 },
  { label: '$6,000+', min: 6000, max: Infinity }
] as const;

export const DELIVERY_OPTIONS = [
  { label: 'Any Delivery Time', days: Infinity },
  { label: 'Up to 7 days', days: 7 },
  { label: 'Up to 14 days', days: 14 },
  { label: 'Up to 30 days', days: 30 }
] as const;
