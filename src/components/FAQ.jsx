import React, { useState } from 'react';
import { faqData } from '../data/content';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <section
      id="faq"
      style={{
        padding: '120px 4vw',
        backgroundColor: 'var(--bg-sage)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="tag-pill" style={{ marginBottom: '16px' }}>
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-main)'
            }}
          >
            Got Questions About <span className="gradient-text">Building in Kottayam?</span>
          </h2>
          <p
            style={{
              maxWidth: '650px',
              margin: '16px auto 0 auto',
              fontSize: '1.05rem',
              color: 'var(--text-muted)'
            }}
          >
            Clear, honest answers regarding home construction process, costs, timelines, and custom architecture in Kottayam, Kerala.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                style={{
                  borderRadius: '12px',
                  backgroundColor: isOpen ? 'var(--bg-main)' : 'var(--bg-ivory)',
                  border: isOpen ? '1px solid var(--border-glow)' : '1px solid var(--border-light)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 4px 20px rgba(184,134,11,0.12)' : '0 1px 6px rgba(0,0,0,0.05)'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '24px 30px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '20px'
                  }}
                  data-cursor="TOGGLE"
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
                    {item.q}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? 'var(--accent-gold)' : 'var(--text-muted)',
                      flexShrink: 0
                    }}
                  >
                    <ChevronDown size={22} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 30px 24px 30px',
                      fontSize: '1rem',
                      color: 'var(--text-body)',
                      lineHeight: 1.7,
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '16px'
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
