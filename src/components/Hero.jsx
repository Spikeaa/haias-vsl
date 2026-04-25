import React, { useEffect, useRef } from 'react';

const avatars = [
  "https://i.pravatar.cc/100?img=11",
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=33",
  "https://i.pravatar.cc/100?img=60",
  "https://i.pravatar.cc/100?img=26",
];

const SERVICES_CYCLE = ['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Home Inspection'];

/* Animated canvas orb background */
const OrbCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const orbs = [
      { x: 0.28, y: 0.35, r: 280, color: [124, 58, 237],  speed: 0.0008 },
      { x: 0.72, y: 0.30, r: 220, color: [59, 130, 246],  speed: 0.0011 },
      { x: 0.50, y: 0.70, r: 180, color: [79, 70, 229],   speed: 0.0006 },
      { x: 0.15, y: 0.65, r: 140, color: [139, 92, 246],  speed: 0.0014 },
      { x: 0.85, y: 0.60, r: 160, color: [96, 165, 250],  speed: 0.0010 },
    ];

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      orbs.forEach((orb, i) => {
        const phase = t * orb.speed * 1000 + i * 1.3;
        const ox = W * orb.x + Math.sin(phase * 0.7) * 60;
        const oy = H * orb.y + Math.cos(phase * 0.5) * 40;

        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, `rgba(${orb.color.join(',')}, 0.18)`);
        grad.addColorStop(0.5, `rgba(${orb.color.join(',')}, 0.07)`);
        grad.addColorStop(1, `rgba(${orb.color.join(',')}, 0)`);

        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      t += 16;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

/* Cycling service word in headline */
const CyclingWord = () => {
  const [idx, setIdx] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % SERVICES_CYCLE.length);
        setVisible(true);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{
      display: 'inline-block',
      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity 0.35s ease, transform 0.35s ease',
      minWidth: '200px',
    }}>
      {SERVICES_CYCLE[idx]}
    </span>
  );
};

const TopBanner = () => (
  <div style={{
    background: 'linear-gradient(90deg, rgba(79,70,229,0.08), rgba(124,58,237,0.08))',
    borderBottom: '1px solid rgba(79,70,229,0.15)',
    color: '#374151',
    textAlign: 'center',
    padding: '0.6rem 1rem',
    fontSize: '0.82rem',
    fontWeight: 500,
    letterSpacing: '0.04em',
  }}>
    <span style={{
      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: 700,
      marginRight: '0.6rem',
    }}>Limited Time:</span>
    100% off onboarding fee for new home service partners
  </div>
);

const Navbar = () => (
  <nav style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 2rem',
    position: 'absolute',
    top: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 100,
    maxWidth: '1200px',
    width: '100%',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontWeight: 800,
      fontSize: '1.3rem',
      letterSpacing: '-0.03em',
      color: '#0f0f2e',
      fontFamily: "'Outfit', sans-serif",
    }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="navIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="url(#navIconGrad)" />
        <polyline points="2 17 12 22 22 17" stroke="url(#navIconGrad)" />
        <polyline points="2 12 12 17 22 12" stroke="url(#navIconGrad)" />
      </svg>
      HAIAS
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', fontWeight: 500, color: '#4b5563', fontSize: '0.9rem' }}>
      <a href="#features" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#0f0f2e'} onMouseOut={e => e.target.style.color = '#4b5563'}>Features</a>
      <a href="#contact" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#0f0f2e'} onMouseOut={e => e.target.style.color = '#4b5563'}>Contact</a>
      <a href="#apply" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem' }}>Book a Demo</a>
    </div>
  </nav>
);

const Hero = () => (
  <>
    <TopBanner />
    <Navbar />

    <section style={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '11rem',
      paddingBottom: '5rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #f5f7ff 0%, #ffffff 60%)',
    }}>

      <OrbCanvas />

      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '860px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        <div className="label-pill fade-in-up" style={{ marginBottom: '2rem' }}>
          <span className="dot" />
          AI Voice Agents for Home Services
        </div>

        <h1 className="fade-in-up fade-in-up-2" style={{
          fontSize: 'clamp(2.6rem, 6vw, 4.75rem)',
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: '-0.035em',
          color: '#0f0f2e',
          marginBottom: '0.5rem',
          maxWidth: '800px',
        }}>
          Never miss another
        </h1>
        <h1 className="fade-in-up fade-in-up-2" style={{
          fontSize: 'clamp(2.6rem, 6vw, 4.75rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.035em',
          marginBottom: '1.5rem',
          maxWidth: '800px',
        }}>
          <CyclingWord /> lead.
        </h1>

        <p className="fade-in-up fade-in-up-3" style={{
          fontSize: '1.1rem',
          color: '#374151',
          maxWidth: '580px',
          lineHeight: 1.7,
          fontWeight: 400,
          marginBottom: '2.5rem',
        }}>
          Our AI voice agents answer every call instantly, capture lead details,
          and book estimates directly into your calendar — 24/7, across every
          trade you run.
        </p>

        <div className="fade-in-up fade-in-up-4" style={{
          display: 'flex',
          gap: '0.875rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          <a href="#demo" className="btn-primary">Book Your Demo</a>
          <a href="#how-it-works" className="btn-secondary">See How It Works</a>
        </div>

        <div className="fade-in-up fade-in-up-5" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.875rem',
          marginBottom: '4.5rem',
        }}>
          <div style={{ display: 'flex' }}>
            {avatars.map((src, i) => (
              <div key={i} style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                border: '2px solid #ffffff',
                boxShadow: '0 0 0 1px rgba(79,70,229,0.15)',
                marginLeft: i === 0 ? 0 : '-10px',
                overflow: 'hidden',
                position: 'relative',
                zIndex: avatars.length - i,
                background: '#e5e7eb',
              }}>
                <img src={src} alt="Client" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
            ))}
          </div>
          <span style={{ fontSize: '0.87rem', color: '#4b5563', fontWeight: 500 }}>
            Trusted by 20+ scaling home service businesses
          </span>
        </div>

        {/* Video embed */}
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{
            position: 'absolute',
            top: '-13px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            color: '#ffffff',
            padding: '5px 18px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            zIndex: 10,
            whiteSpace: 'nowrap',
          }}>
            Watch Live Demo
          </div>
          <div className="glass-panel" style={{ padding: '10px' }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '10px',
              background: '#f1f5f9',
            }}>
              <iframe
                src="https://www.loom.com/embed/702a177456cd435786748693c26edfdd?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                loading="lazy"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="HAIAS Live Demo"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  </>
);

export default Hero;
