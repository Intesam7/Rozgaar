import React from 'react';
import { Home, Briefcase, PlusCircle, Wallet, User, BarChart3 } from 'lucide-react';
import { AppScreen, UserRole } from '../types';

interface BottomNavProps {
  activeScreen: AppScreen;
  role: UserRole;
  onNavigate: (screen: AppScreen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, role, onNavigate }) => {
  const clientTabs: { screen: AppScreen; icon: typeof Home; label: string; accent?: boolean }[] = [
    { screen: 'home_client', icon: Home, label: 'Home' },
    { screen: 'my_jobs', icon: Briefcase, label: 'Mere Kaam' },
    { screen: 'post_job', icon: PlusCircle, label: 'Post Karo', accent: true },
    { screen: 'referral', icon: User, label: 'Refer' },
    { screen: 'settings', icon: User, label: 'Profile' },
  ];

  const workerTabs: { screen: AppScreen; icon: typeof Home; label: string; accent?: boolean }[] = [
    { screen: 'home_worker', icon: Home, label: 'Kaam' },
    { screen: 'my_jobs', icon: Briefcase, label: 'Mere Kaam' },
    { screen: 'earnings', icon: Wallet, label: 'Kamayi' },
    { screen: 'referral', icon: User, label: 'Refer' },
    { screen: 'worker_profile', icon: User, label: 'Profile' },
  ];

  const adminTabs: { screen: AppScreen; icon: typeof Home; label: string; accent?: boolean }[] = [
    { screen: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { screen: 'disputes', icon: Briefcase, label: 'Disputes' },
    { screen: 'ops_playbook', icon: Briefcase, label: 'Ops' },
    { screen: 'ad_scripts', icon: Briefcase, label: 'Ads' },
    { screen: 'investor', icon: BarChart3, label: 'Investor' },
  ];

  const tabs = role === 'admin' ? adminTabs : role === 'worker' ? workerTabs : clientTabs;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 bottom-safe z-50">
      <div className="flex items-center justify-around py-1.5">
        {tabs.map((tab) => {
          const isActive = activeScreen === tab.screen;
          const Icon = tab.icon;
          return (
            <button
              key={tab.screen}
              onClick={() => onNavigate(tab.screen)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all ${
                tab.accent
                  ? 'relative -mt-5'
                  : ''
              }`}
            >
              {tab.accent ? (
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                  isActive ? 'bg-rozgaar-green' : 'bg-rozgaar-green'
                } pulse-green`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
              ) : (
                <Icon className={`w-5 h-5 ${isActive ? 'text-rozgaar-green' : 'text-gray-400'}`} />
              )}
              <span className={`text-[10px] font-medium ${
                isActive ? 'text-rozgaar-green' : 'text-gray-400'
              } ${tab.accent ? 'mt-1' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
