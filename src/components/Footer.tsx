import React from 'react';
import { PROFILE_DATA, PUBLICATION_DATA } from '../data/portfolioData';
import { ArrowUp, Mail, BookOpen, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#070a0b',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '64px',
        paddingBottom: '48px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '36px',
            marginBottom: '48px',
          }}
        >
          {/* Left Block: Bio & Identity */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-default)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald-400)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                }}
              >
                MA
              </div>
              <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-bright)' }}>
                {PROFILE_DATA.name}
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
              AI Engineer and Computer Vision Developer specializing in deep generative models, diffusion architectures, and real-time vision pipelines.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href={PROFILE_DATA.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}
                className="hover-emerald"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={PROFILE_DATA.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}
                className="hover-emerald"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}
                className="hover-emerald"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>

              <a
                href={PUBLICATION_DATA.ieeeUrl}
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}
                className="hover-emerald"
                aria-label="IEEE Paper"
                title="IEEE Paper"
              >
                <BookOpen size={16} />
              </a>
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '14px' }}>
                Navigation
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
                <li><a href="#home" className="hover-emerald" style={{ color: 'var(--text-secondary)' }}>Overview</a></li>
                <li><a href="#research" className="hover-emerald" style={{ color: 'var(--text-secondary)' }}>IEEE Research</a></li>
                <li><a href="#projects" className="hover-emerald" style={{ color: 'var(--text-secondary)' }}>Featured Projects</a></li>
                <li><a href="#about" className="hover-emerald" style={{ color: 'var(--text-secondary)' }}>About & Experience</a></li>
                <li><a href="#skills" className="hover-emerald" style={{ color: 'var(--text-secondary)' }}>Technical Skills</a></li>
                <li><a href="#contact" className="hover-emerald" style={{ color: 'var(--text-secondary)' }}>Contact</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '14px' }}>
                Key Resources
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
                <li>
                  <a href={PROFILE_DATA.contact.resumeUrl} download={PROFILE_DATA.contact.resumeFileName} className="hover-emerald" style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <FileDown size={14} style={{ color: 'var(--emerald-400)' }} />
                    <span>Download CV</span>
                  </a>
                </li>
                <li>
                  <a href={PUBLICATION_DATA.ieeeUrl} target="_blank" rel="noreferrer noopener" className="hover-emerald" style={{ color: 'var(--text-secondary)' }}>
                    IEEE Xplore Paper
                  </a>
                </li>
                <li>
                  <a href={PUBLICATION_DATA.doiUrl} target="_blank" rel="noreferrer noopener" className="hover-emerald" style={{ color: 'var(--text-secondary)' }}>
                    DOI: 10.1109/3SCEA68071
                  </a>
                </li>
                <li>
                  <a href={PROFILE_DATA.contact.github} target="_blank" rel="noreferrer noopener" className="hover-emerald" style={{ color: 'var(--text-secondary)' }}>
                    GitHub Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Moaaz Hani AlDakar. Built with React, TypeScript & Vite.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-secondary)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
            }}
            className="hover-emerald"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
