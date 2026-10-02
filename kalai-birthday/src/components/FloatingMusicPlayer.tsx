import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Repeat, Disc3 } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

interface FloatingMusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const FloatingMusicPlayer: React.FC<FloatingMusicPlayerProps> = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tracks = [
    {
      title: BIRTHDAY_DATA.music.title,
      artist: BIRTHDAY_DATA.music.artist,
      src: BIRTHDAY_DATA.music.src,
    },
    {
      title: BIRTHDAY_DATA.music.secondaryTitle,
      artist: 'Stephen Sanchez',
      src: BIRTHDAY_DATA.music.secondarySrc,
    },
  ];

  const currentTrack = tracks[currentTrackIndex];

  // Initialize and handle loop
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping;
    }
  }, [isLooping]);

  // Handle autoPlayTrigger when user enters website
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Audio autoplay prevented by browser policy:', e));
    }
  }, [autoPlayTrigger, currentTrackIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Playback error:', e));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleLoop = () => {
    if (!audioRef.current) return;
    const nextLoop = !isLooping;
    audioRef.current.loop = nextLoop;
    setIsLooping(nextLoop);
  };

  const switchTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().then(() => setIsPlaying(true));
      }
    }, 100);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 select-none">
      {/* Hidden audio element with loop mode */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        loop={isLooping}
        onEnded={() => {
          if (!isLooping) setIsPlaying(false);
        }}
      />

      <div className="relative">
        {/* Expanded Panel */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 w-72 sm:w-80 glass-card p-4 rounded-2xl shadow-xl border border-rose-200/80 mb-2 animate-fadeIn space-y-3">
            <div className="flex items-center justify-between border-b border-rose-100 pb-2">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-rose-500" />
                Birthday Playlist
              </span>
              <span className="text-[10px] bg-rose-100/90 text-rose-700 px-2 py-0.5 rounded-full font-semibold">
                Loop: {isLooping ? 'ON 🔁' : 'OFF'}
              </span>
            </div>

            {/* Track Switcher */}
            <div className="space-y-1.5">
              {tracks.map((t, idx) => (
                <button
                  key={t.title}
                  onClick={() => switchTrack(idx)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-all ${
                    currentTrackIndex === idx
                      ? 'bg-rose-500 text-white font-medium shadow-sm'
                      : 'hover:bg-rose-50 text-slate-700'
                  }`}
                >
                  <div className="truncate pr-2">
                    <p className="font-semibold truncate">{t.title}</p>
                    <p className={`text-[10px] ${currentTrackIndex === idx ? 'text-rose-100' : 'text-slate-400'}`}>
                      {t.artist}
                    </p>
                  </div>
                  {currentTrackIndex === idx && isPlaying && (
                    <span className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 bg-white rounded-full animate-bounce h-2"></span>
                      <span className="w-0.5 bg-white rounded-full animate-bounce h-3" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-0.5 bg-white rounded-full animate-bounce h-1.5" style={{ animationDelay: '0.4s' }}></span>
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-1 text-xs">
              <button
                onClick={toggleLoop}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors ${
                  isLooping ? 'bg-rose-100 text-rose-700 font-semibold' : 'text-slate-500 hover:bg-slate-100'
                }`}
                title="Toggle continuous music loop"
              >
                <Repeat className="w-3.5 h-3.5" />
                <span>Continuous Loop</span>
              </button>

              <button
                onClick={toggleMute}
                className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}

        {/* Compact Floating Bar Pill */}
        <div className="glass-card pl-3 pr-4 py-2 rounded-full shadow-lg border border-rose-200/80 flex items-center gap-3 backdrop-blur-md hover:shadow-pink-300/40 transition-all">
          {/* Animated vinyl / disc */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative flex items-center justify-center cursor-pointer group"
            title="Open playlist"
          >
            <div
              className={`w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white shadow-md ${
                isPlaying ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '4s' }}
            >
              <Disc3 className="w-5 h-5 text-white" />
            </div>
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white"></span>
            )}
          </button>

          {/* Track Info (clickable to expand) */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="cursor-pointer max-w-[110px] sm:max-w-[140px] truncate"
          >
            <p className="text-xs font-bold text-slate-800 truncate">{currentTrack.title}</p>
            <div className="flex items-center gap-1.5">
              {isPlaying ? (
                <div className="flex items-end gap-0.5 h-2.5">
                  <span className="w-0.5 bg-rose-500 rounded-full animate-bounce h-2"></span>
                  <span className="w-0.5 bg-rose-500 rounded-full animate-bounce h-2.5" style={{ animationDelay: '0.15s' }}></span>
                  <span className="w-0.5 bg-rose-500 rounded-full animate-bounce h-1.5" style={{ animationDelay: '0.3s' }}></span>
                </div>
              ) : (
                <span className="text-[10px] text-slate-400">Paused</span>
              )}
              <span className="text-[10px] text-rose-500 font-medium truncate">
                {isLooping ? '🔁 Loop' : ''}
              </span>
            </div>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-500/30 active:scale-95 transition-all cursor-pointer"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
 
