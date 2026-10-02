import { Clock, UtensilsCrossed } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export const ChildhoodStory: React.FC = () => {
  const story = BIRTHDAY_DATA.childhoodStory;

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card-pink text-rose-700 text-xs font-bold tracking-wider uppercase shadow-sm">
            <Clock className="w-3.5 h-3.5 text-rose-500" />
            <span>{story.sectionTag}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-slate-800 tracking-tight">
            {story.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto font-light">
            A little stroll down memory lane, from shared tiffins to timeless laughter.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="glass-card p-6 sm:p-10 md:p-12 rounded-3xl sm:rounded-4xl shadow-xl border border-rose-200/80 relative space-y-8">
          {/* Top Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-400 to-pink-300 flex items-center justify-center text-white shadow-md">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">
                  {story.highlight}
                </h3>
                <p className="text-xs text-rose-600 font-medium">Unbreakable childhood tradition</p>
              </div>
            </div>

            <div className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold border border-rose-200/70">
              Est. Childhood ✨
            </div>
          </div>

          {/* Letter style paragraphs */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <p className="font-serif-title text-xl sm:text-2xl text-rose-700 italic font-semibold">
              "{story.intro}"
            </p>

            {story.paragraphs.map((p, idx) => (
              <p key={idx} className="first-letter:text-2xl first-letter:font-serif first-letter:text-rose-500">
                {p}
              </p>
            ))}
          </div>

          {/* Nostalgic Highlight Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-rose-100">
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 text-center space-y-1">
              <span className="text-2xl">🍜</span>
              <h4 className="font-bold text-slate-800 text-sm">School Maggi Fest</h4>
              <p className="text-xs text-slate-600">The most anticipated meal of every school week.</p>
            </div>

            <div className="p-4 rounded-2xl bg-pink-50/70 border border-pink-100 text-center space-y-1">
              <span className="text-2xl">🎮</span>
              <h4 className="font-bold text-slate-800 text-sm">Playground Fun</h4>
              <p className="text-xs text-slate-600">Racing against the bell and inventing silly rules.</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-center space-y-1">
              <span className="text-2xl">😂</span>
              <h4 className="font-bold text-slate-800 text-sm">Endless Giggles</h4>
              <p className="text-xs text-slate-600">Inside jokes that only the two of us understood.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
