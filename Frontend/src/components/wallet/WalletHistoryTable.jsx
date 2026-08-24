import React, { useState } from 'react';
import {
  ArrowDownLeft,
  ArrowUpRight,
  RefreshCw,
  QrCode,
  CreditCard,
  Sparkles,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const WalletHistoryTable = ({ transactions = [] }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const defaultTransactions = [
    {
      id: 'TXN-882194',
      title: 'UPI Transfer to alexmercer@okaxis',
      category: 'withdrawal',
      type: 'UPI Payout',
      amountVE: -500,
      amountINR: 500,
      date: 'Today, 10:45 AM',
      status: 'Settled',
      icon: QrCode,
      iconBg: 'bg-rose-100 text-rose-600',
    },
    {
      id: 'TXN-881920',
      title: 'SVEs Maturity Auto-Conversion',
      category: 'conversion',
      type: '1:1 Protocol',
      amountVE: +800,
      amountINR: 800,
      date: 'Today, 06:00 AM',
      status: 'Converted',
      icon: RefreshCw,
      iconBg: 'bg-purple-100 text-purple-600',
    },
    {
      id: 'TXN-880412',
      title: 'Affiliate Tier 1 Referral Commission',
      category: 'earning',
      type: 'Referral Bonus',
      amountVE: +320,
      amountINR: 320,
      date: 'Yesterday, 08:20 PM',
      status: 'Credited',
      icon: Sparkles,
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: 'TXN-879801',
      title: 'Amazon Pay ₹1,000 Gift Voucher',
      category: 'withdrawal',
      type: 'Gift Voucher',
      amountVE: -1000,
      amountINR: 1000,
      date: 'Aug 21, 2026',
      status: 'Delivered',
      icon: CreditCard,
      iconBg: 'bg-amber-100 text-amber-600',
    },
    {
      id: 'TXN-878290',
      title: 'Daily Streak Gold Multiplier Yield',
      category: 'earning',
      type: 'Daily Check-in',
      amountVE: +150,
      amountINR: 150,
      date: 'Aug 20, 2026',
      status: 'Credited',
      icon: Sparkles,
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
  ];

  const allTxns = transactions.length > 0 ? [...transactions, ...defaultTransactions] : defaultTransactions;

  const filteredTxns = allTxns.filter((tx) => {
    const matchesFilter =
      activeFilter === 'all' ? true : tx.category === activeFilter;
    const matchesSearch =
      tx.title.toLowerCase().includes(search.toLowerCase()) ||
      tx.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div id="wallet-history-section" className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/80 shadow-lg space-y-5">
      
      {/* Table Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-100">
        <div>
          <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
            Wallet Ledger & Activity
          </h2>
          <p className="text-xs text-slate-500">
            Complete transaction record of earnings, conversions, and redemptions.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by ID or description..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'all', label: 'All Transactions' },
          { id: 'earning', label: 'Earnings (+VEs)' },
          { id: 'conversion', label: 'SVE Conversions' },
          { id: 'withdrawal', label: 'Redemptions (-VEs)' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === tab.id
                ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/20'
                : 'bg-slate-100/80 hover:bg-slate-200 text-slate-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Transactions List */}
      <div className="divide-y divide-slate-100/80 overflow-x-auto">
        {filteredTxns.length === 0 ? (
          <div className="text-center py-10 text-slate-400 text-xs">
            No transactions found matching your filter criteria.
          </div>
        ) : (
          filteredTxns.map((tx, idx) => {
            const Icon = tx.icon || Sparkles;
            const isNegative = tx.amountVE < 0;

            return (
              <div
                key={tx.id || idx}
                className="py-3.5 px-2 flex items-center justify-between gap-4 hover:bg-white/60 rounded-2xl transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`p-2.5 rounded-2xl shrink-0 ${tx.iconBg || 'bg-slate-100 text-slate-600'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {tx.title}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-400 hidden md:inline-block">
                        {tx.id}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {tx.date} • <span className="font-semibold text-slate-600">{tx.type}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div
                    className={`text-xs sm:text-sm font-extrabold font-heading ${
                      isNegative ? 'text-rose-600' : 'text-emerald-600'
                    }`}
                  >
                    {isNegative ? '' : '+'}
                    {tx.amountVE.toLocaleString()} VEs
                  </div>
                  <div className="flex items-center justify-end gap-1.5 text-[10px] text-slate-500 mt-0.5">
                    <span>≈ ₹{Math.abs(tx.amountINR).toLocaleString('en-IN')}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {tx.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};

export default WalletHistoryTable;
