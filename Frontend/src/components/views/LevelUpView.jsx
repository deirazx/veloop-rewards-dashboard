import React, { useState } from 'react';
import CurrentLevelCard from '../gamification/CurrentLevelCard';
import LevelJourneyTimeline from '../gamification/LevelJourneyTimeline';
import GamificationTasks from '../gamification/GamificationTasks';
import { Sparkles, Trophy, CheckCircle2, Zap, Award } from 'lucide-react';

const LevelUpView = ({ onNavigate, onXpGain, onVeGain }) => {
  const [currentLevel, setCurrentLevel] = useState(4);
  const [currentXp, setCurrentXp] = useState(6420);
  const targetXp = 8000;
  const [showLevelUpAlert, setShowLevelUpAlert] = useState(false);
  const [recentGain, setRecentGain] = useState(null);

  const handleTaskComplete = (xpAmount, veAmount) => {
    setCurrentXp((prev) => {
      const nextXp = prev + xpAmount;
      if (nextXp >= targetXp) {
        setShowLevelUpAlert(true);
      }
      return nextXp;
    });

    setRecentGain({ xp: xpAmount, ve: veAmount });
    if (onXpGain) onXpGain(xpAmount);
    if (onVeGain) onVeGain(veAmount);

    setTimeout(() => {
      setRecentGain(null);
    }, 3500);
  };

  const handleClaimLevelBonus = (xpBonus) => {
    handleTaskComplete(xpBonus, 100);
  };

  return (
    <div className="space-y-8 pb-12 text-white">
      
      {/* Toast floating reward notification */}
      {recentGain && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-[#1c2035] border border-purple-500/50 shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <div className="p-2.5 rounded-xl bg-purple-600 text-white shadow-md shadow-purple-500/20">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-white font-heading">
              Rewards Credited!
            </h4>
            <p className="text-xs text-purple-300 font-bold">
              +{recentGain.xp} XP • +{recentGain.ve} VEs added to Vault
            </p>
          </div>
        </div>
      )}

      {/* 1. Primary Current Level Card (Level 4, 6,420 / 8,000 XP) */}
      <section>
        <CurrentLevelCard
          currentLevel={currentLevel}
          levelTitle="Platinum Vanguard"
          currentXp={currentXp}
          targetXp={targetXp}
          multiplier="1.25x"
          nextMultiplier="1.50x"
          onClaimLevelBonus={handleClaimLevelBonus}
        />
      </section>

      {/* 2. Horizontal Level Journey Timeline (Beginner to Legend) */}
      <section>
        <LevelJourneyTimeline currentLevel={currentLevel} />
      </section>

      {/* 3. Quick Actions & Gamification Quests */}
      <section>
        <GamificationTasks
          onCompleteTask={handleTaskComplete}
          onNavigate={onNavigate}
        />
      </section>

      {/* Level Up Celebration Modal */}
      {showLevelUpAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-lg p-8 rounded-3xl bg-[#1c2035] border border-slate-700 shadow-2xl text-center space-y-5 animate-in zoom-in-95 text-white">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 via-purple-600 to-indigo-600 p-[2px] mx-auto shadow-2xl shadow-purple-500/30">
              <div className="w-full h-full bg-[#161827] rounded-[22px] flex items-center justify-center">
                <Trophy className="w-10 h-10 text-amber-300" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/40 uppercase">
                Rank Ascension Achieved
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white pt-2">
                Level 5: Diamond Master Unlocked! 🎉
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Your earning multiplier is now upgraded to <strong className="text-amber-300">1.50x VEs Boost</strong> with zero withdrawal fees.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141624] border border-purple-500/30 text-left space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Unlocked Diamond Mystery Box (+2,500 VEs)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Priority 24/7 VIP Concierge Support</span>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentLevel(5);
                setShowLevelUpAlert(false);
              }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-purple-500/25 transition-all active:scale-98 cursor-pointer"
            >
              Equip Level 5 Badges & Perks
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default LevelUpView;
