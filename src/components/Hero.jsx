import React, { useEffect, useState } from 'react';

const avatars = [
  "https://i.pravatar.cc/100?img=11",
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=33",
  "https://i.pravatar.cc/100?img=60",
  "https://i.pravatar.cc/100?img=26",
];

const SERVICES_CYCLE = ['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Home Inspection'];

const HeroOrbs = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
    {[
      { w: 480, h: 380, top: '8%',  left: '4%',  blue: false, dur: 22, delay: 0   },
      { w: 420, h: 340, top: '5%',  left: '58%', blue: true,  dur: 26, delay: -7  },
      { w: 360, h: 300, top: '45%', left: '15%', blue: true,  dur: 20, delay: -4  },
      { w: 400, h: 320, top: '40%', left: '65%', blue: false, dur: 24, delay: -11 },
      { w: 300, h: 260, top: '70%', left: '40%', blue: true,  dur: 28, delay: -9  },
      { w: 340, h: 280, top: '15%', left: '35%', blue: false, dur: 19, delay: -3  },
    ].map((o, i) => (
      <div key={i} style={{
        position: 'absolute',
        top: o.top, left: o.left,
        width: o.w, height: o.h,
        borderRadius: '50%',
        background: o.blue
          ? 'radial-gradient(ellipse at center, rgba(0,212,255,0.40) 0%, rgba(0,160,240,0.14) 50%, transparent 100%)'
          : 'radial-gradient(ellipse at center, rgba(168,85,255,0.36) 0%, rgba(120,50,230,0.12) 50%, transparent 100%)',
        filter: 'blur(55px)',
        animation: `drift${i % 3} ${o.dur}s ease-in-out ${o.delay}s infinite`,
        willChange: 'transform',
      }} />
    ))}
  </div>
);

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
      minWidth: '160px',
    }}>
      {SERVICES_CYCLE[idx]}
    </span>
  );
};

const TopBanner = () => (
  <div style={{
    background: 'linear-gradient(90deg, rgba(0,200,255,0.07), rgba(79,70,229,0.08), rgba(124,58,237,0.07))',
    borderBottom: '1px solid rgba(0,200,255,0.2)',
    color: '#374151',
    textAlign: 'center',
    padding: '0.6rem 1rem',
    fontSize: '0.82rem',
    fontWeight: 500,
    letterSpacing: '0.04em',
    boxShadow: '0 1px 0 rgba(0,200,255,0.08)',
  }}>
    <span style={{
      color: '#00c8ff',
      fontWeight: 700,
      marginRight: '0.6rem',
      textShadow: '0 0 12px rgba(0,200,255,0.4)',
    }}>Limited Time:</span>
    100% off onboarding fee for new home service partners
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .haias-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 2rem;
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          max-width: 1200px;
          width: 100%;
        }
        .haias-nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          font-weight: 500;
          color: #4b5563;
          font-size: 0.9rem;
        }
        .haias-nav-links a { transition: color 0.2s; }
        .haias-nav-links a:hover { color: #0f0f2e; }
        .haias-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 110;
        }
        .haias-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #0f0f2e;
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .haias-mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(12px);
          z-index: 200;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          font-size: 1.25rem;
          font-weight: 600;
        }
        .haias-mobile-menu.open { display: flex; }
        .haias-mobile-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: #0f0f2e;
          line-height: 1;
          padding: 8px;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .haias-nav {
            top: 40px;
            padding: 1rem 1.25rem;
          }
          .haias-nav-links { display: none; }
          .haias-hamburger { display: flex; }
        }
      `}</style>

      <nav className="haias-nav">
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

        <div className="haias-nav-links">
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="https://calendar.app.google/5WEtyn69N7bX3Ppo7" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem' }}>Book a Demo</a>
        </div>

        <button
          className="haias-hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`haias-mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <button className="haias-mobile-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>×</button>
        <a href="#features" style={{ color: '#0f0f2e' }} onClick={() => setMenuOpen(false)}>Features</a>
        <a href="#contact" style={{ color: '#0f0f2e' }} onClick={() => setMenuOpen(false)}>Contact</a>
        <a
          href="https://calendar.app.google/5WEtyn69N7bX3Ppo7"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: '1rem' }}
          onClick={() => setMenuOpen(false)}
        >
          Book a Demo
        </a>
      </div>
    </>
  );
};

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
      paddingTop: '10rem',
      paddingBottom: '5rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #f5f7ff 0%, #ffffff 60%)',
    }}>

      <HeroOrbs />

      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '860px',
        margin: '0 auto',
        padding: '0 1.25rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        <div className="label-pill fade-in-up" style={{ marginBottom: '2rem' }}>
          <span className="dot" />
          AI Voice Agents for Home Services
        </div>

        <h1 className="fade-in-up fade-in-up-2" style={{
          fontSize: 'clamp(2.2rem, 7vw, 4.75rem)',
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
          fontSize: 'clamp(2.2rem, 7vw, 4.75rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.035em',
          marginBottom: '1.5rem',
          maxWidth: '800px',
        }}>
          <CyclingWord /> lead.
        </h1>

        <p className="fade-in-up fade-in-up-3" style={{
          fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
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
          width: '100%',
          maxWidth: '420px',
        }}>
          <a href="https://calendar.app.google/5WEtyn69N7bX3Ppo7" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Your Demo</a>
          <a href="#how-it-works" className="btn-secondary">See How It Works</a>
        </div>

        <div className="fade-in-up fade-in-up-5" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.875rem',
          marginBottom: '4.5rem',
          flexWrap: 'wrap',
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
                <img src={src} alt="Client testimonial avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
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
            background: 'linear-gradient(135deg, #00c8ff, #4f46e5)',
            color: '#ffffff',
            padding: '5px 18px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            zIndex: 10,
            whiteSpace: 'nowrap',
            boxShadow: '0 0 16px rgba(0,200,255,0.35)',
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
