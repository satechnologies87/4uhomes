import React from 'react';
import { businessInfo } from '../data/content';
import { Phone, Mail, MapPin, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#1c1a14',
        color: 'var(--text-muted)',
        borderTop: '1px solid rgba(184,134,11,0.2)',
        padding: '80px 4vw 40px 4vw',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            marginBottom: '60px'
          }}
          className="footer-grid"
        >
          {/* Brand & SEO info */}
          <div style={{ gridColumn: '1 / span 5' }} className="footer-brand">
            <div style={{ marginBottom: '20px' }}>
              <img
                src="/assets/logo.png"
                alt="4U HOME'S - The Architectural Firm Logo"
                style={{
                  maxHeight: '85px',
                  width: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(184,134,11,0.25)',
                  display: 'block'
                }}
              />
            </div>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'rgba(243, 244, 246, 0.75)',
                lineHeight: 1.7,
                marginBottom: '24px',
                maxWidth: '440px'
              }}
            >
              4U HOME'S - The Architectural Firm is a premier home builder in Kottayam, Kerala, specializing in thoughtful architecture, luxury custom home construction, bespoke interior design, floating staircases, and complete turnkey residential solutions.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={businessInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                aria-label="Facebook Page"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ gridColumn: '6 / span 3' }} className="footer-nav">
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: '#ffffff',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}
            >
              QUICK LINKS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Home</a>
              <a href="#architectural-journey" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>House Journey</a>
              <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>About 4U Homes</a>
              <a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Services</a>
              <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Project Showcase</a>
              <a href="#process" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Work Process</a>
              <a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>FAQ</a>
              <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Contact Us</a>
            </div>
          </div>

          {/* Contact Details */}
          <div style={{ gridColumn: '9 / span 4' }} className="footer-contact">
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: '#ffffff',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}
            >
              KOTTAYAM OFFICE
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{businessInfo.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <a href={`tel:${businessInfo.phoneRaw}`} style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
                  {businessInfo.phone}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${businessInfo.email}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                  {businessInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '0.82rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} 4U HOMES. All rights reserved. Premium Home Builders in Kottayam, Kerala.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-light)',
                color: 'var(--accent-gold)',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-brand, .footer-nav, .footer-contact {
            grid-column: 1 / span 12 !important;
          }
        }
      `}</style>
    </footer>
  );
}
