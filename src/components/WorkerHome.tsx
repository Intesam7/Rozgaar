import React, { useState } from 'react';
import { MapPin, Bell, Clock, Zap, TrendingUp, CheckCircle2, Filter } from 'lucide-react';
import type { AppScreen } from '../types';
import { MOCK_JOBS, JOB_CATEGORIES, NEIGHBORHOODS } from '../data';

interface WorkerHomeProps {
  onNavigate: (screen: AppScreen) => void;
}

export const WorkerHome: React.FC<WorkerHomeProps> = ({ onNavigate: _onNavigate }) => {
  void _onNavigate;
  const [isAvailable, setIsAvailable] = useState(true);
  const [selectedArea, setSelectedArea] = useState('Gulberg');
  const [showFilter, setShowFilter] = useState(false);

  const availableJobs = MOCK_JOBS.filter(j => j.status === 'posted');

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-rozgaar-green to-rozgaar-green-dark px-5 pt-10 pb-5 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-emerald-200 text-sm">Aaj ki Kamayi 💰</p>
            <h1 className="text-white text-3xl font-black">Rs.3,200</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center relative">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rozgaar-orange rounded-full text-[9px] text-white flex items-center justify-center font-bold">5</span>
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-white/15 rounded-xl p-2.5 text-center">
            <p className="text-white text-lg font-bold">127</p>
            <p className="text-emerald-200 text-[10px]">Total Jobs</p>
          </div>
          <div className="bg-white/15 rounded-xl p-2.5 text-center">
            <p className="text-white text-lg font-bold">96%</p>
            <p className="text-emerald-200 text-[10px]">Completion</p>
          </div>
          <div className="bg-white/15 rounded-xl p-2.5 text-center">
            <p className="text-white text-lg font-bold">4.8⭐</p>
            <p className="text-emerald-200 text-[10px]">Rating</p>
          </div>
        </div>

        {/* Availability toggle */}
        <div className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
          <div>
            <p className="text-white font-semibold text-sm">
              {isAvailable ? '🟢 Online — Kaam Mil Sakta Hai' : '🔴 Offline — Aaram Karo'}
            </p>
            <p className="text-emerald-200 text-xs mt-0.5">
              <MapPin className="w-3 h-3 inline" /> {selectedArea}
            </p>
          </div>
          <button
            onClick={() => setIsAvailable(!isAvailable)}
            className={`w-14 h-7 rounded-full transition-all relative ${isAvailable ? 'bg-white' : 'bg-white/30'}`}
          >
            <div className={`w-5 h-5 rounded-full transition-all absolute top-1 ${
              isAvailable ? 'right-1 bg-rozgaar-green' : 'left-1 bg-gray-400'
            }`} />
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="px-5 mt-4 flex items-center gap-2">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm font-medium text-gray-700"
        >
          <Filter className="w-4 h-4" /> Filter
        </button>
        <div className="flex gap-2 overflow-x-auto">
          {NEIGHBORHOODS.slice(0, 4).map((n) => (
            <button
              key={n}
              onClick={() => setSelectedArea(n)}
              className={`whitespace-nowrap text-xs font-medium px-3 py-2 rounded-xl border transition-all ${
                selectedArea === n ? 'bg-rozgaar-green text-white border-rozgaar-green' : 'bg-white text-gray-600 border-gray-200'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Available Jobs */}
      <div className="px-5 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900">
            Available Jobs <span className="text-rozgaar-green">({availableJobs.length})</span>
          </h2>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" /> Just now
          </div>
        </div>

        <div className="space-y-3">
          {availableJobs.map((job) => {
            const cat = JOB_CATEGORIES.find(c => c.id === job.category);
            // AI-generated match score
            const matchScore = Math.floor(Math.random() * 20) + 80;
            return (
              <div
                key={job.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm active:scale-[0.98] transition-transform"
              >
                {/* Match Score Bar */}
                <div className={`h-1 ${matchScore > 90 ? 'bg-rozgaar-green' : matchScore > 80 ? 'bg-yellow-400' : 'bg-gray-300'}`}
                  style={{ width: `${matchScore}%` }}
                />
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{cat?.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{job.title}</h3>
                        <p className="text-[10px] text-gray-400">{job.postedBy} • {job.postedAt}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-rozgaar-green font-bold text-lg">Rs.{job.price.toLocaleString()}</p>
                      <p className="text-[10px] text-gray-400">
                        AI suggest: Rs.{job.suggestedPrice.min}-{job.suggestedPrice.max}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">{job.description}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center gap-1 text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      <MapPin className="w-3 h-3" /> {job.neighborhood}
                    </span>
                    {job.isAsap && (
                      <span className="flex items-center gap-1 text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">
                        <Zap className="w-3 h-3" /> ASAP
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-[10px] bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                      <TrendingUp className="w-3 h-3" /> {matchScore}% Match
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-rozgaar-green text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 active:bg-rozgaar-green-dark transition-colors">
                      <CheckCircle2 className="w-4 h-4" /> Accept Karo
                    </button>
                    <button className="bg-gray-100 text-gray-600 font-medium text-sm px-4 py-3 rounded-xl">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Earnings Tip */}
      <div className="px-5 mt-6 mb-4">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Kamayi Tip</h3>
              <p className="text-gray-600 text-xs mt-1">
                ASAP jobs pe zyada paise milte hain! Apni availability ON rakhein aur Gulberg area mein zyada kaam milta hai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
