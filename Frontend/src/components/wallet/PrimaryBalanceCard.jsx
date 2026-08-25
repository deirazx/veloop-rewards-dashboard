import React from 'react';
import {
  Wallet,
  Coins,
  TrendingUp,
  ArrowDownLeft,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  RefreshCw,
  Info
} from 'lucide-react';

const PrimaryBalanceCard = ({
  veBalance = 18450,
  sveBalance = 6400,
  inrRate = 1.0, // 1 VE = ₹1.00
  onOpenWithdraw,
  onOpenConvert
}) => {
  const totalBalance = veBalance + sveBalance;
  const inrTotal = (totalBalance * inrRate).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#1c2035] p-6 sm:p-8 border border-slate-700/60 shadow-2xl text-white group">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/15 via-amber-400/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mb-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#6366f115_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Top meta tags */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-emerald-950/60 text-emerald-300 text-xs font-bold border border-emerald-500/40 flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Verified Rewards Vault
            </span>
            <span className="text-xs font-bold text-slate-300 bg-[#131522] px-3 py-1 rounded-full border border-slate-700 shadow-xs hidden sm:inline-block">
              1 VE = ₹{inrRate.toFixed(2)} INR Peg
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-950/60 px-3.5 py-1 rounded-full border border-amber-500/40 shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Instant UPI Settlements</span>
          </div>
        </div>

        {/* Primary INR Total Balance Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-2">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
              <span>Estimated Portfolio Value</span>
              <span className="text-xs font-normal text-slate-400">(Combined VEs + SVEs)</span>
            </p>

            <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
              <span className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white">
                ₹{inrTotal}
              </span>
              <span className="text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                +18.4% this month
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              100% backed by Veloop Liquidity Protocol • Zero conversion slippage
            </p>
          </div>

          {/* Quick Action Buttons on Card */}
          <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap gap-3 justify-start lg:justify-end">
            <button
              onClick={onOpenWithdraw}
              className="flex-1 sm:flex-none px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <ArrowDownLeft className="w-4 h-4 text-white" />
              <span>Withdraw to UPI</span>
            </button>
            <button
              onClick={onOpenConvert}
              className="flex-1 sm:flex-none px-6 py-3.5 rounded-2xl bg-[#141624] hover:bg-[#1e2238] text-slate-200 font-bold text-sm border border-slate-700 shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 text-purple-400" />
              <span>Convert SVEs</span>
            </button>
          </div>
        </div>

        {/* Balance Breakdown Pills: VEs vs SVEs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800">

          {/* Liquid VEs Card */}
          <div className="p-4.5 rounded-2xl bg-[#141624] border border-slate-800 shadow-sm hover:border-purple-500/40 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-md shadow-purple-500/25">
                <Coins className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-extrabold text-purple-300 uppercase tracking-wide">Available Liquid</span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                    READY
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-2xl font-black font-heading text-white">
                    {veBalance.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-purple-300 bg-purple-950/80 px-1.5 py-0.2 rounded border border-purple-800/60">VEs</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-extrabold text-white block">
                ≈ ₹{(veBalance * inrRate).toLocaleString('en-IN')}
              </span>
              <p className="text-[11px] font-semibold text-emerald-400">Instant Redeem</p>
            </div>
          </div>

          {/* Staged SVEs Card */}
          <div className="p-4.5 rounded-2xl bg-[#141624] border border-slate-800 shadow-sm hover:border-amber-500/40 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/25">
                <Sparkles className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wide">Staged & Vesting</span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-amber-950/80 text-amber-300 border border-amber-500/40 flex items-center gap-0.5">
                    <Clock className="w-2.5 h-2.5" /> UNLOCKING
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-2xl font-black font-heading text-white">
                    {sveBalance.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-amber-300 bg-amber-950/80 px-1.5 py-0.2 rounded border border-amber-800/60">SVEs</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-extrabold text-white block">
                ≈ ₹{(sveBalance * inrRate).toLocaleString('en-IN')}
              </span>
              <p className="text-[11px] font-semibold text-amber-400">Auto-converting</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PrimaryBalanceCard;
