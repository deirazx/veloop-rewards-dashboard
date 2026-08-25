import React from 'react';
import {
  Users,
  Trophy,
  Sparkles,
  Layers,
  Gift,
  Lock,
  Flame,
  ArrowUpRight,
  Bell,
  Clock,
  ShieldCheck,
  ChevronRight,
  Eye,
  CheckCircle2
} from 'lucide-react';

export const featureArtwork = {
  'team-battle': (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/80 via-[#181c2e] to-purple-950/80 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(#6366f120_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute w-24 h-24 bg-indigo-500/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
      
      {/* 3D Battle Arena SVG Illustration */}
      <svg className="w-20 h-20 relative z-10 drop-shadow-[0_8px_16px_rgba(99,102,241,0.4)] group-hover:rotate-6 transition-transform duration-500" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="32" stroke="url(#tb-ring)" strokeWidth="2" strokeDasharray="4 3" className="animate-spin-slow" />
        <path d="M28 24L38 40L28 56L34 58L42 43L50 58L56 56L46 40L56 24L50 22L42 37L34 22L28 24Z" fill="url(#tb-grad1)" />
        <path d="M40 18L52 28V46L40 58L28 46V28L40 18Z" stroke="url(#tb-shield)" strokeWidth="2.5" fill="rgba(30, 27, 75, 0.6)" />
        <path d="M40 26V48M32 37H48" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="tb-ring" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818CF8" />
            <stop offset="1" stopColor="#C084FC" />
          </linearGradient>
          <linearGradient id="tb-grad1" x1="28" y1="22" x2="56" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="tb-shield" x1="28" y1="18" x2="52" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#818CF8" />
          </linearGradient>
        </defs>
      </svg>
      
      <span className="absolute bottom-2 right-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
        4v4 SQUADS
      </span>
    </div>
  ),

  'lucky-draw': (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-950/70 via-[#1c1f30] to-yellow-950/60 border border-amber-500/20 group-hover:border-amber-500/40 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(#eab30820_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute w-24 h-24 bg-amber-500/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
      
      {/* 3D Golden Ticket & Wheel SVG */}
      <svg className="w-20 h-20 relative z-10 drop-shadow-[0_8px_16px_rgba(234,179,8,0.4)] group-hover:scale-110 transition-transform duration-500" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="30" fill="#1e1b4b" stroke="url(#ld-gold)" strokeWidth="3" />
        <circle cx="40" cy="40" r="22" stroke="url(#ld-gold2)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M40 18V28M40 52V62M18 40H28M52 40H62" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 26L33 33M47 47L54 54M54 26L47 33M33 47L26 54" stroke="#F59E0B" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="8" fill="url(#ld-gold)" />
        <path d="M40 35L42 39L46 40L43 43L44 47L40 45L36 47L37 43L34 40L38 39L40 35Z" fill="#161827" />
        <defs>
          <linearGradient id="ld-gold" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="0.5" stopColor="#EAB308" />
            <stop offset="1" stopColor="#CA8A04" />
          </linearGradient>
          <linearGradient id="ld-gold2" x1="18" y1="18" x2="62" y2="62" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEF08A" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
      
      <span className="absolute bottom-2 right-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
        PROVABLY FAIR
      </span>
    </div>
  ),

  'milestone-rewards': (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950/70 via-[#181d2c] to-teal-950/60 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(#10b98120_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute w-24 h-24 bg-emerald-500/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
      
      {/* 3D Tier Milestone Pyramid SVG */}
      <svg className="w-20 h-20 relative z-10 drop-shadow-[0_8px_16px_rgba(16,185,129,0.4)] group-hover:-translate-y-1 transition-transform duration-500" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 14L62 58H18L40 14Z" fill="url(#ms-base)" stroke="url(#ms-grad)" strokeWidth="2" />
        <path d="M40 14L40 58" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <path d="M29 44H51" stroke="#34D399" strokeWidth="2" />
        <path d="M34 30H46" stroke="#6EE7B7" strokeWidth="2" />
        <circle cx="40" cy="22" r="3.5" fill="#FDE047" />
        <circle cx="34" cy="37" r="2.5" fill="#34D399" />
        <circle cx="46" cy="37" r="2.5" fill="#34D399" />
        <circle cx="28" cy="51" r="2.5" fill="#6EE7B7" />
        <circle cx="40" cy="51" r="2.5" fill="#6EE7B7" />
        <circle cx="52" cy="51" r="2.5" fill="#6EE7B7" />
        <defs>
          <linearGradient id="ms-base" x1="18" y1="14" x2="62" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#064E3B" stopOpacity="0.8" />
            <stop offset="1" stopColor="#022C22" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="ms-grad" x1="40" y1="14" x2="40" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6EE7B7" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
      
      <span className="absolute bottom-2 right-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
        PERMANENT BOOSTS
      </span>
    </div>
  ),

  'collect-cards': (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-950/70 via-[#191e32] to-blue-950/70 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d420_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute w-24 h-24 bg-cyan-500/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
      
      {/* 3D Holographic Trading Cards Stack SVG */}
      <svg className="w-20 h-20 relative z-10 drop-shadow-[0_8px_16px_rgba(6,182,212,0.4)] group-hover:rotate-3 transition-transform duration-500" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Card 1 Back Left */}
        <rect x="18" y="24" width="28" height="42" rx="4" transform="rotate(-12 18 24)" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
        {/* Card 2 Back Right */}
        <rect x="36" y="20" width="28" height="42" rx="4" transform="rotate(12 36 20)" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5" />
        {/* Card 3 Center Hero */}
        <rect x="26" y="18" width="28" height="42" rx="4" fill="url(#cc-hero)" stroke="url(#cc-holo)" strokeWidth="2" />
        <circle cx="40" cy="34" r="7" fill="url(#cc-gem)" />
        <path d="M34 47H46M37 51H43" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="cc-hero" x1="26" y1="18" x2="54" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#082F49" />
            <stop offset="1" stopColor="#0369A1" />
          </linearGradient>
          <linearGradient id="cc-holo" x1="26" y1="18" x2="54" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="0.5" stopColor="#A855F7" />
            <stop offset="1" stopColor="#F43F5E" />
          </linearGradient>
          <linearGradient id="cc-gem" x1="33" y1="27" x2="47" y2="41" gradientUnits="userSpaceOnUse">
            <stop stopColor="#67E8F9" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>
      </svg>
      
      <span className="absolute bottom-2 right-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
        NFT SETS
      </span>
    </div>
  ),

  'surprise-rewards': (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-rose-950/70 via-[#1c1a2d] to-pink-950/60 border border-rose-500/20 group-hover:border-rose-500/40 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(#f43f5e20_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute w-24 h-24 bg-rose-500/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
      
      {/* 3D Surprise Giftbox with Bursting Stars SVG */}
      <svg className="w-20 h-20 relative z-10 drop-shadow-[0_8px_16px_rgba(244,63,94,0.4)] group-hover:scale-110 transition-transform duration-500" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="34" width="36" height="30" rx="4" fill="url(#sr-box)" stroke="url(#sr-gold)" strokeWidth="2" />
        <rect x="18" y="28" width="44" height="8" rx="2" fill="url(#sr-lid)" stroke="url(#sr-gold)" strokeWidth="1.5" />
        <path d="M40 28V64" stroke="#FDE047" strokeWidth="3" />
        <path d="M22 47H58" stroke="#FDE047" strokeWidth="2" />
        {/* Ribbon Bow */}
        <path d="M40 28C34 22 28 22 34 16C38 12 40 24 40 28Z" fill="#FACC15" />
        <path d="M40 28C46 22 52 22 46 16C42 12 40 24 40 28Z" fill="#FACC15" />
        {/* Sparkles */}
        <circle cx="18" cy="20" r="2" fill="#FDE047" />
        <circle cx="62" cy="22" r="2.5" fill="#F43F5E" />
        <circle cx="58" cy="14" r="1.5" fill="#38BDF8" />
        <defs>
          <linearGradient id="sr-box" x1="22" y1="34" x2="58" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#881337" />
            <stop offset="1" stopColor="#4C0519" />
          </linearGradient>
          <linearGradient id="sr-lid" x1="18" y1="28" x2="62" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BE123C" />
            <stop offset="1" stopColor="#9F1239" />
          </linearGradient>
          <linearGradient id="sr-gold" x1="18" y1="28" x2="62" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="1" stopColor="#CA8A04" />
          </linearGradient>
        </defs>
      </svg>
      
      <span className="absolute bottom-2 right-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30">
        RANDOM DROPS
      </span>
    </div>
  ),

  'mystery-rewards': (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-950/80 via-[#1d1b32] to-violet-950/70 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(#a855f720_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute w-24 h-24 bg-purple-500/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
      
      {/* 3D Cyber Enigma Vault Cube SVG */}
      <svg className="w-20 h-20 relative z-10 drop-shadow-[0_8px_16px_rgba(168,85,247,0.4)] group-hover:rotate-12 transition-transform duration-500" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 14L64 27V53L40 66L16 53V27L40 14Z" fill="#1e1b4b" stroke="url(#mr-cube)" strokeWidth="2" />
        <path d="M40 14V66M16 27L40 40L64 27" stroke="url(#mr-lines)" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="8" fill="#581C87" stroke="#E9D5FF" strokeWidth="1.5" />
        <path d="M40 36V41M40 43V44" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="mr-cube" x1="16" y1="14" x2="64" y2="66" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C084FC" />
            <stop offset="0.5" stopColor="#7E22CE" />
            <stop offset="1" stopColor="#3B0764" />
          </linearGradient>
          <linearGradient id="mr-lines" x1="16" y1="14" x2="64" y2="66" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E9D5FF" />
            <stop offset="1" stopColor="#9333EA" />
          </linearGradient>
        </defs>
      </svg>
      
      <span className="absolute bottom-2 right-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
        ENIGMA CRATE
      </span>
    </div>
  ),

  'referral-milestone': (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950/70 via-[#181d2f] to-indigo-950/70 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute w-24 h-24 bg-blue-500/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
      
      {/* 3D Partner Network Nodes & Multiplier Flow SVG */}
      <svg className="w-20 h-20 relative z-10 drop-shadow-[0_8px_16px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform duration-500" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="24" x2="22" y2="52" stroke="url(#rm-net)" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="40" y1="24" x2="58" y2="52" stroke="url(#rm-net)" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="22" y1="52" x2="58" y2="52" stroke="url(#rm-net)" strokeWidth="2" strokeDasharray="3 3" />
        
        {/* Top King Node */}
        <circle cx="40" cy="24" r="10" fill="#1e3a8a" stroke="#60A5FA" strokeWidth="2" />
        <path d="M36 24L39 21L40 25L41 21L44 24L40 27L36 24Z" fill="#FDE047" />
        
        {/* Bottom Left Node */}
        <circle cx="22" cy="52" r="8" fill="#1e1b4b" stroke="#818CF8" strokeWidth="1.5" />
        <circle cx="22" cy="52" r="3" fill="#A5B4FC" />
        
        {/* Bottom Right Node */}
        <circle cx="58" cy="52" r="8" fill="#1e1b4b" stroke="#818CF8" strokeWidth="1.5" />
        <circle cx="58" cy="52" r="3" fill="#A5B4FC" />
        
        <defs>
          <linearGradient id="rm-net" x1="22" y1="24" x2="58" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>
      
      <span className="absolute bottom-2 right-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
        25% MAX SHARE
      </span>
    </div>
  ),
};

const UpcomingCard = ({ feature, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(feature)}
      className="group relative flex flex-col justify-between rounded-3xl bg-[#1c2035]/90 hover:bg-[#222742] border border-slate-700/60 hover:border-purple-500/50 p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_-10px_rgba(147,51,234,0.25)] hover:-translate-y-1.5 cursor-pointer overflow-hidden"
    >
      {/* Ambient subtle card glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/5 via-blue-500/5 to-transparent rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:from-purple-500/15 transition-all duration-500" />

      <div>
        {/* Card Header: Badge & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${feature.badgeColor}`}>
            <Clock className="w-3 h-3" />
            {feature.badge}
          </span>
          <span className="text-[10px] font-mono font-semibold text-slate-400">
            {feature.releaseTimeline}
          </span>
        </div>

        {/* Feature Illustration */}
        <div className="mb-4.5">
          {featureArtwork[feature.id] || featureArtwork['team-battle']}
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5 mb-3">
          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white group-hover:text-purple-300 transition-colors tracking-tight flex items-center justify-between">
            <span>{feature.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
            {feature.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Reward Potential & CTA */}
      <div className="pt-4 mt-2 border-t border-slate-700/50 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Reward Opportunity
          </span>
          <span className="text-xs font-black text-amber-400 font-heading truncate block">
            {feature.rewardPotential}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(feature);
          }}
          className="px-3 py-1.5 rounded-xl bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-500 text-xs font-bold transition-all flex items-center gap-1 shrink-0 active:scale-95"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Sneak Peek</span>
        </button>
      </div>
    </div>
  );
};

export default UpcomingCard;
