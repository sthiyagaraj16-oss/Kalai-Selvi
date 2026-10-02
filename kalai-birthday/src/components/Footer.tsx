import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Footer: React.FC = () => {
  const handleSparkleClick = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.9 },
      colors: ['#f43f5e', '#ec4899', '#fbbf24', '#c084fc'],
    });
  };

  return (
    <footer className="pt-16 pb-24 px-4 text-center relative overflow-hidden">
      {/* Decorative separator */}
      <div className="max-w-md mx-auto flex items-center justify-center gap-3 mb-10 text-rose-300">
        <div className="h-px bg-gradient-to-r from-transparent to-rose-300 flex-1"></div>
        <button
          onClick={handleSparkleClick}
          className="p-2 rounded-full hover:bg-rose-100/60 transition-colors text-rose-500 cursor-pointer"
          title="Click for a sparkle!"
        >
          <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
        </button>
        <div className="h-px bg-gradient-to-l from-transparent to-rose-300 flex-1"></div>
      </div>

      <div className="max-w-xl mx-auto space-y-4">
        {/* Handwritten signature */}
        <div className="space-y-1">
          <p className="font-handwriting text-slate-600 text-2xl sm:text-3xl font-medium">
            With lots of childhood memories,
          </p>
          <p className="font-handwriting text-slate-700 text-2xl sm:text-3xl font-semibold">
            Your Childhood Friend,
          </p>
          <p className="font-script text-4xl sm:text-5xl text-rose-600 font-bold tracking-wide mt-2">
            Thiyagu 😁
          </p>
        </div>

        {/* Small warm badge */}
        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <span>Crafted specifically for Kalaiselvi</span>
          <span className="text-rose-400">♥</span>
          <span>02 October 2026</span>
        </div>
      </div>
    </footer>
  );
};
 
