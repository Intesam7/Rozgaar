import React, { useState } from 'react';
import { ArrowLeft, Share2, Copy, CheckCircle2, Gift, Users, Wallet } from 'lucide-react';
import { AppScreen, UserRole } from '../types';

interface ReferralProps {
  onNavigate: (screen: AppScreen) => void;
  role: UserRole;
}

export const Referral: React.FC<ReferralProps> = ({ onNavigate, role }) => {
  const [copied, setCopied] = useState(false);
  const referralCode = 'AHMED-R2X';
  const referralLink = 'rozgaar.pk/ref/AHMED-R2X';

  const handleCopy = () => {
    navigator.clipboard?.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = {
    totalReferred: 12,
    completedReferrals: 8,
    pendingReferrals: 4,
    totalEarned: 800,
  };

  const referrals = [
    { name: 'Usman Ali', status: 'completed', jobs: 5, earned: 100 },
    { name: 'Tariq Mehmood', status: 'completed', jobs: 4, earned: 100 },
    { name: 'Rizwan Khan', status: 'completed', jobs: 7, earned: 100 },
    { name: 'Sajid Hussain', status: 'pending', jobs: 1, earned: 0 },
    { name: 'Noman Shah', status: 'pending', jobs: 0, earned: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 px-5 pt-10 pb-8 rounded-b-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4" />
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => onNavigate(role === 'worker' ? 'home_worker' : 'home_client')}
            className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="font-bold text-lg text-white">Refer & Earn 🎁</h1>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <Gift className="w-9 h-9 text-white" />
          </div>
          <h2 className="text-white text-xl font-bold mb-1">
            {role === 'worker' ? 'Rs.100 per referral!' : 'Rs.50 per referral!'}
          </h2>
          <p className="text-purple-200 text-sm">
            {role === 'worker'
              ? 'Apne saathiyon ko bulao — jab woh 3 kaam complete karein, aapko Rs.100 milenge'
              : 'Doston ko bulao — jab woh pehla kaam post karein, aapko Rs.50 milenge'}
          </p>
        </div>
      </div>

      {/* Referral Code */}
      <div className="px-5 -mt-4">
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
          <p className="text-xs text-gray-500 mb-2 text-center">Aapka Referral Code</p>
          <div className="flex items-center gap-2 bg-purple-50 rounded-xl p-3 mb-4">
            <span className="flex-1 text-center text-lg font-black text-purple-700 tracking-wider">{referralCode}</span>
            <button
              onClick={handleCopy}
              className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center"
            >
              {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-purple-500" />}
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm active:scale-95 transition-transform"
            >
              <Share2 className="w-4 h-4" /> WhatsApp Share
            </button>
            <button
              onClick={handleCopy}
              className="bg-gray-100 text-gray-700 font-bold px-4 py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 mt-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
            <Users className="w-5 h-5 text-purple-500 mx-auto mb-1" />
            <p className="text-xl font-black text-gray-900">{stats.totalReferred}</p>
            <p className="text-[10px] text-gray-500">Total Referred</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
            <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto mb-1" />
            <p className="text-xl font-black text-gray-900">{stats.completedReferrals}</p>
            <p className="text-[10px] text-gray-500">Completed</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
            <Wallet className="w-5 h-5 text-orange-500 mx-auto mb-1" />
            <p className="text-xl font-black text-gray-900">Rs.{stats.totalEarned}</p>
            <p className="text-[10px] text-gray-500">Earned</p>
          </div>
        </div>
      </div>

      {/* Referral List */}
      <div className="px-5 mt-4">
        <h3 className="font-bold text-gray-900 mb-3">Recent Referrals</h3>
        <div className="space-y-2">
          {referrals.map((ref, i) => (
            <div key={i} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                ref.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
              }`}>
                {ref.name[0]}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{ref.name}</p>
                <p className="text-[10px] text-gray-400">
                  {ref.status === 'completed' ? `✅ ${ref.jobs} jobs done` : `⏳ ${ref.jobs}/3 jobs`}
                </p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${ref.earned > 0 ? 'text-green-600' : 'text-gray-400'}`}>
                  {ref.earned > 0 ? `+Rs.${ref.earned}` : 'Pending'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="px-5 mt-6 mb-4">
        <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
          <h4 className="font-bold text-gray-900 text-sm mb-3">Kaise Kaam Karta Hai?</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-xs font-bold text-purple-700 shrink-0">1</span>
              <p className="text-xs text-gray-700">Apna code share karo — WhatsApp, in-person, ya poster pe</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-xs font-bold text-purple-700 shrink-0">2</span>
              <p className="text-xs text-gray-700">Jab woh register karein aur aapka code dalein</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-xs font-bold text-purple-700 shrink-0">3</span>
              <p className="text-xs text-gray-700">
                {role === 'worker'
                  ? 'Jab woh 3 kaam complete karein → Rs.100 aapke wallet mein!'
                  : 'Jab woh pehla paid kaam post karein → Rs.50 aapke wallet mein!'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
