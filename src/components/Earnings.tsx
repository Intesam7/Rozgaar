import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Wallet, ArrowDownCircle, Clock, CheckCircle2, Zap } from 'lucide-react';
import { AppScreen } from '../types';

interface EarningsProps {
  onNavigate: (screen: AppScreen) => void;
}

export const Earnings: React.FC<EarningsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'today' | 'week' | 'month'>('today');

  const weeklyData = [
    { day: 'Mon', amount: 2800 },
    { day: 'Tue', amount: 3500 },
    { day: 'Wed', amount: 1200 },
    { day: 'Thu', amount: 4200 },
    { day: 'Fri', amount: 3800 },
    { day: 'Sat', amount: 5100 },
    { day: 'Sun', amount: 3200 },
  ];

  const maxAmount = Math.max(...weeklyData.map(d => d.amount));

  const transactions = [
    { id: 1, title: 'AC Repair — Model Town', amount: 1800, time: '2 ghante pehle', status: 'completed' as const },
    { id: 2, title: 'Loading — Gulberg', amount: 2500, time: '4 ghante pehle', status: 'completed' as const },
    { id: 3, title: 'Delivery — Saddar', amount: 500, time: 'Chal raha hai', status: 'pending' as const },
    { id: 4, title: 'Safai — DHA Phase 5', amount: 3000, time: 'Kal', status: 'completed' as const },
    { id: 5, title: 'Dukaan Help — Johar Town', amount: 1200, time: 'Kal', status: 'completed' as const },
  ];

  const todayEarnings = 3200;
  const weekEarnings = weeklyData.reduce((sum, d) => sum + d.amount, 0);
  const monthEarnings = 185000;
  const displayAmount = activeTab === 'today' ? todayEarnings : activeTab === 'week' ? weekEarnings : monthEarnings;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-rozgaar-green to-emerald-700 px-5 pt-10 pb-8 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => onNavigate('home_worker')}
            className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="font-bold text-lg text-white">Meri Kamayi</h1>
        </div>

        {/* Period tabs */}
        <div className="flex gap-2 mb-4">
          {(['today', 'week', 'month'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab ? 'bg-white text-rozgaar-green' : 'bg-white/15 text-white'
              }`}
            >
              {tab === 'today' ? 'Aaj' : tab === 'week' ? 'Hafta' : 'Mahina'}
            </button>
          ))}
        </div>

        {/* Amount */}
        <div className="text-center">
          <p className="text-emerald-200 text-sm mb-1">
            {activeTab === 'today' ? 'Aaj Ki Kamayi' : activeTab === 'week' ? 'Is Hafte Ki Kamayi' : 'Is Mahine Ki Kamayi'}
          </p>
          <h2 className="text-4xl font-black text-white count-up">Rs.{displayAmount.toLocaleString()}</h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            <TrendingUp className="w-4 h-4 text-emerald-300" />
            <span className="text-emerald-300 text-sm font-medium">+12% vs last {activeTab === 'today' ? 'day' : activeTab === 'week' ? 'week' : 'month'}</span>
          </div>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="px-5 -mt-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 mb-3">Hafta Wari Kamayi</h3>
          <div className="flex items-end gap-2 h-32">
            {weeklyData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[9px] text-gray-500 font-medium">
                  {(d.amount / 1000).toFixed(1)}k
                </span>
                <div className="w-full rounded-t-lg overflow-hidden bg-gray-100" style={{ height: '100px' }}>
                  <div
                    className={`w-full rounded-t-lg transition-all duration-500 ${
                      d.day === 'Sun' ? 'bg-rozgaar-green' : 'bg-emerald-200'
                    }`}
                    style={{ height: `${(d.amount / maxAmount) * 100}%`, marginTop: `${100 - (d.amount / maxAmount) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] text-gray-500">{d.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instant Cashout */}
      <div className="px-5 mt-4">
        <button className="w-full bg-gradient-to-r from-rozgaar-orange to-orange-500 rounded-2xl p-4 flex items-center gap-3 shadow-lg shadow-orange-100 active:scale-[0.98] transition-transform">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="text-left flex-1">
            <h3 className="text-white font-bold text-sm">Instant Cashout</h3>
            <p className="text-orange-100 text-xs">JazzCash/EasyPaisa mein abhi withdraw karein (Rs.10 fee)</p>
          </div>
          <Wallet className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Transactions */}
      <div className="px-5 mt-6">
        <h3 className="font-bold text-gray-900 mb-3">Recent Transactions</h3>
        <div className="space-y-2">
          {transactions.map((tx) => (
            <div key={tx.id} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                tx.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
              }`}>
                {tx.status === 'completed' ? (
                  <ArrowDownCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <Clock className="w-5 h-5 text-yellow-600" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{tx.title}</p>
                <p className="text-[10px] text-gray-400">{tx.time}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${tx.status === 'completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                  +Rs.{tx.amount.toLocaleString()}
                </p>
                <p className="text-[10px] text-gray-400 flex items-center gap-0.5 justify-end">
                  {tx.status === 'completed' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                  {tx.status === 'completed' ? 'Received' : 'Escrow'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
