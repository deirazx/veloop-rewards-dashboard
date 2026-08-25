import React, { useState } from 'react';
import {
  User,
  Shield,
  Key,
  Bell,
  Crown,
  CheckCircle2,
  Sparkles,
  Zap,
  Award,
  Lock,
  Smartphone,
  Mail,
  Check,
  CreditCard,
  ChevronRight
} from 'lucide-react';

const ProfileView = ({ user, onNavigate }) => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [streakReminders, setStreakReminders] = useState(true);
  const [savedToast, setSavedToast] = useState(false);

  const handleSaveSettings = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-5xl text-white">
      {/* Toast Alert */}
      {savedToast && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-[#1c2035] border border-emerald-500/50 shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-white font-heading">Settings Saved</h4>
            <p className="text-xs text-slate-400 font-medium">Your profile preferences were updated successfully.</p>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Account Profile & VIP Settings
          </h1>
          <p className="text-sm text-slate-400">
            Manage your Veloops credentials, security protections, and VIP status.
          </p>
        </div>

        <span className="text-xs font-bold text-emerald-300 bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1.5 w-fit">
          <Shield className="w-3.5 h-3.5" />
          Account Security: 100% Protected
        </span>
      </div>

      {/* User Hero Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#1c2035] border border-slate-700/60 shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative">
          <img
            src={
              user?.avatar ||
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80'
            }
            alt="Profile Avatar"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover ring-4 ring-purple-500/30 shadow-lg"
          />
          <span className="absolute -bottom-2 -right-2 p-2 rounded-2xl bg-amber-400 text-slate-950 shadow-md">
            <Crown className="w-5 h-5 fill-slate-950" />
          </span>
        </div>

        <div className="flex-1 text-center sm:text-left space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white">
              {user?.name || 'Alex Mercer'}
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 text-xs font-extrabold w-fit mx-auto sm:mx-0 border border-purple-800/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              Verified Level 14 • Gold VIP
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            {user?.email || 'alex.mercer@veloops.io'} • Member since January 2026
          </p>

          <div className="pt-2 flex flex-wrap gap-2.5 justify-center sm:justify-start">
            <span className="px-3.5 py-1.5 rounded-xl bg-purple-950/80 text-purple-300 text-xs font-extrabold border border-purple-800/80 shadow-2xs">
              VE Multiplier: <strong className="text-amber-400">1.25x Boost</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-amber-950/80 text-amber-300 text-xs font-extrabold border border-amber-800/80 shadow-2xs">
              Lifetime Earned: <strong className="text-amber-400">98,400 VEs (≈ ₹98,400)</strong>
            </span>
            <button
              onClick={() => onNavigate && onNavigate('levelup')}
              className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>View Level Journey</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2-Column: Security Controls & Notification Preferences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Security & 2FA Box */}
        <div className="rounded-3xl bg-[#1c2035] p-6 border border-slate-700/60 shadow-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-white">
                  Two-Factor Authentication (2FA)
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                RECOMMENDED
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Require OTP verification for all high-value UPI payouts and crypto conversions to protect your VEs Vault.
            </p>

            <div className="pt-2">
              <label className="flex items-center justify-between p-3.5 rounded-2xl bg-[#131522] border border-slate-700 cursor-pointer hover:bg-[#1a1c2d] transition-colors">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-purple-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">SMS & Authenticator 2FA</span>
                    <span className="text-[10px] text-slate-400">Linked to +91 98765 43210</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                  className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
                />
              </label>
            </div>
          </div>

          <button
            onClick={handleSaveSettings}
            className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-md shadow-purple-500/25 cursor-pointer"
          >
            Update Security Credentials
          </button>
        </div>

        {/* Reward Alerts Preferences */}
        <div className="rounded-3xl bg-[#1c2035] p-6 border border-slate-700/60 shadow-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <Bell className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white">
                Reward Notifications
              </h3>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Choose how you want to be alerted for daily multiplier boosts, sponsor quest drops, and referral payouts.
            </p>

            <div className="space-y-2 pt-1">
              <label className="flex items-center justify-between p-3 rounded-2xl bg-[#131522] border border-slate-700 cursor-pointer hover:bg-[#1a1c2d] transition-colors">
                <div className="flex items-center gap-2.5 text-xs font-bold text-white">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Email Rewards & Quest Alerts</span>
                </div>
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-2xl bg-[#131522] border border-slate-700 cursor-pointer hover:bg-[#1a1c2d] transition-colors">
                <div className="flex items-center gap-2.5 text-xs font-bold text-white">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Daily Streak Expiry Warning (1h before)</span>
                </div>
                <input
                  type="checkbox"
                  checked={streakReminders}
                  onChange={(e) => setStreakReminders(e.target.checked)}
                  className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
                />
              </label>
            </div>
          </div>

          <button
            onClick={handleSaveSettings}
            className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-md shadow-purple-500/25 cursor-pointer"
          >
            Save Notification Preferences
          </button>
        </div>

      </div>

      {/* Connected Partner Accounts Box */}
      <div className="rounded-3xl bg-[#1c2035] p-6 sm:p-7 border border-slate-700/60 shadow-xl">
        <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-4">
          Connected Ecosystem Accounts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: 'Google Account', id: 'alex.mercer@gmail.com', status: 'Connected', isDone: true },
            { name: 'Discord VIP Community', id: '@alex_veloops', status: 'Connected', isDone: true },
            { name: 'Steam Gaming Profile', id: 'Not Connected', status: 'Connect (+100 VEs)', isDone: false },
          ].map((acc, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#141624] border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-white">{acc.name}</span>
                <p className="text-[11px] text-slate-400 mt-0.5">{acc.id}</p>
              </div>
              <button
                onClick={() => alert(`${acc.name} action triggered`)}
                className={`mt-3 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  acc.isDone
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                    : 'bg-purple-600 hover:bg-purple-700 text-white shadow-xs'
                }`}
              >
                {acc.status}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
