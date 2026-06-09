import { Worker, Job, KPIData, Badge } from './types';

export const BADGES: Badge[] = [
  { id: 'verified', name: 'CNIC Verified', icon: '✅', color: '#00A651' },
  { id: 'reliable', name: 'Reliable', icon: '⭐', color: '#FFB800' },
  { id: 'fast', name: 'Fast Worker', icon: '⚡', color: '#FF6B00' },
  { id: 'top_rated', name: 'Top Rated', icon: '🏆', color: '#1976D2' },
  { id: 'women_safe', name: 'Women Safe', icon: '🛡️', color: '#9C27B0' },
  { id: '100_jobs', name: '100+ Jobs', icon: '💯', color: '#E53935' },
];

export const JOB_CATEGORIES = [
  { id: 'loading', name: 'Loading / Bojh', icon: '📦', urdu: 'بوجھ اٹھانا' },
  { id: 'delivery', name: 'Delivery', icon: '🏍️', urdu: 'ڈلیوری' },
  { id: 'repair', name: 'Repair / Marammat', icon: '🔧', urdu: 'مرمت' },
  { id: 'cleaning', name: 'Safai / Cleaning', icon: '🧹', urdu: 'صفائی' },
  { id: 'tutoring', name: 'Tuition / Parhai', icon: '📚', urdu: 'پڑھائی' },
  { id: 'shop_help', name: 'Shop Help / Dukaan', icon: '🏪', urdu: 'دکان' },
  { id: 'cooking', name: 'Cooking / Khana', icon: '🍳', urdu: 'کھانا' },
  { id: 'driving', name: 'Driving / Gaari', icon: '🚗', urdu: 'گاڑی' },
  { id: 'other', name: 'Doosra Kaam', icon: '📋', urdu: 'دوسرا کام' },
];

export const NEIGHBORHOODS = [
  'Gulberg', 'Model Town', 'DHA Phase 5', 'Johar Town', 'Garden Town',
  'Township', 'Iqbal Town', 'Wapda Town', 'Cantt', 'Shadman',
];

const WORKER_PHOTOS = [
  'https://images.pexels.com/photos/29898838/pexels-photo-29898838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
  'https://images.pexels.com/photos/28913835/pexels-photo-28913835.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
  'https://images.pexels.com/photos/30571028/pexels-photo-30571028.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
  'https://images.pexels.com/photos/7647233/pexels-photo-7647233.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
];

export const MOCK_WORKERS: Worker[] = [
  {
    id: 'w1', name: 'Ahmed Raza', phone: '0300-1234567', cnic: '35201-1234567-1',
    photo: WORKER_PHOTOS[0], rating: 4.8, completedJobs: 127, completionRate: 96,
    reliabilityScore: 94, badges: [BADGES[0], BADGES[1], BADGES[3], BADGES[5]],
    skills: ['loading', 'delivery', 'repair'], neighborhood: 'Gulberg',
    isVerified: true, isAvailable: true, distanceKm: 1.2, joinedDate: '2024-11-15',
    earnings: 185000, todayEarnings: 3200,
  },
  {
    id: 'w2', name: 'Hassan Ali', phone: '0301-2345678', cnic: '35202-2345678-3',
    photo: WORKER_PHOTOS[1], rating: 4.6, completedJobs: 89, completionRate: 92,
    reliabilityScore: 88, badges: [BADGES[0], BADGES[2]],
    skills: ['repair', 'cleaning'], neighborhood: 'Model Town',
    isVerified: true, isAvailable: true, distanceKm: 2.1, joinedDate: '2024-12-01',
    earnings: 132000, todayEarnings: 1800,
  },
  {
    id: 'w3', name: 'Bilal Khan', phone: '0302-3456789', cnic: '35203-3456789-5',
    photo: WORKER_PHOTOS[2], rating: 4.9, completedJobs: 203, completionRate: 98,
    reliabilityScore: 97, badges: [BADGES[0], BADGES[1], BADGES[2], BADGES[3], BADGES[5]],
    skills: ['loading', 'delivery', 'driving'], neighborhood: 'DHA Phase 5',
    isVerified: true, isAvailable: false, distanceKm: 3.5, joinedDate: '2024-10-01',
    earnings: 298000, todayEarnings: 0,
  },
  {
    id: 'w4', name: 'Fatima Bibi', phone: '0303-4567890', cnic: '35204-4567890-7',
    photo: WORKER_PHOTOS[3], rating: 4.7, completedJobs: 56, completionRate: 94,
    reliabilityScore: 91, badges: [BADGES[0], BADGES[4]],
    skills: ['cooking', 'cleaning', 'tutoring'], neighborhood: 'Gulberg',
    isVerified: true, isAvailable: true, distanceKm: 0.8, joinedDate: '2025-01-10',
    earnings: 78000, todayEarnings: 2500,
  },
  {
    id: 'w5', name: 'Imran Hussain', phone: '0304-5678901', cnic: '35205-5678901-9',
    photo: WORKER_PHOTOS[0], rating: 4.3, completedJobs: 34, completionRate: 85,
    reliabilityScore: 78, badges: [BADGES[0]],
    skills: ['loading', 'shop_help'], neighborhood: 'Johar Town',
    isVerified: true, isAvailable: true, distanceKm: 4.2, joinedDate: '2025-02-20',
    earnings: 42000, todayEarnings: 1500,
  },
  {
    id: 'w6', name: 'Saima Noor', phone: '0305-6789012', cnic: '35206-6789012-1',
    photo: WORKER_PHOTOS[3], rating: 4.5, completedJobs: 45, completionRate: 91,
    reliabilityScore: 86, badges: [BADGES[0], BADGES[4]],
    skills: ['tutoring', 'cooking'], neighborhood: 'Model Town',
    isVerified: true, isAvailable: true, distanceKm: 1.9, joinedDate: '2025-01-05',
    earnings: 67000, todayEarnings: 2000,
  },
];

