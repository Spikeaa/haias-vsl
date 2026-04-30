import React from 'react';

const steps = [
  { num: '01', title: 'We train your agent', body: 'We ingest your service catalogue, pricing, FAQs, and booking rules in a dedicated onboarding session.' },
  { num: '02', title: 'Your number goes live', body: 'We forward your existing business number (or provide a new one) to your AI agent in minutes.' },
  { num: '03', title: 'Jobs fill your calendar', body: 'Every qualified call is booked directly into your CRM — no manual entry, no missed leads.' },
];

const Demo = () => (
  <section id="how-it-works" className="section" style={{
    borderTop: '1px solid rgba(79,70,229,0.08)',
    background: 'linear-gradient(180deg, #f5f7ff 0%, #ffffff 100%)',
  }}>
    <div className="container">

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="label-pill" style={{ marginBottom: '1.5rem' }}>
          <span className="dot" />
          Live demo
        </div>
        <h2 style={{
          fontSize: 'clamp(2.2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: '#0f0f2e',
          marginBottom: '1.25rem',
          letterSpacing: '-0.03em',
        }}>
          Hear the{' '}
          <span style={{
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            AI in action.
          </span>
        </h2>
        <p style={{ color: '#4b5563', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.8 }}>
          Listen to our voice agent handle a real inbound home service enquiry —
          gathering lead details and booking the appointment with zero friction.
          This is what your callers will experience from day one.
        </p>
      </div>

      {/* How it works steps */}
      <style>{`
        .demo-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 640px) {
          .demo-steps { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="demo-steps">
        {steps.map((step, i) => (
          <div key={i} className="glass-panel" style={{ padding: '1.75rem 2rem' }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#00b8e8',
              textShadow: '0 0 8px rgba(0,200,255,0.25)',
              marginBottom: '1rem',
            }}>
              STEP {step.num}
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f0f2e', marginBottom: '0.75rem', lineHeight: 1.3 }}>
              {step.title}
            </h3>
            <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7 }}>{step.body}</p>
          </div>
        ))}
      </div>

      <div style={{ position: 'relative', maxWidth: '960px', margin: '0 auto' }}>
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
              src="https://www.loom.com/embed/90568fc7bd00463bb5ff7530fec426cf?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              loading="lazy"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="HAIAS AI Demo Call"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Demo;
