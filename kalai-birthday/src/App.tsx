import { useState } from 'react';
import { BirthdayLogin } from './components/BirthdayLogin';
import { WelcomeCurtain } from './components/WelcomeCurtain';
import { HeroSection } from './components/HeroSection';
import { ChildhoodStory } from './components/ChildhoodStory';
import { MemoryTimeline } from './components/MemoryTimeline';
import { PhotoGallery } from './components/PhotoGallery';
import { AppreciationSection } from './components/AppreciationSection';
import { NostalgiaModal } from './components/NostalgiaModal';
import { SurpriseGift } from './components/SurpriseGift';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { MagicCursor } from './components/MagicCursor';
import { FloatingDecorations } from './components/FloatingDecorations';
import { Footer } from './components/Footer';

export function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasEnteredSurprise, setHasEnteredSurprise] = useState(false);

  return (
    <div className="min-h-screen relative text-slate-800 selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      {/* Magic canvas sparkles trail for mouse & touch */}
      <MagicCursor />

      {/* Floating background ambient balloons and sparkles */}
      <FloatingDecorations />

      {/* Step 1: Birthday Date of Birth Login Screen */}
      {!isUnlocked && (
        <BirthdayLogin onUnlock={() => setIsUnlocked(true)} />
      )}

      {/* Step 2: Cinematic Opening Curtain */}
      {isUnlocked && !hasEnteredSurprise && (
        <WelcomeCurtain onEnter={() => setHasEnteredSurprise(true)} />
      )}

      {/* Step 3: Main Personal Birthday Experience */}
      {isUnlocked && hasEnteredSurprise && (
        <main className="relative z-10 animate-fadeIn">
          {/* Persistent Floating Music Player with Loop Mode */}
          <FloatingMusicPlayer autoPlayTrigger={hasEnteredSurprise} />

          {/* Hero Section with interactive Birthday Cake Candle */}
          <HeroSection />

          {/* Childhood Memories & The Story of Maggi & School */}
          <ChildhoodStory />

          {/* Miss School Days Interactive Badge & Modal */}
          <NostalgiaModal />

          {/* Childhood Memory Timeline with Real Photos */}
          <MemoryTimeline />

          {/* Polaroid Photo Memory Gallery with Fullscreen Lightbox */}
          <PhotoGallery />

          {/* Best Friend Appreciation Section */}
          <AppreciationSection />

          {/* Secret 3D Interactive Surprise Gift Box & Final Letter */}
          <SurpriseGift />

          {/* Elegant Handwritten Signature Footer */}
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;

