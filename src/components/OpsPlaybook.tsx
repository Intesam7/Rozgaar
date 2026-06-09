import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Users, Shield, AlertTriangle, Wallet, Calendar, Target, Smartphone, MapPin } from 'lucide-react';
import { AppScreen } from '../types';

interface OpsPlaybookProps {
  onNavigate: (screen: AppScreen) => void;
}

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, icon, color, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden mb-3`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 p-4">
        <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center`}>{icon}</div>
        <span className="font-bold text-gray-900 text-sm flex-1 text-left">{title}</span>
        {open ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {open && <div className="px-4 pb-4 text-xs text-gray-700 leading-relaxed">{children}</div>}
    </div>
  );
};

export const OpsPlaybook: React.FC<OpsPlaybookProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-5 pt-10 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h1 className="font-bold text-lg text-white">Ops Playbook</h1>
            <p className="text-blue-200 text-xs">Complete SOPs for launch & scale</p>
          </div>
        </div>
      </div>

      <div className="px-5 mt-4">
        <Section title="30/60/90 Day Roadmap" icon={<Calendar className="w-5 h-5 text-blue-600" />} color="bg-blue-100" defaultOpen>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-blue-800 mb-2">📅 Day 0-30: Launch Sprint</h4>
              <ul className="space-y-1 list-disc list-inside text-gray-600">
                <li>MVP dev complete + deploy to Play Store</li>
                <li>Recruit 500 workers via 2-3 field agents</li>
                <li>Launch in Gulberg, Model Town, DHA Phase 5</li>
                <li>Ad blitz: Meta videos, WhatsApp groups, posters</li>
                <li>Referral program live (Rs.100 worker, Rs.50 client)</li>
                <li>Subsidize first 3-5 tasks per worker</li>
                <li>Target: 1,000 posted tasks, 80% completion</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-700 mb-2">📅 Day 31-60: Optimize</h4>
              <ul className="space-y-1 list-disc list-inside text-gray-600">
                <li>Optimize AI matching algorithm (proximity + reliability)</li>
                <li>Run retention experiments (push notifications, streaks)</li>
                <li>Expand to 10 neighborhoods</li>
                <li>Launch worker leaderboard + bonus system</li>
                <li>A/B test pricing & commission models</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-green-700 mb-2">📅 Day 61-90: Scale</h4>
              <ul className="space-y-1 list-disc list-inside text-gray-600">
                <li>Partner with 20 local businesses (kiryana, hardware)</li>
                <li>Pilot 5-8% commission model</li>
                <li>Scale ops team to 5 people</li>
                <li>Launch business subscription tier</li>
                <li>Prepare for Karachi/Islamabad expansion</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Field Recruitment SOP" icon={<Users className="w-5 h-5 text-green-600" />} color="bg-green-100">
          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Agent Script (3 min)</h4>
              <div className="bg-green-50 rounded-xl p-3 space-y-2">
                <p>"Assalam o Alaikum bhai — mera naam [Name] hai, mein Rozgaar app se hun."</p>
                <p>"Yeh ek naya app hai jahan aapko rozana kaam milta hai — loading, delivery, repair, safai — jo bhi aap karte ho."</p>
                <p>"Register sirf 2 minute mein hota hai. Pehle 3 kaam pe bonus bhi milega!"</p>
                <p>"Paise seedha JazzCash mein aate hain. Koi beech ka aadmi nahi."</p>
                <p>[Show demo video on phone — 3 min]</p>
                <p>[Help register: Phone → OTP → CNIC → Selfie → Skills select]</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Daily Agent KPIs</h4>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="flex justify-between border-b border-gray-200 pb-1 mb-1"><span>Registrations/day</span><span className="font-bold">15-20</span></div>
                <div className="flex justify-between border-b border-gray-200 pb-1 mb-1"><span>CNIC verified/day</span><span className="font-bold">12-15</span></div>
                <div className="flex justify-between border-b border-gray-200 pb-1 mb-1"><span>First job completed</span><span className="font-bold">8-10</span></div>
                <div className="flex justify-between"><span>Agent pay</span><span className="font-bold">Rs.500/day + Rs.20/reg</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Subsidy Plan</h4>
              <div className="bg-yellow-50 rounded-xl p-3">
                <p>• First 3 tasks: worker gets Rs.200 bonus on completion</p>
                <p>• Total subsidy budget: 500 workers × 3 × Rs.200 = Rs.300,000</p>
                <p>• Subsidy auto-expires after 7 days of registration</p>
                <p>• Track conversion: subsidized → organic jobs ratio</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="KYC & Trust Flow" icon={<Shield className="w-5 h-5 text-purple-600" />} color="bg-purple-100">
          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Verification Levels</h4>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
                  <span className="text-lg">🟢</span>
                  <div>
                    <p className="font-bold">Level 1: Phone + OTP</p>
                    <p className="text-gray-500">Can browse jobs, cannot accept</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
                  <span className="text-lg">🟡</span>
                  <div>
                    <p className="font-bold">Level 2: + CNIC Photo</p>
                    <p className="text-gray-500">Can accept jobs, max 3/day</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
                  <span className="text-lg">🔵</span>
                  <div>
                    <p className="font-bold">Level 3: + Selfie + Field Verified</p>
                    <p className="text-gray-500">Full access, verified badge, priority matching</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Safety Features</h4>
              <div className="bg-purple-50 rounded-xl p-3 space-y-1">
                <p>🛡️ Women-only worker filter for home jobs</p>
                <p>🆘 SOS button → instant alert to ops + local contacts</p>
                <p>📍 Live location sharing during active tasks</p>
                <p>🔒 Verified-only mode for household tasks</p>
                <p>💰 Rs.500 refundable worker deposit (reduces no-shows)</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Dispute Resolution SOP" icon={<AlertTriangle className="w-5 h-5 text-red-600" />} color="bg-red-100">
          <div className="space-y-3">
            <div className="bg-red-50 rounded-xl p-3 space-y-2">
              <p className="font-bold text-red-800">Step-by-step dispute flow:</p>
              <div className="space-y-1.5">
                <p>1. Worker uploads photo proof + timestamp at completion</p>
                <p>2. Client gets 6-hour window to accept or dispute</p>
                <p>3. If no action → auto-release escrow to worker</p>
                <p>4. If disputed → ops team notified (SLA: 2 hours)</p>
                <p>5. Ops reviews photo evidence, contacts both parties</p>
                <p>6. Resolution options: full release, full refund, partial</p>
                <p>7. Both parties rate the resolution experience</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Ban Policy</h4>
              <div className="bg-gray-50 rounded-xl p-3 space-y-1">
                <p>⚠️ 1st dispute: Warning + review</p>
                <p>⚠️ 2nd dispute: 24-hour suspension</p>
                <p>🚫 3rd dispute: Permanent ban review</p>
                <p>🚫 No-show without cancellation: Rs.200 penalty from deposit</p>
                <p>💰 Client compensation: Rs.100 credit for no-show incidents</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Payment & Escrow Flow" icon={<Wallet className="w-5 h-5 text-orange-600" />} color="bg-orange-100">
          <div className="space-y-3">
            <div className="bg-orange-50 rounded-xl p-3">
              <h4 className="font-bold text-gray-900 mb-2">Escrow Flow (JazzCash/EasyPaisa)</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
                  <p>Client posts job → selects price</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center text-[10px] font-bold">2</span>
                  <p>JazzCash/EasyPaisa payment → funds held in escrow</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center text-[10px] font-bold">3</span>
                  <p>Worker assigned → sees job details</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center text-[10px] font-bold">4</span>
                  <p>Worker completes → uploads photo proof</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center text-[10px] font-bold">5</span>
                  <p>6-hour dispute window → auto-release if no dispute</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                  <p className="font-bold">Worker receives payment in mobile wallet</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Cash Fallback</h4>
              <p className="text-gray-600 bg-gray-50 rounded-xl p-3">
                For workers without mobile wallets: Cash collection at partner shops (kiryana/hardware). Agent collects proof and updates system. Cash withdrawal fee: Rs.20.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Partnerships SOP" icon={<MapPin className="w-5 h-5 text-teal-600" />} color="bg-teal-100">
          <div className="space-y-2">
            <p className="font-bold">Target Partners (first 20):</p>
            <div className="bg-gray-50 rounded-xl p-3 space-y-1">
              <p>🏪 10 kiryana shops → recurring daily helper tasks</p>
              <p>🔧 5 hardware stores → repair/maintenance referrals</p>
              <p>📚 3 tuition centers → tutoring job pipeline</p>
              <p>🚚 2 transport companies → loading/delivery tasks</p>
            </div>
            <p className="font-bold mt-2">Partner Pitch:</p>
            <p className="text-gray-600">"Free helpers jab zarurat ho — app pe post karo, verified worker 5 min mein. Pehle 10 tasks FREE, baad mein sirf 5% fee."</p>
          </div>
        </Section>

        <Section title="Tech Stack & Data" icon={<Smartphone className="w-5 h-5 text-indigo-600" />} color="bg-indigo-100">
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl p-3">
              <h4 className="font-bold mb-2">MVP Stack</h4>
              <div className="space-y-1">
                <div className="flex justify-between"><span>Frontend</span><span className="font-bold">React Native / Flutter</span></div>
                <div className="flex justify-between"><span>Backend</span><span className="font-bold">Node.js + Express</span></div>
                <div className="flex justify-between"><span>Auth</span><span className="font-bold">Firebase Auth (Phone OTP)</span></div>
                <div className="flex justify-between"><span>Database</span><span className="font-bold">Firestore + PostgreSQL</span></div>
                <div className="flex justify-between"><span>Geo</span><span className="font-bold">Google Maps SDK</span></div>
                <div className="flex justify-between"><span>Payments</span><span className="font-bold">JazzCash / EasyPaisa SDK</span></div>
                <div className="flex justify-between"><span>ML (Phase 2)</span><span className="font-bold">Python + scikit-learn</span></div>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-xl p-3">
              <h4 className="font-bold mb-2">Event Logs for ML Training</h4>
              <p className="text-gray-600">Store: match events, accept/reject, completion time, ratings, disputes, location, category, price, worker history. Schema supports future ML model training for ranking + price prediction.</p>
            </div>
          </div>
        </Section>

        <Section title="Weekly KPI Tracking" icon={<Target className="w-5 h-5 text-pink-600" />} color="bg-pink-100">
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="space-y-1.5">
              <div className="flex justify-between border-b border-gray-200 pb-1"><span>GMV (Daily)</span><span className="font-bold">Target: Rs.50K+</span></div>
              <div className="flex justify-between border-b border-gray-200 pb-1"><span>DAU/MAU</span><span className="font-bold">Target: DAU 500+</span></div>
              <div className="flex justify-between border-b border-gray-200 pb-1"><span>Tasks completed on time</span><span className="font-bold">Target: ≥80%</span></div>
              <div className="flex justify-between border-b border-gray-200 pb-1"><span>Average task value</span><span className="font-bold">Target: Rs.1,500+</span></div>
              <div className="flex justify-between border-b border-gray-200 pb-1"><span>Take rate</span><span className="font-bold">Target: 0% → 5-8%</span></div>
              <div className="flex justify-between border-b border-gray-200 pb-1"><span>CAC (worker)</span><span className="font-bold">Target: &lt;Rs.300</span></div>
              <div className="flex justify-between border-b border-gray-200 pb-1"><span>CAC (client)</span><span className="font-bold">Target: &lt;Rs.200</span></div>
              <div className="flex justify-between border-b border-gray-200 pb-1"><span>7-day retention</span><span className="font-bold">Target: Worker 40%, Client 25%</span></div>
              <div className="flex justify-between border-b border-gray-200 pb-1"><span>Repeat rate (14-day)</span><span className="font-bold">Target: ≥25%</span></div>
              <div className="flex justify-between"><span>Dispute rate</span><span className="font-bold">Target: &lt;5%</span></div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};
