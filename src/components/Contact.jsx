import React, { useState } from 'react';
import { businessInfo } from '../data/content';
import { Phone, Mail, MapPin, Send, ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    projectType: 'Custom Home Construction',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '140px 4vw 120px 4vw',
        backgroundColor: '#1c1a16',
        overflow: 'hidden'
      }}
    >
      {/* Background Architectural Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/assets/hero_exterior.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2) contrast(1.2)',
          transform: 'scale(1.05)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #1c1a16 0%, rgba(28, 26, 22, 0.75) 50%, #1c1a16 100%)'
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '48px',
          alignItems: 'center'
        }}
      >
        {/* Left Callout Info */}
        <div
          style={{ gridColumn: '1 / span 6' }}
          className="contact-info-col"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <img
              src="/assets/logo-emblem.png"
              alt="4U HOME'S"
              style={{
                height: '36px',
                width: 'auto',
                borderRadius: '6px',
                border: '1px solid rgba(184,134,11,0.3)'
              }}
            />
            <span className="tag-pill">
              4U HOME'S • START YOUR PROJECT
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '24px'
            }}
          >
            Ready to build your <br />
            <span className="gradient-text">next chapter?</span>
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(243, 244, 246, 0.85)',
              lineHeight: 1.8,
              marginBottom: '40px'
            }}
          >
            Talk to <strong>4U Homes</strong> — experienced home builders in Kottayam, Kerala. Whether you have a plot ready or are exploring design options, our engineering team is ready to consult with you.
          </p>

          {/* Quick Contact Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600
              }}
            >
              <div
                style={{
                  padding: '12px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(212, 175, 55, 0.15)',
                  color: 'var(--accent-gold)'
                }}
              >
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>DIRECT PHONE CONSULTATION</div>
                <div>{businessInfo.phone}</div>
              </div>
            </a>

            <a
              href={`mailto:${businessInfo.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600
              }}
            >
              <div
                style={{
                  padding: '12px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(212, 175, 55, 0.15)',
                  color: 'var(--accent-gold)'
                }}
              >
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>EMAIL ENQUIRIES</div>
                <div>{businessInfo.email}</div>
              </div>
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: 600
              }}
            >
              <div
                style={{
                  padding: '12px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(212, 175, 55, 0.15)',
                  color: 'var(--accent-gold)'
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>HEAD OFFICE LOCATION</div>
                <div style={{ fontSize: '0.95rem' }}>{businessInfo.address}</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-cursor="WHATSAPP"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>

        {/* Right Form Card */}
        <div
          style={{ gridColumn: '7 / span 6' }}
          className="contact-form-col"
        >
          <div
            className="glass-panel"
            style={{
              padding: '44px',
              borderRadius: '20px',
              border: '1px solid var(--border-glow)',
              backgroundColor: 'rgba(14, 18, 26, 0.9)'
            }}
          >
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={54} color="var(--accent-gold)" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '12px' }}>Consultation Requested!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                  Thank you for reaching out to 4U Homes. Our chief architect will call you at <strong>{formData.phone}</strong> shortly to discuss your custom home project in Kottayam.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: '24px' }}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '8px' }}>Project Consultation</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
                  Fill out your details below and our Kottayam engineering team will contact you.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '6px' }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        backgroundColor: 'rgba(7, 9, 14, 0.8)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '6px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '6px' }}>
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          backgroundColor: 'rgba(7, 9, 14, 0.8)',
                          border: '1px solid var(--border-light)',
                          borderRadius: '6px',
                          color: '#fff',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '6px' }}>
                        PLOT LOCATION
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Manganam, Kottayam"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          backgroundColor: 'rgba(7, 9, 14, 0.8)',
                          border: '1px solid var(--border-light)',
                          borderRadius: '6px',
                          color: '#fff',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '6px' }}>
                      SERVICE REQUIRED
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        backgroundColor: 'rgba(7, 9, 14, 0.8)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '6px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Custom Home Construction">Custom Home Construction in Kottayam</option>
                      <option value="Architectural Planning & 3D">Architectural Planning & 3D Renders</option>
                      <option value="Interior Designing">Interior Design & Floating Staircases</option>
                      <option value="Turnkey Villa Building">Turnkey Luxury Villa Construction</option>
                      <option value="Landscaping">Landscaping & Courtyard Design</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '6px' }}>
                      YOUR VISION & REQUIREMENTS
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your plot size, floor preferences, estimated budget, or desired completion timeframe..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        backgroundColor: 'rgba(7, 9, 14, 0.8)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '6px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                  >
                    <span>Submit Project Consultation</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-info-col, .contact-form-col {
            grid-column: 1 / span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
