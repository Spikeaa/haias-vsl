import React, { useEffect, useRef } from 'react';

/* Recursive bolt segment builder */
function buildBolt(x1, y1, x2, y2, roughness, depth, segments) {
  if (depth === 0) {
    segments.push([x1, y1, x2, y2]);
    return;
  }
  const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * roughness;
  const my = (y1 + y2) / 2 + (Math.random() - 0.5) * roughness;
  buildBolt(x1, y1, mx, my, roughness * 0.55, depth - 1, segments);
  buildBolt(mx, my, x2, y2, roughness * 0.55, depth - 1, segments);
  /* occasional branch */
  if (depth === 2 && Math.random() < 0.45) {
    const bx = mx + (Math.random() - 0.5) * roughness * 1.4;
    const by = my + roughness * (0.6 + Math.random() * 0.8);
    buildBolt(mx, my, bx, by, roughness * 0.4, depth - 1, segments);
  }
}

function randomBolt(W, H) {
  /* start from a random top-edge point, end somewhere below */
  const startX = W * (0.1 + Math.random() * 0.8);
  const startY = -10;
  const endX = startX + (Math.random() - 0.5) * W * 0.35;
  const endY = H * (0.25 + Math.random() * 0.55);
  const roughness = 60 + Math.random() * 80;
  const segs = [];
  buildBolt(startX, startY, endX, endY, roughness, 5, segs);
  return segs;
}

const LightningCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let bolts = [];   /* [{segs, alpha, life, maxLife}] */
    let nextBolt = 800 + Math.random() * 2400;
    let lastTs = null;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const spawnBolt = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      const segs = randomBolt(W, H);
      const maxLife = 320 + Math.random() * 200;
      bolts.push({ segs, alpha: 0, life: 0, maxLife });
      /* sometimes fire a second quick bolt nearby for realism */
      if (Math.random() < 0.3) {
        setTimeout(() => {
          const segs2 = randomBolt(W, H);
          bolts.push({ segs: segs2, alpha: 0, life: 0, maxLife: 220 });
        }, 60 + Math.random() * 80);
      }
    };

    const drawBolt = (bolt) => {
      /* envelope: flash in fast, decay slowly */
      const progress = bolt.life / bolt.maxLife;
      let alpha;
      if (progress < 0.08) {
        alpha = progress / 0.08;           /* fast flash in */
      } else {
        alpha = 1 - (progress - 0.08) / 0.92; /* slow fade out */
      }
      alpha = Math.max(0, alpha) * 0.13;   /* cap at very subtle */

      const W = window.innerWidth;
      const H = window.innerHeight;

      bolt.segs.forEach(([x1, y1, x2, y2]) => {
        /* glow layer */
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha * 0.35})`;
        ctx.lineWidth = 4;
        ctx.shadowColor = 'rgba(124, 58, 237, 0.6)';
        ctx.shadowBlur = 12;
        ctx.stroke();

        /* core layer */
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(196, 181, 253, ${alpha * 0.9})`;
        ctx.lineWidth = 0.8;
        ctx.shadowBlur = 0;
        ctx.stroke();
      });

      ctx.shadowBlur = 0;
      bolt.alpha = alpha;
    };

    const frame = (ts) => {
      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      const W = window.innerWidth;
      const H = window.innerHeight;
      ctx.clearRect(0, 0, W, H);

      nextBolt -= dt;
      if (nextBolt <= 0) {
        spawnBolt();
        nextBolt = 1200 + Math.random() * 3500;
      }

      bolts = bolts.filter(b => b.life < b.maxLife);
      bolts.forEach(b => {
        b.life += dt;
        drawBolt(b);
      });

      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default LightningCanvas;
