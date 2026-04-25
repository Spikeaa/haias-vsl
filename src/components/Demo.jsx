import React from 'react';

const Demo = () => (
  <section id="how-it-works" className="section" style={{
    borderTop: '1px solid rgba(79,70,229,0.08)',
    background: 'linear-gradient(180deg, #f5f7ff 0%, #ffffff 100%)',
  }}>
    <div className="container" style={{ textAlign: 'center' }}>

      <div style={{ marginBottom: '4rem' }}>
        <div className="label-pill" style={{ marginBottom: '1.5rem' }}>
          <span className="dot" />
          Live demo
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
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
        <p style={{ color: '#4b5563', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
          Listen to our voice agent handle a real inbound home service enquiry —
          gathering lead details and booking the appointment with zero friction.
        </p>
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
