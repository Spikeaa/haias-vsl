import React, { useEffect, useRef } from 'react';

const BUBBLE_COUNT = 18;

function makeBubble(W, H) {
  const blue = Math.random() < 0.5;
  const r = 18 + Math.random() * 52;
  return {
    x: Math.random() * W,
    y: Math.random() * H,
    r,
    /* each bubble drifts on its own slow elliptical path */
    ax: 30 + Math.random() * 60,   /* x amplitude */
    ay: 20 + Math.random() * 50,   /* y amplitude */
    ox: Math.random() * Math.PI * 2, /* phase offset x */
    oy: Math.random() * Math.PI * 2, /* phase offset y */
    sx: 0.00018 + Math.random() * 0.00022, /* x speed */
    sy: 0.00014 + Math.random() * 0.00018, /* y speed */
    /* gentle bob upward */
    rise: 0.006 + Math.random() * 0.01,
    baseY: 0,
    blue,
    alpha: 0.04 + Math.random() * 0.07,
  };
}

const LightningCanvas = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let bubbles = [];
    let t = 0;

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

    const W = window.innerWidth, H = window.innerHeight;
    bubbles = Array.from({ length: BUBBLE_COUNT }, () => {
      const b = makeBubble(W, H);
      b.baseY = b.y;
      return b;
    });

    const draw = (ts) => {
      const W = window.innerWidth, H = window.innerHeight;
      t = ts * 0.001;
      ctx.clearRect(0, 0, W, H);

      bubbles.forEach(b => {
        /* float on elliptical path */
        const cx = b.x + Math.sin(t * b.sx * 1000 + b.ox) * b.ax;
        /* slow upward drift, wraps back to bottom */
        b.baseY -= b.rise;
        if (b.baseY < -b.r * 2) b.baseY = H + b.r;
        const cy = b.baseY + Math.sin(t * b.sy * 1000 + b.oy) * b.ay;

        /* bubble fill — radial gradient, lighter at top-left for glass effect */
        const grad = ctx.createRadialGradient(
          cx - b.r * 0.3, cy - b.r * 0.3, b.r * 0.05,
          cx, cy, b.r
        );

        if (b.blue) {
          grad.addColorStop(0,   `rgba(180, 240, 255, ${b.alpha * 1.4})`);
          grad.addColorStop(0.4, `rgba(0, 200, 255,  ${b.alpha * 0.7})`);
          grad.addColorStop(1,   `rgba(0, 140, 220,  ${b.alpha * 0.2})`);
        } else {
          grad.addColorStop(0,   `rgba(220, 200, 255, ${b.alpha * 1.4})`);
          grad.addColorStop(0.4, `rgba(150, 80,  255, ${b.alpha * 0.7})`);
          grad.addColorStop(1,   `rgba(100, 40,  200, ${b.alpha * 0.2})`);
        }

        /* fill */
        ctx.beginPath();
        ctx.arc(cx, cy, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        /* rim — thin bright arc for bubble edge */
        ctx.beginPath();
        ctx.arc(cx, cy, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = b.blue
          ? `rgba(100, 220, 255, ${b.alpha * 1.8})`
          : `rgba(180, 130, 255, ${b.alpha * 1.8})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        /* specular highlight — small bright arc top-left */
        ctx.beginPath();
        ctx.arc(cx - b.r * 0.28, cy - b.r * 0.28, b.r * 0.22, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 1.2})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
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
      }}
    />
  );
};

export default LightningCanvas;
