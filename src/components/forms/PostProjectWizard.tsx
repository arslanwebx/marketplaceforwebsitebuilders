import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, ArrowLeft, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

interface FormData {
  title: string;
  category: string;
  platform: string;
  businessType: string;
  brief: string;
  goals: string;
  referenceWebsites: string;
  pagesCount: number;
  features: string[];
  budgetType: 'fixed' | 'hourly';
  budgetMin: number;
  budgetMax: number;
  deadline: string;
  experienceLevel: 'Entry' | 'Intermediate' | 'Expert';
}

const initialData: FormData = {
  title: '',
  category: 'Business Websites',
  platform: 'Webflow',
  businessType: '',
  brief: '',
  goals: '',
  referenceWebsites: '',
  pagesCount: 5,
  features: ['CMS Setup', 'SEO Setup', 'Responsive Design'],
  budgetType: 'fixed',
  budgetMin: 3000,
  budgetMax: 5000,
  deadline: '3–4 weeks',
  experienceLevel: 'Expert'
};

export default function PostProjectWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isPublished, setIsPublished] = useState(false);

  // Autosave / load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('craftgrid_draft_project');
      if (saved) {
        setFormData(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const updateField = (field: keyof FormData, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    try {
      localStorage.setItem('craftgrid_draft_project', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const toggleFeature = (feature: string) => {
    const current = formData.features;
    if (current.includes(feature)) {
      updateField('features', current.filter(f => f !== feature));
    } else {
      updateField('features', [...current, feature]);
    }
  };

  const handlePublish = () => {
    setIsPublished(true);
    try {
      localStorage.removeItem('craftgrid_draft_project');
    } catch {
      // ignore
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('craftgrid_toast', {
        detail: { message: 'Your project brief has been published to the marketplace!', type: 'success' }
      }));
    }
  };

  const featureOptions = [
    'CMS Setup',
    'Ecommerce & Cart',
    'Custom Inquiry Forms',
    'Appointment Booking',
    'Client / Member Portal',
    '3rd Party API Integrations',
    'SEO & Schema Markup',
    'Speed & Core Web Vitals Optimization',
    'Multilingual Support',
    'Animations & Micro-interactions'
  ];

  if (isPublished) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm space-y-5 animate-in zoom-in-95">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Project Published Successfully!</h2>
        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Your project brief <strong>"{formData.title || 'Untitled Website Project'}"</strong> is now live on CraftGrid. Qualified builders and web agencies will review your requirements and submit proposals shortly.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/dashboard/client"
            className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-xl shadow-sm transition"
          >
            Go to Client Dashboard
          </a>
          <a
            href="/projects"
            className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl transition"
          >
            View in Marketplace
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      
      {/*  */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-400">
          <span>Step {step} of 5</span>
          <span className="text-primary font-bold">{Math.round((step / 5) * 100)}% Complete</span>
        </div>
        {/*  */}
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300 rounded-full"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>

        <div className="hidden sm:grid grid-cols-5 gap-2 mt-4 text-[11px] font-medium text-slate-500 text-center">
          <span className={step >= 1 ? 'text-primary font-bold' : ''}>1. Basics</span>
          <span className={step >= 2 ? 'text-primary font-bold' : ''}>2. Brief</span>
          <span className={step >= 3 ? 'text-primary font-bold' : ''}>3. Scope</span>
          <span className={step >= 4 ? 'text-primary font-bold' : ''}>4. Budget</span>
          <span className={step >= 5 ? 'text-primary font-bold' : ''}>5. Review</span>
        </div>
      </div>

      {/*  */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        
        {/*  */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h2 className="text-xl font-bold text-slate-900">What do you need built?</h2>
              <p className="text-xs text-slate-500 mt-1">Start by giving your project a descriptive title and selecting a category.</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Title *</label>
              <input
                type="text"
                placeholder="e.g. Shopify 2.0 store redesign for sustainable apparel brand"
                value={formData.title}
                onChange={(e) => updateField('title', e.target.value)}
                className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <p className="text-[11px] text-slate-400 mt-1">Clear titles receive 3x more qualified proposals.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Website Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => updateField('category', e.target.value)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="Business Websites">Business Websites</option>
                  <option value="Ecommerce">Ecommerce Store</option>
                  <option value="Landing Pages">Landing Page</option>
                  <option value="SaaS Websites">SaaS Marketing Site</option>
                  <option value="Web Applications">Web Application / Portal</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Website Maintenance">Website Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Preferred Platform *</label>
                <select
                  value={formData.platform}
                  onChange={(e) => updateField('platform', e.target.value)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="Webflow">Webflow</option>
                  <option value="Shopify">Shopify</option>
                  <option value="WordPress">WordPress</option>
                  <option value="Framer">Framer</option>
                  <option value="Astro">Astro</option>
                  <option value="Next.js">Next.js</option>
                  <option value="No preference / Builder recommendation">Open to recommendations</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/*  */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Describe your project</h2>
              <p className="text-xs text-slate-500 mt-1">Provide context about your company, objectives, and any inspirational references.</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Business Type & Industry *</label>
              <input
                type="text"
                placeholder="e.g. B2B Enterprise SaaS or Artisan Coffee Roastery"
                value={formData.businessType}
                onChange={(e) => updateField('businessType', e.target.value)}
                className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Detailed Project Brief *</label>
              <textarea
                rows={5}
                placeholder="Describe your current site challenges, target audience, and what success looks like for this project..."
                value={formData.brief}
                onChange={(e) => updateField('brief', e.target.value)}
                className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Reference Websites (Inspiration)</label>
              <input
                type="text"
                placeholder="e.g. https://linear.app, https://stripe.com"
                value={formData.referenceWebsites}
                onChange={(e) => updateField('referenceWebsites', e.target.value)}
                className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        )}

        {/*  */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Project Scope & Capabilities</h2>
              <p className="text-xs text-slate-500 mt-1">Specify page counts and key technical integrations needed.</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Estimated Page Count: {formData.pagesCount} pages</label>
              <input
                type="range"
                min="1"
                max="30"
                value={formData.pagesCount}
                onChange={(e) => updateField('pagesCount', Number(e.target.value))}
                className="w-full accent-primary cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 page (Landing Page)</span>
                <span>5–10 pages (Standard)</span>
                <span>30+ pages (Enterprise)</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2.5">Key Features Required</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map(feat => {
                  const isChecked = formData.features.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left flex items-center justify-between transition ${
                        isChecked
                          ? 'bg-soft-primary text-primary border-primary'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span>{feat}</span>
                      {isChecked && <Check className="w-4 h-4 text-primary" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/*  */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Budget and Timeline</h2>
              <p className="text-xs text-slate-500 mt-1">Set realistic expectations to attract experienced website builders.</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Pricing Model</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => updateField('budgetType', 'fixed')}
                  className={`p-3.5 rounded-xl border text-xs font-bold text-center transition ${
                    formData.budgetType === 'fixed'
                      ? 'bg-primary text-white border-primary'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  Fixed Milestone Price
                </button>
                <button
                  type="button"
                  onClick={() => updateField('budgetType', 'hourly')}
                  className={`p-3.5 rounded-xl border text-xs font-bold text-center transition ${
                    formData.budgetType === 'hourly'
                      ? 'bg-primary text-white border-primary'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  Hourly Rate Contract
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Minimum Budget (USD) *</label>
                <input
                  type="number"
                  step="250"
                  value={formData.budgetMin}
                  onChange={(e) => updateField('budgetMin', Number(e.target.value))}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Maximum Budget (USD) *</label>
                <input
                  type="number"
                  step="250"
                  value={formData.budgetMax}
                  onChange={(e) => updateField('budgetMax', Number(e.target.value))}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Target Timeline *</label>
                <select
                  value={formData.deadline}
                  onChange={(e) => updateField('deadline', e.target.value)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none"
                >
                  <option value="1–2 weeks">1–2 weeks (Urgent)</option>
                  <option value="3–4 weeks">3–4 weeks (Standard)</option>
                  <option value="1–2 months">1–2 months (Comprehensive)</option>
                  <option value="Flexible">Flexible / Open</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Experience Preference</label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => updateField('experienceLevel', e.target.value)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none"
                >
                  <option value="Entry">Entry Level</option>
                  <option value="Intermediate">Intermediate Pro</option>
                  <option value="Expert">Senior / Expert Builder</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/*  */}
        {step === 5 && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Review Project Summary</h2>
              <p className="text-xs text-slate-500 mt-1">Review your brief details before making it visible to web experts.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] text-primary uppercase font-bold tracking-wider">{formData.category} · {formData.platform}</span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{formData.title || 'Untitled Project Brief'}</h3>
                {formData.businessType && <p className="text-slate-600 mt-0.5">{formData.businessType}</p>}
              </div>

              <div>
                <span className="font-bold text-slate-700 block mb-1">Brief Description:</span>
                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{formData.brief || 'No description provided.'}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-200">
                <div>
                  <span className="text-slate-400 block text-[11px]">Budget</span>
                  <span className="font-bold text-slate-900">{formatCurrency(formData.budgetMin)} – {formatCurrency(formData.budgetMax)}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Pages</span>
                  <span className="font-bold text-slate-900">{formData.pagesCount} pages</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Timeline</span>
                  <span className="font-bold text-slate-900">{formData.deadline}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Level</span>
                  <span className="font-bold text-slate-900">{formData.experienceLevel}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="font-bold text-slate-700 block mb-1.5">Required Features:</span>
                <div className="flex flex-wrap gap-1.5">
                  {formData.features.map(f => (
                    <span key={f} className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/*  */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2.5 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Step</span>
            </button>
          ) : <div />}

          {step < 5 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-1.5"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePublish}
              className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-sm font-bold shadow-md transition flex items-center gap-2"
            >
              <span>Publish Project Brief</span>
              <Send className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
