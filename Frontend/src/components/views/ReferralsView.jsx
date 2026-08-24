import React from 'react';
import { Users, Gift, Copy, ArrowUpRight, Award, Shield, Check } from 'lucide-react';

const ReferralsView = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const friends = [
    { name: 'Sarah Jenkins', joined: 'Aug 21, 2026', earned: '+1,240 VEs', tier: 'Level 8' },
    { name: 'Michael Chang', joined: 'Aug 19, 2026', earned: '+2,890 VEs', tier: 'Level 12' },
    { name: 'Elena Rostova', joined: 'Aug 14, 2026', earned: '+760 VEs', tier: 'Level 5' },
    { name: 'Devon Miles', joined: 'Aug 08, 2026', earned: '+3,760 VEs', tier: 'Level 15' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
          Referral Program
        </h1>
        <p className="text-sm text-slate-500">
          Invite fellow creators & gamers. Earn 15% bonus VEs for every action they complete.
        </p>
      </div>

      {/* Referral Link Showcase */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white shadow-xl bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-amber-500/10">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">
            <Gift className="w-3.5 h-3.5" />
            Tier 1 Affiliate Level • 15% Lifetime Cut
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900">
            Share your unique invite link with friends
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-inner">
              <span className="text-xs font-mono text-slate-700 select-all truncate">
                https://veloops.io/r/alex99
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md shadow-purple-500/25 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Link!' : 'Copy Invite Link'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Friends list */}
      <div className="glass-panel rounded-3xl p-6 border border-white/80 shadow-md">
        <h3 className="font-heading font-bold text-lg text-slate-900 mb-4">
          Referred Friends ({friends.length})
        </h3>
        <div className="divide-y divide-slate-100">
          {friends.map((friend, i) => (
            <div key={i} className="py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 font-bold flex items-center justify-center">
                  {friend.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{friend.name}</h4>
                  <p className="text-xs text-slate-400">Joined {friend.joined} • {friend.tier}</p>
                </div>
              </div>
              <span className="text-sm font-extrabold text-purple-600 font-heading">
                {friend.earned}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralsView;
