import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, X, ArrowUpDown, Check, Star } from 'lucide-react';
import type { Service } from '@/types/marketplace';
import { formatCurrency } from '@/lib/formatters';

interface ServiceFiltersProps {
  initialServices: Service[];
  initialCategory?: string;
  initialPlatform?: string;
}

export default function ServiceFilters({
  initialServices,
  initialCategory = '',
  initialPlatform = ''
}: ServiceFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPlatform, setSelectedPlatform] = useState(initialPlatform);
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [selectedDelivery, setSelectedDelivery] = useState<string>('all');
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('recommended');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  // Load saved services from localStorage
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('craftgrid_saved_services') || '[]');
      setSavedIds(saved);
    } catch {
      // ignore
    }

    // Check URL parameters on mount
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      const plat = params.get('platform');
      const q = params.get('q');
      if (cat) setSelectedCategory(cat);
      if (plat) setSelectedPlatform(plat);
      if (q) setSearchQuery(q);
    }
  }, []);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    let updated: string[];
    if (savedIds.includes(id)) {
      updated = savedIds.filter(item => item !== id);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('craftgrid_toast', {
          detail: { message: 'Removed from saved services', type: 'info' }
        }));
      }
    } else {
      updated = [...savedIds, id];
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('craftgrid_toast', {
          detail: { message: 'Saved service to favorites', type: 'success' }
        }));
      }
    }
    setSavedIds(updated);
    localStorage.setItem('craftgrid_saved_services', JSON.stringify(updated));
  };

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'business-websites', label: 'Business Websites' },
    { value: 'ecommerce', label: 'Ecommerce' },
    { value: 'landing-pages', label: 'Landing Pages' },
    { value: 'saas-websites', label: 'SaaS Websites' },
    { value: 'web-applications', label: 'Web Applications' },
    { value: 'website-redesign', label: 'Website Redesign' },
    { value: 'website-maintenance', label: 'Website Maintenance' },
    { value: 'conversion-optimization', label: 'Conversion Optimization' }
  ];

  const platforms = [
    { value: '', label: 'All Platforms' },
    { value: 'Webflow', label: 'Webflow' },
    { value: 'Shopify', label: 'Shopify' },
    { value: 'Shopify Plus', label: 'Shopify Plus' },
    { value: 'WordPress', label: 'WordPress' },
    { value: 'Framer', label: 'Framer' },
    { value: 'Astro', label: 'Astro' },
    { value: 'Next.js', label: 'Next.js' }
  ];

  // Filtering & Sorting Logic
  const filteredServices = useMemo(() => {
    return initialServices.filter(service => {
      // Search text filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = service.title.toLowerCase().includes(q);
        const matchesDesc = service.shortDescription.toLowerCase().includes(q);
        const matchesBuilder = service.builder.name.toLowerCase().includes(q);
        const matchesTag = service.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesBuilder && !matchesTag) return false;
      }

      // Category filter
      if (selectedCategory) {
        const catSlug = service.category.toLowerCase().replace(/\s+/g, '-');
        if (catSlug !== selectedCategory) return false;
      }

      // Platform filter
      if (selectedPlatform && service.platform !== selectedPlatform) {
        return false;
      }

      // Budget filter
      if (selectedBudget === 'under-1000' && service.startingPrice >= 1000) return false;
      if (selectedBudget === '1000-3000' && (service.startingPrice < 1000 || service.startingPrice > 3000)) return false;
      if (selectedBudget === '3000-6000' && (service.startingPrice < 3000 || service.startingPrice > 6000)) return false;
      if (selectedBudget === 'over-6000' && service.startingPrice < 6000) return false;

      // Delivery time filter
      if (selectedDelivery === '7' && service.startingDeliveryDays > 7) return false;
      if (selectedDelivery === '14' && service.startingDeliveryDays > 14) return false;
      if (selectedDelivery === '30' && service.startingDeliveryDays > 30) return false;

      // Rating filter
      if (minRating > 0 && service.rating < minRating) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
      if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
      if (sortBy === 'delivery') return a.startingDeliveryDays - b.startingDeliveryDays;
      return 0; // recommended
    });
  }, [initialServices, searchQuery, selectedCategory, selectedPlatform, selectedBudget, selectedDelivery, minRating, sortBy]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedPlatform('');
    setSelectedBudget('all');
    setSelectedDelivery('all');
    setMinRating(0);
    setSortBy('recommended');
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedPlatform || selectedBudget !== 'all' || selectedDelivery !== 'all' || minRating > 0;

  return (
    <div className="space-y-6">
      
      {/*  */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/*  */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by keywords, CMS, or skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/*  */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-3">
          
          {/*  */}
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition"
          >
            <Filter className="w-4 h-4 text-primary" />
            <span>Filters {hasActiveFilters && '•'}</span>
          </button>

          {/*  */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 hidden sm:inline-block" />
            <span className="hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:border-primary transition"
            >
              <option value="recommended">Recommended</option>
              <option value="rating">Best Rated</option>
              <option value="reviews">Most Reviewed</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="delivery">Fastest Delivery</option>
            </select>
          </div>
        </div>

      </div>

      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/*  */}
        <aside className="hidden lg:block lg:col-span-1 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm sticky top-24 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="font-bold text-sm text-slate-900">Filters</span>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-semibold text-primary hover:text-primary-hover"
              >
                Reset All
              </button>
            )}
          </div>

          {/*  */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Service Category
            </label>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition flex items-center justify-between ${
                    selectedCategory === cat.value
                      ? 'bg-primary text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{cat.label}</span>
                  {selectedCategory === cat.value && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/*  */}
          <div className="pt-4 border-t border-slate-100">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Platform & Tech
            </label>
            <div className="space-y-1">
              {platforms.map(plat => (
                <button
                  key={plat.value}
                  onClick={() => setSelectedPlatform(plat.value)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition flex items-center justify-between ${
                    selectedPlatform === plat.value
                      ? 'bg-primary text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{plat.label}</span>
                  {selectedPlatform === plat.value && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/*  */}
          <div className="pt-4 border-t border-slate-100">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Budget Range
            </label>
            <div className="space-y-1.5 text-xs text-slate-700 font-medium">
              {[
                { id: 'all', label: 'Any Price' },
                { id: 'under-1000', label: 'Under $1,000' },
                { id: '1000-3000', label: '$1,000 – $3,000' },
                { id: '3000-6000', label: '$3,000 – $6,000' },
                { id: 'over-6000', label: '$6,000+' }
              ].map(tier => (
                <label key={tier.id} className="flex items-center gap-2 cursor-pointer py-1 px-1 rounded hover:bg-slate-50">
                  <input
                    type="radio"
                    name="budget"
                    checked={selectedBudget === tier.id}
                    onChange={() => setSelectedBudget(tier.id)}
                    className="accent-primary"
                  />
                  <span>{tier.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/*  */}
          <div className="pt-4 border-t border-slate-100">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Delivery Turnaround
            </label>
            <div className="space-y-1.5 text-xs text-slate-700 font-medium">
              {[
                { id: 'all', label: 'Any Delivery Time' },
                { id: '7', label: 'Up to 7 days' },
                { id: '14', label: 'Up to 14 days' },
                { id: '30', label: 'Up to 30 days' }
              ].map(tier => (
                <label key={tier.id} className="flex items-center gap-2 cursor-pointer py-1 px-1 rounded hover:bg-slate-50">
                  <input
                    type="radio"
                    name="delivery"
                    checked={selectedDelivery === tier.id}
                    onChange={() => setSelectedDelivery(tier.id)}
                    className="accent-primary"
                  />
                  <span>{tier.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/*  */}
          <div className="pt-4 border-t border-slate-100">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Minimum Rating
            </label>
            <div className="flex gap-1.5">
              {[0, 4.5, 4.8, 4.9].map(r => (
                <button
                  key={r}
                  onClick={() => setMinRating(r)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition ${
                    minRating === r
                      ? 'bg-primary text-white border-primary'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {r === 0 ? 'All' : `${r}+ ★`}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/*  */}
        <main className="lg:col-span-3 space-y-4">
          {/*  */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing <strong className="text-slate-800 font-semibold">{filteredServices.length}</strong> website services
            </span>
            {hasActiveFilters && (
              <span className="text-primary font-medium">Filters applied</span>
            )}
          </div>

          {filteredServices.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center">
              <p className="text-base font-bold text-slate-800">No services match your current filters</p>
              <p className="text-xs text-slate-500 mt-1">Try relaxing your budget, platform, or search keywords.</p>
              <button
                onClick={clearAllFilters}
                className="mt-4 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary-hover transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredServices.map(service => {
                const isSaved = savedIds.includes(service.id);
                return (
                  <div
                    key={service.id}
                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full"
                  >
                    {/*  */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                      <a href={`/services/${service.slug}`} className="block w-full h-full">
                        <img
                          src={service.thumbnail}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </a>
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-slate-900 shadow-xs">
                        {service.platform}
                      </span>
                      <button
                        onClick={(e) => toggleSave(service.id, e)}
                        className={`absolute top-3 right-3 p-1.5 rounded-full bg-white/90 backdrop-blur-sm transition shadow-xs ${
                          isSaved ? 'text-rose-500 fill-rose-500' : 'text-slate-600 hover:text-rose-500'
                        }`}
                        title={isSaved ? 'Saved' : 'Save service'}
                      >
                        <svg className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>

                    {/*  */}
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={service.builder.avatar}
                          alt={service.builder.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-xs font-semibold text-slate-800 truncate">
                          {service.builder.name}
                        </span>
                        {service.builder.verified && (
                          <span className="text-primary text-xs">✓</span>
                        )}
                      </div>

                      <a href={`/services/${service.slug}`} className="block group-hover:text-primary transition">
                        <h3 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
                          {service.title}
                        </h3>
                      </a>

                      <div className="mt-2 flex items-center gap-1 text-xs text-amber-500 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{service.rating.toFixed(2)}</span>
                        <span className="text-slate-400 font-normal">({service.reviewsCount})</span>
                      </div>

                      <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500">{service.startingDeliveryDays} days delivery</span>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 uppercase font-medium block">From</span>
                          <span className="text-sm font-bold text-slate-900">{formatCurrency(service.startingPrice)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>

      </div>

      {/*  */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-sm bg-white h-full p-6 overflow-y-auto space-y-6 shadow-2xl animate-in slide-in-from-right">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-base font-bold text-slate-900">Filters</h3>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/*  */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50"
              >
                {categories.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>

            {/*  */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Platform</label>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="w-full p-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50"
              >
                {platforms.map(p => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>

            <div className="pt-4 border-t border-slate-200 flex gap-3">
              <button
                onClick={() => {
                  clearAllFilters();
                  setIsMobileDrawerOpen(false);
                }}
                className="flex-1 py-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="flex-1 py-2.5 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-primary-hover shadow-sm"
              >
                View {filteredServices.length} Results
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
