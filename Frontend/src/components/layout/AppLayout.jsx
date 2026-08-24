import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = ({ children, currentTab, setCurrentTab, balance = 24850, user }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ambient-mesh flex flex-col antialiased text-slate-800 selection:bg-purple-500/20 selection:text-purple-900">
      {/* Decorative ambient blurred glow spheres */}
      <div className="fixed top-[-100px] right-[-80px] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/2 left-64 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Responsive Sidebar */}
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />

      {/* Main Content Area */}
      <div className="lg:pl-72 flex flex-col flex-1 min-w-0 transition-all duration-300">
        {/* Top Header */}
        <Header
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          balance={balance}
          user={user}
          onNavigate={setCurrentTab}
        />

        {/* Dynamic Page Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl w-full mx-auto animate-in fade-in duration-300">
          {children}
        </main>

        {/* Clean Modern Footer */}
        <footer className="px-4 sm:px-8 py-4 border-t border-slate-200/60 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-400 max-w-7xl w-full mx-auto">
          <p>© {new Date().getFullYear()} Veloops Rewards Ecosystem. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 mt-2 sm:mt-0 font-medium text-slate-500">
            <button
              onClick={() => setCurrentTab('404')}
              className="text-purple-600 hover:text-purple-700 font-semibold cursor-pointer"
            >
              Preview 404 Page
            </button>
            <span>•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">Rewards FAQ</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;
