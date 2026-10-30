import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  Cpu,
  Activity
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  // Dynamic animated rotating technical roles
  const roles = [
    'AI Engineer & Computer Vision Developer',
    'Discrete Diffusion Models Researcher',
    'Deep Learning Systems Engineer',
    'Real-Time Edge Vision Specialist'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 65;

  useEffect(() => {
    const currentTarget = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentTarget.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTarget.length) {
          // Pause when complete before deleting
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setDisplayText(currentTarget.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 30 : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="section" style={{ paddingTop: 'calc(var(--header-height) + 36px)', paddingBottom: '72px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)', gap: '48px', alignItems: 'center' }} className="hero-grid">
          {/* Left Column: Headline & Intro */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid var(--emerald-border)',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--emerald-400)',
                  boxShadow: '0 0 10px var(--emerald-400)',
                  animation: 'pulseGlow 2s infinite ease-in-out',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--emerald-400)',
                  letterSpacing: '0.04em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                {PROFILE_DATA.availability}
              </span>
            </div>

            {/* Name & Academic Citation */}
            <div style={{ marginBottom: '14px' }}>
              <h1
                style={{
                  fontSize: 'clamp(2.15rem, 5vw, 3.75rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-bright)',
                  marginBottom: '8px',
                }}
              >
                {PROFILE_DATA.name}
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <span>Academic Citation:</span>
                <span style={{ color: 'var(--emerald-400)', fontWeight: 600 }}>{PROFILE_DATA.researchName}</span>
                <span style={{ color: 'var(--border-default)' }}>•</span>
                <span>E-JUST (Alexandria, Egypt)</span>
              </p>
            </div>

            {/* Dynamic Typewriter Professional Role */}
            <div
              style={{
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <Cpu size={22} style={{ color: 'var(--emerald-400)', flexShrink: 0 }} />
              <h2
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
                  fontWeight: 600,
                  color: 'var(--emerald-400)',
                  letterSpacing: '-0.015em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span>{displayText}</span>
                <span
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1.2em',
                    backgroundColor: 'var(--emerald-400)',
                    animation: 'blinkCursor 1s infinite',
                  }}
                  aria-hidden="true"
                />
              </h2>
            </div>

            {/* Introduction Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '620px',
                marginBottom: '32px',
              }}
            >
              Specializing in deep learning architectures, discrete generative diffusion models, and real-time computer vision systems. Co-author of published IEEE research at{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                Egypt-Japan University of Science and Technology (E-JUST)
              </strong>
              , with hands-on systems deployed for agricultural disease diagnosis and acoustic feature classification.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '36px',
              }}
              className="hero-action-buttons"
            >
              <a href="#research" className="btn btn-primary hero-btn">
                <span>View IEEE Research & Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={PROFILE_DATA.contact.resumeUrl}
                download={PROFILE_DATA.contact.resumeFileName}
                className="btn btn-secondary btn-mono hero-btn"
              >
                <FileDown size={16} style={{ color: 'var(--emerald-400)' }} />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* Quick Links Row */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Direct Channels:
              </span>
              <a
                href={PROFILE_DATA.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '4px 6px',
                  borderRadius: 'var(--radius-sm)',
                }}
                className="hover-emerald"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <span style={{ color: 'var(--border-subtle)' }}>/</span>
              <a
                href={PROFILE_DATA.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '4px 6px',
                  borderRadius: 'var(--radius-sm)',
                }}
                className="hover-emerald"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <span style={{ color: 'var(--border-subtle)' }}>/</span>
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '4px 6px',
                  borderRadius: 'var(--radius-sm)',
                }}
                className="hover-emerald"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Technical System Card (Code / Spec Aesthetic with Scanline) */}
          <div style={{ position: 'relative' }}>
            {/* Terminal Window Card */}
            <div
              className="scanline-card"
              style={{
                backgroundColor: '#0c1214',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg), 0 0 32px rgba(16, 185, 129, 0.05)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  padding: '12px 18px',
                  backgroundColor: '#080c0d',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  <span style={{ marginLeft: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    moaaz@ejust-ai: ~/portfolio
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--emerald-400)', animation: 'pulseGlow 2s infinite' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--emerald-400)',
                      backgroundColor: 'var(--emerald-glow-subtle)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      border: '1px solid var(--emerald-border)',
                    }}
                  >
                    SYSTEM_OK
                  </span>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div style={{ padding: '24px', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)', lineHeight: 1.75, overflowX: 'auto' }}>
                <div style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>
                  // Academic & Engineering Profile Configuration
                </div>

                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: 'var(--emerald-400)' }}>const</span>{' '}
                  <span style={{ color: 'var(--text-bright)' }}>researchFocus</span> = &#123;
                </div>

                <div style={{ paddingLeft: '20px' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    domain: <span style={{ color: '#38bdf8' }}>'Computer Vision & Diffusion Models'</span>,
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    institution: <span style={{ color: '#38bdf8' }}>'E-JUST (Alexandria, Egypt)'</span>,
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    latestPaper: <span style={{ color: '#a7f3d0' }}>'IEEE 3SCEA 2026'</span>,
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    keyMetrics: [
                  </div>
                  <div style={{ paddingLeft: '20px', color: '#94a3b8' }}>
                    <span style={{ color: '#fef08a' }}>'Discrete Procedural Content Generation'</span>,<br />
                    <span style={{ color: '#fef08a' }}>'Real-time Palm Foliar Diagnostics'</span>,<br />
                    <span style={{ color: '#fef08a' }}>'Spectrogram Environmental Sound CNN'</span>
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>],</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    frameworks: [<span style={{ color: 'var(--emerald-400)' }}>'PyTorch'</span>, <span style={{ color: 'var(--emerald-400)' }}>'OpenCV'</span>, <span style={{ color: 'var(--emerald-400)' }}>'YOLOv8'</span>, <span style={{ color: 'var(--emerald-400)' }}>'ONNX'</span>],
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    status: <span style={{ color: 'var(--emerald-400)' }}>'Ready for Engineering Roles'</span>
                  </div>
                </div>

                <div style={{ marginTop: '8px', color: 'var(--text-bright)' }}>&#125;;</div>

                {/* Simulated CLI Prompt */}
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--emerald-400)' }}>$</span>
                  <span style={{ color: 'var(--text-secondary)' }}>python -m vision.diagnostics --eval</span>
                  <span style={{ display: 'inline-block', width: '8px', height: '14px', backgroundColor: 'var(--emerald-400)', animation: 'blinkCursor 1s infinite' }} />
                </div>
              </div>

              {/* Bottom Quick Card Footer */}
              <div
                style={{
                  padding: '12px 20px',
                  backgroundColor: '#090d0e',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Activity size={13} style={{ color: 'var(--emerald-400)' }} />
                  <span>CUDA 12.x / PyTorch 2.x</span>
                </span>
                <span style={{ color: 'var(--emerald-400)' }}>Inference: 14ms (FP16)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stats Strip */}
        <div
          style={{
            marginTop: '56px',
            padding: '24px 32px',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
          className="hero-stats"
        >
          {PROFILE_DATA.stats.map((stat, i) => (
            <div key={i} style={{ borderLeft: i > 0 ? '1px solid var(--border-subtle)' : 'none', paddingLeft: i > 0 ? '24px' : '0' }}>
              <div
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.35rem)',
                  fontWeight: 700,
                  color: 'var(--emerald-400)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-bright)', marginBottom: '2px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {stat.hint}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hover-emerald:hover {
          color: var(--emerald-400) !important;
        }
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            padding: 20px !important;
          }
          .hero-stats > div {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
        @media (max-width: 520px) {
          .hero-action-buttons {
            flex-direction: column !important;
            width: 100% !important;
            gap: 12px !important;
          }
          .hero-btn {
            width: 100% !important;
          }
          .hero-stats {
            grid-template-columns: 1fr !important;
            padding: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
