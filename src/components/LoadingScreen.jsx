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
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: stage >= 2 ? '3.5rem' : '4rem',
            fontWeight: 800,
            letterSpacing: '6px',
            color: 'var(--accent-gold)',
            transition: 'all 0.5s ease',
            textTransform: 'uppercase'
          }}
        >
          {stage === 1 ? '4U' : '4U HOMES'}
        </div>
        <div
          style={{
            fontSize: '0.8rem',
            letterSpacing: '4px',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginTop: '12px',
            opacity: stage >= 2 ? 1 : 0,
            transition: 'opacity 0.5s ease 0.2s'
          }}
        >
          Architectural Studio • Kottayam
        </div>
        <div
          style={{
            width: '120px',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.1)',
            margin: '24px auto 0 auto',
            borderRadius: '2px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: stage === 1 ? '40%' : '100%',
              height: '100%',
              background: 'var(--accent-gold)',
              transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </div>
      </div>
    </div>
  );
}
