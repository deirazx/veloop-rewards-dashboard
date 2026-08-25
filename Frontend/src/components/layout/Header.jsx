import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  Bell,
  Coins,
  Search,
  Sparkles,
  ChevronDown,
  Gift,
  ArrowUpRight,
  Flame,
  CheckCircle2,
  Settings,
  HelpCircle,
  LogOut,
  ExternalLink,
  Zap,
  User,
  Shield,
  CreditCard
} from 'lucide-react';

const Header = ({ onOpenMobileMenu, balance = 24850, user, onNavigate }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [claimedDaily, setClaimedDaily] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(balance);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClaimBonus = () => {
    if (!claimedDaily) {
      setCurrentBalance((prev) => prev + 50);
      setClaimedDaily(true);
    }
  };

  const notifications = [
    {
      id: 1,
      title: 'Referral Reward Credited',
      desc: 'Marcus signed up with your link. +250 VEs received!',
      time: '10m ago',
      unread: true,
      icon: Gift,
      iconColor: 'bg-purple-500/20 text-purple-300',
    },
    {
      id: 2,
      title: 'Tier Multiplier Active',
      desc: 'Your Gold Tier 1.25x boost was applied to today\'s check-in.',
      time: '2h ago',
      unread: true,
      icon: Zap,
      iconColor: 'bg-amber-500/20 text-amber-300',
    },
    {
      id: 3,
      title: 'Weekly Leaderboard',
      desc: 'You ranked #4 in the Veloop weekly rewards sprint!',
      time: '1d ago',
      unread: false,
      icon: Sparkles,
      iconColor: 'bg-indigo-500/20 text-indigo-300',
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#181c2f]/95 backdrop-blur-xl border-b border-slate-800 shadow-md transition-all">
      <div className="px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Left Side: Mobile Menu Button & Search */}
        <div className="flex items-center gap-3 lg:gap-6 flex-1 max-w-xl">
          {/* Mobile Hamburger Button */}
          <button
            onClick={onOpenMobileMenu}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 lg:hidden border border-slate-700 shadow-xs cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search Bar */}
          <div className="relative w-full max-w-md hidden sm:block">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search rewards, upcoming features, quests..."
              className="w-full pl-9 pr-14 py-2 bg-[#131522] border border-slate-700/80 hover:border-slate-600 focus:border-purple-500 rounded-2xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-400 bg-slate-800 border border-slate-700 rounded">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right Side: Balance Pill, Streak, Notifications, Profile */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          
          {/* Daily Streak Indicator */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-xs">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span>5d Streak</span>
          </div>

          {/* TOTAL VEs BALANCE CHIP - High Polish Dark Fintech */}
          <div className="flex items-center gap-1 p-1 pl-3 sm:pl-3.5 rounded-2xl bg-[#131522] border border-purple-500/30 shadow-md hover:border-purple-500/50 transition-all group">
            <div className="flex items-center gap-2 mr-1">
              <div className="relative flex items-center justify-center w-7 h-7 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 shadow-xs">
                <Coins className="w-4 h-4" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-purple-500 rounded-full border border-[#161827]" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-xs sm:text-sm font-black text-white font-heading tracking-tight">
                    {currentBalance.toLocaleString()}
                  </span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-purple-300 bg-purple-950/80 px-1.5 py-0.2 rounded-md border border-purple-800/60">
                    VEs
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-semibold hidden sm:block">
                  ≈ ${(currentBalance * 0.01).toFixed(2)} USD
                </p>
              </div>
            </div>

            {/* Quick Claim Action Button */}
            <button
              onClick={handleClaimBonus}
              disabled={claimedDaily}
              className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                claimedDaily
                  ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 cursor-default'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-sm shadow-purple-500/25 active:scale-95'
              }`}
              title={claimedDaily ? 'Daily bonus collected!' : 'Claim +50 VEs Daily Bonus'}
            >
              {claimedDaily ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Claimed</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>+50</span>
                </>
              )}
            </button>
          </div>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={`relative p-2.5 rounded-2xl transition-all cursor-pointer ${
                showNotifications
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                  : 'bg-[#131522] hover:bg-[#1f2338] text-slate-300 hover:text-white border border-slate-700 shadow-xs'
              }`}
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              {unreadCount > 0 && !showNotifications && (
                <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 ring-2 ring-[#181c2f]"></span>
                </span>
              )}
            </button>

            {/* Notifications Menu Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-3xl bg-[#1c2035] border border-slate-700 shadow-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading font-extrabold text-sm text-white">Notifications</h4>
                    {unreadCount > 0 && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 bg-purple-950/80 text-purple-300 border border-purple-800/80 rounded-full">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  <button className="text-[11px] font-bold text-purple-400 hover:text-purple-300 cursor-pointer">
                    Mark all read
                  </button>
                </div>

                <div className="divide-y divide-slate-800/80 max-h-72 overflow-y-auto mt-1">
                  {notifications.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className={`py-3 px-2 flex gap-3 items-start transition-colors rounded-2xl hover:bg-[#232742] ${
                          item.unread ? 'bg-[#232742]/50' : ''
                        }`}
                      >
                        <div className={`p-2.5 rounded-2xl shrink-0 ${item.iconColor} shadow-xs`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-white leading-tight">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">
                            {item.desc}
                          </p>
                          <span className="text-[10px] font-semibold text-slate-500 mt-1 block">
                            {item.time}
                          </span>
                        </div>
                        {item.unread && (
                          <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2.5 border-t border-slate-800 text-center">
                  <button
                    onClick={() => {
                      setShowNotifications(false);
                      if (onNavigate) onNavigate('wallet');
                    }}
                    className="text-xs font-bold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 cursor-pointer"
                  >
                    View Full Rewards Activity
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Pill & Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className={`flex items-center gap-2.5 p-1 sm:p-1.5 sm:pr-3 rounded-2xl transition-all cursor-pointer ${
                showProfileMenu
                  ? 'bg-purple-950/60 border border-purple-500 shadow-md ring-2 ring-purple-500/20'
                  : 'bg-[#131522] hover:bg-[#1f2338] border border-slate-700 shadow-xs'
              }`}
            >
              <div className="relative">
                <img
                  src={
                    user?.avatar ||
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80'
                  }
                  alt={user?.name || 'Alex Mercer'}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover ring-2 ring-purple-500/40"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#161827] rounded-full" />
              </div>

              <div className="text-left hidden md:block">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-black text-white font-heading">
                    {user?.name || 'Alex Mercer'}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 px-1.5 py-0.2 rounded border border-amber-500/30 inline-block">
                  Level 14 • Gold VIP
                </span>
              </div>

              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 hidden sm:block ${showProfileMenu ? 'rotate-180 text-purple-400' : ''}`} />
            </button>

            {/* Profile Dropdown Menu - Dark Fintech Theme */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-72 rounded-3xl bg-[#1c2035] border border-slate-700 shadow-2xl p-3.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50 text-slate-100">
                
                {/* User Info Header */}
                <div className="p-3 rounded-2xl bg-[#141624] border border-slate-800 mb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={
                        user?.avatar ||
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80'
                      }
                      alt="User"
                      className="w-10 h-10 rounded-xl object-cover ring-2 ring-purple-500"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-black text-white font-heading truncate">
                        {user?.name || 'Alex Mercer'}
                      </p>
                      <p className="text-[11px] font-medium text-slate-400 truncate">
                        {user?.email || 'alex.mercer@veloops.io'}
                      </p>
                    </div>
                  </div>

                  {/* Tier Multiplier Badge */}
                  <div className="flex items-center justify-between text-xs bg-[#191c2e] p-2 rounded-xl border border-slate-800 shadow-2xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Gold Booster
                    </span>
                    <span className="font-extrabold text-purple-300 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-800/80">
                      +25% Multiplier
                    </span>
                  </div>
                </div>

                {/* Navigation Action Buttons */}
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      if (onNavigate) onNavigate('profile');
                    }}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-slate-200 hover:text-white hover:bg-[#232742] font-bold transition-colors cursor-pointer text-left"
                  >
                    <div className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300">
                      <User className="w-4 h-4" />
                    </div>
                    <span>My Profile & Settings</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      if (onNavigate) onNavigate('wallet');
                    }}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-slate-200 hover:text-white hover:bg-[#232742] font-bold transition-colors cursor-pointer text-left"
                  >
                    <div className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <span>Wallet & Payout Methods</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      if (onNavigate) onNavigate('levelup');
                    }}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-slate-200 hover:text-white hover:bg-[#232742] font-bold transition-colors cursor-pointer text-left"
                  >
                    <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span>VIP Tier Level Progress</span>
                  </button>

                  <button
                    onClick={() => alert('Support portal opened: support@veloops.io')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-slate-200 hover:text-white hover:bg-[#232742] font-bold transition-colors cursor-pointer text-left"
                  >
                    <div className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-300">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span>24/7 Help & Support</span>
                  </button>
                </div>

                {/* Sign out */}
                <div className="pt-2 mt-1.5 border-t border-slate-800">
                  <button
                    onClick={() => alert('Signed out of Veloops Rewards')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-rose-400 hover:bg-rose-950/30 font-bold text-xs transition-colors cursor-pointer text-left"
                  >
                    <div className="p-1.5 rounded-xl bg-rose-500/20 text-rose-400">
                      <LogOut className="w-4 h-4" />
                    </div>
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
