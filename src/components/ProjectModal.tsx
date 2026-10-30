import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  BookOpen, 
  CheckCircle, 
  AlertCircle 
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 7, 8, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg), 0 0 32px rgba(16, 185, 129, 0.08)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            padding: '16px 24px',
            backgroundColor: 'rgba(20, 28, 30, 0.95)',
            backdropFilter: 'blur(8px)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--emerald-400)',
                backgroundColor: 'var(--emerald-glow-subtle)',
                border: '1px solid var(--emerald-border)',
                padding: '2px 8px',
                borderRadius: '4px',
                fontWeight: 600,
              }}
            >
              {project.category}
            </span>
            {project.status && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  backgroundColor: project.status === 'In Development' ? 'var(--amber-glow)' : 'var(--emerald-glow-subtle)',
                  color: project.status === 'In Development' ? 'var(--amber-status)' : 'var(--emerald-400)',
                  border: `1px solid ${project.status === 'In Development' ? 'var(--amber-border)' : 'var(--emerald-border)'}`,
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {project.status === 'In Development' && <AlertCircle size={12} />}
                {project.status}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            style={{
              padding: '6px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Image */}
        <div style={{ maxHeight: '380px', overflow: 'hidden', backgroundColor: '#070a0b', borderBottom: '1px solid var(--border-subtle)' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: '380px' }}
          />
        </div>

        {/* Modal Content */}
        <div style={{ padding: '32px' }} className="modal-content-body">
          <h2
            id="modal-project-title"
            style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--text-bright)',
              lineHeight: 1.25,
              marginBottom: '8px',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--emerald-400)', fontFamily: 'var(--font-mono)', marginBottom: '20px' }}>
            {project.subtitle}
          </p>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
            {project.longDescription}
          </p>

          {/* Contributions */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Key Technical Contributions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.contributions.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                  <span style={{ color: 'var(--emerald-400)', marginTop: '2px' }}>▹</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes / Metrics */}
          {project.metricsOrOutcomes && project.metricsOrOutcomes.length > 0 && (
            <div style={{ marginBottom: '28px', padding: '16px 20px', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <h3 style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--emerald-400)', marginBottom: '10px' }}>
                Technical Outcomes & Benchmarks
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {project.metricsOrOutcomes.map((metric, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={14} style={{ color: 'var(--emerald-400)' }} />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)', marginBottom: '10px' }}>
              Technologies & Frameworks
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
            {project.links.paperUrl && (
              <a
                href={project.links.paperUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary btn-sm"
              >
                <BookOpen size={15} />
                <span>Read IEEE Publication</span>
                <ExternalLink size={13} />
              </a>
            )}

            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary btn-sm"
              >
                <span>Live Demonstration</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary btn-sm btn-mono"
              >
                <GithubIcon size={15} />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.status === 'In Development' && !project.links.liveDemo && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--amber-status)' }}>
                Demo deployment pending internal validation
              </span>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .modal-content-body {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </div>
  );
};
