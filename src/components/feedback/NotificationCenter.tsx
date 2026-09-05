import React, { useState } from 'react';
import { Bell, Check, CheckCheck, FileText, MessageSquare, PackageCheck, CreditCard, Star, ShieldAlert } from 'lucide-react';
import type { Notification } from '@/types/marketplace';

interface NotificationCenterProps {
  initialNotifications: Notification[];
}

export default function NotificationCenter({ initialNotifications }: NotificationCenterProps) {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('craftgrid_toast', {
        detail: { message: 'All notifications marked as read.', type: 'info' }
      }));
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'proposals': return <FileText className="w-4 h-4 text-primary" />;
      case 'messages': return <MessageSquare className="w-4 h-4 text-sky-500" />;
      case 'orders': return <PackageCheck className="w-4 h-4 text-emerald-600" />;
      case 'payments': return <CreditCard className="w-4 h-4 text-purple-600" />;
      case 'reviews': return <Star className="w-4 h-4 text-amber-500" />;
      default: return <ShieldAlert className="w-4 h-4 text-slate-500" />;
    }
  };

  const filtered = selectedCategory === 'all'
    ? notifications
    : notifications.filter(n => n.category === selectedCategory);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Notification Center</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            You have {unreadCount} unread platform alert{unreadCount !== 1 ? 's' : ''}.
          </p>
        </div>

        <button
          onClick={markAllAsRead}
          className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1 self-start sm:self-auto"
        >
          <CheckCheck className="w-4 h-4" />
          <span>Mark All as Read</span>
        </button>
      </div>

      {/*  */}
      <div className="flex flex-wrap gap-1.5 text-xs">
        {['all', 'orders', 'messages', 'proposals', 'payments', 'reviews', 'system'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg font-semibold uppercase tracking-wide transition ${
              selectedCategory === cat
                ? 'bg-primary text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/*  */}
      <div className="divide-y divide-slate-100">
        {filtered.map(notif => (
          <div
            key={notif.id}
            className={`py-4 flex items-start justify-between gap-4 transition ${
              !notif.read ? 'bg-soft-primary/20 -mx-6 px-6' : ''
            }`}
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-slate-100 shrink-0 mt-0.5">
                {getCategoryIcon(notif.category)}
              </div>
              <div className="space-y-1">
                <a href={notif.link} className="text-sm font-bold text-slate-900 hover:text-primary transition block">
                  {notif.title}
                </a>
                <p className="text-xs text-slate-600 leading-relaxed">{notif.description}</p>
                <span className="text-[11px] text-slate-400 block">{notif.timestamp}</span>
              </div>
            </div>

            {!notif.read && (
              <button
                onClick={() => markAsRead(notif.id)}
                className="p-1 text-slate-400 hover:text-primary rounded-lg text-xs"
                title="Mark as read"
              >
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