export const MOCK_JOBS: Job[] = [
  {
    id: 'j1', title: 'Saman uthana - 2 manzil', category: 'loading',
    description: 'Furniture ko ground floor se 2nd floor tak le jana hai. 3 almariyan aur 2 beds hain.',
    price: 2500, suggestedPrice: { min: 2000, max: 3500 }, isAsap: true,
    status: 'posted', postedBy: 'Ali Merchant', postedAt: '5 min pehle',
    location: 'Gulberg III, Main Boulevard', neighborhood: 'Gulberg', urgency: 'asap',
  },
  {
    id: 'j2', title: 'AC repair zaruri hai', category: 'repair',
    description: 'Split AC chal nahi raha. Gas bhi check karni hai. Brand: Gree 1.5 ton.',
    price: 1800, suggestedPrice: { min: 1500, max: 2500 }, isAsap: true,
    status: 'assigned', postedBy: 'Mrs. Khan', postedAt: '15 min pehle',
    location: 'Model Town C Block', neighborhood: 'Model Town', urgency: 'high',
    assignedWorker: MOCK_WORKERS[1],
  },
  {
    id: 'j3', title: 'Dukaan pe helper chahiye', category: 'shop_help',
    description: 'Kiryana shop pe shaam 4 se raat 10 tak kaam karna hai. Saman rakhna aur customers ko handle karna.',
    price: 1200, suggestedPrice: { min: 1000, max: 1500 }, isAsap: false,
    status: 'posted', postedBy: 'Arif Store', postedAt: '30 min pehle',
    location: 'Johar Town F Block Market', neighborhood: 'Johar Town', urgency: 'medium',
  },
  {
    id: 'j4', title: 'Evening tuition - Class 8', category: 'tutoring',
    description: 'Math aur Science ki tuition chahiye. Class 8 ka student hai. Shaam 5 se 7 baje.',
    price: 800, suggestedPrice: { min: 600, max: 1000 }, isAsap: false,
    status: 'posted', postedBy: 'Nazia Begum', postedAt: '1 ghanta pehle',
    location: 'Garden Town', neighborhood: 'Garden Town', urgency: 'low',
  },
  {
    id: 'j5', title: 'Ghar ki safai - 3 kamre', category: 'cleaning',
    description: 'Poora ghar clean karna hai. 3 bedrooms, 2 bathrooms, kitchen, lounge. Deep cleaning.',
    price: 3000, suggestedPrice: { min: 2500, max: 4000 }, isAsap: false,
    status: 'completed', postedBy: 'Dr. Saeed', postedAt: '3 ghante pehle',
    location: 'DHA Phase 5, Block D', neighborhood: 'DHA Phase 5', urgency: 'medium',
    assignedWorker: MOCK_WORKERS[3], rating: 5,
    completionPhoto: 'https://images.pexels.com/photos/16243258/pexels-photo-16243258.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=400',
    completionTime: '2 ghante 15 min',
  },
  {
    id: 'j6', title: 'Delivery - Saddar se Gulberg', category: 'delivery',
    description: 'Ek parcel Saddar se Gulberg III tak deliver karna hai. Weight: ~5kg.',
    price: 500, suggestedPrice: { min: 400, max: 700 }, isAsap: true,
    status: 'in_progress', postedBy: 'Kashif Traders', postedAt: '45 min pehle',
    location: 'Saddar → Gulberg III', neighborhood: 'Gulberg', urgency: 'asap',
    assignedWorker: MOCK_WORKERS[0],
  },
];

