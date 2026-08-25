import React, { useState } from 'react';
import {
  Crown,
  Sparkles,
  Zap,
  Gift,
  Flame,
  ShieldCheck
} from 'lucide-react';

const CurrentLevelCard = ({
  currentLevel = 4,
  levelTitle = 'Platinum Vanguard',
  currentXp = 6420,
  targetXp = 8000,
  multiplier = '1.25x',
  nextMultiplier = '1.50x',
  onClaimLevelBonus
}) => {
  const [claimedBonus, setClaimedBonus] = useState(false);
  const xpPercent = Math.min(100, Math.round((currentXp / targetXp) * 100));
  const remainingXp = targetXp - currentXp;

  const currentPerks = [
    '1.25x VEs Multiplier on all tasks',
    'Instant 60-second UPI payouts',
    'Exclusive Weekly Gold Quests',
  ];

  const handleClaim = () => {
    setClaimedBonus(true);
    if (onClaimLevelBonus) onClaimLevelBonus(250);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#1c2035] p-6 sm:p-8 border border-slate-700/60 shadow-2xl text-white group">
      {/* Decorative dynamic ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/15 via-amber-400/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mb-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#6366f115_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative z-10 space-y-6">
        
        {/* Top Header & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
              <Crown className="w-3.5 h-3.5 fill-slate-950" />
              VIP TIER STATUS
            </span>
            <span className="text-xs font-bold text-purple-300 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800/80 shadow-xs">
              Top 8% Global Earner
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-950/60 px-3.5 py-1 rounded-full border border-amber-500/40 shadow-xs">
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-pulse" />
            <span>Active Earning Streak: 5 Days</span>
          </div>
        </div>

        {/* Hero Level & XP Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Level Title & XP Numbers */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-400 via-purple-600 to-indigo-600 p-[2px] shadow-lg shadow-purple-500/25 shrink-0">
                <div className="w-full h-full bg-[#161827] rounded-[14px] flex flex-col items-center justify-center">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest leading-none">LVL</span>
                  <span className="text-2xl sm:text-3xl font-black font-heading text-white leading-none mt-0.5">{currentLevel}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight text-white">
                    {levelTitle}
                  </h1>
                  <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-lg bg-purple-600 text-white shadow-xs">
                    {multiplier} Multiplier
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                  Earn <strong className="text-purple-400 font-bold">{remainingXp.toLocaleString()} XP</strong> more to ascend to <span className="text-amber-300 font-bold">Level 5: Diamond Master</span>.
                </p>
              </div>
            </div>

            {/* Glowing Interactive XP Progress Bar */}
            <div className="space-y-2 pt-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-extrabold text-purple-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Experience Points (XP)
                </span>
                <span className="font-mono font-extrabold text-slate-200">
                  <strong className="text-purple-400 text-sm">{currentXp.toLocaleString()}</strong> / {targetXp.toLocaleString()} XP
                  <span className="text-slate-400 font-bold ml-1.5">({xpPercent}%)</span>
                </span>
              </div>

              <div className="relative w-full bg-[#131522] rounded-2xl h-4 p-0.5 overflow-hidden border border-slate-800 shadow-inner">
                <div
                  style={{ width: `${xpPercent}%` }}
                  className="h-full rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 transition-all duration-1000 relative shadow-md shadow-purple-500/30"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-xl" />
                </div>
              </div>
            </div>

          </div>

          {/* Level 5 Unlock Incentive Box */}
          <div className="lg:col-span-4 p-5 rounded-2xl bg-[#141624] border border-purple-500/30 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Next Level Unlock
              </span>
              <span className="text-xs font-bold text-white bg-purple-600 px-2 py-0.5 rounded shadow-xs">
                Level 5
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Upgrade to <strong className="text-white">{nextMultiplier} Earning Boost</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Unlock <strong className="text-white">₹2,500 Diamond Mystery Box</strong></span>
              </div>
            </div>

            <button
              onClick={handleClaim}
              disabled={claimedBonus}
              className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer ${
                claimedBonus
                  ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 cursor-default shadow-none'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-purple-500/25 active:scale-95'
              }`}
            >
              {claimedBonus ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Level 4 Perks Active</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Claim Daily Milestone (+250 XP)</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Active Perks Chips */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-xs font-bold text-slate-300 mr-1">Active Level 4 Perks:</span>
          {currentPerks.map((perk, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#141624] border border-slate-800 text-xs font-semibold text-slate-300 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {perk}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CurrentLevelCard;
