import React from 'react';

const valuePropsData = [
  {
    title: "Automatically book appointments 24/7",
    description: "Our AI answers enquiries and books calls for you around the clock. Sit back while it puts paying jobs on your calendar — no staff required.",
    imageSrc: "https://framerusercontent.com/images/IMJoZTRKgTzpFs3MrwuExrQC4.png?width=1112&height=575",
  },
  {
    title: "Handles high call volume without breaking",
    description: "A dedicated team trains your voice agent to sound distinctly human — capable of managing far more calls than any receptionist, without a single dropped lead.",
    imageSrc: "https://framerusercontent.com/images/NwS6xmYlpE5uwV255srC0DGDQU.jpg?width=1600&height=800",
  },
  {
    title: "Pay for talk time, not headcount",
    description: "You're charged only when your agent is live on a call — just $0.20 per minute. Run the numbers: you'll replace thousands in salary with a fraction of the cost.",
    imageSrc: "https://framerusercontent.com/images/KjQ6XEN2qZ9tfqYFM32dLH3dY.jpeg?width=975&height=648",
  },
];

const ValueProps = () => (
  <section className="section" style={{
    borderTop: '1px solid rgba(79,70,229,0.08)',
    background: '#ffffff',
  }}>
    <div className="container">

      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <div className="label-pill" style={{ marginBottom: '1.5rem' }}>
          <span className="dot" />
          Why it works
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: '#0f0f2e',
          marginBottom: '1rem',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
        }}>
          Fix the leaks in your{' '}
          <span style={{
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            sales funnel.
          </span>
        </h2>
        <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
          A missed call is a missed job. We deploy intelligent systems to capture every opportunity your marketing generates.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '9rem' }}>
        {valuePropsData.map((prop, index) => (
          <div
            key={index}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              gap: '5rem',
              direction: index % 2 !== 0 ? 'rtl' : 'ltr',
            }}
          >
            <div style={{ direction: 'ltr' }}>
              <div style={{
                width: '36px',
                height: '3px',
                background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
                borderRadius: '2px',
                marginBottom: '1.5rem',
              }} />
              <h3 style={{
                fontSize: '1.9rem',
                fontWeight: 700,
                color: '#0f0f2e',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}>
                {prop.title}
              </h3>
              <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.75 }}>
                {prop.description}
              </p>
            </div>
            <div style={{ direction: 'ltr' }}>
              <div className="glass-panel" style={{ padding: '8px' }}>
                <img
                  src={prop.imageSrc}
                  alt={prop.title}
                  loading="lazy"
                  style={{ width: '100%', borderRadius: '10px', display: 'block' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ValueProps;
