import { useEffect, useRef } from 'react';

export function useCountUp(target: number, suffix: string, isVisible: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isVisible || !ref.current) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * target);
      if (ref.current) ref.current.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, suffix]);
  return ref;
}
