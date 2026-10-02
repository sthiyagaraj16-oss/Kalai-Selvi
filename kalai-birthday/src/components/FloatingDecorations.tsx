import React from 'react';

export const FloatingDecorations: React.FC = () => {
  const decorations = [
    { emoji: '🎈', left: '5%', duration: '18s', delay: '0s', size: 'text-2xl opacity-40' },
    { emoji: '✨', left: '12%', duration: '14s', delay: '3s', size: 'text-lg opacity-35' },
    { emoji: '🌸', left: '22%', duration: '20s', delay: '1s', size: 'text-xl opacity-40' },
    { emoji: '💖', left: '35%', duration: '16s', delay: '5s', size: 'text-base opacity-30' },
    { emoji: '🎈', left: '48%', duration: '22s', delay: '2s', size: 'text-3xl opacity-35' },
    { emoji: '⭐', left: '60%', duration: '15s', delay: '4s', size: 'text-sm opacity-40' },
    { emoji: '🎀', left: '72%', duration: '19s', delay: '0.5s', size: 'text-xl opacity-35' },
    { emoji: '🎈', left: '85%', duration: '17s', delay: '6s', size: 'text-2xl opacity-40' },
    { emoji: '✨', left: '94%', duration: '13s', delay: '2.5s', size: 'text-lg opacity-35' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {decorations.map((item, index) => (
        <div
          key={index}
          className={`absolute bottom-[-50px] ${item.size} select-none`}
          style={{
            left: item.left,
            animation: `floatUp ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay,
          }}
        >
          {item.emoji}
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.5;
          }
          85% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-110vh) rotate(20deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
 
