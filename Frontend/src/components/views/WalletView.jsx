import React, { useState } from 'react';
import PrimaryBalanceCard from '../wallet/PrimaryBalanceCard';
import RewardComposition from '../wallet/RewardComposition';
import QuickActions from '../wallet/QuickActions';
import RedeemSection from '../wallet/RedeemSection';
import WalletHistoryTable from '../wallet/WalletHistoryTable';
import RedeemModal from '../wallet/RedeemModal';

const WalletView = ({ onNavigate, onVeDeduct, onVeGain }) => {
  // State for user balances
  const [veBalance, setVeBalance] = useState(18450);
  const [sveBalance, setSveBalance] = useState(6400);
  const inrRate = 1.0; // 1 VE = ₹1.00

  // Modal State
  const [isRedeemOpen, setIsRedeemOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [transactions, setTransactions] = useState([]);

  // Open modal with specific method
  const handleOpenRedeem = (method = 'upi') => {
    setSelectedMethod(method);
    setIsRedeemOpen(true);
  };

  // Instant SVE to VE conversion handler
  const handleConvertNow = (amount = 800) => {
    if (sveBalance >= amount) {
      setSveBalance((prev) => prev - amount);
      setVeBalance((prev) => prev + amount);

      const newTx = {
        id: 'TXN-' + Math.floor(100000 + Math.random() * 900000),
        title: `Instant Conversion: ${amount} SVEs to VEs`,
        category: 'conversion',
        type: '1:1 Protocol',
        amountVE: +amount,
        amountINR: amount * inrRate,
        date: 'Just now',
        status: 'Converted',
      };
      setTransactions((prev) => [newTx, ...prev]);
    }
  };

  // Successful Redemption handler from modal
  const handleSuccessRedeem = ({ method, amountINR, veDeducted, txId }) => {
    setVeBalance((prev) => Math.max(0, prev - veDeducted));
    if (onVeDeduct) onVeDeduct(veDeducted);

    const methodNames = {
      upi: 'UPI Transfer to VPA',
      amazon: 'Amazon Pay Gift Voucher',
      googleplay: 'Google Play Recharge Code',
    };

    const newTx = {
      id: txId || 'TXN-' + Math.floor(100000 + Math.random() * 900000),
      title: `${methodNames[method] || 'Payout'} (₹${amountINR})`,
      category: 'withdrawal',
      type: method === 'upi' ? 'UPI Payout' : 'Gift Voucher',
      amountVE: -veDeducted,
      amountINR: amountINR,
      date: 'Just now',
      status: 'Settled',
    };
    setTransactions((prev) => [newTx, ...prev]);
  };

  const handleScrollToHistory = () => {
    const el = document.getElementById('wallet-history-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* 1. Primary Balance Card (INR Value, VEs, SVEs) */}
      <section>
        <PrimaryBalanceCard
          veBalance={veBalance}
          sveBalance={sveBalance}
          inrRate={inrRate}
          onOpenWithdraw={() => handleOpenRedeem('upi')}
          onOpenConvert={() => handleConvertNow(800)}
        />
      </section>

      {/* 2. Quick Actions Grid */}
      <section>
        <QuickActions
          onWithdraw={() => handleOpenRedeem('upi')}
          onViewHistory={handleScrollToHistory}
          onEarnMore={() => onNavigate && onNavigate('referrals')}
        />
      </section>

      {/* 3. Reward Composition Section (SVE to VE conversion mechanism) */}
      <section>
        <RewardComposition
          veBalance={veBalance}
          sveBalance={sveBalance}
          onConvertNow={handleConvertNow}
        />
      </section>

      {/* 4. Redeem Your Rewards Section (UPI, Amazon Pay, Google Play) */}
      <section>
        <RedeemSection
          onSelectMethod={handleOpenRedeem}
          veBalance={veBalance}
        />
      </section>

      {/* 5. Wallet Ledger History */}
      <section>
        <WalletHistoryTable transactions={transactions} />
      </section>

      {/* Interactive Redemption Modal */}
      <RedeemModal
        isOpen={isRedeemOpen}
        onClose={() => setIsRedeemOpen(false)}
        initialMethod={selectedMethod}
        veBalance={veBalance}
        inrRate={inrRate}
        onSuccessRedeem={handleSuccessRedeem}
      />

    </div>
  );
};

export default WalletView;
