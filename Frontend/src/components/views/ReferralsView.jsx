import React, { useState } from 'react';
import { Users, Gift, Copy, ArrowUpRight, Award, Shield, Check, Send, Sparkles, Share2, MessageCircle } from 'lucide-react';

const ReferralsView = () => {
  const [copied, setCopied] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteSent, setInviteSent] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendInvite = (e) => {
    e.preventDefault();
    if (inviteEmail) {
      setInviteSent(true);
      setTimeout(() => {
        setInviteSent(false);
        setInviteEmail('');
      }, 3000);
    }
  };

  const friends = [
    { name: 'Sarah Jenkins', joined: 'Aug 21, 2026', earned: '+1,240 VEs', tier: 'Level 8', status: 'Active Today' },
    { name: 'Michael Chang', joined: 'Aug 19, 2026', earned: '+2,890 VEs', tier: 'Level 12', status: 'Active Today' },
    { name: 'Elena Rostova', joined: 'Aug 14, 2026', earned: '+760 VEs', tier: 'Level 5', status: 'Active 2d ago' },
    { name: 'Devon Miles', joined: 'Aug 08, 2026', earned: '+3,760 VEs', tier: 'Level 15', status: 'Active Today' },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 text-white">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
          Referral & Affiliate Network
        </h1>
        <p className="text-sm text-slate-400">
          Invite creators, gamers, and friends. Earn <strong className="text-purple-400 font-bold">15% lifetime commissions</strong> on all VEs they earn.
        </p>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-5 rounded-3xl bg-[#1c2035] border border-slate-700/60 shadow-xl flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Referrals</p>
            <span className="text-2xl sm:text-3xl font-black font-heading text-white mt-1 block">28 Users</span>
            <span className="text-[11px] font-bold text-emerald-400">+4 this week</span>
          </div>
          <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 shadow-xs">
            <Users className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-[#1c2035] border border-slate-700/60 shadow-xl flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Commissions Earned</p>
            <span className="text-2xl sm:text-3xl font-black font-heading text-white mt-1 block">8,650 VEs</span>
            <span className="text-[11px] font-bold text-amber-300">≈ ₹8,650.00 INR</span>
          </div>
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 shadow-xs">
            <Gift className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-[#1c2035] border border-slate-700/60 shadow-xl flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Affiliate Tier</p>
            <span className="text-2xl sm:text-3xl font-black font-heading text-white mt-1 block">15% Cut</span>
            <span className="text-[11px] font-bold text-purple-300">Tier 1 Elite Partner</span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 shadow-xs">
            <Award className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Referral Link Showcase */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#1c2035] border border-slate-700/60 shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 text-xs font-extrabold border border-purple-800/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            Your Personal Invite Code
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
            Share your unique invite link with friends
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center bg-[#131522] px-4 py-3.5 rounded-2xl border border-slate-700 shadow-inner">
              <span className="text-xs sm:text-sm font-mono text-slate-200 font-bold select-all truncate">
                https://veloops.io/r/alex99
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-purple-500/25 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Link!' : 'Copy Invite Link'}</span>
            </button>
          </div>

          {/* Quick Social Share Buttons */}
          <div className="flex items-center gap-2 pt-2 flex-wrap">
            <span className="text-xs font-bold text-slate-400 mr-2">Quick Share:</span>
            <button
              onClick={() => window.open('https://api.whatsapp.com/send?text=Join%20Veloops%20Rewards%20with%20my%20link:%20https://veloops.io/r/alex99', '_blank')}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => window.open('https://t.me/share/url?url=https://veloops.io/r/alex99&text=Join%20Veloops%20Rewards!', '_blank')}
              className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2-Column: Friends List & Invite via Email */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Friends list */}
        <div className="lg:col-span-7 rounded-3xl bg-[#1c2035] p-6 border border-slate-700/60 shadow-xl">
          <h3 className="font-heading font-bold text-lg text-white mb-4 flex items-center justify-between">
            <span>Recent Invited Friends</span>
            <span className="text-xs font-bold text-purple-300 bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-800/80">28 Total</span>
          </h3>
          <div className="divide-y divide-slate-800">
            {friends.map((friend, i) => (
              <div key={i} className="py-3.5 flex items-center justify-between hover:bg-[#232742]/50 rounded-xl px-2 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-300 font-extrabold flex items-center justify-center shadow-xs">
                    {friend.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{friend.name}</h4>
                    <p className="text-[11px] text-slate-400">{friend.joined} • <span className="font-semibold text-slate-300">{friend.tier}</span></p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-purple-400 font-heading block">
                    {friend.earned}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400">{friend.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invite by Email Box */}
        <div className="lg:col-span-5 rounded-3xl bg-[#1c2035] p-6 border border-slate-700/60 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-2.5 rounded-2xl bg-purple-500/20 text-purple-300 w-fit">
              <Send className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">Direct Email Invite</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enter an email address to send an exclusive VIP starter invitation with <strong className="text-amber-300">+50 bonus VEs</strong> attached.
            </p>

            <form onSubmit={handleSendInvite} className="space-y-3 pt-2">
              <input
                type="email"
                required
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="friend.name@email.com"
                className="w-full px-3.5 py-2.5 bg-[#131522] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 shadow-inner"
              />
              <button
                type="submit"
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                  inviteSent
                    ? 'bg-emerald-600 text-white'
                    : 'bg-purple-600 hover:bg-purple-700 text-white active:scale-98 shadow-purple-500/25'
                }`}
              >
                {inviteSent ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Invitation Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send VIP Invite</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#141624] border border-purple-500/20 text-[11px] text-purple-300 font-medium mt-4">
            💡 <strong className="text-white">Pro Tip:</strong> Top ambassadors receive a special <strong className="text-amber-300">₹5,000 monthly bonus</strong> when hitting 50 active referred members.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralsView;
