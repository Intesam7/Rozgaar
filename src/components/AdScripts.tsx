import React, { useState } from 'react';
import { ArrowLeft, Play, Copy, CheckCircle2 } from 'lucide-react';
import { AppScreen } from '../types';
import { AD_LINES, VIDEO_SCRIPTS } from '../data';

interface AdScriptsProps {
  onNavigate: (screen: AppScreen) => void;
}

export const AdScripts: React.FC<AdScriptsProps> = ({ onNavigate }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyText = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-rozgaar-orange to-orange-600 px-5 pt-10 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h1 className="font-bold text-lg text-white">Ad Scripts & Copy</h1>
            <p className="text-orange-200 text-xs">Ready-to-use Roman Urdu ads + video scripts</p>
          </div>
        </div>

        <div className="bg-white/15 rounded-2xl p-4">
          <p className="text-white text-sm font-bold mb-1">🎯 Core Ad Hook</p>
          <p className="text-orange-100 text-xs">
            FOMO + Loss Aversion: "Aaj ki kamayi miss mat karo" — Use short videos of real payouts, worker success stories, and before/after comparisons.
          </p>
        </div>
      </div>

      {/* Ad Lines */}
      <div className="px-5 mt-4">
        <h2 className="font-bold text-gray-900 mb-3">📝 5 Ad Lines (Roman Urdu)</h2>
        <div className="space-y-3">
          {AD_LINES.map((ad, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 leading-relaxed">{ad.roman}</p>
                  <p className="text-xs text-gray-400 mt-1 font-urdu">{ad.urdu}</p>
                </div>
                <button
                  onClick={() => copyText(ad.roman, `ad-${i}`)}
                  className="shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  {copiedId === `ad-${i}` ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-500" />
                  )}
                </button>
              </div>
              <div className="flex gap-2 mt-3">
                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Meta Ads</span>
                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">WhatsApp</span>
                <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Posters</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Distribution Channels */}
      <div className="px-5 mt-6">
        <h2 className="font-bold text-gray-900 mb-3">📢 Distribution Channels</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <span className="text-2xl mb-2 block">📱</span>
            <h4 className="font-bold text-gray-900 text-sm">Meta Short Videos</h4>
            <p className="text-[10px] text-gray-500 mt-1">15-30s reels targeting Lahore, 18-45 age, daily wage interests</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <span className="text-2xl mb-2 block">💬</span>
            <h4 className="font-bold text-gray-900 text-sm">WhatsApp Groups</h4>
            <p className="text-[10px] text-gray-500 mt-1">Hyperlocal neighborhood groups, market vendor groups, labor unions</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
            <span className="text-2xl mb-2 block">📄</span>
            <h4 className="font-bold text-gray-900 text-sm">Posters / Flyers</h4>
            <p className="text-[10px] text-gray-500 mt-1">Near markets, bus stops, kiryana shops with QR code</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
            <span className="text-2xl mb-2 block">🎤</span>
            <h4 className="font-bold text-gray-900 text-sm">Roadside Demos</h4>
            <p className="text-[10px] text-gray-500 mt-1">Evening demos at busy markets with live app walkthrough</p>
          </div>
        </div>
      </div>

      {/* Video Scripts */}
      <div className="px-5 mt-6">
        <h2 className="font-bold text-gray-900 mb-3">🎬 3×30s Video Scripts</h2>
        <div className="space-y-3">
          {VIDEO_SCRIPTS.map((script, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{script.title}</h3>
                  <p className="text-gray-400 text-[10px]">{script.duration}</p>
                </div>
              </div>
              <div className="p-4">
                <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                  {script.script}
                </pre>
                <button
                  onClick={() => copyText(script.script, `video-${i}`)}
                  className="mt-3 flex items-center gap-1 text-xs font-medium text-rozgaar-green"
                >
                  {copiedId === `video-${i}` ? (
                    <><CheckCircle2 className="w-3 h-3" /> Copied!</>
                  ) : (
                    <><Copy className="w-3 h-3" /> Copy Script</>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral Program */}
      <div className="px-5 mt-6 mb-4">
        <h2 className="font-bold text-gray-900 mb-3">🎁 Referral Incentives</h2>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">👷</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">Worker Referral: Rs.100</p>
                <p className="text-xs text-gray-500">After referred worker completes 3 jobs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏠</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">Client Referral: Rs.50</p>
                <p className="text-xs text-gray-500">After referred client posts first paid job</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
