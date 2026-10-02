import { useState, useRef } from 'react';
import { Sparkles, Heart, Lock, KeyRound, Stars } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../config/birthdayData';

interface BirthdayLoginProps {
  onUnlock: () => void;
}

export const BirthdayLogin: React.FC<BirthdayLoginProps> = ({ onUnlock }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const handleDayChange = (val: string) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 2);
    setDay(cleaned);
    setErrorMsg('');
    if (cleaned.length === 2) {
      monthRef.current?.focus();
    }
  };

  const handleMonthChange = (val: string) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 2);
    setMonth(cleaned);
    setErrorMsg('');
    if (cleaned.length === 2) {
      yearRef.current?.focus();
    }
  };

  const handleYearChange = (val: string) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 4);
    setYear(cleaned);
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDay = day.padStart(2, '0');
    const formattedMonth = month.padStart(2, '0');
    const fullYear = year.length === 2 ? `20${year}` : year;
    const combined = `${formattedDay}/${formattedMonth}/${fullYear}`;

    const isValid = BIRTHDAY_DATA.friend.acceptedDobs.some((dob) => {
      if (dob === combined) return true;
      if (dob === `${parseInt(formattedDay, 10)}/${parseInt(formattedMonth, 10)}/${fullYear}`) return true;
      return false;
    });

    if (isValid) {
      setIsSuccess(true);
      setErrorMsg('');

      // Confetti burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#ec4899', '#f472b6', '#fbbf24', '#c084fc'],
      });

      setTimeout(() => {
        onUnlock();
      }, 2000);
    } else {
      setIsWiggling(true);
      setErrorMsg("Hmm... that's not the secret date ✨ Try again!");
      setTimeout(() => setIsWiggling(false), 600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 select-none overflow-hidden">
      {/* Decorative ambient blurred orbs */}
      <div className="absolute top-12 left-12 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-12 right-12 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-200/25 rounded-full blur-3xl pointer-events-none"></div>

      <div
        className={`w-full max-w-md relative glass-card p-7 sm:p-9 rounded-3xl text-center shadow-2xl transition-all duration-500 ${
          isWiggling ? 'animate-shake' : ''
        } ${isSuccess ? 'scale-105 opacity-90' : 'scale-100'}`}
      >
        {/* Top floating badge icon */}
        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-tr from-rose-400 to-pink-300 flex items-center justify-center text-white shadow-lg shadow-pink-300/50 mb-6 transform transition-transform hover:rotate-6">
          {isSuccess ? (
            <Stars className="w-10 h-10 animate-spin text-amber-100" style={{ animationDuration: '3s' }} />
          ) : (
            <KeyRound className="w-9 h-9 text-white" />
          )}
        </div>

        {isSuccess ? (
          <div className="py-6 space-y-4">
            <h2 className="text-3xl font-serif-title font-bold text-rose-600 animate-bounce">
              Welcome, Kalaiselvi! 💖
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Unlocking your childhood birthday time machine...
            </p>
            <div className="flex justify-center items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-ping" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        ) : (
          <>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100/80 text-rose-700 tracking-wide uppercase mb-3">
              <Lock className="w-3.5 h-3.5 text-rose-500" />
              Private Surprise Unlock
            </span>

            <h1 className="text-2xl sm:text-3xl font-serif-title font-bold text-slate-800 tracking-tight">
              A Special Key For You
            </h1>

            <p className="mt-2 text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
              Please enter your birthday to unlock your private memory surprise ✨
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* Segmented Date Input */}
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="flex flex-col items-center">
                  <label htmlFor="day-input" className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Day
                  </label>
                  <input
                    id="day-input"
                    type="text"
                    inputMode="numeric"
                    placeholder="DD"
                    value={day}
                    onChange={(e) => handleDayChange(e.target.value)}
                    maxLength={2}
                    className="w-16 h-14 sm:w-18 sm:h-16 text-center text-xl font-bold bg-white/80 border-2 border-rose-200/80 focus:border-rose-400 focus:bg-white rounded-2xl outline-none shadow-sm transition-all focus:ring-4 focus:ring-rose-200/50 text-slate-800 placeholder:text-slate-300"
                    autoFocus
                  />
                </div>

                <span className="text-2xl font-light text-rose-300 mt-5">/</span>

                <div className="flex flex-col items-center">
                  <label htmlFor="month-input" className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Month
                  </label>
                  <input
                    id="month-input"
                    ref={monthRef}
                    type="text"
                    inputMode="numeric"
                    placeholder="MM"
                    value={month}
                    onChange={(e) => handleMonthChange(e.target.value)}
                    maxLength={2}
                    className="w-16 h-14 sm:w-18 sm:h-16 text-center text-xl font-bold bg-white/80 border-2 border-rose-200/80 focus:border-rose-400 focus:bg-white rounded-2xl outline-none shadow-sm transition-all focus:ring-4 focus:ring-rose-200/50 text-slate-800 placeholder:text-slate-300"
                  />
                </div>

                <span className="text-2xl font-light text-rose-300 mt-5">/</span>

                <div className="flex flex-col items-center">
                  <label htmlFor="year-input" className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Year
                  </label>
                  <input
                    id="year-input"
                    ref={yearRef}
                    type="text"
                    inputMode="numeric"
                    placeholder="YYYY"
                    value={year}
                    onChange={(e) => handleYearChange(e.target.value)}
                    maxLength={4}
                    className="w-22 h-14 sm:w-24 sm:h-16 text-center text-xl font-bold bg-white/80 border-2 border-rose-200/80 focus:border-rose-400 focus:bg-white rounded-2xl outline-none shadow-sm transition-all focus:ring-4 focus:ring-rose-200/50 text-slate-800 placeholder:text-slate-300"
                  />
                </div>
              </div>

              {/* Error feedback */}
              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-600 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 animate-fadeIn">
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-300" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit button */}
              <button
                ref={submitBtnRef}
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white font-semibold text-base sm:text-lg shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Unlock My Surprise</span>
                <Sparkles className="w-5 h-5 text-amber-200" />
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-rose-100 flex items-center justify-center gap-1.5 text-xs text-slate-500">
              <span>Made with childhood nostalgia</span>
              <span className="text-rose-400">♥</span>
              <span>by Thiyagu</span>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};
 
