import React, { useState } from 'react';
import { businessInfo } from '../data/content';
import { X, Phone } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={businessInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with 4U Homes on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        data-cursor="WHATSAPP"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
        >
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.738 5.563 2.141 7.969L0 32l8.281-2.109A15.92 15.92 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0Zm8.219 22.344c-.348.977-2.027 1.867-2.77 1.984-.745.117-1.676.168-2.699-.172a24.557 24.557 0 0 1-2.453-.91C12.227 21.738 9.742 18.8 9.555 18.562c-.188-.238-1.52-2.023-1.52-3.867 0-1.848.969-2.754 1.313-3.13a1.38 1.38 0 0 1 1.003-.473c.254 0 .504.004.723.016.234.012.547-.086.855.656.316.754 1.074 2.605 1.168 2.797.094.188.156.41.031.652-.125.242-.188.394-.375.606-.188.211-.395.476-.563.636-.188.172-.383.36-.164.703.219.344.976 1.61 2.094 2.61 1.438 1.281 2.652 1.68 3.027 1.867.375.188.594.16.813-.098.219-.258.937-1.098 1.188-1.477.25-.379.5-.316.844-.188.344.125 2.188 1.031 2.563 1.219.375.188.625.281.719.437.098.157.098.902-.25 1.879Z" />
        </svg>

        {/* Tooltip */}
        {showTooltip && (
          <div
            style={{
              position: 'absolute',
              right: '70px',
              bottom: '50%',
              transform: 'translateY(50%)',
              backgroundColor: '#1a1710',
              border: '1px solid rgba(212,168,32,0.25)',
              borderRadius: '8px',
              padding: '10px 16px',
              whiteSpace: 'nowrap',
              fontSize: '0.82rem',
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              pointerEvents: 'none'
            }}
          >
            <div style={{ color: 'var(--accent-gold)', fontSize: '0.72rem', marginBottom: '2px' }}>4U HOMES</div>
            Chat with us · {businessInfo.phone}
            <div
              style={{
                position: 'absolute',
                right: '-6px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderLeft: '6px solid #1a1710',
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent'
              }}
            />
          </div>
        )}
      </a>

      {/* Sticky Call Button (desktop, left side) */}
      <a
        href={`tel:${businessInfo.phoneRaw}`}
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '28px',
          zIndex: 9997,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 20px',
          backgroundColor: 'rgba(13,11,7,0.9)',
          border: '1px solid rgba(212,168,32,0.3)',
          borderRadius: '30px',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '0.82rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          backdropFilter: 'blur(14px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent-gold)';
          e.currentTarget.style.backgroundColor = 'rgba(26,23,16,0.96)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(212,168,32,0.3)';
          e.currentTarget.style.backgroundColor = 'rgba(13,11,7,0.9)';
        }}
        aria-label="Call 4U Homes"
        className="call-float"
      >
        <Phone size={16} color="var(--accent-gold)" />
        <span>{businessInfo.phone}</span>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .call-float { display: none !important; }
        }
      `}</style>
    </>
  );
}
