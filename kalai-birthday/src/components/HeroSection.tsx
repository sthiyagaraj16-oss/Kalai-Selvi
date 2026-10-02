import { useState } from 'react';
import { Sparkles, Heart, Wind, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export const HeroSection: React.FC = () => {
  const [candleBlown, setCandleBlown] = useState(false);

  const handleBlowCandle = () => {
    if (candleBlown) return;

    setCandleBlown(true);

    // Confetti explosion
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#ec4899', '#fbcfe8', '#fbbf24', '#fef08a'],
    });
  };

  const handleRelight = () => {
    setCandleBlown(false);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-4 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-rose-200/35 via-pink-100/20 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Subtle Date Ribbon Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card-pink text-rose-700 text-sm font-semibold tracking-wide shadow-sm animate-float">
          <span>🎀</span>
          <span>{BIRTHDAY_DATA.hero.badge}</span>
          <span className="text-rose-400">•</span>
          <span>Childhood Best Friend Edition</span>
        </div>

        {/* Hero Headings */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-title font-bold text-slate-800 tracking-tight leading-tight sm:leading-none">
            Happy Birthday, <br />
            <span className="text-shimmer drop-shadow-sm">{BIRTHDAY_DATA.friend.name}!</span> 🎂💗
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            {BIRTHDAY_DATA.hero.subheading}
          </p>
        </div>

        {/* Featured Hero Portrait */}
        <div className="relative inline-block mx-auto mt-6">
          {/* Decorative glowing gradient ring */}
          <div className="absolute -inset-4 rounded-3xl sm:rounded-4xl bg-gradient-to-tr from-rose-400 via-pink-300 to-purple-400 blur-xl opacity-60 animate-pulse"></div>

          <div className="relative glass-card p-3 sm:p-4 rounded-3xl sm:rounded-4xl shadow-2xl max-w-xs sm:max-w-sm mx-auto group">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] bg-rose-100 shadow-inner">
              <img
                src={BIRTHDAY_DATA.hero.heroPhoto}
                alt={BIRTHDAY_DATA.friend.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-3 inset-x-3 text-white text-xs sm:text-sm font-medium drop-shadow-md">
                {BIRTHDAY_DATA.hero.heroCaption}
              </div>
            </div>

            {/* Floating corner stamps */}
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-amber-400 text-white flex items-center justify-center shadow-lg animate-bounce">
              <Star className="w-5 h-5 fill-white" />
            </div>
            <div className="absolute -bottom-3 -left-3 px-3 py-1 rounded-full glass-card-pink text-rose-600 text-xs font-bold shadow-md flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-rose-500" />
              <span>Forever Best Friend</span>
            </div>
          </div>
        </div>

        {/* Interactive Birthday Cake with Clickable Candle */}
        <div className="pt-6 max-w-md mx-auto">
          <div className="glass-card-subtle p-6 rounded-3xl shadow-lg border border-rose-200/80 space-y-4">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-rose-600 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Interactive Birthday Wish</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>

            {/* Animated Cake Illustration */}
            <div className="relative w-36 h-36 mx-auto flex flex-col items-center justify-end pb-2">
              {/* Candle flame */}
              {!candleBlown ? (
                <div
                  onClick={handleBlowCandle}
                  className="cursor-pointer group flex flex-col items-center"
                  title="Click to blow out the candle!"
                >
                  <div className="w-5 h-7 rounded-full bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 animate-flame shadow-lg shadow-amber-400/50"></div>
                  <div className="w-1.5 h-6 bg-gradient-to-b from-rose-200 to-pink-300 rounded-t-sm shadow-sm -mt-0.5"></div>
                </div>
              ) : (
                <div className="flex flex-col items-center animate-fadeIn">
                  {/* Smoke puff */}
                  <span className="text-xl animate-float -mb-1 opacity-70">💨</span>
                  <div className="w-1.5 h-6 bg-slate-300 rounded-t-sm shadow-sm"></div>
                </div>
              )}

              {/* Cake Layers */}
              <div className="w-28 h-8 bg-gradient-to-r from-pink-300 via-rose-200 to-pink-300 rounded-t-xl border-b-2 border-pink-400/30 shadow-sm relative flex justify-around items-center px-2">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span className="w-2 h-2 rounded-full bg-amber-300"></span>
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span className="w-2 h-2 rounded-full bg-amber-300"></span>
              </div>
              <div className="w-34 h-11 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 rounded-b-2xl shadow-md relative flex justify-around items-center px-3">
                <span className="text-[10px] text-white/90 font-bold">★ HAPPY BIRTHDAY ★</span>
              </div>
              {/* Cake stand */}
              <div className="w-38 h-2.5 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 rounded-full shadow-md mt-1"></div>
            </div>

            {/* Candle Status and Button */}
            {!candleBlown ? (
              <button
                onClick={handleBlowCandle}
                className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500 hover:from-amber-500 hover:via-rose-500 hover:to-pink-600 text-white font-semibold text-sm shadow-md shadow-rose-300/30 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Wind className="w-4 h-4 text-white animate-pulse" />
                <span>Make a Wish & Blow the Candle 🕯️</span>
              </button>
            ) : (
              <div className="space-y-3 animate-fadeIn">
                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-medium">
                  ✨ <strong>Wish sent to the stars, Kalai!</strong> May this year bring you all the warmth, joy, and laughter in the universe! 💖
                </div>
                <button
                  onClick={handleRelight}
                  className="text-xs text-slate-500 hover:text-rose-600 font-medium underline cursor-pointer"
                >
                  Relight candle & make another wish 🕯️
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
 
