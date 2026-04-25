import React from 'react';

const Footer = () => (
  <footer style={{
    borderTop: '1px solid rgba(79,70,229,0.1)',
    padding: '7rem 0 3rem',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #f5f7ff 0%, #eef0ff 100%)',
  }}>
    {/* Ambient glow behind CTA */}
    <div style={{
      position: 'absolute',
      top: '10%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60vw',
      height: '40vh',
      background: 'radial-gradient(ellipse at center, rgba(79, 70, 229, 0.08), rgba(124, 58, 237, 0.05), transparent 65%)',
      filter: 'blur(60px)',
      pointerEvents: 'none',
      zIndex: 0,
    }} />

    <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
      <h2 style={{
        fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
        fontWeight: 900,
        letterSpacing: '-0.035em',
        color: '#0f0f2e',
        lineHeight: 1.05,
        marginBottom: '1.5rem',
      }}>
        Stop letting{' '}
        <span style={{
          background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          home service jobs
        </span>{' '}
        slip away.
      </h2>
      <p style={{
        color: '#4b5563',
        fontSize: '1.1rem',
        marginBottom: '3rem',
        maxWidth: '520px',
        margin: '0 auto 3rem',
        lineHeight: 1.7,
      }}>
        Join the home service companies scaling effortlessly with AI voice agents that never sleep.
      </p>

      <a
        href="#apply"
        className="btn-primary"
        style={{ padding: '1.1rem 3rem', fontSize: '1rem', marginBottom: '7rem', display: 'inline-flex' }}
      >
        Book Your Demo Now
      </a>

      <div style={{
        borderTop: '1px solid rgba(79,70,229,0.1)',
        paddingTop: '2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        color: '#9ca3af',
        fontSize: '0.875rem',
      }}>
        <div style={{
          fontWeight: 800,
          color: '#0f0f2e',
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1rem',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="footerIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="url(#footerIconGrad)" />
            <polyline points="2 17 12 22 22 17" stroke="url(#footerIconGrad)" />
            <polyline points="2 12 12 17 22 12" stroke="url(#footerIconGrad)" />
          </svg>
          HAIAS
        </div>
        <div style={{ color: '#6b7280' }}>&copy; {new Date().getFullYear()} HAIAS Solutions. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a
            href="#"
            style={{ color: '#6b7280', transition: 'color 0.2s' }}
            onMouseOver={e => e.target.style.color = '#0f0f2e'}
            onMouseOut={e => e.target.style.color = '#6b7280'}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            style={{ color: '#6b7280', transition: 'color 0.2s' }}
            onMouseOver={e => e.target.style.color = '#0f0f2e'}
            onMouseOut={e => e.target.style.color = '#6b7280'}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
