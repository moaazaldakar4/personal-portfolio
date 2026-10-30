import React, { useEffect, useState } from 'react';

export const BackgroundAura: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Dynamic Cursor Spotlight (Desktop) */}
      {!isTouch && mousePos && (
        <div
          style={{
            position: 'absolute',
            top: mousePos.y,
            left: mousePos.x,
            width: '600px',
            height: '600px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.055) 0%, rgba(16, 185, 129, 0.015) 35%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            transition: 'transform 0.15s ease-out',
            willChange: 'transform, top, left',
          }}
        />
      )}

      {/* Ambient Breathing Glows */}
      <div
        className="ambient-orb-top"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(900px, 100vw)',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.06) 0%, rgba(5, 150, 105, 0.02) 45%, transparent 75%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />

      <div
        className="ambient-orb-bottom"
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.035) 0%, transparent 65%)',
          filter: 'blur(90px)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};
