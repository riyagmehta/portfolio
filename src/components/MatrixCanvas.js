import React, { useEffect, useRef } from 'react';

export default function MatrixCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouse = { x: -999, y: -999 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    const COLS = Math.floor(window.innerWidth / 20);
    const drops = Array(COLS).fill(1);
    const chars = '01';

    const draw = () => {
      ctx.fillStyle = 'rgba(14,15,17,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const x = i * 20;
        const y = drops[i] * 20;
        const dist = Math.hypot(x - mouse.x, y - mouse.y);
        const proximity = Math.max(0, 1 - dist / 160);

        if (proximity > 0.1) {
          ctx.fillStyle = `rgba(124,106,247,${0.08 + proximity * 0.55})`;
          ctx.font = `${11 + proximity * 4}px JetBrains Mono, monospace`;
        } else {
          ctx.fillStyle = 'rgba(124,106,247,0.07)';
          ctx.font = '11px JetBrains Mono, monospace';
        }

        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none', opacity: 0.6,
      }}
    />
  );
}
