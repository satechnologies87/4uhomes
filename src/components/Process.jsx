import React, { useState } from 'react';
import { processSteps } from '../data/content';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useScrollReveal(0.1);

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        padding: '130px 4vw',
        backgroundColor: 'var(--bg-clay)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="tag-pill fade-up">WORK PROCESS</span>
          <div className="section-divider fade-up fade-up-delay-1" style={{ margin: '20px auto 0 auto' }} />
          <h2
            className="fade-up fade-up-delay-1"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--text-main)' }}
          >
            From Vision to <span className="gradient-text">Structure</span>
          </h2>
          <p
            className="fade-up fade-up-delay-2"
            style={{ maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem', color: 'var(--text-muted)' }}
          >
            Our proven 5-stage custom home construction process in Kottayam ensures architectural clarity, premium quality and zero delays.
          </p>
        </div>

        {/* Step Track */}
        <div
          className="fade-up fade-up-delay-2"
          style={{ position: 'relative', marginBottom: '60px', padding: '0 5%' }}
        >
          {/* Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '28px',
              left: '7%',
              right: '7%',
              height: '2px',
              backgroundColor: 'rgba(184,134,11,0.15)'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                background: 'linear-gradient(to right, var(--accent-gold), var(--accent-amber))',
                transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 0 8px rgba(184,134,11,0.4)'
              }}
            />
          </div>

          {/* Step buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 10 }}>
            {processSteps.map((item, idx) => {
              const isActive = idx === activeStep;
              const isPassed = idx <= activeStep;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '14px'
                  }}
                  data-cursor="STEP"
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--accent-gold)' : isPassed ? 'var(--bg-main)' : 'var(--bg-alt)',
                      border: isPassed ? '2px solid var(--accent-gold)' : '2px solid rgba(184,134,11,0.25)',
                      color: isActive ? '#ffffff' : isPassed ? 'var(--accent-gold)' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '1rem',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isActive ? '0 0 20px rgba(184,134,11,0.4)' : '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    {item.step}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '1.2px',
                      textTransform: 'uppercase',
                      color: isPassed ? 'var(--accent-gold)' : 'var(--text-dim)'
                    }}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail Panel — dark for contrast */}
        <div
          className="fade-up fade-up-delay-3"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '52px',
            textAlign: 'center',
            borderRadius: '20px',
            background: '#2c2820',
            border: '1px solid rgba(184,134,11,0.3)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0,0,0,0.2)'
          }}
        >
          {/* Top accent */}
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '3px',
              background: 'linear-gradient(to right, transparent, var(--accent-gold), transparent)'
            }}
          />

          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '5rem',
              fontWeight: 800,
              color: 'rgba(212,168,32,0.1)',
              lineHeight: 1,
              position: 'absolute',
              top: '20px',
              right: '30px'
            }}
          >
            {processSteps[activeStep].step}
          </div>

          <div
            style={{
              fontSize: '0.75rem',
              color: '#d4a820',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}
          >
            STAGE {processSteps[activeStep].step} OF 05 — KOTTAYAM
          </div>

          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#f5f0e8', marginBottom: '18px' }}>
            {processSteps[activeStep].title}
          </h3>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#c8b89a',
              lineHeight: 1.8,
              maxWidth: '680px',
              margin: '0 auto 36px auto'
            }}
          >
            {processSteps[activeStep].description}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {activeStep > 0 && (
              <button
                onClick={() => setActiveStep(activeStep - 1)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '12px 24px',
                  background: 'rgba(184,134,11,0.1)',
                  color: '#f5f0e8',
                  fontFamily: 'var(--font-heading)', fontWeight: 600,
                  fontSize: '0.8rem', letterSpacing: '1.2px', textTransform: 'uppercase',
                  borderRadius: '4px', border: '1px solid rgba(184,134,11,0.3)', cursor: 'pointer'
                }}
              >
                ← Previous Stage
              </button>
            )}
            {activeStep < processSteps.length - 1 ? (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #d4a820, #b88f18)',
                  color: '#0d0b07',
                  fontFamily: 'var(--font-heading)', fontWeight: 700,
                  fontSize: '0.8rem', letterSpacing: '1.2px', textTransform: 'uppercase',
                  borderRadius: '4px', border: 'none', cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(212,168,32,0.4)'
                }}
              >
                <span>Next Stage</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #d4a820, #b88f18)',
                color: '#0d0b07',
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: '0.8rem', letterSpacing: '1.2px', textTransform: 'uppercase',
                borderRadius: '4px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(212,168,32,0.4)'
              }}>
                <span>Begin My Project Today</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
