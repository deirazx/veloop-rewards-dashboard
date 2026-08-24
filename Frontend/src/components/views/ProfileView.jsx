import React from 'react';
import { User, Shield, Key, Bell, Crown, CheckCircle2, Sparkles, Zap, Award } from 'lucide-react';

const ProfileView = ({ user }) => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
          User Profile & Settings
        </h1>
        <p className="text-sm text-slate-500">
          Manage your Veloops account, security credentials, and rewards tier status.
        </p>
      </div>

      {/* User Card */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/90 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative">
          <img
            src={
              user?.avatar ||
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80'
            }
            alt="Profile Avatar"
            className="w-24 h-24 rounded-3xl object-cover ring-4 ring-purple-500/20 shadow-md"
          />
          <span className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-amber-400 text-slate-950 shadow-md">
            <Crown className="w-4 h-4" />
          </span>
        </div>

        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900">
              {user?.name || 'Alex Mercer'}
            </h2>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold w-fit mx-auto sm:mx-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Gold VIP
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-500">
            alex.mercer@veloops.io • Member since January 2026
          </p>

          <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
            <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
              Multiplier: <strong className="text-purple-700">1.25x</strong>
            </span>
            <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
              Total Lifetime Earned: <strong className="text-amber-600">98,400 VEs</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Security & Preferences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="glass-panel rounded-3xl p-6 border border-white/80 shadow-md space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600" />
            <h3 className="font-heading font-bold text-slate-900">Security & 2FA</h3>
          </div>
          <p className="text-xs text-slate-500">
            Two-Factor Authentication is enabled for instant withdrawals and redemptions.
          </p>
          <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-purple-600 transition-colors">
            Update Security Keys
          </button>
        </div>

        <div className="glass-panel rounded-3xl p-6 border border-white/80 shadow-md space-y-4">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-amber-600" />
            <h3 className="font-heading font-bold text-slate-900">Reward Notifications</h3>
          </div>
          <p className="text-xs text-slate-500">
            Receive email alerts for weekly multiplier boosts and quest releases.
          </p>
          <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors">
            Configure Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
