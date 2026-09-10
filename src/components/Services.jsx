import React, { useState } from 'react';
import { servicesData } from '../data/content';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useScrollReveal(0.08);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        padding: '130px 4vw',
        backgroundColor: 'var(--bg-ivory)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="tag-pill fade-up">WHAT WE DO</span>
          <div className="section-divider fade-up fade-up-delay-1" style={{ margin: '20px auto 0 auto' }} />
          <h2
            className="fade-up fade-up-delay-1"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 800, lineHeight: 1.15, marginTop: '0', color: 'var(--text-main)' }}
          >
            Crafting Excellence in <span className="gradient-text">Home Construction</span>
          </h2>
          <p
            className="fade-up fade-up-delay-2"
            style={{ maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem', color: 'var(--text-muted)' }}
          >
            Comprehensive architectural design, custom residential building and turnkey interior solutions by the best <strong style={{ color: 'var(--text-main)' }}>home builders in Kottayam, Kerala</strong>.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            alignItems: 'stretch'
          }}
          className="services-grid"
        >
          {/* Active Service Image Panel — dark for contrast */}
          <div
            style={{ gridColumn: '1 / span 5' }}
            className="service-image-panel scale-in"
          >
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                minHeight: '560px',
                position: 'relative',
                boxShadow: '0 16px 48px rgba(0,0,0,0.15)'
              }}
            >
              {servicesData.map((service, index) => (
                <div
                  key={service.number}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url("${service.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: activeService === index ? 1 : 0,
                    transform: activeService === index ? 'scale(1.06)' : 'scale(1)',
                    transition: 'opacity 0.6s ease-in-out, transform 0.9s ease-out',
                    filter: 'brightness(0.65)'
                  }}
                />
              ))}

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20,15,8,0.97) 0%, rgba(20,15,8,0.2) 60%)',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  zIndex: 10
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem',
                    fontWeight: 800,
                    color: 'rgba(212,168,32,0.25)',
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}
                >
                  {servicesData[activeService].number}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                  {servicesData[activeService].title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(248,243,229,0.82)', lineHeight: 1.6, marginBottom: '18px' }}>
                  {servicesData[activeService].description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {servicesData[activeService].features.map((feat) => (
                    <span
                      key={feat}
                      style={{
                        fontSize: '0.72rem',
                        padding: '4px 10px',
                        background: 'rgba(212,168,32,0.15)',
                        border: '1px solid rgba(212,168,32,0.3)',
                        borderRadius: '4px',
                        color: '#f0c040',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <CheckCircle2 size={11} />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Service List */}
          <div
            style={{ gridColumn: '6 / span 7', display: 'flex', flexDirection: 'column', gap: '14px' }}
            className="service-list-panel"
          >
            {servicesData.map((service, index) => {
              const isSelected = activeService === index;
              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`fade-up fade-up-delay-${Math.min(index + 1, 5)}`}
                  style={{
                    padding: '22px 28px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    border: isSelected ? '1px solid var(--border-glow)' : '1px solid var(--border-light)',
                    backgroundColor: isSelected ? 'rgba(184,134,11,0.08)' : 'var(--bg-alt)',
                    transform: isSelected ? 'translateX(10px)' : 'translateX(0)',
                    boxShadow: isSelected ? '0 4px 24px rgba(184,134,11,0.15)' : '0 1px 4px rgba(0,0,0,0.06)'
                  }}
                  data-cursor="SELECT"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          color: isSelected ? 'var(--accent-gold)' : 'rgba(184,134,11,0.25)'
                        }}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3
                          style={{
                            fontSize: '1.12rem',
                            fontWeight: 700,
                            color: isSelected ? 'var(--accent-gold)' : 'var(--text-main)',
                            transition: 'color 0.2s ease'
                          }}
                        >
                          {service.title}
                        </h3>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '9px',
                        borderRadius: '50%',
                        background: isSelected ? 'var(--accent-gold)' : 'rgba(184,134,11,0.08)',
                        color: isSelected ? '#ffffff' : 'var(--text-muted)',
                        transition: 'all 0.3s ease',
                        flexShrink: 0
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .service-image-panel, .service-list-panel { grid-column: 1 / span 12 !important; }
        }
      `}</style>
    </section>
  );
}
