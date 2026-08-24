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
      badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
    {
      id: 'levelup',
      label: 'Level Up & Earn',
      icon: Trophy,
      badge: 'Lvl 4',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300 font-bold',
    },
    {
      id: 'referrals',
      label: 'Referrals',
      icon: Users,
      badge: '+15% VEs',
      badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
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
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 transition-all duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } flex flex-col glass-panel border-r border-white/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)]`}
      >
        {/* Brand Logo & Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-slate-100/80">
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => handleNavClick('dashboard')}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-400 p-[2px] shadow-lg shadow-purple-500/20 transition-transform group-hover:scale-105 duration-300">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-600 fill-purple-100 transition-transform group-hover:rotate-12 duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 via-purple-950 to-slate-800 bg-clip-text text-transparent">
                  Veloops
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm shadow-purple-400/30">
                  REWARDS
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Loyalty & Ecosystem
              </p>
            </div>
          </div>

          {/* Close button for Mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100/80 transition-colors lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 px-4 py-6 overflow-y-auto space-y-1.5">
          <div className="px-3 pb-2">
            <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
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
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-medium transition-all duration-200 group relative ${isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80 hover:shadow-sm'
                  }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-2 rounded-xl transition-colors ${isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100/80 text-slate-500 group-hover:bg-purple-50 group-hover:text-purple-600'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="tracking-tight">{item.label}</span>
                </div>

                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${isActive
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
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-purple-500/5 border border-amber-200/60 transition-all hover:border-amber-300">
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                  <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                  Daily Boost
                </span>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-md">
                  +250 VEs
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed mb-2.5">
                Complete 2 daily actions to claim today's bonus reward.
              </p>
              <div className="w-full bg-amber-200/50 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-purple-500 h-1.5 rounded-full w-2/3" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: VIP Tier & Logout */}
        <div className="p-4 border-t border-slate-100/80 space-y-3">
          {/* VIP Status Card */}
          <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/70 shadow-sm backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-amber-500/10 rounded-full -mr-8 -mt-8 pointer-events-none" />
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                  <Crown className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    Gold Tier
                    <ShieldCheck className="w-3 h-3 text-purple-600" />
                  </h4>
                  <p className="text-[10px] text-slate-500">1.25x VEs Multiplier</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-purple-600">82%</span>
            </div>

            {/* Tier progress bar */}
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mb-2">
              <div className="bg-gradient-to-r from-amber-400 via-purple-500 to-indigo-600 h-1.5 rounded-full w-[82%]" />
            </div>

            <p className="text-[10px] text-slate-400 flex items-center justify-between">
              <span>Next: Diamond VIP</span>
              <span className="font-semibold text-slate-600">1,800 VEs to go</span>
            </p>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => alert('Logged out successfully')}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50/80 border border-transparent hover:border-rose-200 transition-all duration-200 group"
          >
            <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Sign Out of Veloops</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
