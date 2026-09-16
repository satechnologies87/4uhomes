import React from 'react';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import { businessInfo } from '../data/content';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#07090e'
      }}
    >
      {/* Background Image Container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/assets/hero_exterior.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.55) contrast(1.1)',
          transform: 'scale(1.04)',
          transition: 'transform 10s ease-out'
        }}
      />

      {/* Gradient Overlay for Depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(7, 9, 14, 0.2) 0%, rgba(7, 9, 14, 0.85) 100%), linear-gradient(to bottom, rgba(7, 9, 14, 0.4) 0%, rgba(7, 9, 14, 0.95) 100%)'
        }}
      />

      {/* Content Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1100px',
          width: '94%',
          margin: '0 auto',
          textAlign: 'center',
          padding: '80px 12px 40px 12px'
        }}
      >
        <div
          style={{
            marginBottom: '20px'
          }}
        >
          <span className="tag-pill" style={{ fontSize: '0.68rem', padding: '6px 14px' }}>
            <Compass size={12} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
            4U HOME'S • THE ARCHITECTURAL FIRM
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.9rem, 5.8vw, 5.2rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '-0.5px'
          }}
        >
          Designing Spaces.<br />
          <span className="gradient-text">Crafting Dreams.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(0.92rem, 1.6vw, 1.2rem)',
            maxWidth: '740px',
            margin: '0 auto 32px auto',
            color: 'rgba(243, 244, 246, 0.88)',
            fontWeight: 300,
            lineHeight: 1.7
          }}
        >
          Premier home builders in Kottayam, Kerala — 4U HOME'S creates thoughtfully designed luxury custom homes built around the way you live.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px'
          }}
        >
          <a href="#architectural-journey" className="btn-primary" data-cursor="EXPLORE" style={{ padding: '14px 28px' }}>
            <span>Explore Our Handovers</span>
            <ArrowDown size={18} />
          </a>

          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            data-cursor="CONTACT"
            style={{ padding: '14px 28px', color: '#ffffff' }}
          >
            <span>Start Your Project</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.75
        }}
      >
        <span
          style={{
            fontSize: '0.68rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)',
            fontWeight: 600
          }}
        >
          SCROLL TO EXPLORE
        </span>
        <div
          style={{
            width: '20px',
            height: '32px',
            border: '2px solid rgba(212, 175, 55, 0.4)',
            borderRadius: '16px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px'
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              backgroundColor: 'var(--accent-gold)',
              borderRadius: '2px',
              animation: 'bounceScroll 2s infinite'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes bounceScroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
