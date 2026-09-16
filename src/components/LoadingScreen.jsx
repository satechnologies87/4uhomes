import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onFinish }) {
  const [stage, setStage] = useState(1);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(2), 600);
    const t2 = setTimeout(() => setStage(3), 1300);
    const t3 = setTimeout(() => {
      setHidden(true);
      if (onFinish) onFinish();
    }, 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#07090e',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.6s',
        opacity: stage === 3 ? 0 : 1,
        pointerEvents: stage === 3 ? 'none' : 'auto'
      }}
    >
      <div style={{ textAlign: 'center', padding: '0 20px' }}>
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
          <img
            src="/assets/logo.png"
            alt="4U HOME'S - The Architectural Firm"
            style={{
              maxHeight: '130px',
              maxWidth: '85vw',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(184, 134, 11, 0.35), 0 0 80px rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(184, 134, 11, 0.4)',
              transform: stage >= 2 ? 'scale(1.04)' : 'scale(0.96)',
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </div>
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            letterSpacing: '5px',
            color: 'var(--accent-gold)',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginTop: '8px',
            opacity: stage >= 2 ? 1 : 0.7,
            transition: 'opacity 0.5s ease'
          }}
        >
          The Architectural Firm • Kottayam
        </div>
        <div
          style={{
            width: '140px',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.1)',
            margin: '24px auto 0 auto',
            borderRadius: '2px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: stage === 1 ? '45%' : '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #b8860b, #e8c050, #b8860b)',
              transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </div>
      </div>
    </div>
  );
}
