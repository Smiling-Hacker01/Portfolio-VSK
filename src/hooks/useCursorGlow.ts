import { useState, useEffect, useCallback } from 'react';

export function useCursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    window.requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    // Only apply on desktop
    if (window.innerWidth >= 1024) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return position;
}
