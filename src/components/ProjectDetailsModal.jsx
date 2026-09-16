import React, { useState } from 'react';
import { X, MapPin, Calendar, Maximize2, CheckCircle2, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/content';

export default function ProjectDetailsModal({ project, onClose }) {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 9, 14, 0.94)',
        backdropFilter: 'blur(20px)',
        zIndex: 9999,
        overflowY: 'auto',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '40px auto',
          borderRadius: '16px',
          border: '1px solid var(--border-glow)',
          overflow: 'hidden',
          backgroundColor: '#0a0d14',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            zIndex: 100,
            background: 'rgba(7, 9, 14, 0.8)',
            border: '1px solid var(--border-light)',
            color: '#ffffff',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          aria-label="Close Project Modal"
        >
          <X size={22} />
        </button>

        {/* Hero Gallery Header */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '60vh',
            minHeight: '400px',
            overflow: 'hidden'
          }}
        >
          <img
            src={project.gallery[selectedPhoto]}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'src 0.4s ease'
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #0a0d14 0%, transparent 80%)'
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '40px',
              right: '40px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span className="tag-pill" style={{ marginBottom: '10px' }}>
                {project.category}
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff' }}>
                {project.title}
              </h2>
              <p style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', marginTop: '4px' }}>
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            padding: '16px 40px',
            backgroundColor: '#07090e',
            borderBottom: '1px solid var(--border-light)',
            overflowX: 'auto'
          }}
        >
          {project.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPhoto(idx)}
              style={{
                width: '80px',
                height: '56px',
                borderRadius: '6px',
                overflow: 'hidden',
                border: selectedPhoto === idx ? '2px solid var(--accent-gold)' : '1px solid transparent',
                opacity: selectedPhoto === idx ? 1 : 0.6,
                cursor: 'pointer',
                padding: 0,
                flexShrink: 0
              }}
            >
              <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>

        {/* Details Grid */}
        <div
          style={{ padding: '30px 20px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px' }}
          className="modal-details-grid"
        >
          <div style={{ gridColumn: '1 / span 8' }} className="modal-main-col">
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '16px' }}>Project Overview</h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '30px' }}>
              {project.description}
            </p>

            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '16px' }}>Key Architectural Highlights</h3>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '30px' }}
              className="modal-highlights-grid"
            >
              {project.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--accent-gold)" />
                  <span style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.9)' }}>{h}</span>
                </div>
              ))}
            </div>

            {project.clientStory && (
              <div
                className="glass-panel"
                style={{ padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)' }}
              >
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700 }}>CLIENT TESTIMONIAL</div>
                <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#fff', marginTop: '8px' }}>
                  "{project.clientStory}"
                </p>
              </div>
            )}
          </div>

          <div style={{ gridColumn: '9 / span 4' }} className="modal-side-col">
            <div className="glass-panel" style={{ padding: '24px', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '20px' }}>Project Details</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MapPin size={18} color="var(--accent-gold)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>LOCATION</div>
                    <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{project.location}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Maximize2 size={18} color="var(--accent-gold)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>TOTAL AREA</div>
                    <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{project.area}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Calendar size={18} color="var(--accent-gold)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>COMPLETION YEAR</div>
                    <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{project.year}</div>
                  </div>
                </div>
              </div>

              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '30px' }}
              >
                <span>Build Similar Villa</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .modal-main-col, .modal-side-col { grid-column: 1 / span 12 !important; }
        }
        @media (max-width: 600px) {
          .modal-highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
