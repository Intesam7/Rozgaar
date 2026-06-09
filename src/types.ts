export interface Worker {
  id: string;
  name: string;
  phone: string;
  cnic: string;
  photo: string;
  rating: number;
  completedJobs: number;
  completionRate: number;
  reliabilityScore: number;
  badges: Badge[];
  skills: string[];
  neighborhood: string;
  isVerified: boolean;
  isAvailable: boolean;
  distanceKm: number;
  joinedDate: string;
  earnings: number;
  todayEarnings: number;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Job {
  id: string;
  title: string;
  category: JobCategory;
  description: string;
  price: number;
  suggestedPrice: { min: number; max: number };
  isAsap: boolean;
  status: JobStatus;
  postedBy: string;
  postedAt: string;
  location: string;
  neighborhood: string;
  assignedWorker?: Worker;
  completionPhoto?: string;
  completionTime?: string;
  rating?: number;
  urgency: 'low' | 'medium' | 'high' | 'asap';
}

export type JobCategory =
  | 'loading'
  | 'delivery'
  | 'repair'
  | 'cleaning'
  | 'tutoring'
  | 'shop_help'
  | 'cooking'
  | 'driving'
  | 'other';

export type JobStatus =
  | 'posted'
  | 'assigned'
  | 'in_progress'
  | 'completed'
  | 'disputed'
  | 'cancelled';

export interface KPIData {
  date: string;
  gmv: number;
  dau: number;
  tasksCompleted: number;
  completionRate: number;
  avgTaskValue: number;
  disputes: number;
  newWorkers: number;
  newClients: number;
}

export type AppScreen =
  | 'splash'
  | 'onboarding'
  | 'role_select'
  | 'home_client'
  | 'home_worker'
  | 'post_job'
  | 'job_detail'
  | 'worker_profile'
  | 'my_jobs'
  | 'earnings'
  | 'escrow'
  | 'proof'
  | 'ratings'
  | 'dashboard'
  | 'disputes'
  | 'settings'
  | 'kyc'
  | 'referral'
  | 'ops_playbook'
  | 'ad_scripts'
  | 'investor';

export type UserRole = 'client' | 'worker' | 'admin';
