import React, { useState, useEffect } from 'react';
import { User, LogOut, LayoutDashboard, MessageSquare, Bell, Bookmark, Settings, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface UserNavDropdownProps {
  currentPath?: string;
}

export default function UserNavDropdown({ currentPath = '/' }: UserNavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState<'client' | 'builder' | 'guest'>('client');

  useEffect(() => {
    const saved = localStorage.getItem('craftgrid_demo_role');
    if (saved === 'builder') {
      setRole('builder');
    } else if (saved === 'guest') {
      setRole('guest');
    } else {
      setRole('client');
    }
  }, []);

  const user = role === 'builder' ? siteConfig.demoAccounts.builder : siteConfig.demoAccounts.client;

  if (role === 'guest') {
    return (
      <div className="flex items-center gap-3">
        <a
          href="/login"
          className="text-sm font-medium text-slate-700 hover:text-primary px-3 py-2 rounded-lg transition"
        >
          Log in
        </a>
        <a
          href="/signup"
          className="text-sm font-medium text-slate-700 hover:text-primary px-3 py-2 rounded-lg transition hidden sm:inline-block"
        >
          Join as a Builder
        </a>
        <a
          href="/post-project"
          className="text-sm font-medium text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded-lg shadow-sm transition"
        >
          Post a Project
        </a>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <a
          href="/messages"
          className="relative p-2 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-lg transition"
          title="Messages"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </a>

        <a
          href="/notifications"
          className="relative p-2 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-lg transition"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500" />
        </a>

        <a
          href="/saved"
          className="p-2 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-lg transition hidden sm:block"
          title="Saved Items"
        >
          <Bookmark className="w-5 h-5" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-primary/20 transition focus:outline-none"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full object-cover border border-slate-200"
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95">
          <div className="px-4 py-2.5 border-b border-slate-100">
            <p className="text-sm font-semibold text-slate-900">{user.name}</p>
            <p className="text-xs text-slate-500 truncate">{user.email}</p>
            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[11px] font-medium bg-primary/10 text-primary uppercase tracking-wide">
              {role === 'builder' ? 'Builder Account' : 'Client Account'}
            </span>
          </div>

          <div className="py-1">
            <a
              href={role === 'builder' ? '/dashboard/builder' : '/dashboard/client'}
              className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
              onClick={() => setIsOpen(false)}
            >
              <LayoutDashboard className="w-4 h-4 text-slate-400" />
              <span>{role === 'builder' ? 'Builder Dashboard' : 'Client Dashboard'}</span>
            </a>

            {role === 'builder' ? (
              <>
                <a
                  href="/dashboard/builder/services"
                  className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span>My Services</span>
                </a>
                <a
                  href="/dashboard/builder/earnings"
                  className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span>Earnings & Payouts</span>
                </a>
                <a
                  href="/talent/maya-bennett"
                  className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>View Public Profile</span>
                </a>
              </>
            ) : (
              <>
                <a
                  href="/dashboard/client/payments"
                  className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span>Payments & Invoices</span>
                </a>
                <a
                  href="/post-project"
                  className="flex items-center gap-2.5 px-4 py-2 text-sm text-primary font-medium hover:bg-primary/5 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <span>+ Post a Project</span>
                </a>
              </>
            )}

            <a
              href="/settings"
              className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-4 h-4 text-slate-400" />
              <span>Account Settings</span>
            </a>
          </div>

          <div className="border-t border-slate-100 pt-1">
            <button
              onClick={() => {
                localStorage.setItem('craftgrid_demo_role', 'guest');
                setIsOpen(false);
                window.location.href = '/';
              }}
              className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 transition text-left"
            >
              <LogOut className="w-4 h-4 text-rose-500" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
