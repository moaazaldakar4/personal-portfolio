import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Brain, Eye, Code, Terminal } from 'lucide-react';

export const TechnicalSkills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain size={20} style={{ color: 'var(--emerald-400)' }} />;
      case 1:
        return <Eye size={20} style={{ color: 'var(--emerald-400)' }} />;
      case 2:
        return <Code size={20} style={{ color: 'var(--emerald-400)' }} />;
      case 3:
      default:
        return <Terminal size={20} style={{ color: 'var(--emerald-400)' }} />;
    }
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="indicator-dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Technical Skills & Tooling</h2>
          <p className="section-subtitle">
            Grouped across deep learning theory, computer vision engineering, systems software, and production infrastructure.
          </p>
        </div>

        {/* 2x2 Grid of Skill Groups */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '28px',
          }}
          className="skills-grid"
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {/* Category Title & Icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, color: 'var(--text-bright)' }}>
                    {cat.title}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                {cat.description}
              </p>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--emerald-400)' }} />
                        <span>{skill.name}</span>
                      </div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)',
                          marginTop: '2px',
                          paddingLeft: '10px',
                        }}
                      >
                        {skill.focus}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
