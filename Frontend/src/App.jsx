import React, { useState } from 'react';
import AppLayout from './components/layout/AppLayout';
import DashboardView from './components/views/DashboardView';
import WalletView from './components/views/WalletView';
import ReferralsView from './components/views/ReferralsView';
import ProfileView from './components/views/ProfileView';
import LevelUpView from './components/views/LevelUpView';
import NotFoundView from './components/views/NotFoundView';

const getInitialTab = () => {
  const path = window.location.pathname.replace(/^\//, '') || 'dashboard';
  const validTabs = ['dashboard', 'wallet', 'levelup', 'referrals', 'profile', '404'];
  return validTabs.includes(path) ? path : '404';
};

function App() {
  const [currentTab, setCurrentTab] = useState(getInitialTab);
  const [balance, setBalance] = useState(24850);

  const currentUser = {
    name: 'Alex Mercer',
    email: 'alex.mercer@veloops.io',
    tier: 'Gold VIP Member',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
  };

  // Sync state with browser URL path (handling popstate for back/forward buttons)
  React.useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/^\//, '') || 'dashboard';
      const validTabs = ['dashboard', 'wallet', 'levelup', 'referrals', 'profile', '404'];
      
      if (validTabs.includes(path)) {
        setCurrentTab(path);
      } else {
        setCurrentTab('404');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Update URL path when currentTab state changes internally
  React.useEffect(() => {
    const currentPath = window.location.pathname.replace(/^\//, '') || 'dashboard';
    const validTabs = ['dashboard', 'wallet', 'levelup', 'referrals', 'profile', '404'];
    const isCurrentPathValid = validTabs.includes(currentPath);

    // If we are showing 404 and the current URL path is already an invalid random URL,
    // preserve the typed invalid URL in the address bar instead of rewriting it.
    if (currentTab === '404' && !isCurrentPathValid) {
      return;
    }

    // Default '/' matches 'dashboard' internally
    const targetPath = currentTab === 'dashboard' ? '' : currentTab;
    const resolvedPath = currentPath === 'dashboard' ? '' : currentPath;

    if (targetPath !== resolvedPath) {
      window.history.pushState(null, '', `/${targetPath}`);
    }
  }, [currentTab]);

  const handleVeGain = (veAmount) => {
    setBalance((prev) => prev + veAmount);
  };

  const handleVeDeduct = (veAmount) => {
    setBalance((prev) => Math.max(0, prev - veAmount));
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return (
          <DashboardView
            onNavigate={(tab) => setCurrentTab(tab)}
            balance={balance}
          />
        );
      case 'wallet':
        return (
          <WalletView
            onNavigate={(tab) => setCurrentTab(tab)}
            onVeDeduct={handleVeDeduct}
            onVeGain={handleVeGain}
          />
        );
      case 'levelup':
        return (
          <LevelUpView
            onNavigate={(tab) => setCurrentTab(tab)}
            onVeGain={handleVeGain}
          />
        );
      case 'referrals':
        return <ReferralsView onNavigate={(tab) => setCurrentTab(tab)} />;
      case 'profile':
        return <ProfileView user={currentUser} onNavigate={(tab) => setCurrentTab(tab)} />;
      case '404':
        return (
          <NotFoundView
            onNavigate={(tab) => setCurrentTab(tab)}
            onClaimEasterEgg={handleVeGain}
          />
        );
      default:
        return (
          <NotFoundView
            onNavigate={(tab) => setCurrentTab(tab)}
            onClaimEasterEgg={handleVeGain}
          />
        );
    }
  };

  return (
    <AppLayout
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      balance={balance}
      user={currentUser}
    >
      {renderContent()}
    </AppLayout>
  );
}

export default App;