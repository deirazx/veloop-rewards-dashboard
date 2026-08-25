import React, { useState } from 'react';
import {
  Crown,
  Lock,
  CheckCircle2,
  Sparkles,
  Zap,
  Gift,
  ShieldCheck,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';

const LevelJourneyTimeline = ({ currentLevel = 4 }) => {
  const [selectedStage, setSelectedStage] = useState(4);

  const stages = [
    {
      level: 1,
      name: 'Beginner',
      xpRequired: '0 XP',
      multiplier: '1.0x',
      reward: 'Welcome Starter Pack (+50 VEs)',
      perks: ['Standard Task Access', 'Standard UPI Withdrawals'],
      status: 'unlocked',
      iconColor: 'from-slate-400 to-slate-600',
    },
    {
      level: 2,
      name: 'Bronze Scout',
      xpRequired: '1,500 XP',
      multiplier: '1.10x',
      reward: 'Daily Lucky Wheel Access',
      perks: ['1.10x Multiplier Boost', 'Daily Check-in Bonus +25 VEs'],
      status: 'unlocked',
      iconColor: 'from-amber-600 to-amber-800',
    },
    {
      level: 3,
      name: 'Silver Pioneer',
      xpRequired: '4,000 XP',
      multiplier: '1.15x',
      reward: '₹250 Amazon Pay Voucher Unlock',
      perks: ['1.15x Multiplier Boost', '12% Referral Commissions'],
      status: 'unlocked',
      iconColor: 'from-slate-300 to-slate-500',
    },
    {
      level: 4,
      name: 'Platinum Elite',
      xpRequired: '8,000 XP',
      multiplier: '1.25x',
      reward: 'Gold Mystery Chest (+500 VEs)',
      perks: ['1.25x Multiplier Boost', 'Instant 60s UPI Settlements', '15% Referral Commissions'],
      status: 'current',
      iconColor: 'from-purple-600 to-indigo-600',
    },
    {
      level: 5,
      name: 'Diamond Master',
      xpRequired: '15,000 XP',
      multiplier: '1.50x',
      reward: '₹2,500 Diamond Mystery Box',
      perks: ['1.50x Multiplier Boost', 'Zero Fee Crypto Swap', 'Dedicated Concierge Support'],
      status: 'locked',
      iconColor: 'from-cyan-500 to-blue-600',
    },
    {
      level: 6,
      name: 'Legend Titan',
      xpRequired: '30,000 XP',
      multiplier: '2.0x',
      reward: 'Exclusive Gold Black Card & VIP Access',
      perks: ['2.0x Double Multiplier', 'Lifetime 20% Referral Commission', 'Exclusive Sponsor Quests'],
      status: 'locked',
      iconColor: 'from-amber-400 to-amber-600',
    },
  ];

  const activeStageDetails = stages.find((s) => s.level === selectedStage) || stages[3];

  return (
    <div className="rounded-3xl p-6 sm:p-7 bg-[#1c2035] border border-slate-700/60 shadow-xl space-y-6 text-white">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                Level Journey Roadmap
              </h2>
              <p className="text-xs text-slate-400">
                Progress from Beginner to Legend to unlock permanent multipliers & rewards.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/80">
            Current: Level {currentLevel} ({stages[currentLevel - 1]?.name})
          </span>
        </div>
      </div>

      {/* Horizontal Timeline Track */}
      <div className="relative pt-4 pb-2 overflow-x-auto">
        <div className="min-w-[700px] px-4">
          
          {/* Connecting Line Track */}
          <div className="relative flex items-center justify-between">
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-slate-800 -translate-y-1/2 rounded-full -z-0" />
            <div
              className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-emerald-400 via-purple-600 to-indigo-600 -translate-y-1/2 rounded-full -z-0 transition-all duration-700"
              style={{ width: `${((currentLevel - 1) / (stages.length - 1)) * 100}%` }}
            />

            {/* Stage Nodes */}
            {stages.map((stage) => {
              const isUnlocked = stage.level < currentLevel;
              const isCurrent = stage.level === currentLevel;
              const isLocked = stage.level > currentLevel;
              const isSelected = stage.level === selectedStage;

              return (
                <button
                  key={stage.level}
                  onClick={() => setSelectedStage(stage.level)}
                  className={`relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none transition-transform ${
                    isSelected ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  {/* Node Circle */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                      isCurrent
                        ? 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white ring-4 ring-purple-500/40 shadow-purple-500/40 animate-subtle-pulse'
                        : isUnlocked
                        ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                        : 'bg-[#141624] text-slate-500 border-2 border-slate-700'
                    }`}
                  >
                    {isUnlocked ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : isCurrent ? (
                      <Crown className="w-5 h-5 text-amber-300 fill-amber-300" />
                    ) : (
                      <Lock className="w-4 h-4 text-slate-500" />
                    )}
                  </div>

                  {/* Level & Title Label */}
                  <div className="mt-3 text-center">
                    <span
                      className={`text-xs font-bold block ${
                        isCurrent
                          ? 'text-purple-300 font-extrabold'
                          : isUnlocked
                          ? 'text-slate-200'
                          : 'text-slate-500'
                      }`}
                    >
                      Lvl {stage.level}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-300 block whitespace-nowrap">
                      {stage.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block font-mono">
                      {stage.xpRequired}
                    </span>
                  </div>

                  {/* Current Active Badge */}
                  {isCurrent && (
                    <span className="absolute -top-3.5 px-2 py-0.2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-[9px] shadow-sm uppercase tracking-wide">
                      YOU ARE HERE
                    </span>
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Selected Stage Detail Card */}
      <div className="p-5 rounded-2xl bg-[#141624] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-purple-600 text-white">
              Level {activeStageDetails.level}: {activeStageDetails.name}
            </span>
            <span className="text-xs font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
              {activeStageDetails.multiplier} Boost
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Requires {activeStageDetails.xpRequired}
            </span>
          </div>

          <p className="text-xs text-slate-300 font-semibold">
            Milestone Reward: <span className="text-purple-400 font-bold">{activeStageDetails.reward}</span>
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {activeStageDetails.perks.map((p, idx) => (
              <span key={idx} className="text-[11px] font-medium text-slate-300 bg-[#1e2238] px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          {activeStageDetails.level <= currentLevel ? (
            <span className="px-4 py-2 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 font-bold text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Stage Unlocked
            </span>
          ) : (
            <span className="px-4 py-2 rounded-xl bg-[#1a1c2f] text-slate-400 border border-slate-700 font-bold text-xs flex items-center gap-1.5">
              <Lock className="w-4 h-4" />
              Unlock at {activeStageDetails.xpRequired}
            </span>
          )}
        </div>
      </div>

    </div>
  );
};

export default LevelJourneyTimeline;
