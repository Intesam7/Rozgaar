import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return p + 4;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rozgaar-green via-rozgaar-green-dark to-emerald-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">📦</div>
        <div className="absolute top-32 right-8 text-5xl">🔧</div>
        <div className="absolute bottom-40 left-6 text-5xl">🏍️</div>
        <div className="absolute bottom-20 right-12 text-6xl">🧹</div>
        <div className="absolute top-1/2 left-1/3 text-4xl">📚</div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="w-28 h-28 bg-white rounded-3xl shadow-2xl flex items-center justify-center mb-6 rotate-3">
          <span className="text-5xl">💼</span>
        </div>

        {/* App name */}
        <h1 className="text-5xl font-black text-white tracking-tight mb-2">
          Rozgaar
        </h1>
        <p className="text-emerald-200 text-lg font-medium mb-1">
          روزگار
        </p>
        <p className="text-white/80 text-sm font-medium tracking-wide">
          Aaj Ka Kaam, Aaj Ki Kamayi
        </p>

        {/* Progress bar */}
        <div className="w-48 h-1.5 bg-white/20 rounded-full mt-8 overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-white/60 text-xs mt-3">
          {progress < 50 ? 'Loading...' : progress < 80 ? 'Setting up...' : 'Ready!'}
        </p>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-8 text-center">
        <p className="text-white/40 text-xs">
          🇵🇰 Made in Lahore, for Pakistan
        </p>
      </div>
    </div>
  );
};
