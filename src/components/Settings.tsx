import React from 'react';
import { ArrowLeft, User, Shield, Bell, CreditCard, HelpCircle, LogOut, ChevronRight, Phone, MapPin, Globe } from 'lucide-react';
import { AppScreen, UserRole } from '../types';

interface SettingsProps {
  onNavigate: (screen: AppScreen) => void;
  onChangeRole: (role: UserRole) => void;
}

export const Settings: React.FC<SettingsProps> = ({ onNavigate, onChangeRole }) => {
  const menuSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile Settings', subtitle: 'Naam, photo, bio', action: () => {} },
        { icon: Phone, label: 'Phone Number', subtitle: '0300-1234567', action: () => {} },
        { icon: MapPin, label: 'Location', subtitle: 'Gulberg III, Lahore', action: () => {} },
        { icon: Shield, label: 'KYC Verification', subtitle: 'CNIC verified ✅', action: () => {} },
      ]
    },
    {
      title: 'Payments',
      items: [
        { icon: CreditCard, label: 'JazzCash / EasyPaisa', subtitle: 'Connected ✅', action: () => {} },
        { icon: CreditCard, label: 'Payment History', subtitle: 'All transactions', action: () => {} },
      ]
    },
    {
      title: 'App',
      items: [
        { icon: Bell, label: 'Notifications', subtitle: 'Push, SMS, WhatsApp', action: () => {} },
        { icon: Globe, label: 'Language', subtitle: 'Roman Urdu / English', action: () => {} },
        { icon: HelpCircle, label: 'Help & Support', subtitle: 'FAQs, Contact', action: () => {} },
      ]
    },
    {
      title: 'Switch Role',
      items: [
        { icon: User, label: 'Client Mode', subtitle: 'Kaam post karein', action: () => { onChangeRole('client'); onNavigate('home_client'); } },
        { icon: User, label: 'Worker Mode', subtitle: 'Kaam accept karein', action: () => { onChangeRole('worker'); onNavigate('home_worker'); } },
        { icon: User, label: 'Admin / Ops', subtitle: 'Dashboard & KPIs', action: () => { onChangeRole('admin'); onNavigate('dashboard'); } },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-10 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('home_client')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="font-bold text-lg text-gray-900">Settings</h1>
        </div>

        {/* Profile Summary */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3">
          <div className="w-14 h-14 bg-rozgaar-green rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
            A
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Ali Merchant</h2>
            <p className="text-xs text-gray-500">0300-1234567 • Gulberg, Lahore</p>
            <div className="flex items-center gap-1 mt-0.5">
              <Shield className="w-3 h-3 text-green-500" />
              <span className="text-[10px] text-green-600 font-medium">CNIC Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-5 mt-4 space-y-4">
        {menuSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">{section.title}</h3>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {section.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={i}
                    onClick={item.action}
                    className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                  >
                    <Icon className="w-5 h-5 text-gray-400" />
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-gray-900">{item.label}</p>
                      <p className="text-[10px] text-gray-400">{item.subtitle}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Logout */}
        <button
          onClick={() => onNavigate('role_select')}
          className="w-full flex items-center gap-3 bg-red-50 rounded-2xl p-4 border border-red-100"
        >
          <LogOut className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium text-red-600">Sign Out</span>
        </button>

        <p className="text-center text-[10px] text-gray-400 pb-4">
          Rozgaar v1.0 MVP • Made with ❤️ in Lahore
        </p>
      </div>
    </div>
  );
};
