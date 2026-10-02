import { Heart, Quote } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export const AppreciationSection: React.FC = () => {
  const items = BIRTHDAY_DATA.appreciation;

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/40 to-transparent">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card-pink text-rose-700 text-xs font-bold tracking-wider uppercase shadow-sm">
            <span>🌷</span>
            <span>Heartfelt Appreciation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-slate-800 tracking-tight">
            A Few Things I Want You To Know 🌷
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto font-light">
            Genuine words for a childhood friend who made growing up an unforgettable adventure.
          </p>
        </div>

        {/* Appreciation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="glass-card p-7 rounded-3xl shadow-lg border border-rose-200/80 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Top Quote & Emoji */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-2.5 rounded-2xl bg-rose-50 border border-rose-100 shadow-xs">
                    {item.emoji}
                  </span>
                  <Quote className="w-8 h-8 text-rose-200/70 group-hover:text-rose-300 transition-colors" />
                </div>

                <h3 className="text-xl font-serif-title font-bold text-slate-800">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.message}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-6 mt-4 border-t border-rose-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200/50">
                  {item.highlight}
                </span>
                <Heart className="w-4 h-4 text-rose-300 fill-rose-100 group-hover:scale-125 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
