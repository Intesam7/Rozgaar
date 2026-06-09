import React, { useState } from 'react';
import { TrendingUp, Users, Briefcase, DollarSign, AlertTriangle, Clock, Target, Percent } from 'lucide-react';
import { AppScreen } from '../types';
import { MOCK_KPI_DATA } from '../data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

interface DashboardProps {
  onNavigate: (screen: AppScreen) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('week');

  const totalGMV = MOCK_KPI_DATA.reduce((s, d) => s + d.gmv, 0);
  const totalTasks = MOCK_KPI_DATA.reduce((s, d) => s + d.tasksCompleted, 0);
  const avgCompletionRate = Math.round(MOCK_KPI_DATA.reduce((s, d) => s + d.completionRate, 0) / MOCK_KPI_DATA.length);
  const totalDisputes = MOCK_KPI_DATA.reduce((s, d) => s + d.disputes, 0);
  const avgDAU = Math.round(MOCK_KPI_DATA.reduce((s, d) => s + d.dau, 0) / MOCK_KPI_DATA.length);
  const avgTaskValue = Math.round(MOCK_KPI_DATA.reduce((s, d) => s + d.avgTaskValue, 0) / MOCK_KPI_DATA.length);

  const kpiCards = [
    { label: 'GMV (Weekly)', value: `Rs.${(totalGMV / 1000).toFixed(0)}K`, change: '+18%', icon: DollarSign, color: 'green', bgColor: 'bg-green-50', iconBg: 'bg-green-100', textColor: 'text-green-600' },
    { label: 'Avg DAU', value: avgDAU.toString(), change: '+12%', icon: Users, color: 'blue', bgColor: 'bg-blue-50', iconBg: 'bg-blue-100', textColor: 'text-blue-600' },
    { label: 'Tasks Done', value: totalTasks.toString(), change: '+22%', icon: Briefcase, color: 'purple', bgColor: 'bg-purple-50', iconBg: 'bg-purple-100', textColor: 'text-purple-600' },
    { label: 'Completion %', value: `${avgCompletionRate}%`, change: '+3%', icon: Target, color: 'emerald', bgColor: 'bg-emerald-50', iconBg: 'bg-emerald-100', textColor: 'text-emerald-600' },
    { label: 'Avg Task Value', value: `Rs.${avgTaskValue}`, change: '+5%', icon: TrendingUp, color: 'orange', bgColor: 'bg-orange-50', iconBg: 'bg-orange-100', textColor: 'text-orange-600' },
    { label: 'Disputes', value: totalDisputes.toString(), change: '-8%', icon: AlertTriangle, color: 'red', bgColor: 'bg-red-50', iconBg: 'bg-red-100', textColor: 'text-red-600' },
  ];

