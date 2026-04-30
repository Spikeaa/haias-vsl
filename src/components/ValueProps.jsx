import React from 'react';

const valuePropsData = [
  {
    title: "Automatically book appointments 24/7",
    description: "Our AI answers enquiries and books calls for you around the clock. Sit back while it puts paying jobs on your calendar — no staff required. Whether it's 2am on a Sunday or the middle of the Christmas rush, your phone is always answered professionally.",
    imageSrc: "https://framerusercontent.com/images/IMJoZTRKgTzpFs3MrwuExrQC4.png?width=1112&height=575",
    stat: { value: '94%', label: 'of calls answered on first ring' },
  },
  {
    title: "Handles high call volume without breaking",
    description: "A dedicated team trains your voice agent to sound distinctly human — capable of managing far more calls than any receptionist, without a single dropped lead. During peak season, storm surges, or a viral ad campaign, your AI scales instantly with zero extra cost.",
    imageSrc: "https://framerusercontent.com/images/NwS6xmYlpE5uwV255srC0DGDQU.jpg?width=1600&height=800",
    stat: { value: 'Unlimited', label: 'simultaneous calls handled' },
  },
  {
    title: "Pay for talk time, not headcount",
    description: "You're charged only when your agent is live on a call — just $0.20 per minute. Run the numbers: you'll replace thousands in salary with a fraction of the cost. No sick days, no training time, no employment taxes. Just results.",
    imageSrc: "https://framerusercontent.com/images/KjQ6XEN2qZ9tfqYFM32dLH3dY.jpeg?width=975&height=648",
    stat: { value: '$0.20', label: 'per minute — no retainer' },
  },
];

const ValueProps = () => (
  <section className="section" style={{
    borderTop: '1px solid rgba(79,70,229,0.08)',
    background: '#ffffff',
  }}>
    <style>{`
      .vp-header { text-align: center; margin-bottom: 4rem; }
      .vp-rows { display: flex; flex-direction: column; gap: 6rem; }
      .vp-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 4rem;
      }
      .vp-row.reversed { direction: rtl; }
      .vp-row.reversed > * { direction: ltr; }
      @media (max-width: 768px) {
        .vp-rows { gap: 3.5rem; }
        .vp-row {
          grid-template-columns: 1fr;
          gap: 2rem;
          direction: ltr !important;
        }
        .vp-row.reversed > * { direction: ltr; }
        .vp-row .vp-image { order: -1; }
      }
    `}</style>

    <div className="container">

      <div className="vp-header">
        <div className="label-pill" style={{ marginBottom: '1.5rem' }}>
          <span className="dot" />
          Why it works
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
          fontWeight: 800,
          color: '#0f0f2e',
          marginBottom: '1.25rem',
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
        <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
          A missed call is a missed job. Every unanswered ring is money walking out the door.
          We deploy intelligent systems to capture every opportunity your marketing generates.
        </p>
      </div>

      <div className="vp-rows">
        {valuePropsData.map((prop, index) => (
          <div key={index} className={`vp-row${index % 2 !== 0 ? ' reversed' : ''}`}>
            <div>
              <div style={{
                width: '40px',
                height: '3px',
                background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
                borderRadius: '2px',
                marginBottom: '1.75rem',
              }} />
              <h3 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)',
                fontWeight: 700,
                color: '#0f0f2e',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}>
                {prop.title}
              </h3>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                {prop.description}
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'linear-gradient(135deg, rgba(79,70,229,0.06), rgba(124,58,237,0.06))',
                border: '1px solid rgba(79,70,229,0.15)',
                borderRadius: '12px',
                padding: '0.875rem 1.25rem',
                flexWrap: 'wrap',
              }}>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {prop.stat.value}
                </span>
                <span style={{ color: '#4b5563', fontSize: '0.9rem', fontWeight: 500 }}>
                  {prop.stat.label}
                </span>
              </div>
            </div>
            <div className="vp-image">
              <div className="glass-panel" style={{ padding: '10px' }}>
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
