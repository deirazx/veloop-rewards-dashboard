import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Bell,
  CheckCircle2,
  Gift,
  ShieldCheck,
  Calendar,
  Zap,
  ArrowRight,
  Send,
  Users
} from 'lucide-react';
import { featureArtwork } from './UpcomingCard';

const FeatureSneakPeekModal = ({ isOpen, onClose, feature }) => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!isOpen || !feature) return null;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (notifyEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        // keep subscribed state
      }, 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#1a1d30] border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-white animate-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${feature.badgeColor}`}>
            <Sparkles className="w-3.5 h-3.5" />
            {feature.badge} • Sneak Peek Preview
          </span>
        </div>

        {/* Feature Artwork Banner */}
        <div className="mb-5">
          {featureArtwork[feature.id] || featureArtwork['team-battle']}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-black font-heading text-white tracking-tight">
              {feature.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {feature.detailedOverview || feature.description}
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-[#141624] border border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Estimated Release
              </span>
              <span className="text-xs font-bold text-slate-200 mt-0.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                {feature.releaseTimeline}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#141624] border border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Potential Reward
              </span>
              <span className="text-xs font-bold text-amber-400 mt-0.5 flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5" />
                {feature.rewardPotential}
              </span>
            </div>
          </div>

          {/* Gameplay / Rules Highlights */}
          {feature.mechanics && (
            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-2">
              <h4 className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                How it will work:
              </h4>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                {feature.mechanics.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Waitlist / Notify Box */}
          <div className="pt-2">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter email for Day-1 Early Access..."
                  className="flex-1 px-4 py-3 rounded-2xl bg-[#131522] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shrink-0"
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>Notify Me</span>
                </button>
              </form>
            ) : (
              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-center gap-2.5 text-xs font-bold animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You're on the VIP Waitlist! We'll notify {notifyEmail} when this feature goes live.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSneakPeekModal;
