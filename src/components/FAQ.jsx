import React, { useState } from 'react';

const faqData = [
  {
    q: "Do I need to fire my front desk receptionist?",
    a: "Absolutely not. While our AI can handle 100% of your inbound volume, many clients run it alongside existing staff — covering after-hours calls, weekends, and overflow during peak season.",
  },
  {
    q: "Can the AI handle different trades under one account?",
    a: "Yes. If you operate across multiple services — say HVAC and plumbing — we train separate agent personas for each, or one unified agent that routes calls intelligently based on the caller's need.",
  },
  {
    q: "What if the AI doesn't know the answer to a specific technical question?",
    a: "The AI is trained on your company's exact knowledge base, services, and pricing. For highly technical questions it can't answer, it politely lets the caller know a specialist will follow up — and captures their details securely.",
  },
  {
    q: "Does this integrate with ServiceTitan or Housecall Pro?",
    a: "Yes. Our agents integrate directly with ServiceTitan, Housecall Pro, GoHighLevel, and 4,000+ other CRMs via native APIs and Zapier — pushing appointments and lead data instantly.",
  },
  {
    q: "How long does it take to deploy the agent?",
    a: "Standard onboarding takes 3–5 days. We map your conversational scripts, ingest your FAQs, and run rigorous tests before pushing your agent live to your phone system.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" style={{
      borderTop: '1px solid rgba(79,70,229,0.08)',
      background: 'linear-gradient(180deg, #f5f7ff 0%, #ffffff 100%)',
    }}>
      <div className="container" style={{ maxWidth: '760px' }}>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="label-pill" style={{ marginBottom: '1.5rem' }}>
            <span className="dot" />
            FAQ
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3vw, 2.5rem)',
            fontWeight: 800,
            color: '#0f0f2e',
            letterSpacing: '-0.03em',
          }}>
            Frequently asked{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              questions.
            </span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                style={{
                  background: isOpen ? 'rgba(79, 70, 229, 0.04)' : 'rgba(255,255,255,0.8)',
                  border: `1px solid ${isOpen ? 'rgba(79, 70, 229, 0.25)' : 'rgba(79,70,229,0.1)'}`,
                  borderRadius: '12px',
                  padding: '1.5rem 1.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span style={{
                    fontSize: '1rem',
                    color: isOpen ? '#0f0f2e' : '#1f2937',
                    fontWeight: 600,
                    transition: 'color 0.2s',
                    lineHeight: 1.4,
                  }}>
                    {item.q}
                  </span>
                  <span style={{
                    fontSize: '1.3rem',
                    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    flexShrink: 0,
                    lineHeight: 1,
                    display: 'inline-block',
                  }}>
                    +
                  </span>
                </div>
                {isOpen && (
                  <p style={{
                    marginTop: '1rem',
                    color: '#374151',
                    lineHeight: 1.7,
                    fontSize: '0.97rem',
                    animation: 'fadeInUp 0.25s ease both',
                  }}>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
