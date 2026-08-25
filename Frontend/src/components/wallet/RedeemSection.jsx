import React from 'react';
import {
  QrCode,
  CreditCard,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const RedeemSection = ({ onSelectMethod, veBalance }) => {
  const cards = [
    {
      id: 'upi',
      title: 'UPI Direct Transfer',
      tagline: 'Instant Cash to Any Bank / VPA',
      badge: 'Most Popular',
      badgeColor: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40',
      icon: QrCode,
      border: 'hover:border-emerald-500/50',
      iconColor: 'bg-emerald-500 text-slate-950 shadow-emerald-500/25',
      minAmount: 'Min. ₹100 (100 VEs)',
      fee: '0% Platform Fee',
      speed: 'Instant (under 60 sec)',
      supported: ['GPay', 'PhonePe', 'Paytm', 'BHIM'],
    },
    {
      id: 'amazon',
      title: 'Amazon Pay Gift Card',
      tagline: 'e-Gift Voucher for Shopping & Bills',
      badge: '+2% Extra Bonus',
      badgeColor: 'bg-amber-950/60 text-amber-300 border-amber-500/40',
      icon: CreditCard,
      border: 'hover:border-amber-500/50',
      iconColor: 'bg-amber-500 text-slate-950 shadow-amber-500/25',
      minAmount: 'Min. ₹250 (250 VEs)',
      fee: 'Instant Email Voucher',
      speed: 'Instant Code Delivery',
      supported: ['Amazon.in', 'Prime', 'Bill Payments', 'Recharge'],
    },
    {
      id: 'googleplay',
      title: 'Google Play Recharge',
      tagline: 'Direct Codes for Apps, Games & Subs',
      badge: 'Instant SMS',
      badgeColor: 'bg-indigo-950/60 text-indigo-300 border-indigo-500/40',
      icon: Sparkles,
      border: 'hover:border-indigo-500/50',
      iconColor: 'bg-indigo-500 text-white shadow-indigo-500/25',
      minAmount: 'Min. ₹100 (100 VEs)',
      fee: 'Official Partner Codes',
      speed: 'Instant Code via SMS',
      supported: ['Play Store', 'In-App Items', 'BGMI / COD', 'Books'],
    },
  ];

  return (
    <div className="space-y-4 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="font-heading font-extrabold text-lg sm:text-xl text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
            Redeem Your Rewards
          </h2>
          <p className="text-xs text-slate-400">
            Convert your liquid VEs to INR cash, gift cards, or app store credit.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 bg-[#141624] px-3 py-1.5 rounded-full border border-slate-800 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>Guaranteed Instant Payouts</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`p-6 rounded-3xl bg-[#1c2035] border border-slate-700/60 shadow-xl ${card.border} flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Top Row */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3.5 rounded-2xl ${card.iconColor} shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-white">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 mb-4">
                  {card.tagline}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 py-3 border-y border-slate-800 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">Min. Payout</span>
                    <span className="font-semibold text-slate-200">{card.minAmount}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">Processing Time</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {card.speed}
                    </span>
                  </div>
                </div>

                {/* Supported Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 mb-5">
                  {card.supported.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#141624] text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectMethod(card.id)}
                className="w-full py-3 px-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-purple-500/25 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <span>Redeem via {card.title.split(' ')[0]}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RedeemSection;
