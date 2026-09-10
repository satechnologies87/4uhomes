import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Play, Pause, Volume2, VolumeX, ChevronDown, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';

/* ─────────────────────────────────────────
   STAT BLOCKS shown over the video
───────────────────────────────────────── */
const STATS = [
  { value: '150+', label: 'Homes Built' },
  { value: '12+',  label: 'Years of Excellence' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '4U',   label: 'Homes Promise' },
];

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
export default function ScrollHouse() {
  const videoRef        = useRef(null);
  const [isPlaying,   setIsPlaying]   = useState(true);
  const [isMuted,     setIsMuted]     = useState(true);
  const [loaded,      setLoaded]      = useState(false);
  const [vidProgress, setVidProgress] = useState(0);

  /* Video event wiring */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onCanPlay   = () => setLoaded(true);
    const onTimeUpdate = () => {
      if (vid.duration) setVidProgress((vid.currentTime / vid.duration) * 100);
    };

    vid.addEventListener('canplay',    onCanPlay);
    vid.addEventListener('timeupdate', onTimeUpdate);
    vid.play().catch(() => {});

    return () => {
      vid.removeEventListener('canplay',    onCanPlay);
      vid.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) { vid.play();  setIsPlaying(true);  }
    else            { vid.pause(); setIsPlaying(false); }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('project-slider');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── gradient helpers ── */
  const goldGrad = 'linear-gradient(135deg,#f0c040 0%,#b8860b 60%,#f0c040 100%)';

  return (
    <section id="architectural-journey" style={{ position: 'relative', width: '100%' }}>

      {/* ═══════════  VIDEO HERO  ═══════════ */}
      <div
        style={{
          position: 'relative',
          width:    '100%',
          height:   '100vh',
          overflow: 'hidden',
          backgroundColor: '#0d0b07',
        }}
      >
        {/* The video */}
        <video
          ref={videoRef}
          src="/assets/4uhomes video.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position:   'absolute',
            inset:      0,
            width:      '100%',
            height:     '100%',
            objectFit:  'cover',
            opacity:    loaded ? 1 : 0,
            transition: 'opacity 1.4s ease',
            transform:  'scale(1.04)',
          }}
        />

        {/* Fallback while buffering */}
        {!loaded && (
          <div
            style={{
              position:           'absolute',
              inset:              0,
              backgroundImage:    'url(/assets/hero_exterior.jpg)',
              backgroundSize:     'cover',
              backgroundPosition: 'center',
            }}
          />
        )}

        {/* Deep cinematic gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to bottom,
                rgba(13,11,7,0.58) 0%,
                rgba(13,11,7,0.18) 38%,
                rgba(13,11,7,0.14) 56%,
                rgba(13,11,7,0.78) 85%,
                rgba(13,11,7,0.96) 100%
              ),
              linear-gradient(to right,
                rgba(13,11,7,0.62) 0%,
                transparent 52%,
                rgba(13,11,7,0.32) 100%
              )
            `,
            zIndex: 2,
          }}
        />

        {/* Grain texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        {/* Top video progress bar */}
        <div
          style={{
            position:        'absolute',
            top:             0,
            left:            0,
            right:           0,
            height:          '3px',
            backgroundColor: 'rgba(255,255,255,0.06)',
            zIndex:          25,
          }}
        >
          <div
            style={{
              height:     '100%',
              width:      `${vidProgress}%`,
              background: goldGrad,
              boxShadow:  '0 0 12px rgba(240,192,64,0.7)',
              transition: 'width 0.3s linear',
            }}
          />
        </div>

        {/* ── Main headline (bottom-left) ── */}
        <div
          style={{
            position:  'absolute',
            bottom:    '170px',
            left:      '72px',
            zIndex:    20,
            maxWidth:  '760px',
          }}
        >
          {/* Tag pill — now lives inside the headline block so it never overlaps */}
          <div
            style={{
              marginBottom: '20px',
              animation: 'sh_fadeInDown 0.9s ease 0.2s both',
            }}
          >
            <span
              style={{
                display:         'inline-flex',
                alignItems:      'center',
                gap:             '8px',
                fontSize:        '0.67rem',
                letterSpacing:   '3px',
                fontWeight:      700,
                textTransform:   'uppercase',
                color:           '#f0c040',
                backgroundColor: 'rgba(184,134,11,0.12)',
                padding:         '7px 18px',
                borderRadius:    '100px',
                border:          '1px solid rgba(240,192,64,0.3)',
                backdropFilter:  'blur(10px)',
              }}
            >
              <span
                style={{
                  width:           '6px',
                  height:          '6px',
                  borderRadius:    '50%',
                  backgroundColor: '#f0c040',
                  display:         'inline-block',
                  animation:       'sh_pulse 2s infinite',
                }}
              />
              4U HOMES — KOTTAYAM, KERALA
            </span>
          </div>

          <div
            style={{
              fontSize:      '0.74rem',
              letterSpacing: '4px',
              fontWeight:    700,
              color:         'rgba(240,192,64,0.85)',
              textTransform: 'uppercase',
              marginBottom:  '18px',
              animation:     'sh_fadeInUp 0.9s ease 0.3s both',
            }}
          >
            Premium Custom Home Builders
          </div>

          <h2
            style={{
              fontFamily:    '"Playfair Display", serif',
              fontSize:      'clamp(3rem, 6vw, 6rem)',
              fontWeight:    900,
              lineHeight:    1.0,
              color:         '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '-2px',
              animation:     'sh_fadeInUp 1s ease 0.45s both',
            }}
          >
            <span style={{ display: 'block' }}>CRAFTING</span>
            <span
              style={{
                display:               'block',
                background:            goldGrad,
                WebkitBackgroundClip:  'text',
                WebkitTextFillColor:   'transparent',
                backgroundClip:        'text',
              }}
            >
              DREAM HOMES
            </span>
            <span style={{ display: 'block' }}>IN KERALA</span>
          </h2>

          {/* Decorative divider */}
          <div
            style={{
              width:        '70px',
              height:       '3px',
              background:   'linear-gradient(to right,#f0c040,transparent)',
              margin:       '28px 0',
              animation:    'sh_expandW 0.8s ease 0.8s both',
            }}
          />

          <p
            style={{
              fontSize:  '1.04rem',
              color:     'rgba(245,242,236,0.78)',
              lineHeight: 1.75,
              maxWidth:  '520px',
              animation: 'sh_fadeInUp 0.9s ease 0.7s both',
            }}
          >
            From architectural vision to master key handover — 4U Homes delivers
            luxury custom residences across Kottayam with unmatched craftsmanship
            and transparent engineering.
          </p>

          <div
            style={{
              marginTop:  '20px',
              display:    'flex',
              alignItems: 'center',
              gap:        '8px',
              fontSize:   '0.82rem',
              color:      'rgba(240,192,64,0.68)',
              animation:  'sh_fadeInUp 0.9s ease 0.85s both',
            }}
          >
            <MapPin size={14} color="#f0c040" />
            <span>Kottayam · Kumarakom · Kanjirappally · Pala</span>
          </div>
        </div>

        {/* ── Stats block (right side) ── */}
        <div
          style={{
            position:  'absolute',
            bottom:    '90px',
            right:     '72px',
            zIndex:    20,
            display:   'flex',
            flexDirection: 'column',
            gap:       '22px',
            animation: 'sh_fadeInRight 1s ease 1s both',
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign:   'right',
                borderRight: '2px solid rgba(240,192,64,0.32)',
                paddingRight: '18px',
              }}
            >
              <div
                style={{
                  fontFamily:           '"Playfair Display", serif',
                  fontSize:             '2.2rem',
                  fontWeight:           900,
                  lineHeight:           1,
                  background:           goldGrad,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor:  'transparent',
                  backgroundClip:       'text',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize:      '0.66rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color:         'rgba(245,242,236,0.5)',
                  marginTop:     '2px',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Video controls (bottom-left strip) ── */}
        <div
          style={{
            position:  'absolute',
            bottom:    '32px',
            left:      '72px',
            zIndex:    20,
            display:   'flex',
            alignItems:'center',
            gap:        '12px',
            animation: 'sh_fadeInUp 0.9s ease 1.1s both',
          }}
        >
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            style={controlBtnStyle}
            onMouseEnter={e => applyHover(e)}
            onMouseLeave={e => removeHover(e)}
          >
            {isPlaying
              ? <Pause  size={16} color="#f0c040" />
              : <Play   size={16} color="#f0c040" />
            }
          </button>

          {/* Mute */}
          <button
            onClick={toggleMute}
            style={controlBtnStyle}
            onMouseEnter={e => applyHover(e)}
            onMouseLeave={e => removeHover(e)}
          >
            {isMuted
              ? <VolumeX size={16} color="#f0c040" />
              : <Volume2 size={16} color="#f0c040" />
            }
          </button>

          <span
            style={{
              fontSize:      '0.66rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color:         'rgba(240,192,64,0.58)',
              fontWeight:    600,
            }}
          >
            {isMuted ? 'UNMUTE' : 'MUTE'} · {isPlaying ? 'PLAYING' : 'PAUSED'}
          </span>
        </div>

        {/* ── Scroll cue (bottom-center) ── */}
        <button
          onClick={scrollToProjects}
          style={{
            position:      'absolute',
            bottom:        '34px',
            left:          '50%',
            transform:     'translateX(-50%)',
            zIndex:        20,
            background:    'none',
            border:        'none',
            cursor:        'pointer',
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
            gap:           '6px',
            animation:     'sh_fadeInUp 1s ease 1.3s both',
          }}
        >
          <span
            style={{
              fontSize:      '0.6rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color:         'rgba(240,192,64,0.65)',
              fontWeight:    700,
            }}
          >
            EXPLORE PROJECTS
          </span>
          <ChevronDown
            size={20}
            color="rgba(240,192,64,0.65)"
            style={{ animation: 'sh_bounceY 2s ease-in-out infinite' }}
          />
        </button>
      </div>

      {/* ═══════════  PROJECT SLIDER  ═══════════ */}
      <ProjectSlider />

      {/* ════  KEYFRAME DEFINITIONS  ════ */}
      <style>{`
        @keyframes sh_fadeInUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes sh_fadeInDown {
          from { opacity:0; transform:translateY(-20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes sh_fadeInRight {
          from { opacity:0; transform:translateX(32px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes sh_expandW {
          from { width:0;    opacity:0; }
          to   { width:70px; opacity:1; }
        }
        @keyframes sh_bounceY {
          0%,100% { transform:translateY(0);   opacity:0.7; }
          50%     { transform:translateY(8px);  opacity:0.3; }
        }
        @keyframes sh_pulse {
          0%,100% { opacity:1; box-shadow:0 0 0 0 rgba(240,192,64,0.6); }
          50%     { opacity:0.7; box-shadow:0 0 0 6px rgba(240,192,64,0); }
        }
        @keyframes sh_slideRight {
          from { opacity:0; transform:translateX(80px) scale(0.97); }
          to   { opacity:1; transform:translateX(0)    scale(1);    }
        }
        @keyframes sh_slideLeft {
          from { opacity:0; transform:translateX(-80px) scale(0.97); }
          to   { opacity:1; transform:translateX(0)     scale(1);    }
        }
        @keyframes sh_fadeModal {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes sh_slideModal {
          from { opacity:0; transform:translateY(48px) scale(0.96); }
          to   { opacity:1; transform:translateY(0)    scale(1);    }
        }
        @media (max-width: 768px) {
          #architectural-journey { overflow-x:hidden; }
        }
      `}</style>
    </section>
  );
}

