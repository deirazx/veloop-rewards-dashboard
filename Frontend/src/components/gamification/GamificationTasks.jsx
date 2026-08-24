import React, { useState } from 'react';
import {
  Flame,
  Play,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Zap,
  Gift,
  Copy,
  ChevronRight,
  Loader2,
  Trophy,
  ExternalLink
} from 'lucide-react';

const GamificationTasks = ({ onCompleteTask, onNavigate }) => {
  const [tasks, setTasks] = useState([
    {
      id: 'daily-challenge',
      title: 'Daily Quest Challenge',
      desc: 'Complete 3 engagement actions across partner hubs today.',
      progress: 2,
      total: 3,
      xpReward: 350,
      veReward: 150,
      badge: 'Daily Reset in 4h',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: Flame,
      iconBg: 'bg-amber-500 text-slate-950 shadow-amber-500/25',
      completed: false,
      btnLabel: 'Complete Final Step',
    },
    {
      id: 'watch-earn',
      title: 'Watch & Earn Sponsor Spotlight',
      desc: 'Watch a verified 30-second brand spotlight & earn instant XP.',
      progress: 0,
      total: 1,
      xpReward: 200,
      veReward: 80,
      badge: '5 Available Today',
      badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
      icon: Play,
      iconBg: 'bg-purple-600 text-white shadow-purple-500/25',
      completed: false,
      btnLabel: 'Watch Video (30s)',
    },
    {
      id: 'refer-earn',
      title: 'Refer & Level Up',
      desc: 'Invite 1 active creator friend. Get massive XP and 15% lifetime cut.',
      progress: 0,
      total: 1,
      xpReward: 1000,
      veReward: 500,
      badge: 'Big XP Bonus',
      badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      icon: Users,
      iconBg: 'bg-emerald-600 text-white shadow-emerald-500/25',
      completed: false,
      btnLabel: 'Copy Invite Link',
    },
    {
      id: 'lucky-spin',
      title: 'Level 4 Lucky Mystery Wheel',
      desc: 'Spin your daily VIP wheel for a chance to win up to 2,000 VEs.',
      progress: 0,
      total: 1,
      xpReward: 150,
      veReward: 250,
      badge: 'Free Daily Spin',
      badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      icon: Sparkles,
      iconBg: 'bg-indigo-600 text-white shadow-indigo-500/25',
      completed: false,
      btnLabel: 'Spin Wheel Now',
    },
  ]);

  const [activeWatchTask, setActiveWatchTask] = useState(false);
  const [watchTimer, setWatchTimer] = useState(5);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleAction = (task) => {
    if (task.completed) return;

    if (task.id === 'watch-earn') {
      // Simulate 5-second quick watch modal
      setActiveWatchTask(true);
      setWatchTimer(5);
      const interval = setInterval(() => {
        setWatchTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setActiveWatchTask(false);
            completeTask(task.id, task.xpReward, task.veReward);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (task.id === 'refer-earn') {
      setCopiedLink(true);
      completeTask(task.id, task.xpReward, task.veReward);
      setTimeout(() => setCopiedLink(false), 2500);
    } else {
      completeTask(task.id, task.xpReward, task.veReward);
    }
  };

  const completeTask = (taskId, xp, ve) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? { ...t, completed: true, progress: t.total }
          : t
      )
    );
    if (onCompleteTask) onCompleteTask(xp, ve);
  };

  return (
    <div className="space-y-4">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500 fill-amber-400" />
            Quick Earn Tasks & Daily Challenges
          </h2>
          <p className="text-xs text-slate-500">
            Complete daily objectives to rapidly accumulate XP and unlock Level 5.
          </p>
        </div>

        <span className="text-xs font-bold text-slate-600 bg-white/80 px-3 py-1 rounded-full border border-slate-200/80 shadow-xs w-fit">
          Refreshes at midnight UTC
        </span>
      </div>

      {/* Task Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {tasks.map((task) => {
          const Icon = task.icon;
          const isDone = task.completed;
          const progressPercent = Math.round((task.progress / task.total) * 100);

          return (
            <div
              key={task.id}
              className={`p-6 rounded-3xl glass-panel glass-card-hover border border-white/80 shadow-md flex flex-col justify-between transition-all relative overflow-hidden group ${
                isDone ? 'bg-emerald-50/30 border-emerald-200' : ''
              }`}
            >
              <div>
                {/* Top Row: Icon + Badges */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className={`p-3 rounded-2xl ${task.iconBg} shadow-md group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${task.badgeColor}`}>
                      {task.badge}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-mono">
                      +{task.xpReward} XP
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono">
                      +{task.veReward} VEs
                    </span>
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-purple-700 transition-colors">
                  {task.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
                  {task.desc}
                </p>

                {/* Progress Bar */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-600">
                    <span>Progress</span>
                    <span>
                      {task.progress} / {task.total} Completed
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/50 shadow-inner">
                    <div
                      style={{ width: `${progressPercent}%` }}
                      className={`h-full rounded-full transition-all duration-500 ${
                        isDone
                          ? 'bg-emerald-500'
                          : 'bg-gradient-to-r from-purple-600 to-amber-500'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleAction(task)}
                disabled={isDone}
                className={`w-full py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 ${
                  isDone
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200 cursor-default shadow-none'
                    : 'bg-slate-900 hover:bg-purple-600 text-white shadow-slate-900/10 hover:shadow-purple-500/25 cursor-pointer'
                }`}
              >
                {isDone ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Completed (+{task.xpReward} XP Earned)</span>
                  </>
                ) : (
                  <>
                    <span>{task.btnLabel}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Simulated Video Player Modal */}
      {activeWatchTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md p-6 rounded-3xl glass-panel bg-white/95 border border-white shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 mx-auto flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Play className="w-8 h-8 fill-purple-600" />
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-lg text-slate-900">
                Playing Sponsor Spotlight
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Stay on screen for reward credit...
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-3">
              <Loader2 className="w-5 h-5 text-purple-600 animate-spin" />
              <span className="text-sm font-mono font-bold text-slate-900">
                00:0{watchTimer} remaining
              </span>
            </div>

            <div className="text-xs text-purple-700 font-bold">
              Reward upon completion: +200 XP & +80 VEs
            </div>
          </div>
        </div>
      )}

      {/* Toast feedback for Copy Link */}
      {copiedLink && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Referral Link Copied! Task Completed: +1,000 XP & +500 VEs credited!</span>
        </div>
      )}

    </div>
  );
};

export default GamificationTasks;
