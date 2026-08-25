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
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
          Referral & Affiliate Network
        </h1>
        <p className="text-sm text-slate-500">
          Invite creators, gamers, and friends. Earn <strong className="text-purple-700 font-bold">15% lifetime commissions</strong> on all VEs they earn.
        </p>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-5 rounded-3xl glass-panel glass-card-hover border border-purple-200/90 shadow-md flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Referrals</p>
            <span className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mt-1 block">28 Users</span>
            <span className="text-[11px] font-bold text-emerald-600">+4 this week</span>
          </div>
          <div className="p-3 rounded-2xl bg-purple-100 text-purple-700 shadow-xs">
            <Users className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-3xl glass-panel glass-card-hover border border-amber-200/90 shadow-md flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Commissions Earned</p>
            <span className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mt-1 block">8,650 VEs</span>
            <span className="text-[11px] font-bold text-amber-700">≈ ₹8,650.00 INR</span>
          </div>
          <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 shadow-xs">
            <Gift className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-3xl glass-panel glass-card-hover border border-emerald-200/90 shadow-md flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Affiliate Tier</p>
            <span className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mt-1 block">15% Cut</span>
            <span className="text-[11px] font-bold text-purple-700">Tier 1 Elite Partner</span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700 shadow-xs">
            <Award className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Referral Link Showcase */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white shadow-xl bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-amber-500/10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-extrabold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Your Personal Invite Code
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900">
            Share your unique invite link with friends
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center bg-white px-4 py-3.5 rounded-2xl border border-slate-200 shadow-inner">
              <span className="text-xs sm:text-sm font-mono text-slate-800 font-bold select-all truncate">
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
            <span className="text-xs font-bold text-slate-500 mr-2">Quick Share:</span>
            <button
              onClick={() => window.open('https://api.whatsapp.com/send?text=Join%20Veloops%20Rewards%20with%20my%20link:%20https://veloops.io/r/alex99', '_blank')}
              className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => window.open('https://t.me/share/url?url=https://veloops.io/r/alex99&text=Join%20Veloops%20Rewards!', '_blank')}
              className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
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
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 border border-white/80 shadow-md">
          <h3 className="font-heading font-bold text-lg text-slate-900 mb-4 flex items-center justify-between">
            <span>Recent Invited Friends</span>
            <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">28 Total</span>
          </h3>
          <div className="divide-y divide-slate-100">
            {friends.map((friend, i) => (
              <div key={i} className="py-3.5 flex items-center justify-between hover:bg-slate-50/60 rounded-xl px-2 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-100 to-indigo-100 text-purple-700 font-extrabold flex items-center justify-center shadow-xs">
                    {friend.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{friend.name}</h4>
                    <p className="text-[11px] text-slate-500">{friend.joined} • <span className="font-semibold text-slate-700">{friend.tier}</span></p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-purple-700 font-heading block">
                    {friend.earned}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600">{friend.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invite by Email Box */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-white/80 shadow-md flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-2.5 rounded-2xl bg-purple-100 text-purple-700 w-fit">
              <Send className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">Direct Email Invite</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Enter an email address to send an exclusive VIP starter invitation with <strong>+50 bonus VEs</strong> attached.
            </p>

            <form onSubmit={handleSendInvite} className="space-y-3 pt-2">
              <input
                type="email"
                required
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="friend.name@email.com"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 shadow-inner"
              />
              <button
                type="submit"
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                  inviteSent
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-900 hover:bg-purple-600 text-white active:scale-98'
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

          <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-100 text-[11px] text-purple-900 font-medium mt-4">
            💡 <strong>Pro Tip:</strong> Top ambassadors receive a special <strong>₹5,000 monthly bonus</strong> when hitting 50 active referred members.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralsView;