/* ─── helper styles for video control buttons ─── */
const controlBtnStyle = {
  width:           '42px',
  height:          '42px',
  borderRadius:    '50%',
  border:          '1px solid rgba(240,192,64,0.35)',
  backgroundColor: 'rgba(13,11,7,0.6)',
  display:         'flex',
  alignItems:      'center',
  justifyContent:  'center',
  cursor:          'pointer',
  backdropFilter:  'blur(10px)',
  transition:      'all 0.3s ease',
};
const applyHover  = e => {
  e.currentTarget.style.borderColor       = 'rgba(240,192,64,0.8)';
  e.currentTarget.style.backgroundColor  = 'rgba(184,134,11,0.25)';
};
const removeHover = e => {
  e.currentTarget.style.borderColor       = 'rgba(240,192,64,0.35)';
  e.currentTarget.style.backgroundColor  = 'rgba(13,11,7,0.6)';
};

/* ═══════════════════════════════════════════════
   PROJECT SLIDER COMPONENT
═══════════════════════════════════════════════ */
function ProjectSlider() {
  const [current,         setCurrent]         = useState(0);
  const [direction,       setDirection]       = useState('right');
  const [animating,       setAnimating]       = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const total = projectsData.length;

  const goTo = (idx, dir) => {
    if (animating || idx === current) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 480);
  };

  const prev = () => goTo((current - 1 + total) % total, 'left');
  const next = () => goTo((current + 1) % total,         'right');

  const project  = projectsData[current];
  const slideAnim = direction === 'right' ? 'sh_slideRight' : 'sh_slideLeft';
  const goldGrad  = 'linear-gradient(135deg,#f0c040 0%,#b8860b 60%,#f0c040 100%)';

  return (
    <section
      id="project-slider"
      style={{
        backgroundColor: '#0e0c08',
        position:        'relative',
        overflow:        'hidden',
      }}
    >
      {/* Section heading */}
      <div
        style={{
          textAlign:     'center',
          paddingTop:    '100px',
          paddingBottom: '56px',
          position:      'relative',
          zIndex:        10,
        }}
      >
        <span
          style={{
            display:         'inline-flex',
            alignItems:      'center',
            gap:             '8px',
            fontSize:        '0.67rem',
            letterSpacing:   '3px',
            fontWeight:      700,
            textTransform:   'uppercase',
            color:           '#f0c040',
            backgroundColor: 'rgba(184,134,11,0.1)',
            padding:         '7px 18px',
            borderRadius:    '100px',
            border:          '1px solid rgba(240,192,64,0.22)',
          }}
        >
          FEATURED PORTFOLIO
        </span>

        <h2
          style={{
            fontFamily:    '"Playfair Display", serif',
            fontSize:      'clamp(2.2rem,5vw,4rem)',
            fontWeight:    900,
            color:         '#f5f2ec',
            marginTop:     '18px',
            letterSpacing: '-1px',
            lineHeight:    1.1,
          }}
        >
          Our Signature{' '}
          <span
            style={{
              background:           goldGrad,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:       'text',
            }}
          >
            Projects
          </span>
        </h2>

        <p
          style={{
            fontSize:   '1rem',
            color:      'rgba(245,242,236,0.45)',
            marginTop:  '14px',
            maxWidth:   '520px',
            margin:     '14px auto 0',
            lineHeight: 1.7,
          }}
        >
          Custom homes designed and delivered across Kottayam, Kerala.
        </p>
      </div>

      {/* Slider wrapper */}
      <div
        style={{
          position:  'relative',
          maxWidth:  '1280px',
          margin:    '0 auto',
          padding:   '0 60px 100px',
        }}
      >
        {/* Controls row */}
        <div
          style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            marginBottom:   '26px',
          }}
        >
          {/* Counter */}
          <div
            style={{
              fontSize:      '0.72rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color:         'rgba(240,192,64,0.55)',
              fontWeight:    700,
            }}
          >
            PROJECT {String(current + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}
          </div>

          {/* Dot indicators */}
          <div style={{ display:'flex', gap:'8px', alignItems:'center' }}>
            {projectsData.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 'right' : 'left')}
                style={{ background:'none', border:'none', padding:'4px', cursor:'pointer' }}
              >
                <div
                  style={{
                    width:           i === current ? '28px' : '8px',
                    height:          '8px',
                    borderRadius:    '4px',
                    backgroundColor: i === current ? '#f0c040' : 'rgba(255,255,255,0.14)',
                    transition:      'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                    boxShadow:       i === current ? '0 0 10px rgba(240,192,64,0.5)' : 'none',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Arrow buttons */}
          <div style={{ display:'flex', gap:'10px' }}>
            {[{ icon:<ArrowLeft size={18} color="#f0c040" />, fn:prev },
              { icon:<ArrowRight size={18} color="#f0c040" />, fn:next }].map(({ icon, fn }, ai) => (
              <button
                key={ai}
                onClick={fn}
                style={{
                  width:           '46px',
                  height:          '46px',
                  borderRadius:    '50%',
                  border:          '1px solid rgba(240,192,64,0.22)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  cursor:          'pointer',
                  backdropFilter:  'blur(10px)',
                  transition:      'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(240,192,64,0.7)'; e.currentTarget.style.backgroundColor='rgba(184,134,11,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(240,192,64,0.22)'; e.currentTarget.style.backgroundColor='rgba(255,255,255,0.04)'; }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Slider card */}
        <div
          key={current}
          style={{
            display:       'grid',
            gridTemplateColumns: '1fr 1fr',
            borderRadius:  '24px',
            overflow:      'hidden',
            border:        '1px solid rgba(240,192,64,0.1)',
            boxShadow:     '0 40px 120px rgba(0,0,0,0.65)',
            minHeight:     '540px',
            animation:     `${slideAnim} 0.55s cubic-bezier(0.16,1,0.3,1) both`,
          }}
        >
          {/* Image side */}
          <div style={{ position:'relative', overflow:'hidden', minHeight:'540px' }}>
            <img
              src={project.mainImage}
              alt={project.title}
              style={{
                width:      '100%',
                height:     '100%',
                objectFit:  'cover',
                transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                transform:  'scale(1.04)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='scale(1.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='scale(1.04)'; }}
            />

            {/* Bottom gradient */}
            <div
              style={{
                position:  'absolute',
                inset:     0,
                background:'linear-gradient(to top,rgba(13,11,7,0.9) 0%,transparent 55%)',
              }}
            />

            {/* Number badge */}
            <div
              style={{
                position:      'absolute',
                top:           '24px',
                left:          '24px',
                fontFamily:    '"Playfair Display",serif',
                fontSize:      '1.4rem',
                fontWeight:    900,
                color:         '#f0c040',
                background:    'rgba(13,11,7,0.82)',
                padding:       '4px 16px',
                borderRadius:  '30px',
                border:        '1px solid rgba(240,192,64,0.35)',
                backdropFilter:'blur(8px)',
              }}
            >
              {project.number}
            </div>

            {/* Category */}
            <div style={{ position:'absolute', bottom:'24px', left:'24px' }}>
              <span
                style={{
                  display:         'inline-block',
                  fontSize:        '0.67rem',
                  letterSpacing:   '2px',
                  textTransform:   'uppercase',
                  fontWeight:      700,
                  color:           '#f0c040',
                  backgroundColor: 'rgba(184,134,11,0.18)',
                  padding:         '5px 14px',
                  borderRadius:    '100px',
                  border:          '1px solid rgba(240,192,64,0.38)',
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Thumbnail strip */}
            <div
              style={{
                position:      'absolute',
                bottom:        '24px',
                right:         '24px',
                display:       'flex',
                flexDirection: 'column',
                gap:           '6px',
              }}
            >
              {project.gallery.slice(0, 3).map((img, gi) => (
                <div
                  key={gi}
                  style={{
                    width:       '52px',
                    height:      '52px',
                    borderRadius:'8px',
                    overflow:    'hidden',
                    border:      '1.5px solid rgba(240,192,64,0.28)',
                  }}
                >
                  <img src={img} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Info side */}
          <div
            style={{
              backgroundColor: '#141209',
              padding:         '56px 52px',
              display:         'flex',
              flexDirection:   'column',
              justifyContent:  'center',
            }}
          >
            {/* Location */}
            <div
              style={{
                display:     'flex',
                alignItems:  'center',
                gap:         '6px',
                fontSize:    '0.78rem',
                color:       'rgba(240,192,64,0.65)',
                fontWeight:  600,
                marginBottom:'16px',
              }}
            >
              <MapPin size={13} color="#f0c040" />
              {project.location}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily:    '"Playfair Display",serif',
                fontSize:      'clamp(1.8rem,3vw,2.6rem)',
                fontWeight:    900,
                color:         '#f5f2ec',
                lineHeight:    1.15,
                marginBottom:  '8px',
                letterSpacing: '-0.5px',
              }}
            >
              {project.title}
            </h3>

            {/* Subtitle */}
            <div
              style={{
                fontSize:     '0.9rem',
                color:        'rgba(240,192,64,0.58)',
                fontStyle:    'italic',
                marginBottom: '18px',
              }}
            >
              {project.subtitle}
            </div>

            {/* Gold line */}
            <div
              style={{
                width:        '50px',
                height:       '2px',
                background:   'linear-gradient(to right,#f0c040,transparent)',
                marginBottom: '18px',
              }}
            />

            {/* Description */}
            <p
              style={{
                fontSize:     '0.94rem',
                color:        'rgba(245,242,236,0.62)',
                lineHeight:   1.8,
                marginBottom: '28px',
              }}
            >
              {project.description}
            </p>

            {/* Stats row */}
            <div
              style={{
                display:               'grid',
                gridTemplateColumns:   'repeat(3,1fr)',
                gap:                   '16px',
                paddingTop:            '20px',
                borderTop:             '1px solid rgba(255,255,255,0.07)',
                marginBottom:          '26px',
              }}
            >
              {[
                { label:'Area',   value:project.area },
                { label:'Year',   value:project.year },
                { label:'Photos', value:`${project.gallery.length} Views` },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize:'0.63rem', letterSpacing:'2px', textTransform:'uppercase', color:'rgba(245,242,236,0.32)' }}>{s.label}</div>
                  <div style={{ fontSize:'0.94rem', fontWeight:800, color:'#f5f2ec', marginTop:'4px' }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div style={{ marginBottom:'30px' }}>
              {project.highlights.slice(0, 3).map((h, hi) => (
                <div
                  key={hi}
                  style={{
                    display:     'flex',
                    alignItems:  'flex-start',
                    gap:         '10px',
                    marginBottom:'10px',
                    fontSize:    '0.87rem',
                    color:       'rgba(245,242,236,0.58)',
                  }}
                >
                  <span
                    style={{
                      width:           '5px',
                      height:          '5px',
                      borderRadius:    '50%',
                      backgroundColor: '#f0c040',
                      marginTop:       '7px',
                      flexShrink:      0,
                    }}
                  />
                  {h}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => setSelectedProject(project)}
              style={{
                alignSelf:      'flex-start',
                display:        'inline-flex',
                alignItems:     'center',
                gap:            '10px',
                padding:        '14px 28px',
                background:     'linear-gradient(135deg,#b8860b 0%,#9a7008 100%)',
                color:          '#ffffff',
                fontFamily:     '"Outfit",sans-serif',
                fontWeight:     700,
                fontSize:       '0.84rem',
                letterSpacing:  '1.5px',
                textTransform:  'uppercase',
                border:         'none',
                borderRadius:   '4px',
                cursor:         'pointer',
                boxShadow:      '0 6px 28px rgba(184,134,11,0.4)',
                transition:     'all 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(184,134,11,0.6)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)';    e.currentTarget.style.boxShadow='0 6px 28px rgba(184,134,11,0.4)'; }}
            >
              <span>View Project Details</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Client quote strip */}
        <div
          key={current + '-q'}
          style={{
            marginTop:   '28px',
            padding:     '26px 38px',
            borderRadius:'14px',
            background:  'rgba(240,192,64,0.04)',
            border:      '1px solid rgba(240,192,64,0.1)',
            display:     'flex',
            alignItems:  'center',
            gap:         '18px',
            animation:   `${slideAnim} 0.7s cubic-bezier(0.16,1,0.3,1) 0.08s both`,
          }}
        >
          <div
            style={{
              fontFamily:  '"Playfair Display",serif',
              fontSize:    '3.5rem',
              color:       'rgba(240,192,64,0.28)',
              lineHeight:  1,
              flexShrink:  0,
              marginTop:   '-12px',
            }}
          >
            "
          </div>
          <p
            style={{
              fontSize:   '0.96rem',
              color:      'rgba(245,242,236,0.56)',
              fontStyle:  'italic',
              lineHeight: 1.75,
              margin:     0,
            }}
          >
            {project.clientStory}
          </p>
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PROJECT DETAIL MODAL
═══════════════════════════════════════════════ */
function ProjectModal({ project, onClose }) {
  return (
    <div
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          9999,
        backgroundColor: 'rgba(0,0,0,0.88)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        padding:         '24px',
        backdropFilter:  'blur(14px)',
        animation:       'sh_fadeModal 0.32s ease both',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#141209',
          borderRadius:    '20px',
          border:          '1px solid rgba(240,192,64,0.14)',
          maxWidth:        '860px',
          width:           '100%',
          maxHeight:       '88vh',
          overflowY:       'auto',
          position:        'relative',
          animation:       'sh_slideModal 0.4s cubic-bezier(0.16,1,0.3,1) both',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Hero image */}
        <div style={{ position:'relative', height:'340px', overflow:'hidden', borderRadius:'20px 20px 0 0' }}>
          <img
            src={project.mainImage}
            alt={project.title}
            style={{ width:'100%', height:'100%', objectFit:'cover' }}
          />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(13,11,7,0.92) 0%,transparent 50%)' }} />
          <div style={{ position:'absolute', bottom:'28px', left:'36px' }}>
            <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'2.2rem', fontWeight:900, color:'#f5f2ec', margin:0 }}>
              {project.title}
            </h3>
            <div style={{ fontSize:'0.85rem', color:'rgba(240,192,64,0.8)', marginTop:'6px' }}>{project.subtitle}</div>
          </div>
          <button
            onClick={onClose}
            style={{
              position:        'absolute',
              top:             '20px',
              right:           '20px',
              width:           '36px',
              height:          '36px',
              borderRadius:    '50%',
              backgroundColor: 'rgba(0,0,0,0.6)',
              border:          '1px solid rgba(255,255,255,0.14)',
              color:           '#fff',
              fontSize:        '1.2rem',
              cursor:          'pointer',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              backdropFilter:  'blur(8px)',
            }}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div style={{ padding:'36px' }}>
          <p style={{ color:'rgba(245,242,236,0.68)', lineHeight:1.8, fontSize:'0.97rem', marginBottom:'28px' }}>
            {project.description}
          </p>

          {/* Highlights */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'28px' }}>
            {project.highlights.map((h, i) => (
              <div key={i} style={{ display:'flex', gap:'10px', alignItems:'flex-start', fontSize:'0.87rem', color:'rgba(245,242,236,0.62)' }}>
                <span style={{ width:'5px', height:'5px', borderRadius:'50%', backgroundColor:'#f0c040', marginTop:'7px', flexShrink:0 }} />
                {h}
              </div>
            ))}
          </div>

          {/* Gallery thumbnails */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'10px' }}>
            {project.gallery.map((img, gi) => (
              <div key={gi} style={{ borderRadius:'8px', overflow:'hidden', aspectRatio:'4/3' }}>
                <img src={img} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
            ))}
          </div>

          {/* Client quote */}
          <div
            style={{
              marginTop:  '28px',
              padding:    '20px',
              background: 'rgba(240,192,64,0.05)',
              borderRadius:'10px',
              border:     '1px solid rgba(240,192,64,0.12)',
            }}
          >
            <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'2rem', color:'rgba(240,192,64,0.28)', lineHeight:1 }}>"</div>
            <p style={{ color:'rgba(245,242,236,0.62)', fontStyle:'italic', fontSize:'0.97rem', lineHeight:1.75, margin:'4px 0 0' }}>
              {project.clientStory}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}