  const unitEconomics = [
    { label: 'CAC Worker', target: 'Rs.300', actual: 'Rs.245', status: '✅' },
    { label: 'CAC Client', target: 'Rs.200', actual: 'Rs.178', status: '✅' },
    { label: 'Take Rate', target: '5-8%', actual: '0% (Phase 1)', status: '📌' },
    { label: 'Payback Period', target: '<3 months', actual: '~2.5 months', status: '✅' },
    { label: '7-day Worker Retention', target: '>40%', actual: '47%', status: '✅' },
    { label: '7-day Client Retention', target: '>25%', actual: '31%', status: '✅' },
    { label: 'Repeat Rate (14-day)', target: '>25%', actual: '28%', status: '✅' },
    { label: 'Dispute Rate', target: '<5%', actual: '2.8%', status: '✅' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-rozgaar-dark to-gray-900 px-5 pt-10 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-gray-400 text-sm">Rozgaar Ops Dashboard</p>
            <h1 className="text-white text-xl font-bold">KPI Overview</h1>
          </div>
          <div className="flex gap-2">
            {(['day', 'week', 'month'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  period === p ? 'bg-white text-gray-900' : 'bg-white/10 text-gray-400'
                }`}
              >
                {p === 'day' ? 'Day' : p === 'week' ? 'Week' : 'Month'}
              </button>
            ))}
          </div>
        </div>

        {/* Main stat */}
        <div className="bg-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs">Weekly GMV</p>
              <h2 className="text-3xl font-black text-white">Rs.{(totalGMV / 1000).toFixed(0)}K</h2>
            </div>
            <div className="text-right">
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                ↑ 18% vs last week
              </span>
              <p className="text-gray-500 text-xs mt-1">{totalTasks} tasks completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="px-5 mt-4">
        <div className="grid grid-cols-2 gap-3">
          {kpiCards.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div key={kpi.label} className={`${kpi.bgColor} rounded-2xl p-4 border border-white`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 ${kpi.iconBg} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${kpi.textColor}`} />
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">{kpi.label}</span>
                </div>
                <p className="text-xl font-black text-gray-900">{kpi.value}</p>
                <p className={`text-xs font-medium mt-1 ${kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.change}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* GMV Chart */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <h3 className="font-bold text-gray-900 text-sm mb-3">GMV Trend (Weekly)</h3>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={MOCK_KPI_DATA}>
              <defs>
                <linearGradient id="gmvGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00A651" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#00A651" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
              <Tooltip formatter={(v) => [`Rs.${Number(v).toLocaleString()}`, 'GMV']} />
              <Area type="monotone" dataKey="gmv" stroke="#00A651" fill="url(#gmvGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Completion Rate Chart */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Tasks & Completion Rate</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={MOCK_KPI_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 10 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10 }} domain={[70, 100]} />
              <Tooltip />
              <Bar yAxisId="left" dataKey="tasksCompleted" fill="#00A651" radius={[4, 4, 0, 0]} name="Tasks" />
              <Line yAxisId="right" type="monotone" dataKey="completionRate" stroke="#FF6B00" strokeWidth={2} name="Completion %" dot={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* DAU Chart */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Daily Active Users</h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={MOCK_KPI_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Line type="monotone" dataKey="dau" stroke="#1976D2" strokeWidth={2} dot={{ fill: '#1976D2' }} name="DAU" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Unit Economics Table */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Unit Economics</h3>
          <div className="space-y-2">
            {unitEconomics.map((ue) => (
              <div key={ue.label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <span className="text-xs text-gray-600 flex-1">{ue.label}</span>
                <span className="text-xs text-gray-400 flex-1 text-center">Target: {ue.target}</span>
                <span className="text-xs font-bold text-gray-900 flex-1 text-right">{ue.status} {ue.actual}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Nav Cards */}
      <div className="px-5 mt-4 mb-4">
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => onNavigate('disputes')} className="bg-red-50 rounded-2xl p-4 text-left border border-red-100 active:scale-95 transition-transform">
            <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Disputes</h4>
            <p className="text-[10px] text-gray-500 mt-1">Active: {totalDisputes}</p>
          </button>
          <button onClick={() => onNavigate('ops_playbook')} className="bg-blue-50 rounded-2xl p-4 text-left border border-blue-100 active:scale-95 transition-transform">
            <Clock className="w-6 h-6 text-blue-500 mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Ops Playbook</h4>
            <p className="text-[10px] text-gray-500 mt-1">SOPs & Flows</p>
          </button>
          <button onClick={() => onNavigate('ad_scripts')} className="bg-orange-50 rounded-2xl p-4 text-left border border-orange-100 active:scale-95 transition-transform">
            <Percent className="w-6 h-6 text-orange-500 mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Ad Scripts</h4>
            <p className="text-[10px] text-gray-500 mt-1">5 ads + 3 videos</p>
          </button>
          <button onClick={() => onNavigate('investor')} className="bg-purple-50 rounded-2xl p-4 text-left border border-purple-100 active:scale-95 transition-transform">
            <TrendingUp className="w-6 h-6 text-purple-500 mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Investor Deck</h4>
            <p className="text-[10px] text-gray-500 mt-1">One-pager</p>
          </button>
        </div>
      </div>
    </div>
  );
};
