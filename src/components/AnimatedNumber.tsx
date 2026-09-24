import { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  value: number;
  inView: boolean;
  duration?: number;
  delay?: number;
  isFloat?: boolean;
}

export default function AnimatedNumber({ value, inView, duration = 1.5, delay = 0, isFloat = false }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (inView && !hasStarted.current) {
      hasStarted.current = true;
      const timer = setTimeout(() => {
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;
        const tick = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / (duration * 1000), 1);
          const ease = 1 - Math.pow(1 - progress, 3); // ease out cubic
          const current = value * ease;
          if (isFloat) {
            setDisplay(parseFloat(current.toFixed(1)));
          } else {
            setDisplay(Math.round(current));
          }
          if (now < endTime) {
            requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        };
        requestAnimationFrame(tick);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, value, duration, delay, isFloat]);

  const format = (val: number) => {
    if (isFloat) return val.toFixed(1);
    return Math.round(val).toString();
  };

  return <span>{format(display)}</span>;
}
