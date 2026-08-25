import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Coins,
  QrCode,
  CreditCard,
  Copy,
  ExternalLink,
  Loader2
} from 'lucide-react';

const RedeemModal = ({ isOpen, onClose, initialMethod, veBalance, inrRate = 1.0, onSuccessRedeem }) => {
  const [method, setMethod] = useState(initialMethod || 'upi');
  const [denomination, setDenomination] = useState(500);
  const [upiId, setUpiId] = useState('alexmercer@okaxis');
  const [email, setEmail] = useState('alex.mercer@veloops.io');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [txId, setTxId] = useState('');

  if (!isOpen) return null;

  const requiredVEs = Math.round(denomination / inrRate);
  const canAfford = veBalance >= requiredVEs;

  const handleConfirmRedeem = () => {
    if (!canAfford) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      const generatedTx = 'VELOOP-' + Math.random().toString(36).substring(2, 9).toUpperCase();
      setTxId(generatedTx);
      if (onSuccessRedeem) {
        onSuccessRedeem({
          method,
          amountINR: denomination,
          veDeducted: requiredVEs,
          txId: generatedTx,
        });
      }
    }, 1200);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setIsLoading(false);
    onClose();
  };

  const denominations = [100, 250, 500, 1000, 2500, 5000];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#1c2035] border border-slate-700 shadow-2xl p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200 text-white">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="text-center py-6 space-y-5 animate-in zoom-in-90 duration-300">
            <div className="w-16 h-16 rounded-3xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 uppercase tracking-wide">
                Transfer Initiated • Instant Settlement
              </span>
              <h3 className="text-2xl font-extrabold font-heading text-white pt-2">
                ₹{denomination.toLocaleString('en-IN')} Sent Successfully!
              </h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                {method === 'upi'
                  ? `Funds transferred directly to UPI ID: ${upiId}`
                  : method === 'amazon'
                  ? `Voucher code dispatched to ${email}`
                  : `Play Store gift voucher code sent via SMS to ${phone}`}
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="p-4 rounded-2xl bg-[#141624] border border-slate-800 text-left space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Transaction Ref:</span>
                <span className="font-mono font-bold text-white">{txId}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>VEs Deducted:</span>
                <span className="font-bold text-purple-400">-{requiredVEs.toLocaleString()} VEs</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Fee / Commission:</span>
                <span className="font-bold text-emerald-400">₹0.00 (Zero Fee)</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md shadow-purple-500/25 transition-all cursor-pointer"
            >
              Done & Return to Wallet
            </button>
          </div>
        ) : (
          /* FORM STATE */
          <div className="space-y-6">
            <div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/80 uppercase">
                Rewards Redemption
              </span>
              <h3 className="text-xl font-extrabold font-heading text-white mt-1">
                Redeem Your VEs for Real Value
              </h3>
              <p className="text-xs text-slate-400">
                Select your payout channel and amount. Instant execution.
              </p>
            </div>

            {/* Method Tabs */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-[#141624] rounded-2xl border border-slate-800">
              {[
                { id: 'upi', label: 'UPI Direct', icon: QrCode },
                { id: 'amazon', label: 'Amazon Pay', icon: CreditCard },
                { id: 'googleplay', label: 'Google Play', icon: Sparkles },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setMethod(tab.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    method === tab.id
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Denomination Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 flex justify-between">
                <span>Select Amount (INR)</span>
                <span className="text-slate-400 font-normal">Available: {veBalance.toLocaleString()} VEs</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {denominations.map((amount) => {
                  const cost = Math.round(amount / inrRate);
                  const isSelect = denomination === amount;
                  const affordable = veBalance >= cost;

                  return (
                    <button
                      key={amount}
                      onClick={() => setDenomination(amount)}
                      disabled={!affordable}
                      className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                        isSelect
                          ? 'bg-purple-600 text-white border-purple-500 shadow-sm font-bold'
                          : affordable
                          ? 'bg-[#141624] hover:bg-[#20243d] text-slate-200 border-slate-700 font-semibold'
                          : 'bg-[#131522] text-slate-600 border-slate-800 cursor-not-allowed text-xs'
                      }`}
                    >
                      <div className="text-xs">₹{amount}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Inputs per Method */}
            {method === 'upi' && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Enter Virtual Payment Address (UPI ID)</label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="e.g. mobile@upi or username@okaxis"
                  className="w-full px-3.5 py-2.5 bg-[#131522] border border-slate-700 rounded-xl text-xs sm:text-sm font-mono text-white placeholder-slate-500 focus:border-purple-500 outline-none"
                />
                <p className="text-[10px] text-slate-500">Supports GPay, PhonePe, Paytm, BHIM and all bank UPI apps</p>
              </div>
            )}

            {method === 'amazon' && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Amazon Gift Card Delivery Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-3.5 py-2.5 bg-[#131522] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:border-purple-500 outline-none"
                />
                <p className="text-[10px] text-slate-500">16-digit voucher code delivered in under 60 seconds</p>
              </div>
            )}

            {method === 'googleplay' && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Mobile Number for Play Store Code SMS</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 bg-[#131522] border border-slate-700 rounded-xl text-xs sm:text-sm font-mono text-white placeholder-slate-500 focus:border-purple-500 outline-none"
                />
                <p className="text-[10px] text-slate-500">Directly redeemable on Google Play Store for games & apps</p>
              </div>
            )}

            {/* Cost Breakdown & Action */}
            <div className="p-3.5 rounded-2xl bg-[#141624] border border-purple-500/30 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-400">Total VEs to Deduct</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-lg font-extrabold font-heading text-purple-300">
                    {requiredVEs.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-purple-400">VEs</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-white">₹{denomination.toLocaleString('en-IN')} Payout</span>
                <p className="text-[10px] text-emerald-400 font-semibold">0% Platform Fee</p>
              </div>
            </div>

            <button
              onClick={handleConfirmRedeem}
              disabled={!canAfford || isLoading}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                !canAfford
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed shadow-none'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-purple-500/25 active:scale-[0.99]'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Settlement...</span>
                </>
              ) : !canAfford ? (
                <span>Insufficient Liquid VEs</span>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                  <span>Confirm & Redeem ₹{denomination}</span>
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default RedeemModal;
