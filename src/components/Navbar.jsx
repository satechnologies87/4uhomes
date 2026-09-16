import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { businessInfo } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Hero is 100vh tall; after that the page is light-colored
      setPastHero(y > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Journey', href: '#architectural-journey' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '14px 4vw' : '26px 4vw',
        backgroundColor: scrolled
          ? (pastHero ? 'rgba(245,240,232,0.92)' : 'rgba(7,9,14,0.88)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? (pastHero ? '1px solid rgba(184,134,11,0.18)' : '1px solid rgba(255,255,255,0.08)')
          : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <img
            src="/assets/logo-emblem.png"
            alt="4U HOME'S - The Architectural Firm Logo"
            style={{
              height: scrolled ? '38px' : '46px',
              width: 'auto',
              borderRadius: '6px',
              objectFit: 'contain',
              boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              border: '1px solid rgba(184,134,11,0.25)',
              transition: 'all 0.3s ease'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: scrolled ? '1.2rem' : '1.35rem',
                fontWeight: 800,
                letterSpacing: '1.5px',
                color: (scrolled && pastHero) ? 'var(--text-main)' : '#ffffff',
                lineHeight: 1.1,
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span style={{ color: 'var(--accent-gold)' }}>4U</span>
              <span>HOME'S</span>
            </div>
            <span
              style={{
                fontSize: '0.58rem',
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                color: (scrolled && pastHero) ? 'var(--text-muted)' : 'rgba(255,255,255,0.75)',
                fontWeight: 600,
                marginTop: '1px'
              }}
            >
              The Architectural Firm
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: (scrolled && pastHero) ? 'var(--text-body)' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent-gold)')}
              onMouseLeave={(e) => (e.target.style.color = (scrolled && pastHero) ? 'var(--text-body)' : 'rgba(255,255,255,0.85)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.78rem',
              display: 'inline-flex'
            }}
            data-cursor="WHATSAPP"
          >
            <Phone size={14} />
            <span>+91 82815 81062</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-light)',
              color: (scrolled && pastHero) ? 'var(--text-main)' : '#ffffff',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - 70px)',
            backgroundColor: 'rgba(7, 9, 14, 0.97)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '30px 20px',
            gap: '18px',
            overflowY: 'auto'
          }}
        >
          <img
            src="/assets/logo.png"
            alt="4U HOME'S Logo"
            style={{
              maxHeight: '90px',
              maxWidth: '220px',
              borderRadius: '8px',
              marginBottom: '10px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              border: '1px solid rgba(184,134,11,0.3)'
            }}
          />
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 600,
                letterSpacing: '2px',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: '14px' }}
          >
            <span>Start Your Project</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
