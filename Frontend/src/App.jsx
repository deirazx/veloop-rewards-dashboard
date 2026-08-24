import React, { useState } from 'react';
import AppLayout from './components/layout/AppLayout';
import DashboardView from './components/views/DashboardView';
import WalletView from './components/views/WalletView';
import ReferralsView from './components/views/ReferralsView';
import ProfileView from './components/views/ProfileView';
import LevelUpView from './components/views/LevelUpView';
import NotFoundView from './components/views/NotFoundView';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [balance, setBalance] = useState(24850);

  const currentUser = {
    name: 'Alex Mercer',
    email: 'alex.mercer@veloops.io',
    tier: 'Gold VIP Member',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
  };

  const handleVeGain = (veAmount) => {
    setBalance((prev) => prev + veAmount);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return <DashboardView onNavigate={(tab) => setCurrentTab(tab)} />;
      case 'wallet':
        return <WalletView onNavigate={(tab) => setCurrentTab(tab)} />;
      case 'levelup':
        return (
          <LevelUpView
            onNavigate={(tab) => setCurrentTab(tab)}
            onVeGain={handleVeGain}
          />
        );
      case 'referrals':
        return <ReferralsView />;
      case 'profile':
        return <ProfileView user={currentUser} />;
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