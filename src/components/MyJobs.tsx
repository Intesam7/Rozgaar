import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Star, Zap, Camera, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { AppScreen } from '../types';
import { MOCK_JOBS, JOB_CATEGORIES } from '../data';

interface MyJobsProps {
  onNavigate: (screen: AppScreen) => void;
  role: 'client' | 'worker' | 'admin';
}

export const MyJobs: React.FC<MyJobsProps> = ({ onNavigate, role }) => {
  const [activeTab, setActiveTab] = useState<'active' | 'completed' | 'disputed'>('active');

  const tabs = [
    { id: 'active' as const, label: 'Active', count: MOCK_JOBS.filter(j => ['posted', 'assigned', 'in_progress'].includes(j.status)).length },
    { id: 'completed' as const, label: 'Done', count: MOCK_JOBS.filter(j => j.status === 'completed').length },
    { id: 'disputed' as const, label: 'Dispute', count: MOCK_JOBS.filter(j => j.status === 'disputed').length },
  ];

  const filteredJobs = MOCK_JOBS.filter(j => {
    if (activeTab === 'active') return ['posted', 'assigned', 'in_progress'].includes(j.status);
    if (activeTab === 'completed') return j.status === 'completed';
    return j.status === 'disputed';
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-10 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate(role === 'worker' ? 'home_worker' : 'home_client')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="font-bold text-lg text-gray-900">Mere Kaam</h1>
        </div>

        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-rozgaar-green text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Jobs list */}
      <div className="px-5 pt-4 space-y-3">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">📋</span>
            <p className="text-gray-500 text-sm">Koi kaam nahi hai is category mein</p>
          </div>
        ) : (
          filteredJobs.map((job) => {
            const cat = JOB_CATEGORIES.find(c => c.id === job.category);
            return (
              <div key={job.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{cat?.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{job.title}</h3>
                      <p className="text-[10px] text-gray-400">{job.postedBy}</p>
                    </div>
                  </div>
                  <p className="text-rozgaar-green font-bold">Rs.{job.price.toLocaleString()}</p>
                </div>

                <p className="text-xs text-gray-600 mb-3">{job.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center gap-1 text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    <MapPin className="w-3 h-3" /> {job.neighborhood}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    <Clock className="w-3 h-3" /> {job.postedAt}
                  </span>
                  {job.isAsap && (
                    <span className="flex items-center gap-1 text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">
                      <Zap className="w-3 h-3" /> ASAP
                    </span>
                  )}
                </div>

                {/* Status-specific actions */}
                {job.status === 'assigned' && job.assignedWorker && (
                  <div className="bg-blue-50 rounded-xl p-3 mb-3">
                    <div className="flex items-center gap-2">
                      <img src={job.assignedWorker.photo} alt="" className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="text-xs font-medium">{job.assignedWorker.name}</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-[10px] text-gray-500">{job.assignedWorker.rating}</span>
                          <Shield className="w-3 h-3 text-green-500 ml-1" />
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                        Worker aa raha hai
                      </span>
                    </div>
                  </div>
                )}

                {job.status === 'in_progress' && (
                  <div className="bg-green-50 rounded-xl p-3 mb-3">
                    <div className="flex items-center gap-2 text-sm text-green-700 font-medium">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      Kaam chal raha hai...
                    </div>
                    {role === 'worker' && (
                      <button className="mt-2 w-full bg-rozgaar-green text-white text-sm font-bold py-2.5 rounded-xl flex items-center justify-center gap-2">
                        <Camera className="w-4 h-4" /> Photo Proof Upload
                      </button>
                    )}
                  </div>
                )}

                {job.status === 'completed' && (
                  <div className="bg-emerald-50 rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-emerald-700 font-medium">
                        <CheckCircle2 className="w-4 h-4" /> Complete
                        {job.completionTime && <span className="text-[10px] text-gray-500">• {job.completionTime}</span>}
                      </div>
                      {job.rating && (
                        <div className="flex items-center gap-1">
                          {[...Array(job.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      )}
                    </div>
                    {job.completionPhoto && (
                      <img src={job.completionPhoto} alt="Proof" className="w-full h-24 object-cover rounded-lg mt-2" />
                    )}
                  </div>
                )}

                {/* Action buttons */}
                {job.status === 'posted' && role === 'client' && (
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-100 text-gray-700 text-sm font-medium py-2.5 rounded-xl">
                      Edit
                    </button>
                    <button className="flex-1 bg-red-50 text-red-600 text-sm font-medium py-2.5 rounded-xl flex items-center justify-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Cancel
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
