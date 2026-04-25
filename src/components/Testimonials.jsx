import React from 'react';

const testimonials = [
  {
    result: "Added $43k",
    detail: "in new home service revenue in 30 days",
    videoSrc: "https://www.youtube.com/embed/a0605NnrgEs",
  },
  {
    result: "Booked $12k",
    detail: "on autopilot while the office was closed",
    videoSrc: "https://www.youtube.com/embed/9ckul9DUXzQ",
  },
  {
    result: "Doubled revenue",
    detail: "from $5.4k to $10k with zero new hires",
    videoSrc: "https://www.youtube.com/embed/D8CtBjVsl_A",
  },
];

const Testimonials = () => (
  <section className="section" style={{
    borderTop: '1px solid rgba(79,70,229,0.08)',
    background: '#ffffff',
  }}>
    <div className="container">

      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <div className="label-pill" style={{ marginBottom: '1.5rem' }}>
          <span className="dot" />
          Client results
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          fontWeight: 800,
          color: '#0f0f2e',
          marginBottom: '1rem',
          letterSpacing: '-0.03em',
        }}>
          Over{' '}
          <span style={{
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            $1.2M generated
          </span>{' '}
          for these 3 clients
        </h2>
        <p style={{ color: '#4b5563', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
          Listen directly to home service business owners who automated their call handling and scaled their revenue.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '1.5rem',
      }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="glass-panel"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              gridColumn: i === 2 ? '1 / -1' : 'auto',
            }}
          >
            <div>
              <div style={{
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#0f0f2e',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                marginBottom: '0.3rem',
              }}>
                {t.result}
              </div>
              <div style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                {t.detail}
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '6px' }}>
              <div style={{
                position: 'relative',
                paddingBottom: i === 2 ? '40%' : '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '8px',
                background: '#f1f5f9',
              }}>
                <iframe
                  src={t.videoSrc}
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title={`Client testimonial — ${t.result}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Testimonials;
