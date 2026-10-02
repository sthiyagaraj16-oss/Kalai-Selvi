import React from 'react';
import { Sparkles, Utensils, Gamepad2, Laugh, HeartHandshake, Calendar } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Gamepad2: <Gamepad2 className="w-5 h-5" />,
  Laugh: <Laugh className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
};

export const MemoryTimeline: React.FC = () => {
  const items = BIRTHDAY_DATA.timeline;

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-rose-50/60 to-transparent">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card-pink text-rose-700 text-xs font-bold tracking-wider uppercase shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-rose-500" />
            <span>Childhood Chapters</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-slate-800 tracking-tight">
            Our Memory Timeline 🌸
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto font-light">
            Every chapter shaped our friendship into something rare, lasting, and beautiful.
          </p>
        </div>

        {/* Timeline track */}
        <div className="relative">
          {/* Vertical Center Line for md+ screens */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-rose-300 via-pink-400 to-purple-300"></div>

          <div className="space-y-12 md:space-y-20">
            {items.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge in Center for desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 text-white items-center justify-center shadow-lg shadow-pink-400/30 z-20">
                    {iconMap[item.iconName] || <Sparkles className="w-5 h-5" />}
                  </div>

                  {/* Card Content Side */}
                  <div className="w-full md:w-1/2">
                    <div className="glass-card p-6 sm:p-8 rounded-3xl shadow-lg border border-rose-200/80 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="md:hidden w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-400 text-white flex items-center justify-center shadow-md">
                          {iconMap[item.iconName] || <Sparkles className="w-4 h-4" />}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-rose-500 tracking-wider uppercase">
                            {item.subtitle}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-slate-800">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Photo Side */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative group max-w-xs sm:max-w-sm w-full">
                      {/* Photo Polaroids / Styled Frame */}
                      <div className="polaroid-frame bg-white rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:scale-103">
                        <div className="aspect-[4/5] rounded-xl overflow-hidden bg-rose-50">
                          <img
                            src={item.photoUrl}
                            alt={item.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                        </div>
                        <p className="font-handwriting text-slate-700 text-sm sm:text-base text-center mt-3 font-semibold">
                          {item.photoCaption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
 