export const MOCK_KPI_DATA: KPIData[] = [
  { date: 'Mon', gmv: 125000, dau: 342, tasksCompleted: 87, completionRate: 84, avgTaskValue: 1437, disputes: 3, newWorkers: 12, newClients: 28 },
  { date: 'Tue', gmv: 148000, dau: 389, tasksCompleted: 96, completionRate: 86, avgTaskValue: 1542, disputes: 2, newWorkers: 8, newClients: 31 },
  { date: 'Wed', gmv: 132000, dau: 356, tasksCompleted: 91, completionRate: 85, avgTaskValue: 1451, disputes: 4, newWorkers: 15, newClients: 22 },
  { date: 'Thu', gmv: 167000, dau: 412, tasksCompleted: 108, completionRate: 88, avgTaskValue: 1546, disputes: 1, newWorkers: 11, newClients: 35 },
  { date: 'Fri', gmv: 198000, dau: 478, tasksCompleted: 134, completionRate: 91, avgTaskValue: 1478, disputes: 2, newWorkers: 18, newClients: 42 },
  { date: 'Sat', gmv: 215000, dau: 523, tasksCompleted: 156, completionRate: 89, avgTaskValue: 1378, disputes: 5, newWorkers: 22, newClients: 56 },
  { date: 'Sun', gmv: 178000, dau: 445, tasksCompleted: 118, completionRate: 87, avgTaskValue: 1508, disputes: 3, newWorkers: 14, newClients: 38 },
];

export const AD_LINES = [
  { roman: '"Aaj ka kaam, aaj ki kamayi" — Rozgaar pe register karo, 15 second mein!', urdu: 'آج کا کام، آج کی کمائی' },
  { roman: '"Kamayi miss mat karo! Rozgaar pe rozana kaam milta hai — abhi join karo."', urdu: 'کمائی مس مت کرو' },
  { roman: '"Ghar baithe kaam dhundo, 1 tap mein accept karo. Rozgaar — tumhara apna platform."', urdu: 'گھر بیٹھے کام ڈھونڈو' },
  { roman: '"Kya tum bhi daily Rs.2000-5000 kamana chahte ho? Rozgaar download karo — FREE!"', urdu: 'روزانہ کمائی' },
  { roman: '"500 workers already kama rahe hain — kya tum peeche reh jaoge? Abhi Rozgaar join karo!"', urdu: '500 ورکرز پہلے سے کما رہے ہیں' },
];

export const VIDEO_SCRIPTS = [
  {
    title: 'Script 1: Worker Success Story',
    duration: '30 seconds',
    script: `[0-5s] Ahmed apni bike pe — "Mein Rozgaar se rozana Rs.3000 kamata hun."
[5-12s] Phone screen dikhata hai — "Yeh dekho, aaj 3 kaam mile. Loading, delivery, aur repair."
[12-20s] Cash in hand — "Paise seedha JazzCash mein aate hain. Koi tension nahi."
[20-25s] Ahmed smiles — "Pehle kaam dhundne mein poora din lagta tha. Ab phone pe mil jata hai."
[25-30s] Rozgaar logo + "Aaj ka kaam, aaj ki kamayi. Download karo — FREE."`,
  },
  {
    title: 'Script 2: Client Convenience',
    duration: '30 seconds',
    script: `[0-5s] Aunty pareshaan — "AC kharab, electrician nahi mil raha!"
[5-12s] Rozgaar app open karti hain — "Dekho, 15 second mein kaam post kiya. ASAP toggle ON."
[12-18s] Worker assigned hota hai — "5 min mein worker mil gaya. Verified hai, rating 4.8!"
[18-24s] AC chal raha hai — "Bas 1 ghante mein sab theek. Paise escrow se seedha gaye."
[24-30s] Rozgaar logo + "Rozgaar — trusted kaam, ek tap mein. Abhi try karo."`,
  },
  {
    title: 'Script 3: FOMO / Loss Aversion',
    duration: '30 seconds',
    script: `[0-5s] Split screen: Ek banda park mein baitha hai, doosra Rozgaar pe kaam le raha hai.
[5-12s] Counter dikhata hai — "Aaj Rs.4,500 kama liya" vs "Aaj Rs.0 kamaya"
[12-18s] Rozgaar wala banda cash dikhata hai — "Mein ne subah se 3 kaam kiye."
[18-24s] Baitha hua banda — "Kaash mujhe pehle pata hota..."
[24-30s] Bold text: "KAMAYI MISS MAT KARO. Rozgaar download karo — abhi." + App link.`,
  },
];

export const PRICE_ESTIMATES: Record<string, { min: number; max: number; avg: number }> = {
  loading: { min: 1500, max: 5000, avg: 2800 },
  delivery: { min: 300, max: 1500, avg: 700 },
  repair: { min: 1000, max: 4000, avg: 2000 },
  cleaning: { min: 1500, max: 5000, avg: 3000 },
  tutoring: { min: 500, max: 1500, avg: 800 },
  shop_help: { min: 800, max: 2000, avg: 1200 },
  cooking: { min: 1000, max: 3000, avg: 1800 },
  driving: { min: 1000, max: 3000, avg: 1500 },
  other: { min: 500, max: 3000, avg: 1500 },
};
