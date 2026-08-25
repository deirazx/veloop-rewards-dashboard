import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Sparkles, Home, ArrowLeft } from 'lucide-react';

const AppLayout = ({ children, currentTab, setCurrentTab, balance = 24850, user }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const is404 = currentTab === '404';

  return (
    <div className="min-h-screen bg-[#161827] bg-ambient-mesh flex flex-col antialiased text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Decorative ambient blurred glow spheres */}
      <div className="fixed top-[-100px] right-[-80px] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/2 left-64 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Responsive Sidebar (Hidden on 404 page for clean standalone layout) */}
      {!is404 && (
        <Sidebar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
        />
      )}

      {/* Main Content Area: If 404, remove left padding (lg:pl-72) for full-width layout */}
      <div className={`${!is404 ? 'lg:pl-72' : ''} flex flex-col flex-1 min-w-0 transition-all duration-300`}>
        
        {/* Top Header */}
        {!is404 ? (
          <Header
            onOpenMobileMenu={() => setMobileMenuOpen(true)}
            balance={balance}
            user={user}
            onNavigate={setCurrentTab}
          />
        ) : (
          /* Standalone Minimal Navigation on 404 Page (Dark Fintech) */
          <header className="sticky top-0 z-30 w-full bg-[#181c2f]/90 backdrop-blur-xl border-b border-slate-800 shadow-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setCurrentTab('dashboard')}
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-400 p-[2px] shadow-md shadow-purple-500/20 transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#161827] rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-400 fill-purple-400/20" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  Veloops
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs">
                  REWARDS
                </span>
              </div>
            </div>

            <button
              onClick={() => setCurrentTab('dashboard')}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-500/25 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Dashboard</span>
            </button>
          </header>
        )}

        {/* Dynamic Page Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl w-full mx-auto animate-in fade-in duration-300">
          {children}
        </main>

        {/* Clean Modern Footer */}
        <footer className="px-4 sm:px-8 py-5 border-t border-slate-800/80 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-500 max-w-7xl w-full mx-auto">
          <p>© {new Date().getFullYear()} Veloops Rewards Ecosystem. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 mt-2 sm:mt-0 font-medium text-slate-400">
            {!is404 && (
              <>
                <button
                  onClick={() => setCurrentTab('404')}
                  className="text-purple-400 hover:text-purple-300 font-semibold cursor-pointer"
                >
                  Preview 404 Page
                </button>
                <span>•</span>
              </>
            )}
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-400 transition-colors">Rewards FAQ</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;
