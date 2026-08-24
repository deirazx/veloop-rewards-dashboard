import React, { useState } from 'react';
import {
  Sparkles,
  ArrowLeft,
  Home,
  LifeBuoy,
  Compass,
  Wallet,
  Trophy,
  Users,
  Gift,
  HelpCircle,
  Coins,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const NotFoundView = ({ onNavigate, onClaimEasterEgg }) => {
  const [claimedEasterEgg, setClaimedEasterEgg] = useState(false);

  const handleClaim = () => {
    if (!claimedEasterEgg) {
      setClaimedEasterEgg(true);
      if (onClaimEasterEgg) onClaimEasterEgg(25);
    }
  };

  const quickLinks = [
    { id: 'dashboard', label: 'Main Dashboard', icon: Home, desc: 'Overview & daily streak' },
    { id: 'wallet', label: 'Wallet & Vault', icon: Wallet, desc: 'Withdraw to UPI & balances' },
    { id: 'levelup', label: 'Level Up & Earn', icon: Trophy, desc: 'XP quests & level journey' },
    { id: 'referrals', label: 'Referral Hub', icon: Users, desc: 'Earn 15% lifetime bonus' },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-4 relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
      
      {/* Decorative ambient background spheres */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Glassmorphic 404 Container */}
      <div className="max-w-2xl w-full text-center space-y-8 glass-panel rounded-3xl p-8 sm:p-12 border border-white/90 shadow-2xl relative overflow-hidden">
        
        {/* Subtle decorative background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#6366f112_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        {/* 404 Floating Badge Motif */}
        <div className="relative inline-block z-10">
          <div className="relative flex items-center justify-center mx-auto mb-2">
            {/* Animated floating compass & coin */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-400 p-[2.5px] shadow-2xl shadow-purple-500/25 animate-subtle-pulse">
              <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center relative">
                <Compass className="w-12 h-12 text-purple-600 transition-transform duration-700 hover:rotate-90" />
                <span className="absolute -top-2 -right-2 p-1.5 rounded-xl bg-amber-400 text-slate-950 shadow-md">
                  <Coins className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          <div className="text-6xl sm:text-8xl font-black font-heading tracking-tight bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent drop-shadow-sm select-none">
            404
          </div>
        </div>

        {/* Copy Text */}
        <div className="space-y-3 relative z-10 max-w-lg mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-extrabold uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            LOST IN REWARDSPACE
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight leading-snug">
            Oops! Looks like you took a wrong turn while chasing rewards.
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The quest or page you're searching for has moved, expired, or hasn't unlocked yet. Don't worry—your <strong className="text-slate-800">VEs Vault balance</strong> and <strong className="text-amber-600">VIP Streak</strong> are completely safe!
          </p>
        </div>

        {/* Easter Egg Reward Box */}
        <div className="relative z-10 p-4 rounded-2xl bg-gradient-to-r from-purple-50/90 via-amber-50/50 to-indigo-50/90 border border-purple-200/80 max-w-md mx-auto flex items-center justify-between gap-3 text-left shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30 shrink-0">
              <Gift className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Found a Secret Stash!</h4>
              <p className="text-[11px] text-slate-600">Claim 25 bonus VEs for exploring off-trail.</p>
            </div>
          </div>

          <button
            onClick={handleClaim}
            disabled={claimedEasterEgg}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              claimedEasterEgg
                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200 cursor-default flex items-center gap-1'
                : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/20 active:scale-95'
            }`}
          >
            {claimedEasterEgg ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>+25 VEs Claimed</span>
              </>
            ) : (
              <span>Claim +25 VEs</span>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <button
            onClick={() => onNavigate && onNavigate('dashboard')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <a
            href="mailto:support@veloops.io"
            onClick={(e) => {
              e.preventDefault();
              alert('Connecting you with Veloops 24/7 Concierge Support at support@veloops.io');
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-slate-700 hover:text-purple-700 font-bold text-sm border border-slate-200/90 shadow-xs hover:shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <LifeBuoy className="w-4 h-4 text-purple-600" />
            <span>Contact Support</span>
          </a>
        </div>

        {/* Quick Navigation Help Links */}
        <div className="relative z-10 pt-6 border-t border-slate-100 text-left">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mb-3">
            Or jump directly to active areas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate && onNavigate(link.id)}
                  className="p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/60 hover:border-purple-300 hover:shadow-sm flex items-center justify-between group transition-all text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-purple-700 block">
                        {link.label}
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        {link.desc}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-purple-600 transition-all" />
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};

export default NotFoundView;
