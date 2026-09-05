import React, { useState, useEffect } from 'react';
import { User, Shield, Briefcase, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function RoleSwitcher() {
  const [currentRole, setCurrentRole] = useState<'guest' | 'client' | 'builder' | 'admin'>('guest');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('craftgrid_demo_role') as 'guest' | 'client' | 'builder' | 'admin' | null;
    if (saved) {
      setCurrentRole(saved);
    }
  }, []);

  const selectRole = (role: 'guest' | 'client' | 'builder' | 'admin') => {
    setCurrentRole(role);
    localStorage.setItem('craftgrid_demo_role', role);
    setIsOpen(false);
    window.location.reload();
  };

  const getRoleLabel = () => {
    switch (currentRole) {
      case 'client': return 'Client Workspace (Olivia)';
      case 'builder': return 'Builder Workspace (Maya)';
      case 'admin': return 'Platform Admin';
      default: return 'Visitor View';
    }
  };

  return (
    <div className="relative inline-block text-left text-xs font-medium">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-dark transition border border-slate-200/90 shadow-2xs font-semibold text-xs"
        title="Switch active platform persona"
      >
        <User className="w-3.5 h-3.5 text-primary" />
        <span>{getRoleLabel()}</span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-60 rounded-xl bg-white shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95">
          <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
            Active Workspace Persona
          </div>
          <button
            onClick={() => selectRole('guest')}
            className={`w-full text-left px-3 py-2 flex items-center gap-2.5 hover:bg-slate-50 transition text-xs ${currentRole === 'guest' ? 'text-primary font-semibold' : 'text-slate-700'}`}
          >
            <User className="w-4 h-4 text-slate-400" />
            <div>
              <p>Public / Guest</p>
              <p className="text-[11px] text-slate-400 font-normal">Logged-out public visitor</p>
            </div>
          </button>
          <button
            onClick={() => selectRole('client')}
            className={`w-full text-left px-3 py-2 flex items-center gap-2.5 hover:bg-slate-50 transition text-xs ${currentRole === 'client' ? 'text-primary font-semibold' : 'text-slate-700'}`}
          >
            <Briefcase className="w-4 h-4 text-primary" />
            <div>
              <p>Client: Olivia Vance</p>
              <p className="text-[11px] text-slate-400 font-normal">Hires builders, approves milestones</p>
            </div>
          </button>
          <button
            onClick={() => selectRole('builder')}
            className={`w-full text-left px-3 py-2 flex items-center gap-2.5 hover:bg-slate-50 transition text-xs ${currentRole === 'builder' ? 'text-primary font-semibold' : 'text-slate-700'}`}
          >
            <User className="w-4 h-4 text-emerald-600" />
            <div>
              <p>Builder: Maya Bennett</p>
              <p className="text-[11px] text-slate-400 font-normal">Publishes services, submits work</p>
            </div>
          </button>
          <button
            onClick={() => selectRole('admin')}
            className={`w-full text-left px-3 py-2 flex items-center gap-2.5 hover:bg-slate-50 transition text-xs ${currentRole === 'admin' ? 'text-primary font-semibold' : 'text-slate-700'}`}
          >
            <Shield className="w-4 h-4 text-purple-600" />
            <div>
              <p>Admin Portal</p>
              <p className="text-[11px] text-slate-400 font-normal">Marketplace operations & GMV</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
