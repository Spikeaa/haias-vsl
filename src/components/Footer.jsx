import React from 'react';

const Footer = () => (
  <footer style={{
    borderTop: '1px solid rgba(79,70,229,0.1)',
    padding: '9rem 0 3.5rem',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #f5f7ff 0%, #eef0ff 100%)',
  }}>
    <div style={{
      position: 'absolute',
      top: '8%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '70vw',
      height: '50vh',
      background: 'radial-gradient(ellipse at center, rgba(79, 70, 229, 0.09), rgba(124, 58, 237, 0.06), transparent 65%)',
      filter: 'blur(70px)',
      pointerEvents: 'none',
      zIndex: 0,
    }} />

    <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>

      {/* Pre-CTA trust stats */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '4rem',
        flexWrap: 'wrap',
        marginBottom: '4rem',
      }}>
        {[
          { value: '20+', label: 'Businesses Automated' },
          { value: '$1.2M+', label: 'Revenue Generated' },
          { value: '94%', label: 'Call Answer Rate' },
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.25rem',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #00c8ff, #4f46e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.25rem',
            }}>
              {stat.value}
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: 500 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 style={{
        fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
        fontWeight: 900,
        letterSpacing: '-0.035em',
        color: '#0f0f2e',
        lineHeight: 1.05,
        marginBottom: '1.5rem',
        maxWidth: '720px',
        margin: '0 auto 1.5rem',
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
        fontSize: '1.15rem',
        maxWidth: '540px',
        margin: '0 auto 3.5rem',
        lineHeight: 1.8,
      }}>
        Join the home service companies scaling effortlessly with AI voice agents
        that answer every call, qualify every lead, and book every job — while you sleep.
      </p>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '8rem' }}>
        <a
          href="#apply"
          className="btn-primary"
          style={{ padding: '1.1rem 3rem', fontSize: '1rem' }}
        >
          Book Your Demo Now
        </a>
        <a
          href="#how-it-works"
          className="btn-secondary"
          style={{ padding: '1.1rem 2rem', fontSize: '1rem' }}
        >
          See How It Works
        </a>
      </div>

      <div style={{
        borderTop: '1px solid rgba(79,70,229,0.1)',
        paddingTop: '2.75rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem',
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
          fontSize: '1.05rem',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        <div style={{ display: 'flex', gap: '1.75rem' }}>
          {['Privacy Policy', 'Terms of Service'].map(link => (
            <a
              key={link}
              href="#"
              style={{ color: '#6b7280', transition: 'color 0.2s' }}
              onMouseOver={e => e.target.style.color = '#0f0f2e'}
              onMouseOut={e => e.target.style.color = '#6b7280'}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
