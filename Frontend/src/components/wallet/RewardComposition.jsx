import React, { useState } from 'react';
import {
  Sparkles,
  RefreshCw,
  ArrowRight,
  Zap,
  Clock,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  ShieldCheck,
  Flame
} from 'lucide-react';

const RewardComposition = ({
  veBalance = 18450,
  sveBalance = 6400,
  onConvertNow
}) => {
  const [isConverting, setIsConverting] = useState(false);
  const [conversionSuccess, setConversionSuccess] = useState(false);

  const total = veBalance + sveBalance;
  const vePercent = total > 0 ? Math.round((veBalance / total) * 100) : 0;
  const svePercent = 100 - vePercent;

  const handleInstantConvert = () => {
    setIsConverting(true);
    setTimeout(() => {
      setIsConverting(false);
      setConversionSuccess(true);
      if (onConvertNow) onConvertNow(800);
      setTimeout(() => setConversionSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="rounded-3xl p-6 sm:p-7 bg-[#1c2035] border border-slate-700/60 shadow-xl space-y-6 text-white">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-purple-500/20 text-purple-300 shadow-xs">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-white">
              Reward Composition & Conversion
            </h2>
            <p className="text-xs text-slate-400">
              Understanding your liquid VEs vs staged SVEs yield lifecycle
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-950/60 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            1.25x VIP Gold Acceleration Active
          </span>
        </div>
      </div>

      {/* Visual Composition Distribution Bar */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500 inline-block shadow-xs" />
            <span className="text-slate-200">Liquid VEs ({vePercent}%)</span>
            <span className="font-mono text-slate-400 text-[11px] font-normal">
              {veBalance.toLocaleString()} VEs Available
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-xs" />
            <span className="text-slate-200">Staged SVEs ({svePercent}%)</span>
            <span className="font-mono text-slate-400 text-[11px] font-normal">
              {sveBalance.toLocaleString()} SVEs Vesting
            </span>
          </div>
        </div>

        {/* Stacked Progress Bar */}
        <div className="w-full bg-[#131522] rounded-2xl h-4 p-0.5 flex overflow-hidden shadow-inner border border-slate-800">
          <div
            style={{ width: `${vePercent}%` }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-l-xl transition-all duration-700 relative group cursor-pointer"
            title={`${vePercent}% Liquid VEs`}
          />
          <div
            style={{ width: `${svePercent}%` }}
            className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-r-xl transition-all duration-700 relative group cursor-pointer"
            title={`${svePercent}% Staged SVEs`}
          />
        </div>
      </div>

      {/* SVE to VE Conversion Protocol Explainers (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        
        {/* Step 1: Earning SVEs */}
        <div className="p-4 rounded-2xl bg-[#141624] border border-slate-800 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 font-extrabold text-xs flex items-center justify-center">
              1
            </span>
            <h4 className="text-xs font-bold text-white">Earn Staged SVEs</h4>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            High-value quest rewards, partner bonuses, and referral commissions first credit as <strong className="text-slate-200">SVEs</strong>.
          </p>
        </div>

        {/* Step 2: 1:1 Auto-Unlock */}
        <div className="p-4 rounded-2xl bg-[#141624] border border-slate-800 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 font-extrabold text-xs flex items-center justify-center">
              2
            </span>
            <h4 className="text-xs font-bold text-white">1:1 Conversion Protocol</h4>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            SVEs automatically convert <strong className="text-slate-200">1:1 into spendable VEs</strong> every 24 hours without any fees or lockup penalty.
          </p>
        </div>

        {/* Step 3: Redeem & Cash Out */}
        <div className="p-4 rounded-2xl bg-[#141624] border border-slate-800 hover:border-amber-500/40 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-extrabold text-xs flex items-center justify-center">
              3
            </span>
            <h4 className="text-xs font-bold text-white">Instant Liquidity</h4>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Once converted into <strong className="text-purple-300">VEs</strong>, withdraw immediately to UPI, Amazon Pay vouchers, or Google Play codes.
          </p>
        </div>

      </div>

      {/* Live Conversion Trigger Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#161827] to-amber-950/30 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-600 text-white shadow-md shadow-purple-500/20">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">Next Automatic Unlock</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/80 font-mono">
                03h : 24m : 18s
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              <strong className="text-purple-300">800 SVEs</strong> are ready for immediate early claim through your Gold VIP check-in boost!
            </p>
          </div>
        </div>

        <button
          onClick={handleInstantConvert}
          disabled={isConverting || conversionSuccess}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            conversionSuccess
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
              : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/25 active:scale-95'
          }`}
        >
          {isConverting ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Converting...</span>
            </>
          ) : conversionSuccess ? (
            <>
              <CheckCircle className="w-3.5 h-3.5" />
              <span>+800 VEs Unlocked!</span>
            </>
          ) : (
            <>
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>Convert 800 SVEs Now</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};

export default RewardComposition;
