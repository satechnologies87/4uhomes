import React, { useState } from 'react';
import { whyChooseData } from '../data/content';
import { ShieldCheck, Compass, FileText, Users, Sparkles, Clock } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const iconMap = [Compass, ShieldCheck, FileText, Users, Sparkles, Clock];

const cardColors = [
  { bg: '#f0f7f4', border: 'rgba(74,140,100,0.2)', accent: '#3a8c5c', iconBg: 'rgba(74,140,100,0.12)' },   // sage green
  { bg: '#f5f0e8', border: 'rgba(184,134,11,0.22)', accent: '#b8860b', iconBg: 'rgba(184,134,11,0.1)' },   // seige gold
  { bg: '#f0f4f8', border: 'rgba(60,100,160,0.2)', accent: '#3c5fa0', iconBg: 'rgba(60,100,160,0.1)' },    // steel blue
  { bg: '#fbf0ea', border: 'rgba(160,82,45,0.22)', accent: '#a0522d', iconBg: 'rgba(160,82,45,0.1)' },     // warm sienna
  { bg: '#f5f0f8', border: 'rgba(120,80,160,0.2)', accent: '#7850a0', iconBg: 'rgba(120,80,160,0.1)' },    // soft purple
  { bg: '#eef7f0', border: 'rgba(40,140,90,0.2)', accent: '#288c5a', iconBg: 'rgba(40,140,90,0.1)' },      // mint green
];

export default function WhyChooseUs() {
  const sectionRef = useScrollReveal(0.1);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      style={{
        padding: '130px 4vw',
        backgroundColor: 'var(--bg-sky)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="tag-pill fade-up">OUR DISTINCTION</span>
          <div className="section-divider fade-up fade-up-delay-1" style={{ margin: '20px auto 0 auto' }} />
          <h2
            className="fade-up fade-up-delay-1"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--text-main)' }}
          >
            Why <span className="gradient-text">4U Homes?</span>
          </h2>
          <p
            className="fade-up fade-up-delay-2"
            style={{ maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem', color: 'var(--text-muted)' }}
          >
            What sets 4U Homes apart as the preferred <strong style={{ color: 'var(--text-main)' }}>luxury home builder in Kottayam, Kerala</strong>.
          </p>
        </div>

        {/* Feature Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {whyChooseData.map((item, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            const col = cardColors[index % cardColors.length];
            return (
              <div
                key={item.title}
                className={`fade-up fade-up-delay-${Math.min(index + 1, 5)}`}
                style={{
                  padding: '36px',
                  borderRadius: '16px',
                  backgroundColor: col.bg,
                  border: `1px solid ${col.border}`,
                  transition: 'all 0.35s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.14)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}
              >
                {/* Top accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '60px', height: '4px',
                    borderRadius: '0 0 4px 0',
                    background: col.accent
                  }}
                />

                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    background: col.iconBg,
                    border: `1px solid ${col.border}`,
                    color: col.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '22px'
                  }}
                >
                  <IconComponent size={24} />
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1c1a16', marginBottom: '12px' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.95rem', color: '#5a5040', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
