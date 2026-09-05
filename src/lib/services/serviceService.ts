import { services } from '@/data/services';
import type { Service } from '@/types/marketplace';

export const serviceService = {
  getAll: async (): Promise<Service[]> => {
    return [...services];
  },

  getBySlug: async (slug: string): Promise<Service | undefined> => {
    return services.find(s => s.slug === slug);
  },

  getById: async (id: string): Promise<Service | undefined> => {
    return services.find(s => s.id === id);
  },

  getByCategory: async (categorySlug: string): Promise<Service[]> => {
    return services.filter(s => s.category.toLowerCase().replace(/\s+/g, '-') === categorySlug.toLowerCase());
  },

  getFeatured: async (limit = 4): Promise<Service[]> => {
    return services.filter(s => s.featured).slice(0, limit);
  },

  getRelated: async (currentId: string, category: string, limit = 3): Promise<Service[]> => {
    return services.filter(s => s.id !== currentId && s.category === category).slice(0, limit);
  }
};
