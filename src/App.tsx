import { useState, useCallback } from 'react';
import { AppScreen, UserRole } from './types';
import { SplashScreen } from './components/SplashScreen';
import { RoleSelect } from './components/RoleSelect';
import { ClientHome } from './components/ClientHome';
import { WorkerHome } from './components/WorkerHome';
import { PostJob } from './components/PostJob';
import { MyJobs } from './components/MyJobs';
import { Earnings } from './components/Earnings';
import { WorkerProfile } from './components/WorkerProfile';
import { Dashboard } from './components/Dashboard';
import { Disputes } from './components/Disputes';
import { OpsPlaybook } from './components/OpsPlaybook';
import { AdScripts } from './components/AdScripts';
import { Referral } from './components/Referral';
import { Investor } from './components/Investor';
import { Settings } from './components/Settings';
import { BottomNav } from './components/BottomNav';

const SCREENS_WITH_NAV: AppScreen[] = [
  'home_client', 'home_worker', 'my_jobs', 'post_job', 'earnings',
  'worker_profile', 'referral', 'settings', 'dashboard', 'disputes',
  'ops_playbook', 'ad_scripts', 'investor',
];

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('splash');
  const [role, setRole] = useState<UserRole>('client');

  const navigate = useCallback((s: AppScreen) => {
    setScreen(s);
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSplashComplete = useCallback(() => {
    setScreen('role_select');
  }, []);

  const handleRoleSelect = useCallback((r: UserRole) => {
    setRole(r);
    if (r === 'client') setScreen('home_client');
    else if (r === 'worker') setScreen('home_worker');
    else setScreen('dashboard');
  }, []);

  const handleChangeRole = useCallback((r: UserRole) => {
    setRole(r);
  }, []);

  const showNav = SCREENS_WITH_NAV.includes(screen);

  const renderScreen = () => {
    switch (screen) {
      case 'splash':
        return <SplashScreen onComplete={handleSplashComplete} />;
      case 'role_select':
        return <RoleSelect onSelect={handleRoleSelect} />;
      case 'home_client':
        return <ClientHome onNavigate={navigate} />;
      case 'home_worker':
        return <WorkerHome onNavigate={navigate} />;
      case 'post_job':
        return <PostJob onNavigate={navigate} />;
      case 'my_jobs':
        return <MyJobs onNavigate={navigate} role={role === 'admin' ? 'client' : role} />;
      case 'earnings':
        return <Earnings onNavigate={navigate} />;
      case 'worker_profile':
        return <WorkerProfile onNavigate={navigate} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigate} />;
      case 'disputes':
        return <Disputes onNavigate={navigate} />;
      case 'ops_playbook':
        return <OpsPlaybook onNavigate={navigate} />;
      case 'ad_scripts':
        return <AdScripts onNavigate={navigate} />;
      case 'referral':
        return <Referral onNavigate={navigate} role={role} />;
      case 'investor':
        return <Investor onNavigate={navigate} />;
      case 'settings':
        return <Settings onNavigate={navigate} onChangeRole={handleChangeRole} />;
      default:
        return <ClientHome onNavigate={navigate} />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
      {showNav && (
        <BottomNav
          activeScreen={screen}
          role={role}
          onNavigate={navigate}
        />
      )}
    </div>
  );
}
