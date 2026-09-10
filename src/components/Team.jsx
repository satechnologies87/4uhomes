import React from 'react';
import { teamData } from '../data/content';

export default function Team() {
  return (
    <section
      id="team"
      style={{
        padding: '120px 4vw',
        backgroundColor: 'var(--bg-main)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="tag-pill" style={{ marginBottom: '16px' }}>
            THE EXPERTS BEHIND 4U HOMES
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-main)'
            }}
          >
            Engineering &amp; Architectural <span className="gradient-text">Leadership</span>
          </h2>
          <p
            style={{
              maxWidth: '650px',
              margin: '16px auto 0 auto',
              fontSize: '1.05rem',
              color: 'var(--text-muted)'
            }}
          >
            Meet the architects, civil engineers, and interior artisans dedicated to crafting your dream home in Kottayam, Kerala.
          </p>
        </div>

        {/* Team Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {teamData.map((member, index) => {
            const cardBgs = ['#f5f0e8', '#eaf0ec', '#eaf1f5'];
            const cardBorders = ['rgba(184,134,11,0.2)', 'rgba(74,140,100,0.2)', 'rgba(60,100,160,0.2)'];
            return (
              <div
                key={member.role}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `1px solid ${cardBorders[index % cardBorders.length]}`,
                  backgroundColor: cardBgs[index % cardBgs.length],
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
                }}
              >
                <div
                  style={{
                    height: '280px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.role}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(20,15,8,0.7) 0%, transparent 60%)'
                    }}
                  />
                </div>

                <div style={{ padding: '28px' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent-gold)',
                      fontWeight: 700,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      marginBottom: '4px'
                    }}
                  >
                    {member.role}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      marginBottom: '12px'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6
                    }}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
