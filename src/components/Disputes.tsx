import React, { useState } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle2, XCircle, User, Shield, Camera, MessageCircle } from 'lucide-react';
import { AppScreen } from '../types';

interface DisputesProps {
  onNavigate: (screen: AppScreen) => void;
}

export const Disputes: React.FC<DisputesProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'open' | 'resolved'>('open');

  const disputes = [
    {
      id: 'd1', jobTitle: 'AC Repair — Model Town', clientName: 'Mrs. Khan', workerName: 'Hassan Ali',
      reason: 'Kaam poora nahi hua — AC abhi bhi nahi chal raha', amount: 1800, status: 'open' as const,
      time: '2 ghante pehle', hasPhoto: true, priority: 'high' as const,
    },
    {
      id: 'd2', jobTitle: 'Loading — Gulberg', clientName: 'Kashif Traders', workerName: 'Ahmed Raza',
      reason: 'Worker late aaya — 1 ghanta wait karna para', amount: 2500, status: 'open' as const,
      time: '5 ghante pehle', hasPhoto: false, priority: 'medium' as const,
    },
    {
      id: 'd3', jobTitle: 'Safai — DHA', clientName: 'Dr. Saeed', workerName: 'Fatima Bibi',
      reason: 'Price dispute — extra kaam maanga tha', amount: 3000, status: 'resolved' as const,
      time: 'Kal', hasPhoto: true, priority: 'low' as const, resolution: 'Partial refund Rs.500 — both parties agreed',
    },
  ];

  const filteredDisputes = disputes.filter(d => activeTab === 'open' ? d.status === 'open' : d.status === 'resolved');

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-10 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="font-bold text-lg text-gray-900">Dispute Management</h1>
            <p className="text-xs text-gray-400">Ops review — resolve disputes fairly</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setActiveTab('open')}
            className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'open' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
            }`}>
            🔴 Open ({disputes.filter(d => d.status === 'open').length})
          </button>
          <button onClick={() => setActiveTab('resolved')}
            className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'resolved' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'
            }`}>
            ✅ Resolved ({disputes.filter(d => d.status === 'resolved').length})
          </button>
        </div>
      </div>

      {/* Dispute Flow Reference */}
      <div className="px-5 mt-4">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-4">
          <h4 className="text-sm font-bold text-blue-900 mb-2">📋 Dispute Flow (SOP)</h4>
          <div className="space-y-1.5 text-xs text-blue-700">
            <p>1️⃣ Photo proof + timestamp required for completion</p>
            <p>2️⃣ Auto-release escrow after 6 hours if no dispute</p>
            <p>3️⃣ Client can raise dispute within 6 hours</p>
            <p>4️⃣ Ops team reviews within 2 hours (SLA)</p>
            <p>5️⃣ Resolution: refund, partial refund, or release to worker</p>
            <p>6️⃣ Repeat offenders (3+ disputes) → auto-ban</p>
          </div>
        </div>
      </div>

      {/* Disputes List */}
      <div className="px-5 space-y-3">
        {filteredDisputes.map((dispute) => (
          <div key={dispute.id} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{dispute.jobTitle}</h3>
                <p className="text-[10px] text-gray-400">{dispute.time}</p>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                dispute.priority === 'high' ? 'bg-red-100 text-red-600' :
                dispute.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-600'
              }`}>
                {dispute.priority === 'high' ? '🔴 High' : dispute.priority === 'medium' ? '🟡 Medium' : '⚪ Low'}
              </span>
            </div>

            {/* Parties */}
            <div className="flex gap-3 mb-3">
              <div className="flex-1 bg-blue-50 rounded-xl p-2.5">
                <p className="text-[10px] text-blue-500 font-medium">Client</p>
                <p className="text-xs font-bold text-gray-900 flex items-center gap-1">
                  <User className="w-3 h-3" /> {dispute.clientName}
                </p>
              </div>
              <div className="flex-1 bg-green-50 rounded-xl p-2.5">
                <p className="text-[10px] text-green-500 font-medium">Worker</p>
                <p className="text-xs font-bold text-gray-900 flex items-center gap-1">
                  <Shield className="w-3 h-3" /> {dispute.workerName}
                </p>
              </div>
            </div>

            {/* Reason */}
            <div className="bg-red-50 rounded-xl p-3 mb-3">
              <p className="text-xs text-red-700 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                {dispute.reason}
              </p>
            </div>

            {/* Amount */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Escrow Amount</span>
              <span className="text-lg font-bold text-gray-900">Rs.{dispute.amount.toLocaleString()}</span>
            </div>

            {/* Evidence */}
            <div className="flex items-center gap-2 mb-3">
              {dispute.hasPhoto ? (
                <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  <Camera className="w-3 h-3" /> Photo proof available
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full">
                  <XCircle className="w-3 h-3" /> No photo proof
                </span>
              )}
            </div>

            {/* Resolution */}
            {dispute.status === 'resolved' && dispute.resolution && (
              <div className="bg-green-50 rounded-xl p-3 mb-3">
                <p className="text-xs text-green-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  {dispute.resolution}
                </p>
              </div>
            )}

            {/* Actions */}
            {dispute.status === 'open' && (
              <div className="flex gap-2">
                <button className="flex-1 bg-green-500 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Release to Worker
                </button>
                <button className="flex-1 bg-red-500 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1">
                  <XCircle className="w-3 h-3" /> Refund Client
                </button>
                <button className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-2.5 rounded-xl flex items-center justify-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
