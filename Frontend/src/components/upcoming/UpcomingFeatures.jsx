import React, { useState } from 'react';
import UpcomingCard from './UpcomingCard';
import FeatureSneakPeekModal from './FeatureSneakPeekModal';
import {
  Sparkles,
  Layers,
  Flame,
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Compass
} from 'lucide-react';

const upcomingFeaturesData = [
  {
    id: 'team-battle',
    title: 'Team Battle',
    category: 'competitive',
    badge: 'Coming Soon',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    releaseTimeline: 'Q4 2026',
    rewardPotential: 'Up to 25,000 VEs Shared Pool',
    description: 'Assemble squads with friends to compete in weekly high-stakes clan tournaments with shared prize pools.',
    detailedOverview: 'Team Battle introduces real-time multiplayer leaderboards to VELOOP Rewards. Players can form 4-member squads, pool their weekly quest contributions, and compete against rival guilds for tier multipliers and massive split jackpots.',
    mechanics: [
      'Form or join a 4-player Squad with custom clan emblems.',
      'Complete daily squad missions to climb the Weekly Tier Division.',
      'Top 10% of teams earn shared VEs pools and exclusive VIP badges.'
    ]
  },
  {
    id: 'lucky-draw',
    title: 'Lucky Draw',
    category: 'luck',
    badge: 'Launching Soon',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    releaseTimeline: 'November 2026',
    rewardPotential: '₹50,000 INR Jackpot + Rare Badges',
    description: 'Stake free daily lottery tickets for weekly provably-fair drawings with guaranteed consolation returns.',
    detailedOverview: 'Lucky Draw is an automated, transparent on-platform sweepstakes protocol. Users earn free tickets through daily check-ins and tier loyalty, providing thrilling chances at grand cash jackpots and tech gadgets.',
    mechanics: [
      'Earn 1 free ticket for every 3-day consecutive login streak.',
      'Provably-fair automated weekly draws broadcast live on the platform.',
      'Non-winning tickets earn 10% consolation SVEs back to your vault.'
    ]
  },
  {
    id: 'milestone-rewards',
    title: 'Milestone Rewards',
    category: 'progression',
    badge: 'Under Development',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    releaseTimeline: 'December 2026',
    rewardPotential: 'Permanent Multiplier Boosts',
    description: 'Hit lifetime engagement milestones to unlock permanent cashout fee waivers and booster perks.',
    detailedOverview: 'Milestone Rewards recognizes long-term loyalty. As your cumulative lifetime VEs earned surpasses key thresholds, you unlock permanent platform benefits like 0% withdrawal fees, prioritized UPI routing, and custom profile badges.',
    mechanics: [
      'Milestones at 10k, 50k, 100k, and 500k lifetime VEs earned.',
      'Unlocks permanent platform fee reductions down to 0%.',
      'Exclusive access to dedicated Concierge VIP support.'
    ]
  },
  {
    id: 'collect-cards',
    title: 'Collect Cards',
    category: 'collectibles',
    badge: 'Stay Tuned',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    releaseTimeline: 'Q1 2027',
    rewardPotential: 'Full Set Bonus (+10,000 VEs)',
    description: 'Collect digital card sets through quests and daily activities to forge full albums for mega rewards.',
    detailedOverview: 'Collect Cards turns everyday reward activities into a gamified collection journey. Complete thematic digital albums (e.g., Cyberpunk Legends, Fintech Pioneers) to unlock instant high-denomination gift cards and rare profile skins.',
    mechanics: [
      'Receive mystery card packs by completing daily sponsor spotlights.',
      'Trade duplicate cards with community members in the P2P Trade Hub.',
      'Forge completed 10-card sets for instant ₹10,000 INR cashout vouchers.'
    ]
  },
  {
    id: 'surprise-rewards',
    title: 'Surprise Rewards',
    category: 'luck',
    badge: 'Coming Soon',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    releaseTimeline: 'October 2026',
    rewardPotential: 'Random Flash Airdrops',
    description: 'Experience spontaneous random reward drops while navigating the dashboard and completing routine tasks.',
    detailedOverview: 'Surprise Rewards creates serendipity across the VELOOP ecosystem. Randomly timed micro-airdrops appear as floating gift parcels for active users, keeping everyday engagement exciting and rewarding.',
    mechanics: [
      'Unannounced floating gift parcels appear during active dashboard sessions.',
      'Claims range from +50 to +1,000 VEs instantly deposited into your balance.',
      'Active daily streak holders enjoy a 3x higher drop frequency.'
    ]
  },
  {
    id: 'mystery-rewards',
    title: 'Mystery Rewards',
    category: 'collectibles',
    badge: 'Under Development',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    releaseTimeline: 'Q4 2026',
    rewardPotential: 'Secret Vault Multipliers',
    description: 'Decipher seasonal riddles and unlock enigma loot crates containing confidential multiplier bonuses.',
    detailedOverview: 'Mystery Rewards introduces puzzle-based progression. Players solve weekly clues and community ciphers to unlock encrypted vaults containing exclusive tier boosts and limited-edition merchandise codes.',
    mechanics: [
      'New encrypted mystery vault unlocked every alternating Sunday.',
      'Solve interactive community riddles and platform easter eggs to generate decryption keys.',
      'Contains rare mystery multipliers up to 3.0x for 48 hours.'
    ]
  },
  {
    id: 'referral-milestone',
    title: 'Referral Milestone',
    category: 'progression',
    badge: 'Launching Soon',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    releaseTimeline: 'November 2026',
    rewardPotential: 'Up to 25% Lifetime Revenue Share',
    description: 'Reach tiered referral member milestones to unlock recurring monthly ambassador salaries.',
    detailedOverview: 'Referral Milestone supercharges our existing affiliate model. Expanding your network unlocks higher commission brackets (up to 25%), dedicated hardware rewards (e.g., iPhone / PlayStation), and official VELOOP Ambassador status.',
    mechanics: [
      'Tier 1: 10 active referrals = 18% lifetime commission.',
      'Tier 2: 50 active referrals = 22% commission + ₹5,000 monthly stipend.',
      'Tier 3: 200 active referrals = 25% commission + Ambassador tech rewards.'
    ]
  }
];

const UpcomingFeatures = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Upcoming (7)' },
    { id: 'competitive', label: 'Competitions & Teams' },
    { id: 'luck', label: 'Draws & Drops' },
    { id: 'progression', label: 'Milestones & Tiers' },
    { id: 'collectibles', label: 'Cards & Enigmas' },
  ];

  const filteredFeatures = activeCategory === 'all'
    ? upcomingFeaturesData
    : upcomingFeaturesData.filter((item) => item.category === activeCategory);

  const handleSelectFeature = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  return (
    <section className="space-y-6 sm:space-y-8 pt-4" id="upcoming-features-section">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-800/80">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ROADMAP 2026 / LAUNCHING SOON</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
            More Ways to Earn Are Coming
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Discover the next generation of rewards, team competitions, and milestone experiences coming to the <strong className="text-slate-200">VELOP Rewards</strong> ecosystem.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                  : 'bg-[#1b1e32] hover:bg-[#232742] text-slate-400 hover:text-white border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 7 Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {filteredFeatures.map((feature) => (
          <UpcomingCard
            key={feature.id}
            feature={feature}
            onSelect={handleSelectFeature}
          />
        ))}
      </div>

      {/* Interactive Sneak Peek & Waitlist Modal */}
      <FeatureSneakPeekModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        feature={selectedFeature}
      />

    </section>
  );
};

export default UpcomingFeatures;
