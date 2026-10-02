import { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Heart, Maximize2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../config/birthdayData';
import type { PhotoItem } from '../config/birthdayData';

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});

  const photos = BIRTHDAY_DATA.gallery;

  const openLightbox = (photo: PhotoItem, index: number) => {
    setSelectedPhoto(photo);
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (photoIndex - 1 + photos.length) % photos.length;
    setPhotoIndex(nextIdx);
    setSelectedPhoto(photos[nextIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (photoIndex + 1) % photos.length;
    setPhotoIndex(nextIdx);
    setSelectedPhoto(photos[nextIdx]);
  };

  const toggleHeart = (photoId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPhotos((prev) => {
      const isNowLiked = !prev[photoId];
      if (isNowLiked) {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.8 },
          colors: ['#f43f5e', '#ec4899', '#fbcfe8'],
        });
      }
      return { ...prev, [photoId]: isNowLiked };
    });
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        const nextIdx = (photoIndex - 1 + photos.length) % photos.length;
        setPhotoIndex(nextIdx);
        setSelectedPhoto(photos[nextIdx]);
      }
      if (e.key === 'ArrowRight') {
        const nextIdx = (photoIndex + 1) % photos.length;
        setPhotoIndex(nextIdx);
        setSelectedPhoto(photos[nextIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, photoIndex, photos]);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card-pink text-rose-700 text-xs font-bold tracking-wider uppercase shadow-sm">
            <Camera className="w-3.5 h-3.5 text-rose-500" />
            <span>Cherished Album</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-slate-800 tracking-tight">
            Memories I Still Keep 💗
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto font-light">
            Each photo is a timeless little snapshot of our laughter, milestones, and shared journey.
          </p>
        </div>

        {/* Polaroid Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {photos.map((photo, index) => {
            const isLiked = !!likedPhotos[photo.id];

            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(photo, index)}
                className={`group relative cursor-pointer transform ${photo.rotation} hover:rotate-0 hover:z-20 transition-all duration-500`}
              >
                {/* Polaroid Frame */}
                <div className="polaroid-frame relative">
                  {/* Decorative Washi Tape on top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-pink-200/70 backdrop-blur-sm -rotate-2 rounded-xs shadow-xs z-10 pointer-events-none border-t border-b border-pink-300/40"></div>

                  {/* Photo Image Container */}
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-rose-50">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Tag badge */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/85 backdrop-blur-md text-[10px] font-bold text-rose-600 shadow-sm">
                      {photo.tag}
                    </div>

                    {/* Hover expand hint */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-rose-600 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Handwritten Polaroid Caption */}
                  <div className="pt-3 flex items-center justify-between">
                    <div>
                      <h4 className="font-handwriting text-slate-800 text-lg sm:text-xl font-bold leading-tight">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {photo.caption}
                      </p>
                    </div>

                    <button
                      onClick={(e) => toggleHeart(photo.id, e)}
                      className="p-1.5 rounded-full hover:bg-rose-50 text-rose-400 hover:text-rose-600 transition-colors"
                      title="Heart this memory"
                    >
                      <Heart
                        className={`w-5 h-5 transition-transform active:scale-125 ${
                          isLiked ? 'fill-rose-500 text-rose-500 scale-110' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn select-none"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            title="Close (ESC)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 animate-scaleUp"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] max-h-[70vh] rounded-2xl overflow-hidden bg-rose-50 mx-auto">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain sm:object-cover object-top"
              />
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-100 mt-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
                  {selectedPhoto.tag} • Photo {photoIndex + 1} of {photos.length}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-slate-800">
                  {selectedPhoto.title}
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  {selectedPhoto.caption}
                </p>
              </div>

              <button
                onClick={(e) => toggleHeart(selectedPhoto.id, e)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 text-sm font-semibold transition-all cursor-pointer"
              >
                <Heart
                  className={`w-4 h-4 ${
                    likedPhotos[selectedPhoto.id] ? 'fill-rose-500 text-rose-500' : ''
                  }`}
                />
                <span>{likedPhotos[selectedPhoto.id] ? 'Cherished' : 'Cherish'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
 
