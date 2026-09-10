import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectDetailsModal from './ProjectDetailsModal';
import { ArrowUpRight, MapPin } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useScrollReveal(0.08);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: '130px 4vw',
        backgroundColor: 'var(--bg-blush)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="tag-pill fade-up">FEATURED PORTFOLIO</span>
          <div className="section-divider fade-up fade-up-delay-1" style={{ margin: '20px auto 0 auto' }} />
          <h2
            className="fade-up fade-up-delay-1"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--text-main)' }}
          >
            Architectural <span className="gradient-text">Project Showcase</span>
          </h2>
          <p
            className="fade-up fade-up-delay-2"
            style={{ maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem', color: 'var(--text-muted)' }}
          >
            Real home construction and custom villa projects designed and delivered by 4U Homes in Kottayam, Kerala.
          </p>
        </div>

        {/* Project Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                backgroundColor: 'var(--bg-main)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                transition: 'box-shadow 0.4s ease, border-color 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.18)';
                e.currentTarget.style.borderColor = 'var(--border-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
              data-cursor="PROJECT"
            >
              {/* Image Panel */}
              <div
                style={{
                  gridColumn: index % 2 === 0 ? '1 / span 7' : '6 / span 7',
                  order: index % 2 === 0 ? 1 : 2,
                  position: 'relative',
                  minHeight: '460px',
                  overflow: 'hidden'
                }}
                className="project-image-wrapper"
              >
                <img
                  src={project.mainImage}
                  alt={`${project.title} — Custom Home Construction Kottayam Kerala`}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="project-img"
                />
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(13,11,7,0.85) 0%, transparent 55%)'
                  }}
                />

                {/* Project number badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '24px', left: '24px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: '#f0c040',
                    background: 'rgba(13,11,7,0.85)',
                    padding: '4px 16px',
                    borderRadius: '30px',
                    border: '1px solid rgba(212,168,32,0.4)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  {project.number}
                </div>

                {/* Category */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px', left: '24px'
                  }}
                >
                  <span className="tag-pill" style={{ fontSize: '0.68rem', background: 'rgba(184,134,11,0.2)', borderColor: 'rgba(212,168,32,0.5)', color: '#f0c040' }}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Info Panel */}
              <div
                style={{
                  gridColumn: index % 2 === 0 ? '8 / span 5' : '1 / span 5',
                  order: index % 2 === 0 ? 2 : 1,
                  padding: '48px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: 'var(--bg-main)'
                }}
                className="project-info-wrapper"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    color: 'var(--accent-gold)',
                    fontWeight: 600,
                    marginBottom: '14px'
                  }}
                >
                  <MapPin size={14} />
                  {project.location}
                </div>

                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2, marginBottom: '8px' }}>
                  {project.title}
                </h3>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 400, marginBottom: '18px' }}>
                  {project.subtitle}
                </h4>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: '28px' }}>
                  {project.description}
                </p>

                {/* Quick stats */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                    marginBottom: '30px',
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '20px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>AREA</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 700, marginTop: '2px' }}>{project.area}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>YEAR</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 700, marginTop: '2px' }}>{project.year}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>PHOTOS</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 700, marginTop: '2px' }}>{project.gallery.length} Views</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                  data-cursor="VIEW"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style>{`
        .project-img:hover { transform: scale(1.06); }
        @media (max-width: 900px) {
          .project-image-wrapper, .project-info-wrapper { grid-column: 1 / span 12 !important; order: initial !important; }
        }
      `}</style>
    </section>
  );
}
