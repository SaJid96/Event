import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;
    let rx = 0, ry = 0;
    let mx = 0, my = 0;
    let animId: number;

    const trackMouse = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      animId = requestAnimationFrame(animRing);
    };

    window.addEventListener('mousemove', trackMouse);
    animId = requestAnimationFrame(animRing);

    return () => {
      window.removeEventListener('mousemove', trackMouse);
      cancelAnimationFrame(animId);
    };
  }, []);
}
