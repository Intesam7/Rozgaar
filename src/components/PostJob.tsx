import React, { useState } from 'react';
import { ArrowLeft, Zap, MapPin, Info, CheckCircle2, TrendingUp } from 'lucide-react';
import { AppScreen, JobCategory } from '../types';
import { JOB_CATEGORIES, NEIGHBORHOODS, PRICE_ESTIMATES } from '../data';

interface PostJobProps {
  onNavigate: (screen: AppScreen) => void;
}

export const PostJob: React.FC<PostJobProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<JobCategory | null>(null);
  const [isAsap, setIsAsap] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [posted, setPosted] = useState(false);

  const priceEstimate = category ? PRICE_ESTIMATES[category] : null;

  const handlePost = () => {
    setPosted(true);
    setTimeout(() => {
      onNavigate('home_client');
    }, 3000);
  };

  if (posted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-8">
        <div className="slide-up text-center">
          <div className="w-24 h-24 bg-rozgaar-green-light rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-14 h-14 text-rozgaar-green" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Kaam Post Ho Gaya! 🎉</h2>
          <p className="text-gray-500 text-sm mb-4">
            Workers ko notification bhej diya gaya hai. ASAP kaam ke liye 2-5 min mein response aata hai.
          </p>
          <div className="bg-gray-50 rounded-2xl p-4 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Category</span>
              <span className="text-sm font-medium">{JOB_CATEGORIES.find(c => c.id === category)?.icon} {JOB_CATEGORIES.find(c => c.id === category)?.name}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Price</span>
              <span className="text-sm font-bold text-rozgaar-green">Rs.{price}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Urgency</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isAsap ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                {isAsap ? '⚡ ASAP' : '📅 Scheduled'}
              </span>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
            <div className="w-4 h-4 border-2 border-rozgaar-green border-t-transparent rounded-full animate-spin" />
            Workers dhund rahe hain...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-10 pb-4">
        <button onClick={() => step > 1 ? setStep(step - 1) : onNavigate('home_client')}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <div>
          <h1 className="font-bold text-lg text-gray-900">Kaam Post Karo</h1>
          <p className="text-xs text-gray-400">Step {step} of 3 • 15 seconds ⚡</p>
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 mb-6">
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-rozgaar-green rounded-full transition-all duration-300 progress-animate"
            style={{ width: `${(step / 3) * 100}%` }} />
        </div>
      </div>

      {/* Step 1: Category */}
      {step === 1 && (
        <div className="px-5 slide-up">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Kya kaam hai?</h2>
          <p className="text-gray-500 text-sm mb-5">Category select karein</p>

          <div className="grid grid-cols-3 gap-3">
            {JOB_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setCategory(cat.id as JobCategory); setStep(2); }}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all active:scale-95 ${
                  category === cat.id ? 'border-rozgaar-green bg-rozgaar-green-light' : 'border-gray-100 bg-gray-50'
                }`}
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-xs font-medium text-gray-700 text-center">{cat.name.split('/')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Details */}
      {step === 2 && (
        <div className="px-5 slide-up">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Details Batao</h2>
          <p className="text-gray-500 text-sm mb-5">Thoda detail se bataein — worker ko samajh aaye</p>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Kaam ka title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rozgaar-green"
                placeholder="e.g. AC repair zaruri, Saman uthana"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Details (optional)</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rozgaar-green resize-none"
                placeholder="Kya karna hai, kitna saman hai, waqt kitna lagega..."
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-rozgaar-green bg-white"
                >
                  <option value="">Neighborhood select karein</option>
                  {NEIGHBORHOODS.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>

            {/* ASAP Toggle */}
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-rozgaar-orange" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">ASAP — Abhi Chahiye!</p>
                  <p className="text-[10px] text-gray-500">Sabse pehle available workers milenge</p>
                </div>
              </div>
              <button
                onClick={() => setIsAsap(!isAsap)}
                className={`w-12 h-6 rounded-full transition-all relative ${isAsap ? 'bg-rozgaar-orange' : 'bg-gray-300'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${isAsap ? 'right-1' : 'left-1'}`} />
              </button>
            </div>

            <button onClick={() => setStep(3)}
              className="w-full bg-rozgaar-green text-white font-bold py-3.5 rounded-xl active:bg-rozgaar-green-dark transition-colors">
              Agla Step →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Price & Post */}
      {step === 3 && (
        <div className="px-5 slide-up">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Price Set Karo</h2>
          <p className="text-gray-500 text-sm mb-5">AI ne price suggest kiya hai — adjust kar sakte hain</p>

          {/* AI Price Suggestion */}
          {priceEstimate && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 mb-5">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-blue-900 text-sm">🤖 AI Price Suggestion</h3>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-1 h-2 bg-blue-200 rounded-full relative">
                  <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
                </div>
              </div>
              <div className="flex justify-between text-xs text-blue-600">
                <span>Min: Rs.{priceEstimate.min}</span>
                <span className="font-bold">Avg: Rs.{priceEstimate.avg}</span>
                <span>Max: Rs.{priceEstimate.max}</span>
              </div>
              <p className="text-[10px] text-blue-500 mt-2 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Gulberg area mein is category ka average rate — historical data se
              </p>
            </div>
          )}

          {/* Price Input */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Apni Price (Rs.)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">Rs.</span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl pl-12 pr-4 py-4 text-2xl font-bold text-gray-900 focus:outline-none focus:border-rozgaar-green"
                placeholder={priceEstimate?.avg.toString() || '1500'}
              />
            </div>
            {priceEstimate && price && Number(price) < priceEstimate.min && (
              <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
                ⚠️ Price suggest se kam hai — workers accept nahi kar sakte
              </p>
            )}
            {priceEstimate && price && Number(price) > priceEstimate.max && (
              <p className="text-xs text-blue-600 mt-1 flex items-center gap-1">
                💰 Premium price — jaldi accept hoga!
              </p>
            )}
          </div>

          {/* Quick Price Buttons */}
          {priceEstimate && (
            <div className="flex gap-2 mb-6">
              {[priceEstimate.min, priceEstimate.avg, priceEstimate.max].map((p) => (
                <button
                  key={p}
                  onClick={() => setPrice(p.toString())}
                  className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all ${
                    price === p.toString() ? 'bg-rozgaar-green text-white border-rozgaar-green' : 'bg-gray-50 text-gray-700 border-gray-200'
                  }`}
                >
                  Rs.{p}
                </button>
              ))}
            </div>
          )}

          {/* Escrow Info */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-1">💳 Escrow Payment</h4>
            <p className="text-xs text-gray-600">
              Paise JazzCash/EasyPaisa se escrow mein jayenge. Worker ko kaam complete hone ke baad release honge. Dispute ka option available hai.
            </p>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3">Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Category</span>
                <span className="font-medium">{JOB_CATEGORIES.find(c => c.id === category)?.icon} {JOB_CATEGORIES.find(c => c.id === category)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Title</span>
                <span className="font-medium">{title || '—'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Price</span>
                <span className="font-bold text-rozgaar-green">Rs.{price || '—'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Urgency</span>
                <span className="font-medium">{isAsap ? '⚡ ASAP' : '📅 Normal'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Area</span>
                <span className="font-medium">{neighborhood || '—'}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handlePost}
            className="w-full bg-rozgaar-green text-white font-bold py-4 rounded-xl text-lg active:bg-rozgaar-green-dark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-200"
          >
            <CheckCircle2 className="w-5 h-5" /> Post Karo — Escrow Pay
          </button>

          <p className="text-center text-[10px] text-gray-400 mt-3">
            By posting, you agree to Rozgaar's Terms. Escrow amount will be charged.
          </p>
        </div>
      )}
    </div>
  );
};
