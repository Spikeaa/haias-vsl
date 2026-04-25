import React, { useEffect, useRef } from 'react';

function buildWeb(x1, y1, x2, y2, roughness, depth, segs) {
  if (depth === 0) { segs.push([x1, y1, x2, y2]); return; }
  const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * roughness;
  const my = (y1 + y2) / 2 + (Math.random() - 0.5) * roughness * 0.5;
  buildWeb(x1, y1, mx, my, roughness * 0.5, depth - 1, segs);
  buildWeb(mx, my, x2, y2, roughness * 0.5, depth - 1, segs);
  /* more frequent branching for web-like spread */
  if (Math.random() < 0.6) {
    const bx = mx + (Math.random() - 0.5) * roughness * 1.6;
    const by = my + (Math.random() - 0.5) * roughness * 1.2;
    buildWeb(mx, my, bx, by, roughness * 0.35, Math.max(depth - 2, 0), segs);
  }
}

function makeStrand(W, H) {
  /* anchor two random points anywhere on the viewport */
  const sx = W * (0.05 + Math.random() * 0.9);
  const sy = H * (0.02 + Math.random() * 0.7);
  const ex = sx + (Math.random() - 0.5) * W * 0.5;
  const ey = sy + (Math.random() - 0.5) * H * 0.4;
  const roughness = 40 + Math.random() * 60;
  const segs = [];
  buildWeb(sx, sy, ex, ey, roughness, 5, segs);
  const blue = Math.random() < 0.5;
  return {
    segs,
    life: 0,
    maxLife: 14000 + Math.random() * 8000, /* very long — stable, slow dissolve */
    blue,
  };
}

const LightningCanvas = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let strands = [];
    let nextIn = 3000 + Math.random() * 4000;
    let prev = null;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const spawn = () => {
      const W = window.innerWidth, H = window.innerHeight;
      strands.push(makeStrand(W, H));
    };

    const drawStrand = (s) => {
      const p = s.life / s.maxLife;
      /* slow fade in over 25%, hold, gentle fade out over last 20% */
      let a;
      if (p < 0.25) a = p / 0.25;
      else if (p < 0.8) a = 1;
      else a = 1 - (p - 0.8) / 0.2;
      a = Math.max(0, a);

      /* very low opacity — web-like gossamer */
      const baseAlpha = a * 0.045;

      const blue = s.blue;
      /* electric blue: 0,200,255  |  purple: 150,80,255 */
      const r = blue ? 0   : 150;
      const g = blue ? 200 : 80;
      const b = blue ? 255 : 255;

      s.segs.forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(${r},${g},${b},${baseAlpha})`;
        ctx.lineWidth = 0.8;
        ctx.shadowColor = `rgba(${r},${g},${b},${baseAlpha * 3})`;
        ctx.shadowBlur = 6;
        ctx.stroke();
      });
      ctx.shadowBlur = 0;
    };

    const frame = (ts) => {
      if (!prev) prev = ts;
      const dt = ts - prev; prev = ts;
      const W = window.innerWidth, H = window.innerHeight;

      ctx.clearRect(0, 0, W, H);

      nextIn -= dt;
      if (nextIn <= 0) {
        spawn();
        nextIn = 3000 + Math.random() * 4000;
      }

      strands = strands.filter(s => s.life < s.maxLife);
      strands.forEach(s => { s.life += dt; drawStrand(s); });

      animId = requestAnimationFrame(frame);
    };

    /* seed a few strands immediately so the page isn't empty on load */
    const W = window.innerWidth, H = window.innerHeight;
    for (let i = 0; i < 5; i++) strands.push(makeStrand(W, H));

    animId = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        filter: 'blur(1.5px)',        /* soft blur for gossamer feel */
        mixBlendMode: 'multiply',
      }}
    />
  );
};

export default LightningCanvas;
