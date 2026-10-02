import { useState } from 'react';
import { Sparkles, Heart, Music2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WelcomeCurtainProps {
  onEnter: () => void;
}

export const WelcomeCurtain: React.FC<WelcomeCurtainProps> = ({ onEnter }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    // Confetti cannon
    const end = Date.now() + 1200;
    const colors = ['#f43f5e', '#ec4899', '#fbcfe8', '#fbbf24', '#a855f7'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    setTimeout(() => {
      onEnter();
    }, 1100);
  };

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center p-6 bg-gradient-to-b from-rose-100 via-pink-50 to-purple-100 select-none transition-all duration-1000 ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating subtle sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow text-pink-300/60"
            style={{
              top: `${(i * 7 + 12) % 90}%`,
              left: `${(i * 13 + 5) % 92}%`,
              animationDelay: `${(i * 0.4) % 3}s`,
              transform: `scale(${0.6 + (i % 4) * 0.2})`,
            }}
          >
            {i % 2 === 0 ? '✨' : '🌸'}
          </div>
        ))}
      </div>

      <div className="relative max-w-lg w-full text-center space-y-7 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-rose-200/70 text-rose-600 text-xs sm:text-sm font-semibold shadow-sm animate-bounce">
          <Heart className="w-4 h-4 fill-rose-400 text-rose-500" />
          <span>A Childhood Memory Surprise</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-title font-bold text-slate-800 tracking-tight leading-tight">
            Hey <span className="text-shimmer">Kalaiselvi...</span> 💗
          </h1>
          <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-md mx-auto">
            Someone saved a little piece of childhood just for you.
          </p>
        </div>

        <div className="pt-4 flex flex-col items-center gap-3">
          <button
            onClick={handleOpen}
            disabled={isOpening}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white font-semibold text-lg sm:text-xl shadow-xl shadow-rose-400/30 hover:shadow-rose-400/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-200 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Open Your Birthday Surprise ✨</span>
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 blur-md opacity-40 group-hover:opacity-75 transition-opacity -z-10"></span>
          </button>

          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 mt-2">
            <Music2 className="w-3.5 h-3.5 text-rose-400" />
            Background music will play on open
          </span>
        </div>
      </div>
    </div>
  );
};
 
