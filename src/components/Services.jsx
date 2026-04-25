import React from 'react';

const HvacIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const PlumbingIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 8v4l3 3" />
  </svg>
);
const RoofingIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const ElectricalIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const InspectionIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const OvenIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
  </svg>
);
const PestIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9h6M9 12h6M9 15h4" />
  </svg>
);
const LandscapingIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12M12 12L8 8M12 12l4-4" />
    <circle cx="12" cy="5" r="3" />
    <path d="M3 22h18" />
  </svg>
);
const MoreIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);

const services = [
  { icon: <HvacIcon />, name: 'HVAC', description: 'Heating, cooling & ventilation. Never miss a service call or installation lead.' },
  { icon: <PlumbingIcon />, name: 'Plumbing', description: 'From emergency bursts to routine installs, capture every call around the clock.' },
  { icon: <RoofingIcon />, name: 'Roofing', description: 'Storm damage, inspections, and replacements. Every enquiry answered instantly.' },
  { icon: <ElectricalIcon />, name: 'Electrical', description: "Panel upgrades, EV chargers, rewiring. Book jobs while you're on the tools." },
  { icon: <InspectionIcon />, name: 'Home Inspection', description: 'Qualify buyers, schedule walkthroughs, and follow up, all on autopilot.' },
  { icon: <OvenIcon />, name: 'Oven & Appliance Cleaning', description: 'Handle booking enquiries and confirmations for every clean without lifting a finger.' },
  { icon: <PestIcon />, name: 'Pest Control', description: 'Convert urgent inbound calls into booked treatments, day or night.' },
  { icon: <LandscapingIcon />, name: 'Landscaping & Gardening', description: 'Seasonal demand surges handled seamlessly. No hold music, no missed jobs.' },
  { icon: <MoreIcon />, name: '& Many More', description: 'Any trade that relies on inbound calls can deploy our AI in days.' },
];

const iconBoxStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(124,58,237,0.1))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#4f46e5',
  flexShrink: 0,
};

const Services = () => (
  <section id="features" className="section" style={{
    borderTop: '1px solid rgba(79,70,229,0.08)',
    background: 'linear-gradient(180deg, #ffffff 0%, #f5f7ff 100%)',
  }}>
    <div className="container">

      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <div className="label-pill" style={{ marginBottom: '1.5rem' }}>
          <span className="dot" />
          Industries we serve
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: '#0f0f2e',
          marginBottom: '1rem',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
        }}>
          One AI platform.{' '}
          <span style={{
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Every trade.
          </span>
        </h2>
        <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
          Whether you run one trade or a multi-service operation, our AI voice agents
          handle inbound calls, qualify jobs, and fill your calendar automatically.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.25rem',
      }}>
        {services.map((svc, i) => (
          <div
            key={i}
            className="glass-panel"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
              cursor: 'default',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={iconBoxStyle}>{svc.icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#0f0f2e', marginBottom: '0.35rem' }}>
                {svc.name}
              </div>
              <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {svc.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;
