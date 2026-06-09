import React from 'react';
import { Briefcase, Wrench, BarChart3, ArrowRight } from 'lucide-react';
import { UserRole } from '../types';

interface RoleSelectProps {
  onSelect: (role: UserRole) => void;
}

export const RoleSelect: React.FC<RoleSelectProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rozgaar-green via-rozgaar-green-dark to-emerald-900 flex flex-col">
      {/* Header */}
      <div className="pt-12 pb-6 px-6 text-center">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4 rotate-3">
          <span className="text-4xl">💼</span>
        </div>
        <h1 className="text-3xl font-black text-white mb-1">Rozgaar</h1>
        <p className="text-emerald-200 text-sm">Aaj Ka Kaam, Aaj Ki Kamayi</p>
      </div>

      {/* Role cards */}
      <div className="flex-1 bg-white rounded-t-[2rem] px-5 pt-8 pb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Aap kaun hain?</h2>
        <p className="text-gray-500 text-sm mb-6">Apna role select karein — baad mein change bhi kar sakte hain</p>

        {/* Client */}
        <button
          onClick={() => onSelect('client')}
          className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-2xl p-5 mb-4 text-left group hover:border-blue-300 transition-all active:scale-[0.98]"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg">Kaam Dene Wala</h3>
              <p className="text-gray-500 text-sm mt-1">
                Client — Ghar, dukaan ya office ke liye kaam post karein aur verified workers hire karein
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">📦 Loading</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">🔧 Repair</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">🧹 Safai</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">🏍️ Delivery</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 mt-2 transition-colors" />
          </div>
        </button>

        {/* Worker */}
        <button
          onClick={() => onSelect('worker')}
          className="w-full bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-100 rounded-2xl p-5 mb-4 text-left group hover:border-green-300 transition-all active:scale-[0.98]"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-rozgaar-green rounded-xl flex items-center justify-center shrink-0">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg">Kaam Karne Wala</h3>
              <p className="text-gray-500 text-sm mt-1">
                Worker — Apne area mein kaam dhundein, accept karein aur rozana kamayi karein
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">💰 Rozana Rs.2000-5000</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">⚡ ASAP Jobs</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 mt-2 transition-colors" />
          </div>
        </button>

        {/* Admin / Ops */}
        <button
          onClick={() => onSelect('admin')}
          className="w-full bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-100 rounded-2xl p-5 mb-4 text-left group hover:border-purple-300 transition-all active:scale-[0.98]"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center shrink-0">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg">Admin / Ops Team</h3>
              <p className="text-gray-500 text-sm mt-1">
                Dashboard, KPIs, dispute management, ops playbook, ad scripts & investor materials
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 mt-2 transition-colors" />
          </div>
        </button>

        <p className="text-center text-gray-400 text-xs mt-4">
          Rozgaar v1.0 MVP • Lahore, Pakistan 🇵🇰
        </p>
      </div>
    </div>
  );
};
