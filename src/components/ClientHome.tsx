import React from 'react';
import { MapPin, Bell, Search, ChevronRight, Zap, Clock, Star, Shield } from 'lucide-react';
import { AppScreen } from '../types';
import { JOB_CATEGORIES, MOCK_JOBS, MOCK_WORKERS } from '../data';

interface ClientHomeProps {
  onNavigate: (screen: AppScreen) => void;
}

export const ClientHome: React.FC<ClientHomeProps> = ({ onNavigate }) => {
  const activeJobs = MOCK_JOBS.filter(j => j.status === 'posted' || j.status === 'assigned' || j.status === 'in_progress');

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-rozgaar-green to-rozgaar-green-dark px-5 pt-10 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-emerald-200 text-sm">Assalam-o-Alaikum 👋</p>
            <h1 className="text-white text-xl font-bold">Ali Merchant</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center relative">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rozgaar-orange rounded-full text-[9px] text-white flex items-center justify-center font-bold">3</span>
            </button>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-rozgaar-green">A</div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-emerald-100 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Gulberg III, Lahore</span>
          <ChevronRight className="w-4 h-4" />
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            className="w-full bg-white rounded-xl pl-12 pr-4 py-3.5 text-sm placeholder-gray-400 focus:outline-none shadow-lg"
            placeholder="Kya kaam chahiye? e.g. AC repair, loading..."
          />
        </div>
      </div>

      {/* Quick Post Banner */}
      <div className="px-5 -mt-3 relative z-10">
        <button
          onClick={() => onNavigate('post_job')}
          className="w-full bg-gradient-to-r from-rozgaar-orange to-orange-500 rounded-2xl p-4 flex items-center gap-4 shadow-lg shadow-orange-200 active:scale-[0.98] transition-transform"
        >
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <div className="text-left flex-1">
            <h3 className="text-white font-bold text-base">Abhi Kaam Post Karo!</h3>
            <p className="text-orange-100 text-xs">15 second mein — ASAP workers milenge</p>
          </div>
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Categories */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900">Categories</h2>
          <button className="text-rozgaar-green text-sm font-medium">Sab Dekhein</button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {JOB_CATEGORIES.slice(0, 8).map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate('post_job')}
              className="flex flex-col items-center gap-1.5 p-3 bg-gray-50 rounded-xl hover:bg-rozgaar-green-light transition-colors active:scale-95"
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-[10px] font-medium text-gray-700 text-center leading-tight">{cat.name.split('/')[0].trim()}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Jobs */}
      {activeJobs.length > 0 && (
        <div className="px-5 mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">Active Jobs</h2>
            <button onClick={() => onNavigate('my_jobs')} className="text-rozgaar-green text-sm font-medium">Sab Dekhein</button>
          </div>
          <div className="space-y-3">
            {activeJobs.slice(0, 2).map((job) => (
              <div key={job.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{JOB_CATEGORIES.find(c => c.id === job.category)?.icon}</span>
                    <h3 className="font-semibold text-gray-900 text-sm">{job.title}</h3>
                  </div>
                  {job.isAsap && (
                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3" /> ASAP
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.neighborhood}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.postedAt}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-rozgaar-green font-bold text-lg">Rs.{job.price.toLocaleString()}</span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    job.status === 'posted' ? 'bg-yellow-100 text-yellow-700' :
                    job.status === 'assigned' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {job.status === 'posted' ? '🔍 Worker Dhund Raha' :
                     job.status === 'assigned' ? '👷 Worker Assigned' :
                     '🏃 Chal Raha Hai'}
                  </span>
                </div>
                {job.assignedWorker && (
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                    <img src={job.assignedWorker.photo} alt="" className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-xs font-medium text-gray-800">{job.assignedWorker.name}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-[10px] text-gray-500">{job.assignedWorker.rating} • {job.assignedWorker.completedJobs} jobs</span>
                      </div>
                    </div>
                    <span className="ml-auto text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Shield className="w-3 h-3" /> Verified
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Workers */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900">Top Workers Nearby</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {MOCK_WORKERS.filter(w => w.isAvailable).slice(0, 4).map((worker) => (
            <div key={worker.id} className="min-w-[140px] bg-white border border-gray-100 rounded-2xl p-3 shadow-sm text-center">
              <div className="relative inline-block">
                <img src={worker.photo} alt="" className="w-14 h-14 rounded-full object-cover mx-auto" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <h4 className="font-semibold text-gray-900 text-xs mt-2">{worker.name}</h4>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] text-gray-500">{worker.rating} ({worker.completedJobs})</span>
              </div>
              <div className="flex items-center justify-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span className="text-[10px] text-gray-400">{worker.distanceKm}km</span>
              </div>
              <div className="flex gap-1 justify-center mt-2">
                {worker.badges.slice(0, 2).map((b) => (
                  <span key={b.id} className="text-xs" title={b.name}>{b.icon}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Banner */}
      <div className="px-5 mt-6 mb-4">
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-rozgaar-green" />
            <div>
              <h3 className="font-bold text-gray-900 text-sm">100% Escrow Protection</h3>
              <p className="text-gray-500 text-xs mt-0.5">Paise tab release hote hain jab kaam complete ho. JazzCash/EasyPaisa supported.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
