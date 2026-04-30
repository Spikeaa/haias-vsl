import React from 'react';

const logos = [
  "https://framerusercontent.com/images/GCYOE4OkikmB43WxPjSXXXeFU.png",
  "https://framerusercontent.com/images/f9exQseiDRcHZBZcHbfmpU0cAig.png",
  "https://framerusercontent.com/images/GI5JyUGpIsu2cncPK74WA8DFt0.png",
  "https://framerusercontent.com/images/FxG1Gr0dnQNPRhp39aYGCKUaa9A.png",
  "https://framerusercontent.com/images/WzcZxoZtVcsiE9DltgBMHIF6EI.png",
  "https://framerusercontent.com/images/yXe3BLN7OAO0Ogz46SNczDem4.png",
  "https://framerusercontent.com/images/Hvb286O55J7227zEjJQdL9TgoAw.png",
  "https://framerusercontent.com/images/JpUarjvjFIFMMGlF8VvqH3AkXo.png",
];

const ClientLogos = () => (
  <section style={{
    padding: '3rem 0',
    overflow: 'hidden',
    position: 'relative',
    /* Dark strip so logos have real contrast */
    background: 'linear-gradient(135deg, #0f0f2e 0%, #1a1040 50%, #0f0f2e 100%)',
  }}>
    <div style={{
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#a5b4fc',
      fontSize: '0.72rem',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      fontWeight: 700,
    }}>
      Trusted by 20+ home service businesses
    </div>

    <div className="marquee">
      <div className="marquee-content" style={{ '--marquee-bg': '#0f0f2e' }}>
        {[...logos, ...logos].map((src, i) => (
          <div key={`logo-${i}-${src}`} style={{
            flex: '0 0 auto',
            width: '130px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1rem',
          }}>
            <img
              src={src}
              alt={`Partner logo ${i}`}
              loading="lazy"
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '38px',
                /* invert + brightness makes dark logos white on dark bg */
                filter: 'brightness(0) invert(1)',
                opacity: 0.75,
                transition: 'opacity 0.3s ease, filter 0.3s ease',
              }}
              onMouseOver={e => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 6px rgba(0,212,255,0.7))';
              }}
              onMouseOut={e => {
                e.currentTarget.style.opacity = '0.75';
                e.currentTarget.style.filter = 'brightness(0) invert(1)';
              }}
            />
          </div>
        ))}
      </div>
    </div>

    {/* Override marquee fade edges for dark bg */}
    <style>{`
      section .marquee::before { background: linear-gradient(to right, #0f0f2e 0%, transparent 100%) !important; }
      section .marquee::after  { background: linear-gradient(to left,  #0f0f2e 0%, transparent 100%) !important; }
    `}</style>
  </section>
);

export default ClientLogos;
