import React from 'react';
import { PROFILE_DATA, EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Languages
} from 'lucide-react';

export const AboutExperience: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="indicator-dot" />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">About & Professional Experience</h2>
          <p className="section-subtitle">
            A combination of academic rigor at Egypt-Japan University of Science and Technology (E-JUST), practical mobile and web engineering internships, and peer-reviewed research.
          </p>
        </div>

        {/* 2-Column Layout: Left = About & Philosophy, Right = Experience & Education Timeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)', gap: '44px', alignItems: 'start' }} className="about-grid">
          {/* Left Column: About Bio & Engineering Approach */}
          <div>
            <div className="card" style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <User size={18} style={{ color: 'var(--emerald-400)' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-bright)' }}>
                  Engineering Philosophy
                </h3>
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                {PROFILE_DATA.bio}
              </p>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                At <strong style={{ color: 'var(--text-bright)' }}>E-JUST</strong>, I have cultivated a disciplined mindset combining Japanese engineering methodology with rapid generative AI prototyping. I approach engineering challenges through first-principles: formulating the underlying mathematical dynamics before jumping to implementation.
              </p>

              {/* Quick Details List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem' }}>
                  <MapPin size={16} style={{ color: 'var(--emerald-400)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-muted)' }}>Location:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{PROFILE_DATA.location}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem' }}>
                  <GraduationCap size={16} style={{ color: 'var(--emerald-400)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-muted)' }}>Degree:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>B.Sc. in Computer Science & AI (2022–2026)</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem' }}>
                  <Languages size={16} style={{ color: 'var(--emerald-400)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-muted)' }}>Languages:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Arabic (Native), English (Professional), Japanese (Academic Basic)</span>
                </div>
              </div>
            </div>

            {/* Academic Education Card */}
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <GraduationCap size={18} style={{ color: 'var(--emerald-400)' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-bright)' }}>
                  Education
                </h3>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-bright)' }}>
                  {EDUCATION_DATA.degree}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--emerald-400)', fontWeight: 600, marginTop: '2px' }}>
                  {EDUCATION_DATA.institution}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '6px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} />
                    <span>{EDUCATION_DATA.period}</span>
                  </span>
                  <span>•</span>
                  <span>Alexandria, Egypt</span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                {EDUCATION_DATA.details.map((detail, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: 'var(--emerald-400)', marginTop: '2px' }}>▹</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Coursework Tags */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Relevant Coursework:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {EDUCATION_DATA.courses.map((course, idx) => (
                    <span key={idx} className="badge">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Experience Timeline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Briefcase size={20} style={{ color: 'var(--emerald-400)' }} />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-bright)' }}>
                Professional Experience & Leadership
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{
                    borderLeft: '3px solid var(--emerald-500)',
                    padding: '24px',
                  }}
                >
                  {/* Role Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                    <div>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-bright)' }}>
                        {exp.role}
                      </h4>
                      <div style={{ fontSize: '0.9375rem', color: 'var(--emerald-400)', fontWeight: 600 }}>
                        {exp.organization}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)',
                          backgroundColor: 'var(--bg-surface-elevated)',
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {exp.period}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {exp.summary}
                  </p>

                  {/* Highlights */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--emerald-400)', marginTop: '2px' }}>▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};
