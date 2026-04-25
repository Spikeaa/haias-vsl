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
    borderTop: '1px solid rgba(79,70,229,0.08)',
    borderBottom: '1px solid rgba(79,70,229,0.08)',
    padding: '3.5rem 0',
    overflow: 'hidden',
    position: 'relative',
    background: '#ffffff',
  }}>
    <div style={{
      textAlign: 'center',
      marginBottom: '2.5rem',
      color: '#9ca3af',
      fontSize: '0.75rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontWeight: 600,
    }}>
      Trusted by 20+ home service businesses
    </div>

    <div className="marquee">
      <div className="marquee-content">
        {[...logos, ...logos].map((src, i) => (
          <div key={i} style={{ flex: '0 0 auto', width: '180px', display: 'flex', justifyContent: 'center', padding: '0 1.5rem' }}>
            <img
              src={src}
              alt={`Partner logo ${i}`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '36px',
                opacity: 0.4,
                filter: 'grayscale(100%)',
                transition: 'opacity 0.3s ease, filter 0.3s ease',
              }}
              loading="lazy"
              onMouseOver={e => {
                e.currentTarget.style.filter = 'none';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseOut={e => {
                e.currentTarget.style.filter = 'grayscale(100%)';
                e.currentTarget.style.opacity = '0.4';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
