import { builders } from '@/data/builders';
import { siteConfig } from '@/config/site';
import type { Builder, User } from '@/types/marketplace';

export const userService = {
  getAllBuilders: async (): Promise<Builder[]> => {
    return [...builders];
  },

  getBuilderByUsername: async (username: string): Promise<Builder | undefined> => {
    return builders.find(b => b.username === username);
  },

  getBuilderById: async (id: string): Promise<Builder | undefined> => {
    return builders.find(b => b.id === id);
  },

  getCurrentUser: (): User => {
    if (typeof window !== 'undefined') {
      const storedRole = localStorage.getItem('craftgrid_demo_role');
      if (storedRole === 'builder') return siteConfig.demoAccounts.builder as User;
      if (storedRole === 'admin') return siteConfig.demoAccounts.admin as User;
    }
    return siteConfig.demoAccounts.client as User;
  },

  setCurrentUserRole: (role: 'client' | 'builder' | 'admin'): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('craftgrid_demo_role', role);
      window.dispatchEvent(new Event('craftgrid_role_changed'));
    }
  }
};
