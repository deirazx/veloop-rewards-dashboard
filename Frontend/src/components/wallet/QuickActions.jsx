import React from 'react';
import {
  ArrowDownLeft,
  History,
  TrendingUp,
  Sparkles,
  Zap,
  Gift,
  QrCode,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const QuickActions = ({ onWithdraw, onViewHistory, onEarnMore, onStakeBoost }) => {
  const actions = [
    {
      id: 'withdraw',
      title: 'Withdraw Funds',
      desc: 'Transfer directly to UPI or bank account',
      icon: ArrowDownLeft,
      badge: 'Instant',
      badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      iconBg: 'bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950',
      borderHover: 'hover:border-amber-400',
      shadowColor: 'hover:shadow-amber-500/10',
      onClick: onWithdraw,
    },
    {
      id: 'history',
      title: 'View History',
      desc: 'Inspect full ledger, orders & conversions',
      icon: History,
      badge: 'Real-time',
      badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
      iconBg: 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white',
      borderHover: 'hover:border-purple-400',
      shadowColor: 'hover:shadow-purple-500/10',
      onClick: onViewHistory,
    },
    {
      id: 'earn',
      title: 'Earn More VEs',
      desc: 'Complete daily tasks, spins & referrals',
      icon: Sparkles,
      badge: '+50% Boost',
      badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
      iconBg: 'bg-gradient-to-tr from-blue-600 to-cyan-500 text-white',
      borderHover: 'hover:border-blue-400',
      shadowColor: 'hover:shadow-blue-500/10',
      onClick: onEarnMore,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-heading font-extrabold text-lg text-slate-900 flex items-center gap-2">
          <Zap className="w-4 h-4 text-purple-600" />
          Quick Actions
        </h2>
        <span className="text-xs text-slate-400">Fintech Protocol v2.4</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <button
              key={act.id}
              onClick={act.onClick}
              className={`p-5 rounded-3xl glass-panel glass-card-hover border border-white/80 shadow-md ${act.borderHover} ${act.shadowColor} text-left flex flex-col justify-between group cursor-pointer transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4 w-full">
                <div className={`p-3 rounded-2xl ${act.iconBg} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${act.badgeColor}`}>
                  {act.badge}
                </span>
              </div>

              <div className="w-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-purple-700 transition-colors">
                    {act.title}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-purple-600 transition-all" />
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {act.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
