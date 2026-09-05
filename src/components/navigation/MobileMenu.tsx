import React, { useState } from 'react';
import { Menu, X, ChevronRight, Briefcase, User, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-700 hover:text-primary hover:bg-slate-100 rounded-lg transition"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 overflow-y-auto p-6 animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Marketplace</p>
              <div className="space-y-2">
                <a
                  href="/services"
                  className="flex items-center justify-between text-base font-medium text-slate-900 py-2 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Find Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="/talent"
                  className="flex items-center justify-between text-base font-medium text-slate-900 py-2 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Find Talent</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="/projects"
                  className="flex items-center justify-between text-base font-medium text-slate-900 py-2 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Browse Projects</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="/how-it-works"
                  className="flex items-center justify-between text-base font-medium text-slate-900 py-2 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <span>How It Works</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="border-b border-slate-100 pb-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Dashboards & Portals</p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="/dashboard/client"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 hover:border-primary text-sm font-medium text-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span>Client View</span>
                </a>
                <a
                  href="/dashboard/builder"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 hover:border-emerald-600 text-sm font-medium text-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-4 h-4 text-emerald-600" />
                  <span>Builder View</span>
                </a>
                <a
                  href="/messages"
                  className="col-span-2 flex items-center justify-between p-2.5 rounded-lg border border-slate-200 hover:border-primary text-sm font-medium text-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Messages & Orders</span>
                  <span className="px-2 py-0.5 text-[11px] font-semibold bg-primary text-white rounded-md">Active</span>
                </a>
                <a
                  href="/admin"
                  className="col-span-2 flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  <Shield className="w-4 h-4 text-slate-500" />
                  <span>Admin Prototype Portal</span>
                </a>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <a
                href="/post-project"
                className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium text-center shadow-sm transition"
                onClick={() => setIsOpen(false)}
              >
                Post a Project Brief
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/login"
                  className="flex items-center justify-center py-2.5 px-4 rounded-lg border border-slate-300 text-slate-700 font-medium text-center hover:bg-slate-50 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </a>
                <a
                  href="/signup"
                  className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-slate-900 text-white font-medium text-center hover:bg-slate-800 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
