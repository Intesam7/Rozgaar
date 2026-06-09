import React from 'react';
import { ArrowLeft, Star, MapPin, Shield, Phone, CreditCard, Award, Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import { AppScreen } from '../types';
import { MOCK_WORKERS, JOB_CATEGORIES } from '../data';

interface WorkerProfileProps {
  onNavigate: (screen: AppScreen) => void;
}

export const WorkerProfile: React.FC<WorkerProfileProps> = ({ onNavigate }) => {
  const worker = MOCK_WORKERS[0]; // Ahmed Raza as the logged-in worker

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-rozgaar-green to-emerald-700 px-5 pt-10 pb-16 rounded-b-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => onNavigate('home_worker')}
            className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="font-bold text-lg text-white">Mera Profile</h1>
        </div>
      </div>

      {/* Profile Card */}
      <div className="px-5 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img src={worker.photo} alt="" className="w-20 h-20 rounded-2xl object-cover" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{worker.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-gray-900">{worker.rating}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">{worker.completedJobs} jobs</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                <MapPin className="w-3 h-3" /> {worker.neighborhood}, Lahore
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {worker.badges.map((badge) => (
              <span
                key={badge.id}
                className="badge-shine inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ backgroundColor: badge.color + '15', color: badge.color }}
              >
                {badge.icon} {badge.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-5 mt-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-xs text-gray-500">Completion Rate</span>
            </div>
            <p className="text-2xl font-black text-gray-900">{worker.completionRate}%</p>
            <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
              <div className="h-full bg-green-500 rounded-full progress-animate" style={{ width: `${worker.completionRate}%` }} />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-xs text-gray-500">Reliability</span>
            </div>
            <p className="text-2xl font-black text-gray-900">{worker.reliabilityScore}%</p>
            <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
              <div className="h-full bg-blue-500 rounded-full progress-animate" style={{ width: `${worker.reliabilityScore}%` }} />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-yellow-600" />
              </div>
              <span className="text-xs text-gray-500">Total Earnings</span>
            </div>
            <p className="text-xl font-black text-gray-900">Rs.{worker.earnings.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-xs text-gray-500">Member Since</span>
            </div>
            <p className="text-lg font-bold text-gray-900">{new Date(worker.joinedDate).toLocaleDateString('en-PK', { month: 'short', year: 'numeric' })}</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {worker.skills.map((skill) => {
              const cat = JOB_CATEGORIES.find(c => c.id === skill);
              return (
                <span key={skill} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-xl">
                  {cat?.icon} {cat?.name.split('/')[0].trim()}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Verification */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-3">Verification</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Phone Verified</p>
                <p className="text-xs text-gray-400">{worker.phone}</p>
              </div>
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">CNIC Verified</p>
                <p className="text-xs text-gray-400">{worker.cnic}</p>
              </div>
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Selfie Verification</p>
                <p className="text-xs text-gray-400">Pending field verification</p>
              </div>
              <button className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SOS Button */}
      <div className="px-5 mt-4 mb-4">
        <button className="w-full bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🆘</span>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-red-700 text-sm">SOS Button</h3>
            <p className="text-xs text-red-500">Emergency ke waqt ek tap mein madad milegi</p>
          </div>
        </button>
      </div>
    </div>
  );
};
