import React from 'react';
import {
  LayoutDashboard,
  Wallet,
  Users,
  User,
  LogOut,
  Sparkles,
  ChevronRight,
  X,
  Crown,
  Trophy,
  Flame,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

const Sidebar = ({ currentTab, setCurrentTab, isOpen, setIsOpen }) => {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'wallet',
      label: 'Wallet & Vault',
      icon: Wallet,
      badge: 'Active',
      badgeColor: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40',
    },
    {
      id: 'levelup',
      label: 'Level Up & Earn',
      icon: Trophy,
      badge: 'Lvl 4',
      badgeColor: 'bg-amber-950/60 text-amber-300 border-amber-500/40 font-bold',
    },
    {
      id: 'referrals',
      label: 'Referrals',
      icon: Users,
      badge: '+15% VEs',
      badgeColor: 'bg-purple-950/60 text-purple-300 border-purple-500/40',
    },
    {
      id: 'profile',
      label: 'My Profile',
      icon: User,
      badge: null,
    },
  ];

  const handleNavClick = (id) => {
    setCurrentTab(id);
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Container - Dark Fintech */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 transition-all duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col bg-[#181c2f] border-r border-slate-800 shadow-2xl`}
      >
        {/* Brand Logo & Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-slate-800">
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => handleNavClick('dashboard')}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-400 p-[2px] shadow-lg shadow-purple-500/20 transition-transform group-hover:scale-105 duration-300">
              <div className="w-full h-full bg-[#161827] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-400 fill-purple-400/20 transition-transform group-hover:rotate-12 duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
                  Veloops
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm shadow-purple-400/30">
                  REWARDS
                </span>
              </div>
              <p className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">
                Fintech & Gamified Loyalty
              </p>
            </div>
          </div>

          {/* Close button for Mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors lg:hidden cursor-pointer"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 px-4 py-6 overflow-y-auto space-y-1.5">
          <div className="px-3 pb-2">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              Main Menu
            </span>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-medium transition-all duration-200 group relative cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-[#20253f]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-2 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[#141624] text-slate-400 group-hover:bg-purple-900/40 group-hover:text-purple-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="tracking-tight">{item.label}</span>
                </div>

                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        isActive
                          ? 'bg-white/20 text-white border-white/30'
                          : item.badgeColor
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <ChevronRight className="w-4 h-4 text-white/80 transition-transform group-hover:translate-x-0.5" />
                  )}
                </div>
              </button>
            );
          })}

          {/* Quick Bonus / Quest Pill */}
          <div className="pt-4 px-1">
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-[#1c1a2d] to-purple-500/10 border border-amber-500/30 transition-all hover:border-amber-500/50">
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Daily Boost
                </span>
                <span className="text-[11px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-1.5 py-0.5 rounded-md">
                  +250 VEs
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed mb-2.5">
                Complete 2 daily actions to claim today's bonus reward.
              </p>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-purple-500 h-1.5 rounded-full w-2/3" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: VIP Tier & Logout */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          {/* VIP Status Card */}
          <div className="p-3.5 rounded-2xl bg-[#141624] border border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                  <Crown className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1">
                    Gold Tier
                    <ShieldCheck className="w-3 h-3 text-purple-400" />
                  </h4>
                  <p className="text-[10px] text-slate-400">1.25x VEs Multiplier</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-purple-400">82%</span>
            </div>

            {/* Tier progress bar */}
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mb-2">
              <div className="bg-gradient-to-r from-amber-400 via-purple-500 to-indigo-500 h-1.5 rounded-full w-[82%]" />
            </div>

            <p className="text-[10px] text-slate-400 flex items-center justify-between">
              <span>Next: Diamond VIP</span>
              <span className="font-semibold text-slate-200">1,800 VEs to go</span>
            </p>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => alert('Signed out of Veloops Rewards')}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-transparent hover:border-rose-800/40 transition-all duration-200 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out of Veloops</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
