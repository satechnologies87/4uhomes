import React, { useEffect, useRef, useState } from 'react';
import { statsData } from '../data/content';
import useScrollReveal from '../hooks/useScrollReveal';

function CountUp({ target, suffix, duration = 2000 }) {
  const [value, setValue] = useState(0);
  const hasStartedRef = useRef(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={nodeRef}>
      {value}
      {suffix}
    </span>
  );
}

/* Distinct warm colors for each stat card */
const statCardStyles = [
  { bg: '#2c2820', border: 'rgba(212,168,32,0.35)', numColor: 'linear-gradient(135deg,#d4a820,#f0c040)' },   // dark gold
  { bg: '#1e2a3a', border: 'rgba(80,140,200,0.35)', numColor: 'linear-gradient(135deg,#5080c8,#80b4e8)' },   // dark blue
  { bg: '#2a1e18', border: 'rgba(200,100,60,0.35)', numColor: 'linear-gradient(135deg,#c8643c,#e8a060)' },   // dark rust
  { bg: '#1e2a1e', border: 'rgba(80,160,100,0.35)', numColor: 'linear-gradient(135deg,#50a064,#80c890)' },   // dark green
];

export default function Stats() {
  const sectionRef = useScrollReveal(0.15);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '80px 4vw',
        backgroundColor: 'var(--bg-warm)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '28px'
        }}
      >
        {statsData.map((stat, i) => {
          const card = statCardStyles[i % statCardStyles.length];
          return (
            <div
              key={stat.id}
              className={`fade-up fade-up-delay-${i + 1}`}
              style={{
                padding: '40px 28px',
                textAlign: 'center',
                borderRadius: '16px',
                backgroundColor: card.bg,
                border: `1px solid ${card.border}`,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '3px',
                  background: card.numColor
                }}
              />

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '4rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  background: card.numColor,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0e8', marginBottom: '8px', marginTop: '8px' }}>
                {stat.label}
              </div>

              <div style={{ fontSize: '0.82rem', color: '#c8b89a', lineHeight: 1.5 }}>
                {stat.description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
