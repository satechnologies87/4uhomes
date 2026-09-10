import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { businessInfo } from '../data/content';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const sectionRef = useScrollReveal(0.12);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '130px 4vw',
        backgroundColor: 'var(--bg-sage)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '60px',
          alignItems: 'center'
        }}
      >
        {/* Left Image Panel */}
        <div
          style={{ gridColumn: '1 / span 6' }}
          className="about-image-col fade-left"
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.15)',
              border: '1px solid var(--border-light)'
            }}
          >
            <img
              src="/assets/happy_clients_porch.jpg"
              alt="Happy Client Family with 4U Homes Team — Leading Home Builders in Kottayam Kerala"
              style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
            />
            {/* Image corner accent */}
            <div
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(135deg, rgba(184,134,11,0.1) 0%, transparent 60%)',
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* Floating stat card */}
          <div
            className="fade-up fade-up-delay-3"
            style={{
              marginTop: '-50px',
              marginLeft: '30px',
              padding: '24px 30px',
              borderRadius: '12px',
              background: '#2c2820',
              border: '1px solid rgba(184,134,11,0.35)',
              position: 'relative',
              zIndex: 10,
              boxShadow: '0 8px 40px rgba(0,0,0,0.25)'
            }}
          >
            <div className="stat-number">100%</div>
            <div style={{ fontSize: '0.9rem', color: '#f5f0e8', fontWeight: 700, marginTop: '4px' }}>
              Transparent Pricing &amp; Handover
            </div>
            <div style={{ fontSize: '0.78rem', color: '#c8b89a', marginTop: '4px' }}>
              Trusted home builders in Kottayam, Kerala since 2012
            </div>
          </div>
        </div>

        {/* Right Story Content */}
        <div
          style={{ gridColumn: '7 / span 6' }}
          className="about-text-col"
        >
          <div className="fade-up">
            <span className="tag-pill">ABOUT 4U HOMES</span>
          </div>

          <div className="section-divider fade-up fade-up-delay-1" style={{ marginTop: '20px' }} />

          <h2
            className="fade-up fade-up-delay-1"
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: '28px',
              color: 'var(--text-main)'
            }}
          >
            Built around the way <span className="gradient-text">you live.</span>
          </h2>

          <p
            className="fade-up fade-up-delay-2"
            style={{ fontSize: '1.08rem', color: 'var(--text-body)', marginBottom: '18px', lineHeight: 1.8 }}
          >
            At <strong style={{ color: 'var(--text-main)' }}>4U Homes</strong>, we believe a home should be far more than a physical structure. It should be a living sanctuary that reflects the people who inhabit it — the way they move through space and the life they want to build.
          </p>

          <p
            className="fade-up fade-up-delay-2"
            style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '36px', lineHeight: 1.8 }}
          >
            As premier <strong style={{ color: 'var(--text-main)' }}>home builders in Kottayam</strong>, we combine deep regional architectural wisdom with precision engineering. Whether you need <strong style={{ color: 'var(--text-main)' }}>custom home construction in Kottayam</strong>, luxury villa design, bespoke interiors, or tropical landscaping — our team manages every detail from concept to key handover.
          </p>

          {/* Feature Pillars */}
          <div
            className="fade-up fade-up-delay-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '18px',
              marginBottom: '36px'
            }}
          >
            {[
              { Icon: Compass, title: 'Climate-Aware Architecture', desc: 'Designs engineered for Kerala\'s tropical conditions' },
              { Icon: ShieldCheck, title: 'A-Grade Construction', desc: 'Verified structural materials with 10-year warranty' },
              { Icon: Award, title: 'On-Time Delivery', desc: 'Milestone-tracked handovers without delays' },
              { Icon: HeartHandshake, title: 'Family-First Approach', desc: 'Your lifestyle drives every design decision' }
            ].map(({ Icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    padding: '10px',
                    background: 'rgba(184,134,11,0.12)',
                    borderRadius: '8px',
                    color: 'var(--accent-gold)',
                    flexShrink: 0
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>{title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="fade-up fade-up-delay-4">
            <a href="#contact" className="btn-primary" data-cursor="CONSULT">
              <span>Talk to Our Chief Architect</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-image-col, .about-text-col { grid-column: 1 / span 12 !important; }
        }
      `}</style>
    </section>
  );
}
