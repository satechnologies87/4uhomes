import React, { useState } from 'react';
import { testimonialsData } from '../data/content';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useScrollReveal(0.1);

  const prev = () => setCurrent((p) => (p === 0 ? testimonialsData.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === testimonialsData.length - 1 ? 0 : p + 1));
  const t = testimonialsData[current];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        padding: '130px 4vw',
        backgroundColor: 'var(--bg-alt)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background warm glow */}
      <div style={{
        position: 'absolute', top: '-150px', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(184,134,11,0.07) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="tag-pill fade-up">CLIENT VOICES</span>
          <div className="section-divider fade-up fade-up-delay-1" style={{ margin: '20px auto 0 auto' }} />
          <h2
            className="fade-up fade-up-delay-1"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--text-main)' }}
          >
            Stories of <span className="gradient-text">Key Handovers</span>
          </h2>
          <p
            className="fade-up fade-up-delay-2"
            style={{ maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem', color: 'var(--text-muted)' }}
          >
            Real experiences from families who built their dream homes with 4U Homes in Kottayam, Kerala.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="fade-up fade-up-delay-2"
          style={{
            maxWidth: '1100px', margin: '0 auto',
            borderRadius: '20px', overflow: 'hidden',
            border: '1px solid var(--border-glow)',
            display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)',
            alignItems: 'stretch',
            boxShadow: '0 8px 40px rgba(0,0,0,0.12)'
          }}
        >
          {/* Client Photo */}
          <div
            style={{ gridColumn: '1 / span 5', position: 'relative', minHeight: '420px', overflow: 'hidden' }}
            className="testimonial-img-panel"
          >
            <img
              src={t.image}
              alt={`${t.clientName} — 4U Homes Kottayam`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 50%, var(--bg-main) 100%)'
            }} />

            {/* Stars overlay */}
            <div style={{
              position: 'absolute', bottom: '24px', left: '24px',
              display: 'flex', gap: '4px'
            }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
              ))}
            </div>
          </div>

          {/* Testimonial Text */}
          <div
            style={{ gridColumn: '6 / span 7', padding: '52px 44px', backgroundColor: 'var(--bg-main)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            className="testimonial-text-panel"
          >
            <Quote size={40} color="var(--accent-gold)" style={{ opacity: 0.35, marginBottom: '20px' }} />

            <p style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              fontStyle: 'italic',
              color: 'var(--text-body)',
              lineHeight: 1.75,
              marginBottom: '32px'
            }}>
              "{t.quote}"
            </p>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-gold)' }}>{t.clientName}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                {t.project} • {t.location}
              </div>
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '28px' }}>
              <button onClick={prev}
                style={{
                  padding: '10px 14px', borderRadius: '50%',
                  background: 'rgba(184,134,11,0.08)',
                  border: '1px solid var(--border-light)',
                  cursor: 'pointer', color: 'var(--text-main)',
                  display: 'flex', alignItems: 'center'
                }}
                aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next}
                style={{
                  padding: '10px 14px', borderRadius: '50%',
                  background: 'rgba(184,134,11,0.08)',
                  border: '1px solid var(--border-light)',
                  cursor: 'pointer', color: 'var(--text-main)',
                  display: 'flex', alignItems: 'center'
                }}
                aria-label="Next">
                <ChevronRight size={18} />
              </button>
              <div style={{ display: 'flex', gap: '6px', marginLeft: '8px' }}>
                {testimonialsData.map((_, i) => (
                  <button
                    key={i} onClick={() => setCurrent(i)}
                    style={{
                      width: i === current ? '20px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      border: 'none', cursor: 'pointer',
                      backgroundColor: i === current ? 'var(--accent-gold)' : 'rgba(184,134,11,0.2)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-img-panel, .testimonial-text-panel { grid-column: 1 / span 12 !important; }
          .testimonial-img-panel { min-height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
