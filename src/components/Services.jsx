import React from 'react';

const HvacIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const PlumbingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 8v4l3 3" />
  </svg>
);
const RoofingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const ElectricalIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const InspectionIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const OvenIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
  </svg>
);
const PestIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9h6M9 12h6M9 15h4" />
  </svg>
);
const LandscapingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12M12 12L8 8M12 12l4-4" />
    <circle cx="12" cy="5" r="3" />
    <path d="M3 22h18" />
  </svg>
);
const SecurityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);
const PaintingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 13.5V19a2 2 0 002 2h16a2 2 0 002-2v-5.5" />
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M12 17v5" />
  </svg>
);
const MoreIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
  </svg>
);

const services = [
  { icon: <HvacIcon />, name: 'HVAC', description: 'Heating, cooling & ventilation. Never miss a service call, seasonal tune-up, or emergency installation lead.' },
  { icon: <PlumbingIcon />, name: 'Plumbing', description: 'From emergency bursts to routine installs, capture every inbound call around the clock without hold music.' },
  { icon: <RoofingIcon />, name: 'Roofing', description: 'Storm damage, inspections, and full replacements. Every enquiry is answered and qualified instantly.' },
  { icon: <ElectricalIcon />, name: 'Electrical', description: "Panel upgrades, EV chargers, rewiring. Book jobs while you're on the tools and your phone is out of reach." },
  { icon: <InspectionIcon />, name: 'Home Inspection', description: 'Qualify buyers, schedule walkthroughs, and send follow-up reminders — all handled automatically.' },
  { icon: <OvenIcon />, name: 'Oven & Appliance Cleaning', description: 'Handle booking enquiries, confirmations, and rescheduling for every clean without lifting a finger.' },
  { icon: <PestIcon />, name: 'Pest Control', description: 'Convert urgent inbound calls into booked treatments, day or night, with zero hold time.' },
  { icon: <LandscapingIcon />, name: 'Landscaping & Gardening', description: 'Seasonal demand surges handled seamlessly. Capture every quote request before a competitor does.' },
  { icon: <SecurityIcon />, name: 'Home Security', description: 'Qualify leads, book security assessments, and follow up with prospects on autopilot.' },
  { icon: <PaintingIcon />, name: 'Painting & Decorating', description: 'Turn every enquiry call into a booked quote. Your AI gathers job details and schedules the visit.' },
  { icon: <MoreIcon />, name: 'And Many More', description: 'Any trade that relies on inbound calls can have an AI agent deployed and live within days.' },
];

const iconBoxStyle = {
  width: '54px',
  height: '54px',
  borderRadius: '14px',
  background: 'linear-gradient(135deg, rgba(0,200,255,0.1), rgba(79,70,229,0.12))',
  border: '1px solid rgba(0,200,255,0.18)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0099cc',
  flexShrink: 0,
};

const Services = () => (
  <section id="features" className="section" style={{
    borderTop: '1px solid rgba(79,70,229,0.08)',
    background: 'linear-gradient(180deg, #ffffff 0%, #f5f7ff 100%)',
  }}>
    <div className="container">

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="label-pill" style={{ marginBottom: '1.5rem' }}>
          <span className="dot" />
          Industries we serve
        </div>
        <h2 style={{
          fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
          fontWeight: 800,
          color: '#0f0f2e',
          marginBottom: '1.25rem',
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
        <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
          Whether you run one trade or a multi-service operation, our AI voice agents
          handle inbound calls, qualify jobs, and fill your calendar — automatically,
          without any extra headcount.
        </p>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
        }
        .services-trust-strip {
          margin-top: 3rem;
          padding: 2rem 2.5rem;
          background: linear-gradient(135deg, rgba(0,200,255,0.06), rgba(79,70,229,0.07), rgba(124,58,237,0.06));
          border: 1px solid rgba(0,200,255,0.18);
          border-radius: 20px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          text-align: center;
          box-shadow: 0 0 40px rgba(0,200,255,0.06);
        }
        @media (max-width: 640px) {
          .services-trust-strip {
            padding: 1.75rem 1.5rem;
            grid-template-columns: 1fr 1fr;
            display: grid;
            justify-items: center;
          }
        }
      `}</style>
      <div className="services-grid">
        {services.map((svc, i) => (
          <div
            key={i}
            className="glass-panel service-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              cursor: 'default',
            }}
          >
            <div style={iconBoxStyle}>{svc.icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0f0f2e', marginBottom: '0.5rem' }}>
                {svc.name}
              </div>
              <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.65 }}>
                {svc.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom trust strip */}
      <div className="services-trust-strip">
        {[
          { value: '20+', label: 'Active Partners' },
          { value: '3–5 days', label: 'To Go Live' },
          { value: '24/7', label: 'Always On' },
          { value: '$0.20/min', label: 'Simple Pricing' },
        ].map((item, i) => (
          <div key={i}>
            <div style={{
              fontSize: '1.75rem',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #00c8ff, #4f46e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.25rem',
            }}>
              {item.value}
            </div>
            <div style={{ color: '#4b5563', fontSize: '0.875rem', fontWeight: 500 }}>{item.label}</div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;
