import React from 'react';
import {
  Coins,
  TrendingUp,
  Gift,
  Users,
  Sparkles,
  ArrowUpRight,
  ArrowDownLeft,
  Flame,
  Crown,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  Copy,
  Zap,
  Target
} from 'lucide-react';
import UpcomingFeatures from '../upcoming/UpcomingFeatures';

const DashboardView = ({ onNavigate, balance = 24850 }) => {
  const stats = [
    {
      title: 'Total Balance',
      value: balance.toLocaleString(),
      unit: 'VEs',
      usdValue: `$${(balance * 0.01).toFixed(2)} USD`,
      change: '+14.2%',
      isPositive: true,
      icon: Coins,
      gradient: 'from-purple-500/10 to-indigo-500/10',
      border: 'border-purple-500/30',
      iconColor: 'bg-purple-500/20 text-purple-300',
    },
    {
      title: 'Pending Claimable',
      value: '3,420',
      unit: 'VEs',
      usdValue: '$34.20 USD',
      change: 'Ready to Claim',
      isAction: true,
      icon: Gift,
      gradient: 'from-amber-500/10 to-yellow-500/10',
      border: 'border-amber-500/30',
      iconColor: 'bg-amber-500/20 text-amber-300',
    },
    {
      title: 'Referral Rewards',
      value: '8,650',
      unit: 'VEs',
      usdValue: '28 Active Friends',
      change: '+8.4%',
      isPositive: true,
      icon: Users,
      gradient: 'from-emerald-500/10 to-teal-500/10',
      border: 'border-emerald-500/30',
      iconColor: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      title: 'VIP Multiplier',
      value: '1.25x',
      unit: 'BOOST',
      usdValue: 'Gold Elite Level',
      change: '82% to 1.50x',
      isProgress: true,
      icon: Zap,
      gradient: 'from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-500/30',
      iconColor: 'bg-blue-500/20 text-blue-300',
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      title: 'Daily Check-in + Streak Bonus',
      type: 'Earned',
      amount: '+150 VEs',
      date: 'Today, 09:30 AM',
      status: 'Completed',
      icon: Sparkles,
      iconBg: 'bg-purple-500/20 text-purple-300',
    },
    {
      id: 2,
      title: 'Referral Commission (David K.)',
      type: 'Referral',
      amount: '+320 VEs',
      date: 'Yesterday, 04:15 PM',
      status: 'Completed',
      icon: Users,
      iconBg: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      id: 3,
      title: 'Redeemed Amazon ₹2,500 Gift Voucher',
      type: 'Redeemed',
      amount: '-2,500 VEs',
      date: 'Aug 22, 2026',
      status: 'Processed',
      icon: ArrowDownLeft,
      iconBg: 'bg-rose-500/20 text-rose-300',
    },
    {
      id: 4,
      title: 'Quest: Complete 5 Social Tasks',
      type: 'Quest',
      amount: '+500 VEs',
      date: 'Aug 20, 2026',
      status: 'Completed',
      icon: Target,
      iconBg: 'bg-amber-500/20 text-amber-300',
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      
      {/* 1. Welcome Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-[#1c2035] p-6 sm:p-8 border border-slate-700/60 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/15 via-amber-400/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold">
              <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Gold VIP Member Tier</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-tight">
              Welcome Back, <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">Alex!</span> 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              You've earned <span className="font-bold text-amber-400">+1,420 VEs</span> this week. Keep your 5-day streak alive to unlock the 2.0x weekend multiplier!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate && onNavigate('wallet')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-purple-500/25 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Claim Rewards</span>
            </button>
            <button
              onClick={() => onNavigate && onNavigate('referrals')}
              className="px-5 py-3 rounded-2xl bg-[#232742] hover:bg-[#2c3154] text-slate-200 font-bold text-sm border border-slate-700/80 shadow-xs hover:shadow-md flex items-center gap-2 transition-all cursor-pointer"
            >
              <Users className="w-4 h-4 text-purple-400" />
              <span>Invite Friends</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. 4 Key Stat Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-5 rounded-3xl bg-[#1c2035] border ${item.border} flex flex-col justify-between shadow-xl hover:border-purple-400/40 transition-all hover:-translate-y-1 duration-200`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {item.title}
                </span>
                <div className={`p-2.5 rounded-2xl ${item.iconColor} shadow-xs`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-bold text-purple-300 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-800/60">
                    {item.unit}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{item.usdValue}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                {item.isAction ? (
                  <button
                    onClick={() => onNavigate && onNavigate('wallet')}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Claim 3,420 VEs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : item.isProgress ? (
                  <button
                    onClick={() => onNavigate && onNavigate('levelup')}
                    className="w-full text-left group/prog cursor-pointer"
                  >
                    <div className="flex justify-between text-[11px] font-semibold text-slate-400 mb-1 group-hover/prog:text-purple-300">
                      <span>Diamond Level</span>
                      <span>82%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 rounded-full w-[82%]" />
                    </div>
                  </button>
                ) : (
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.change}</span>
                    <span className="font-normal text-slate-500">vs last week</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. TASK 10 CENTERPIECE: Interactive Upcoming Features (7 Cards) */}
      <UpcomingFeatures />

      {/* 4. Activity & Streaks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
        
        {/* Left 2 Cols: Activity Feed */}
        <div className="lg:col-span-2 rounded-3xl bg-[#1c2035] p-6 sm:p-7 border border-slate-700/60 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white">
                Recent Rewards Activity
              </h3>
              <p className="text-xs text-slate-400">Live incoming & redeemed VEs transactions</p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('wallet')}
              className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer"
            >
              <span>View Full Ledger</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-800/80 mt-2">
            {recentTransactions.map((tx) => {
              const Icon = tx.icon;
              return (
                <div
                  key={tx.id}
                  className="py-3.5 flex items-center justify-between gap-4 hover:bg-[#232742]/50 rounded-2xl px-2 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-2xl shrink-0 ${tx.iconBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-200">
                        {tx.title}
                      </h4>
                      <p className="text-[11px] text-slate-500">{tx.date}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-xs sm:text-sm font-extrabold font-heading ${
                        tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {tx.amount}
                    </span>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 font-medium mt-0.5">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>{tx.status}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 1 Col: Quick Referral & Daily Boost Card */}
        <div className="space-y-6">
          {/* 1-Click Referral Card */}
          <div className="rounded-3xl bg-[#1c2035] p-6 border border-slate-700/60 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
                <Gift className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-white text-base">
                Your Referral Link
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Earn <span className="font-bold text-purple-400">15% lifetime commission</span> on all VEs earned by your invited friends.
            </p>

            <div className="flex items-center gap-2 p-2 rounded-2xl bg-[#131522] border border-slate-800 shadow-inner mb-4">
              <input
                type="text"
                readOnly
                value="https://veloops.io/r/alex99"
                className="w-full bg-transparent text-xs font-mono text-slate-300 outline-none px-2"
              />
              <button
                onClick={() => alert('Referral link copied to clipboard!')}
                className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1 transition-all shadow-xs cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span>Invited: <strong className="text-slate-200">28 Users</strong></span>
              <span>Total: <strong className="text-purple-400">8,650 VEs</strong></span>
            </div>
          </div>

          {/* Daily Streak Card */}
          <div className="rounded-3xl bg-[#1c2035] p-6 border border-amber-500/30 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                  <Flame className="w-4 h-4 fill-amber-400" />
                </div>
                <h4 className="font-heading font-bold text-white text-sm">
                  Daily Streak Reward
                </h4>
              </div>
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/30">
                5/7 Days
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Check in for 2 more consecutive days to unlock the <strong className="text-amber-300">Mystery Gold Chest (+1,000 VEs)</strong>!
            </p>

            <div className="grid grid-cols-7 gap-1.5 text-center mb-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div
                  key={i}
                  className={`py-2 rounded-xl text-[10px] font-bold ${
                    i < 5
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : i === 5
                      ? 'bg-purple-900/60 text-purple-300 border border-purple-500/50 animate-pulse'
                      : 'bg-slate-800/80 text-slate-500'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardView;
