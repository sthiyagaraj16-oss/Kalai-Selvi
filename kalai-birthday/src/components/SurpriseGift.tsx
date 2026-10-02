import { useState } from 'react';
import { Gift, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export const SurpriseGift: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const surprise = BIRTHDAY_DATA.secretSurprise;

  const handleOpenGift = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Multi-stage confetti celebration
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#f43f5e', '#ec4899', '#fbbf24'],
    });
    fire(0.2, {
      spread: 60,
      colors: ['#a855f7', '#ec4899', '#fbcfe8'],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#f59e0b', '#fbbf24', '#fef08a'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#ec4899', '#f43f5e', '#c084fc'],
    });
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-gradient-to-r from-rose-200/40 via-amber-100/30 to-purple-200/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card-pink text-rose-700 text-xs font-bold tracking-wider uppercase shadow-sm">
            <Gift className="w-3.5 h-3.5 text-rose-500" />
            <span>{surprise.sectionTag}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-slate-800 tracking-tight">
            {surprise.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto font-light">
            {surprise.subtitle}
          </p>
        </div>

        {/* Gift Box Container */}
        {!isOpen ? (
          <div className="py-6 flex flex-col items-center space-y-7 animate-fadeIn">
            {/* 3D Illustrated Gift Box */}
            <div
              onClick={handleOpenGift}
              className="relative cursor-pointer group transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {/* Glow underneath */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

              {/* Gift Box Body */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 bg-gradient-to-br from-rose-400 via-pink-400 to-rose-500 rounded-3xl shadow-2xl border-4 border-white/60 flex items-center justify-center animate-float">
                {/* Horizontal & Vertical Gold Ribbons */}
                <div className="absolute inset-y-0 w-8 bg-gradient-to-b from-amber-300 via-yellow-200 to-amber-400 shadow-md"></div>
                <div className="absolute inset-x-0 h-8 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 shadow-md"></div>

                {/* Ribbon Bow on Top */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-4 border-amber-300 bg-amber-200 shadow-lg -mr-3 transform -rotate-15"></div>
                  <div className="w-10 h-10 rounded-full border-4 border-amber-300 bg-amber-200 shadow-lg -ml-3 transform rotate-15"></div>
                  <div className="absolute w-5 h-5 rounded-full bg-amber-400 shadow-md"></div>
                </div>

                {/* Center Sparkle Badge */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white text-rose-500 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <Sparkles className="w-7 h-7 text-amber-500 fill-amber-300" />
                </div>
              </div>
            </div>

            <button
              onClick={handleOpenGift}
              className="px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white font-semibold text-lg shadow-xl shadow-pink-400/30 hover:shadow-pink-400/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{surprise.buttonPrompt}</span>
              <Sparkles className="w-5 h-5 text-amber-200" />
            </button>
          </div>
        ) : (
          /* Unfolded Final Letter */
          <div className="glass-card p-8 sm:p-12 md:p-14 rounded-3xl sm:rounded-4xl shadow-2xl border-2 border-rose-200/90 text-left max-w-2xl mx-auto space-y-7 animate-scaleUp relative">
            {/* Corner Decorative Ribbon */}
            <div className="absolute -top-3 -right-3 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-amber-900 font-bold text-xs shadow-md flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-700" />
              <span>A Personal Note</span>
            </div>

            {/* Salutation */}
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-rose-600">
              {surprise.letterGreeting}
            </h3>

            {/* Letter Body */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              {surprise.letterLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            {/* Motto Callout */}
            <div className="p-5 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-2 text-center sm:text-left">
              <p className="font-serif-title font-bold text-rose-700 text-lg sm:text-xl">
                Stay happy. Stay crazy. Stay awesome. 🌟
              </p>
            </div>

            {/* Closing & Signature */}
            <div className="pt-6 border-t border-rose-100 flex flex-col items-end text-right">
              <span className="font-handwriting text-2xl sm:text-3xl text-slate-600">
                {surprise.closing}
              </span>
              <span className="font-handwriting text-3xl sm:text-4xl text-rose-600 font-bold mt-1">
                {surprise.signatureName}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
 
