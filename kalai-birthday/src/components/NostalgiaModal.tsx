import { useState } from 'react';
import { Sparkles, RefreshCw, X, Backpack } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export const NostalgiaModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = BIRTHDAY_DATA.nostalgiaQuotes;

  const handleOpen = () => {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    setCurrentQuoteIndex(randomIdx);
    setIsOpen(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#ec4899', '#c084fc', '#fbbf24'],
    });
  };

  const handleNextQuote = () => {
    let nextIdx = Math.floor(Math.random() * quotes.length);
    if (nextIdx === currentQuoteIndex) {
      nextIdx = (currentQuoteIndex + 1) % quotes.length;
    }
    setCurrentQuoteIndex(nextIdx);

    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.65 },
      colors: ['#ec4899', '#fbbf24', '#fbcfe8'],
    });
  };

  return (
    <div className="py-8 text-center px-4">
      {/* Floating Trigger Button */}
      <button
        onClick={handleOpen}
        className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full glass-card-pink hover:bg-rose-100/90 text-rose-700 font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-103 active:scale-98 transition-all duration-300 border border-rose-300/60 cursor-pointer"
      >
        <span className="text-xl group-hover:scale-110 transition-transform">🥹</span>
        <span>Press this if you miss school days</span>
        <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full glass-card p-6 sm:p-8 rounded-3xl shadow-2xl border border-rose-200 text-center space-y-6 animate-scaleUp"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-rose-50 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-400 to-pink-300 flex items-center justify-center text-white shadow-md shadow-pink-300/40">
              <Backpack className="w-8 h-8 text-white" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold text-rose-500 uppercase tracking-widest">
                School Days Nostalgia 🎒
              </span>
              <h3 className="text-2xl font-serif-title font-bold text-slate-800">
                Priceless Childhood Truth
              </h3>
            </div>

            {/* Randomized Quote Box */}
            <div className="p-6 rounded-2xl bg-white/80 border border-rose-100 shadow-inner">
              <p className="font-handwriting text-slate-800 text-2xl sm:text-3xl font-bold leading-relaxed">
                "{quotes[currentQuoteIndex]}"
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleNextQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Another Childhood Memory</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
