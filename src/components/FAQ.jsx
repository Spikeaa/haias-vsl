import React, { useState } from 'react';

const faqData = [
  {
    q: "Do I need to fire my front desk receptionist?",
    a: "Absolutely not. While our AI can handle 100% of your inbound volume, many clients run it alongside existing staff — covering after-hours calls, weekends, and overflow during peak season. It's an enhancement, not a replacement.",
  },
  {
    q: "Can the AI handle different trades under one account?",
    a: "Yes. If you operate across multiple services — say HVAC and plumbing — we train separate agent personas for each, or one unified agent that routes calls intelligently based on the caller's need. Multi-trade businesses are one of our fastest-growing segments.",
  },
  {
    q: "What if the AI doesn't know the answer to a specific technical question?",
    a: "The AI is trained on your company's exact knowledge base, services, and pricing. For highly technical questions it can't answer, it politely lets the caller know a specialist will follow up — and captures their details securely. Nothing falls through the cracks.",
  },
  {
    q: "Does this integrate with ServiceTitan or Housecall Pro?",
    a: "Yes. Our agents integrate directly with ServiceTitan, Housecall Pro, GoHighLevel, and 4,000+ other CRMs via native APIs and Zapier — pushing appointments and lead data instantly. If you use a bespoke system, our team will scope a custom integration.",
  },
  {
    q: "How long does it take to deploy the agent?",
    a: "Standard onboarding takes 3–5 business days. We map your conversational scripts, ingest your FAQs and service catalogue, and run rigorous tests before pushing your agent live. You'll hear the agent in action before it ever takes a real call.",
  },
  {
    q: "What happens if I get a surge in calls — can it scale?",
    a: "Yes, infinitely. Unlike a human team, your AI agent can handle hundreds of simultaneous calls with zero degradation in quality or wait times. A TV spot, seasonal rush, or storm event won't overwhelm it.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. We operate on a month-to-month basis. You pay only for active talk time at $0.20 per minute with no minimum commitment. Most clients stay because the ROI is obvious — not because they're locked in.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" style={{
      borderTop: '1px solid rgba(79,70,229,0.08)',
      background: 'linear-gradient(180deg, #f5f7ff 0%, #ffffff 100%)',
      paddingTop: '9rem',
      paddingBottom: '9rem',
    }}>
      <div className="container" style={{ maxWidth: '800px' }}>

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="label-pill" style={{ marginBottom: '1.5rem' }}>
            <span className="dot" />
            FAQ
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 800,
            color: '#0f0f2e',
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
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
          <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto' }}>
            Everything you need to know before getting started. Can't find your answer?{' '}
            <a href="#contact" style={{ color: '#4f46e5', fontWeight: 600 }}>Reach out directly.</a>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                style={{
                  background: isOpen ? 'rgba(79, 70, 229, 0.04)' : 'rgba(255,255,255,0.85)',
                  border: `1px solid ${isOpen ? 'rgba(79, 70, 229, 0.25)' : 'rgba(79,70,229,0.1)'}`,
                  borderRadius: '14px',
                  padding: '1.625rem 2rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
                  <span style={{
                    fontSize: '1.02rem',
                    color: isOpen ? '#0f0f2e' : '#1f2937',
                    fontWeight: 600,
                    transition: 'color 0.2s',
                    lineHeight: 1.5,
                  }}>
                    {item.q}
                  </span>
                  <span style={{
                    fontSize: '1.4rem',
                    fontWeight: 300,
                    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    flexShrink: 0,
                    display: 'inline-block',
                    lineHeight: 1,
                  }}>
                    +
                  </span>
                </div>
                {isOpen && (
                  <p style={{
                    marginTop: '1.125rem',
                    color: '#374151',
                    lineHeight: 1.8,
                    fontSize: '0.98rem',
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
