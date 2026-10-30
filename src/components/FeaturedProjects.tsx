import React, { useState } from 'react';
import { FEATURED_PROJECTS, type Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  ExternalLink, 
  BookOpen, 
  ArrowRight, 
  AlertCircle,
  Eye
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const FeaturedProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Computer Vision', 'Research', 'Autonomous Systems', 'Applied Engineering'];

  const filteredProjects = activeCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="indicator-dot" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="section-title">Featured Projects & Systems</h2>
          <p className="section-subtitle">
            A curated portfolio spanning computer vision pipelines, generative diffusion modeling, acoustic feature recognition, and applied engineering systems.
          </p>
        </div>

        {/* Filter Navigation with Mobile Touch Scroll */}
        <div
          className="project-filters-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '14px',
            marginBottom: '36px',
            borderBottom: '1px solid var(--border-subtle)',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: activeCategory === cat ? 'var(--emerald-glow)' : 'var(--bg-surface)',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--emerald-border)' : 'var(--border-subtle)',
                color: activeCategory === cat ? 'var(--emerald-400)' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
                flexShrink: 0,
                whiteSpace: 'nowrap',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 330px), 1fr))',
            gap: '26px',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card card-interactive"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {/* Card Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '210px',
                  backgroundColor: '#070a0b',
                  overflow: 'hidden',
                  borderBottom: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-slow)',
                  }}
                  className="project-card-image"
                />

                {/* Status Badges Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(9, 12, 13, 0.88)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--text-bright)',
                      border: '1px solid var(--border-default)',
                    }}
                  >
                    {project.category}
                  </span>

                  {project.status && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '4px',
                        backgroundColor: project.status === 'In Development' ? 'rgba(245, 158, 11, 0.9)' : 'rgba(16, 185, 129, 0.9)',
                        color: project.status === 'In Development' ? '#181002' : '#020f08',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {project.status === 'In Development' && <AlertCircle size={10} />}
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Hover overlay hint */}
                <div
                  className="card-hover-hint"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(9, 12, 13, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity var(--transition-fast)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-bright)',
                      backgroundColor: 'rgba(9, 12, 13, 0.85)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-default)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Eye size={14} style={{ color: 'var(--emerald-400)' }} />
                    <span>Click to Inspect Architecture</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-bright)',
                    marginBottom: '6px',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--emerald-400)',
                    marginBottom: '14px',
                  }}
                >
                  {project.subtitle}
                </p>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        backgroundColor: 'transparent',
                        color: 'var(--text-muted)',
                      }}
                    >
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Actions Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--emerald-400)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'gap var(--transition-fast)',
                    }}
                    className="details-btn"
                  >
                    <span>Inspect System</span>
                    <ArrowRight size={14} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {project.links.paperUrl && (
                      <a
                        href={project.links.paperUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ color: 'var(--text-muted)' }}
                        className="hover-emerald"
                        title="IEEE Publication"
                      >
                        <BookOpen size={16} />
                      </a>
                    )}
                    {project.links.liveDemo && (
                      <a
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ color: 'var(--text-muted)' }}
                        className="hover-emerald"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ color: 'var(--text-muted)' }}
                        className="hover-emerald"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>

      <style>{`
        .card-interactive:hover .project-card-image {
          transform: scale(1.03);
        }
        .card-interactive:hover .card-hover-hint {
          opacity: 1 !important;
        }
        .details-btn:hover {
          gap: 7px !important;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
