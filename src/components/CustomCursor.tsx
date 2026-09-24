import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => { 
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);
    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => {
      window.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] rounded-full bg-crimson mix-blend-difference transition-transform duration-100 hidden md:block"
        style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }}
      />
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-white/30 transition-all duration-300 hidden md:block ${hover ? 'w-12 h-12 -translate-x-1/2 -translate-y-1/2' : 'w-8 h-8 -translate-x-1/2 -translate-y-1/2'}`}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
    </>
  );
}
