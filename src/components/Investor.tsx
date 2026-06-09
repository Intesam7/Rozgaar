import React from 'react';
import { ArrowLeft, TrendingUp, Users, Globe, Zap, Shield, DollarSign, ChevronRight } from 'lucide-react';
import { AppScreen } from '../types';

interface InvestorProps {
  onNavigate: (screen: AppScreen) => void;
}

export const Investor: React.FC<InvestorProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-rozgaar-dark to-gray-900 px-5 pt-10 pb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-rozgaar-green/10 rounded-full -translate-y-1/2 translate-x-1/3" />
        <button onClick={() => onNavigate('dashboard')}
          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-6">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl">💼</span>
            </div>
            <div>
              <h1 className="text-3xl font-black text-white">Rozgaar</h1>
              <p className="text-gray-400 text-sm">Same-Day Micro-Gig Marketplace</p>
            </div>
          </div>
          <p className="text-rozgaar-green font-bold text-lg">"Aaj Ka Kaam, Aaj Ki Kamayi"</p>
          <p className="text-gray-400 text-sm mt-2">
            Pakistan's first AI-powered same-day local gig platform connecting daily-wage workers with urgent tasks. Starting hyper-local in Lahore.
          </p>
        </div>
      </div>

      <div className="px-5">
        {/* The Problem */}
        <div className="mt-6">
          <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-sm">🔴</span>
            The Problem
          </h2>
          <div className="bg-red-50 rounded-2xl p-4 space-y-2 text-sm text-gray-700">
            <p>• <strong>30M+</strong> daily-wage workers in Pakistan struggle to find consistent work daily</p>
            <p>• Clients waste <strong>2-3 hours</strong> finding reliable workers for urgent tasks</p>
            <p>• <strong>Zero trust</strong> — no verification, no escrow, no accountability</p>
            <p>• Existing platforms (OLX, local networks) are not built for same-day urgency</p>
          </div>
        </div>

        {/* The Solution */}
        <div className="mt-6">
          <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-sm">🟢</span>
            Our Solution
          </h2>
          <div className="bg-green-50 rounded-2xl p-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-rozgaar-orange shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">15-Second Job Posting</p>
                  <p className="text-xs text-gray-600">Predefined categories, AI price suggestion, ASAP toggle</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Trust-First Architecture</p>
                  <p className="text-xs text-gray-600">CNIC verification, escrow payments, photo proof, ratings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">AI-Powered Matching</p>
                  <p className="text-xs text-gray-600">Urgency matching, fair-price estimator, completion probability</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market */}
        <div className="mt-6">
          <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-sm">📊</span>
            Market Size
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <p className="text-xs text-blue-500 mb-1">TAM</p>
              <p className="text-xl font-black text-gray-900">$12B</p>
              <p className="text-[10px] text-gray-500">Pakistan gig economy</p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-3 text-center">
              <p className="text-xs text-indigo-500 mb-1">SAM</p>
              <p className="text-xl font-black text-gray-900">$2B</p>
              <p className="text-[10px] text-gray-500">Urban same-day</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 text-center">
              <p className="text-xs text-purple-500 mb-1">SOM</p>
              <p className="text-xl font-black text-gray-900">$50M</p>
              <p className="text-[10px] text-gray-500">Lahore Y1</p>
            </div>
          </div>
        </div>

        {/* Traction */}
        <div className="mt-6">
          <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-sm">🚀</span>
            Traction (30-Day Target)
          </h2>
          <div className="bg-yellow-50 rounded-2xl p-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-2xl font-black text-gray-900">500+</p>
                <p className="text-xs text-gray-500">Verified Workers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-gray-900">1,000</p>
                <p className="text-xs text-gray-500">Posted Tasks</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-gray-900">80%+</p>
                <p className="text-xs text-gray-500">Completion Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-gray-900">25%+</p>
                <p className="text-xs text-gray-500">14-Day Repeat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Model */}
        <div className="mt-6">
          <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-green-600" />
            </span>
            Revenue Model
          </h2>
          <div className="space-y-2">
            <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">P1</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">Phase 1: Zero/Low Fee</p>
                <p className="text-xs text-gray-500">Prove PMF, build liquidity</p>
              </div>
              <span className="text-xs text-gray-400">M1-3</span>
            </div>
            <div className="bg-green-50 rounded-xl p-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-xs font-bold text-green-700">P2</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">Phase 2: 5-8% Commission</p>
                <p className="text-xs text-gray-500">+ Urgent booking fee</p>
              </div>
              <span className="text-xs text-gray-400">M4-6</span>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold text-blue-700">P3</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">Phase 3: Subscriptions + Ads</p>
                <p className="text-xs text-gray-500">Business plans, featured listings, affiliate deals</p>
              </div>
              <span className="text-xs text-gray-400">M7+</span>
            </div>
          </div>
        </div>

        {/* Unit Economics */}
        <div className="mt-6">
          <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm">📈</span>
            Unit Economics
          </h2>
          <div className="bg-orange-50 rounded-2xl p-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">CAC Worker</span><span className="font-bold">Rs.245 (target: &lt;300)</span></div>
              <div className="flex justify-between"><span className="text-gray-600">CAC Client</span><span className="font-bold">Rs.178 (target: &lt;200)</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Avg Task Value</span><span className="font-bold">Rs.1,500</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Projected Take Rate</span><span className="font-bold">5-8%</span></div>
              <div className="flex justify-between"><span className="text-gray-600">CAC Payback</span><span className="font-bold">~2.5 months</span></div>
              <div className="flex justify-between"><span className="text-gray-600">LTV/CAC Ratio</span><span className="font-bold">~5x (projected)</span></div>
            </div>
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="mt-6">
          <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm">⚔️</span>
            Why We Win
          </h2>
          <div className="space-y-2">
            {[
              { label: 'Same-Day Focus', desc: 'Only platform built for urgency — ASAP matching in minutes' },
              { label: 'Trust-First', desc: 'CNIC verification + escrow + photo proof = zero risk' },
              { label: 'AI from Day 1', desc: 'Price estimator, urgency matching, fraud detection' },
              { label: 'Hyperlocal Strategy', desc: 'Dense supply in 3 neighborhoods before expanding' },
              { label: 'Low Literacy UX', desc: 'Roman Urdu, icons, single-tap flows — built for Pakistan' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-purple-50 rounded-xl p-3">
                <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Ask */}
        <div className="mt-6 mb-6">
          <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-teal-600" />
            </span>
            The Ask
          </h2>
          <div className="bg-gradient-to-r from-rozgaar-green-light to-emerald-50 rounded-2xl p-5 border border-green-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Pre-Seed Round</p>
              <h3 className="text-3xl font-black text-gray-900">$150K</h3>
              <p className="text-sm text-gray-500 mt-2">
                18-month runway to prove PMF in Lahore and expand to Karachi/Islamabad
              </p>
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div>
                  <p className="text-lg font-bold text-gray-900">40%</p>
                  <p className="text-[10px] text-gray-500">Product & Tech</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">35%</p>
                  <p className="text-[10px] text-gray-500">Ops & Growth</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">25%</p>
                  <p className="text-[10px] text-gray-500">Buffer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-rozgaar-dark rounded-2xl p-5 text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">💼</span>
            <h3 className="text-xl font-black text-white">Rozgaar</h3>
          </div>
          <p className="text-gray-400 text-sm mb-1">"Aaj Ka Kaam, Aaj Ki Kamayi"</p>
          <p className="text-gray-500 text-xs">
            <Globe className="w-3 h-3 inline" /> rozgaar.pk • 📧 invest@rozgaar.pk
          </p>
        </div>
      </div>
    </div>
  );
};
