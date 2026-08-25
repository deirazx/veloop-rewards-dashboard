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
      border: 'border-purple-200/80',
      iconColor: 'bg-purple-100 text-purple-600',
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
      border: 'border-amber-200/80',
      iconColor: 'bg-amber-100 text-amber-600',
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
      border: 'border-emerald-200/80',
      iconColor: 'bg-emerald-100 text-emerald-600',
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
      border: 'border-blue-200/80',
      iconColor: 'bg-blue-100 text-blue-600',
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
      iconBg: 'bg-purple-100 text-purple-600',
    },
    {
      id: 2,
      title: 'Referral Commission (David K.)',
      type: 'Referral',
      amount: '+320 VEs',
      date: 'Yesterday, 04:15 PM',
      status: 'Completed',
      icon: Users,
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: 3,
      title: 'Redeemed Amazon $25 Gift Card',
      type: 'Redeemed',
      amount: '-2,500 VEs',
      date: 'Aug 22, 2026',
      status: 'Processed',
      icon: ArrowDownLeft,
      iconBg: 'bg-rose-100 text-rose-600',
    },
    {
      id: 4,
      title: 'Quest: Complete 5 Social Tasks',
      type: 'Quest',
      amount: '+500 VEs',
      date: 'Aug 20, 2026',
      status: 'Completed',
      icon: Target,
      iconBg: 'bg-amber-100 text-amber-600',
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      
      {/* Welcome Banner Card */}
      <div className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-8 border border-white shadow-xl bg-gradient-to-r from-white/90 via-purple-50/40 to-amber-50/40">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/15 via-amber-400/15 to-transparent rounded-full blur-2xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-purple-800 text-xs font-semibold">
              <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>Gold VIP Member Tier</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Welcome Back, <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Alex!</span> 👋
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              You've earned <span className="font-semibold text-slate-900">+1,420 VEs</span> this week. Keep your 5-day streak alive to unlock the 2.0x weekend multiplier!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate && onNavigate('wallet')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-purple-500/25 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Claim Rewards</span>
            </button>
            <button
              onClick={() => onNavigate && onNavigate('referrals')}
              className="px-5 py-3 rounded-2xl bg-white/90 hover:bg-white text-slate-700 font-bold text-sm border border-slate-200/90 shadow-xs hover:shadow-md flex items-center gap-2 transition-all"
            >
              <Users className="w-4 h-4 text-purple-600" />
              <span>Invite Friends</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Key Stat Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-5 rounded-3xl glass-panel glass-card-hover border ${item.border} flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {item.title}
                </span>
                <div className={`p-2.5 rounded-2xl ${item.iconColor} shadow-xs`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">
                    {item.unit}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{item.usdValue}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                {item.isAction ? (
                  <button className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1">
                    <span>Claim 3,420 VEs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : item.isProgress ? (
                  <button
                    onClick={() => onNavigate && onNavigate('levelup')}
                    className="w-full text-left group/prog"
                  >
                    <div className="flex justify-between text-[11px] font-semibold text-slate-500 mb-1 group-hover/prog:text-purple-700">
                      <span>Diamond Level</span>
                      <span>82%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full w-[82%]" />
                    </div>
                  </button>
                ) : (
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.change}</span>
                    <span className="font-normal text-slate-400">vs last week</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Active Quests & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Left 2 Cols: Activity Feed */}
        <div className="lg:col-span-2 glass-panel rounded-3xl p-6 sm:p-7 border border-white/80 shadow-md">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="font-heading font-extrabold text-lg text-slate-900">
                Recent Rewards Activity
              </h3>
              <p className="text-xs text-slate-500">Live incoming & redeemed VEs transactions</p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('wallet')}
              className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1"
            >
              <span>View Full Ledger</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100/80 mt-2">
            {recentTransactions.map((tx) => {
              const Icon = tx.icon;
              return (
                <div
                  key={tx.id}
                  className="py-3.5 flex items-center justify-between gap-4 hover:bg-white/50 rounded-2xl px-2 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-2xl shrink-0 ${tx.iconBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                        {tx.title}
                      </h4>
                      <p className="text-[11px] text-slate-500">{tx.date}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-xs sm:text-sm font-extrabold font-heading ${
                        tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      {tx.amount}
                    </span>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 font-medium mt-0.5">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
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
          <div className="glass-panel rounded-3xl p-6 border border-white/80 shadow-md bg-gradient-to-br from-purple-600/5 via-white/80 to-indigo-600/5">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-xl bg-purple-100 text-purple-600">
                <Gift className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Your Referral Link
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Earn <span className="font-bold text-purple-700">15% lifetime commission</span> on all VEs earned by your invited friends.
            </p>

            <div className="flex items-center gap-2 p-2 rounded-2xl bg-white border border-slate-200/80 shadow-inner mb-4">
              <input
                type="text"
                readOnly
                value="https://veloops.io/r/alex99"
                className="w-full bg-transparent text-xs font-mono text-slate-700 outline-none px-2"
              />
              <button
                onClick={() => alert('Referral link copied to clipboard!')}
                className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1 transition-all shadow-xs"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span>Invited: <strong className="text-slate-800">28 Users</strong></span>
              <span>Total: <strong className="text-purple-700">8,650 VEs</strong></span>
            </div>
          </div>

          {/* Daily Streak Card */}
          <div className="glass-panel rounded-3xl p-6 border border-amber-200/60 shadow-md bg-gradient-to-br from-amber-500/10 to-orange-500/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-600">
                  <Flame className="w-4 h-4 fill-amber-400" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  Daily Streak Reward
                </h4>
              </div>
              <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                5/7 Days
              </span>
            </div>

            <p className="text-xs text-slate-600 mb-4">
              Check in for 2 more consecutive days to unlock the <strong className="text-amber-800">Mystery Gold Chest (+1,000 VEs)</strong>!
            </p>

            <div className="grid grid-cols-7 gap-1.5 text-center mb-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div
                  key={i}
                  className={`py-2 rounded-xl text-[10px] font-bold ${
                    i < 5
                      ? 'bg-amber-400 text-slate-900 shadow-xs'
                      : i === 5
                      ? 'bg-purple-100 text-purple-700 border border-purple-300 animate-pulse'
                      : 'bg-slate-100 text-slate-400'
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
