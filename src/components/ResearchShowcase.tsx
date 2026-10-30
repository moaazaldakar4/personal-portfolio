import React, { useState } from 'react';
import { PUBLICATION_DATA } from '../data/portfolioData';
import { 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  ChevronDown, 
  ChevronUp,
  Award
} from 'lucide-react';

export const ResearchShowcase: React.FC = () => {
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [showFullAbstract, setShowFullAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  const copyBibtexToClipboard = () => {
    navigator.clipboard.writeText(PUBLICATION_DATA.bibtex);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2500);
  };

  return (
    <section id="research" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="indicator-dot" />
            <span>Peer-Reviewed Publication</span>
          </div>
          <h2 className="section-title">Research & Publications</h2>
          <p className="section-subtitle">
            Advancing deep generative models in discrete structural domains. Published in the proceedings of the 2026 IEEE International Conference on Smart Sustainable Systems for Computer and Engineering Applications (3SCEA).
          </p>
        </div>

        {/* Featured Publication Feature Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
          }}
        >
          {/* Top Banner Tag */}
          <div
            style={{
              padding: '12px 24px',
              backgroundColor: '#0d1618',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--emerald-400)',
                  backgroundColor: 'var(--emerald-glow)',
                  border: '1px solid var(--emerald-border)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <Award size={13} />
                <span>IEEE CONFERENCE PAPER</span>
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                {PUBLICATION_DATA.conferenceShort} • Cairo, Egypt
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                DOI: {PUBLICATION_DATA.doi}
              </span>
            </div>
          </div>

          {/* Main Card Content */}
          <div style={{ padding: '36px' }} className="publication-body">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '36px', alignItems: 'start' }} className="publication-grid">
              {/* Left Column: Details & Abstract */}
              <div>
                <h3
                  style={{
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: 'var(--text-bright)',
                    marginBottom: '18px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {PUBLICATION_DATA.title}
                </h3>

                {/* Authors List */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Authors & Affiliations:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {PUBLICATION_DATA.authors.map((author, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.8125rem',
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: author.isHighlighted ? 'var(--emerald-glow)' : 'var(--bg-surface-elevated)',
                          border: '1px solid',
                          borderColor: author.isHighlighted ? 'var(--emerald-border)' : 'var(--border-subtle)',
                          color: author.isHighlighted ? 'var(--emerald-400)' : 'var(--text-secondary)',
                          fontWeight: author.isHighlighted ? 700 : 500,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {author.name}
                        {author.isHighlighted && (
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.625rem',
                              backgroundColor: 'var(--emerald-500)',
                              color: '#020e09',
                              padding: '1px 5px',
                              borderRadius: '3px',
                              fontWeight: 800,
                            }}
                          >
                            YOU
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Abstract Text Box */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '20px',
                    marginBottom: '24px',
                    lineHeight: 1.7,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--emerald-400)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Abstract Summary
                    </span>
                    <button
                      onClick={() => setShowFullAbstract(!showFullAbstract)}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {showFullAbstract ? 'Collapse' : 'Read Full'}
                      {showFullAbstract ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                    {showFullAbstract
                      ? PUBLICATION_DATA.abstract
                      : `${PUBLICATION_DATA.abstract.slice(0, 240)}...`}
                  </p>
                </div>

                {/* Key Research Takeaways */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Core Technical Takeaways:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {PUBLICATION_DATA.keyContributions.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                        <span style={{ color: 'var(--emerald-400)', marginTop: '3px' }}>▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Research CTAs */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }} className="pub-action-btns">
                  <a
                    href={PUBLICATION_DATA.ieeeUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary btn-sm"
                  >
                    <BookOpen size={15} />
                    <span>View on IEEE Xplore</span>
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href={PUBLICATION_DATA.doiUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-secondary btn-sm btn-mono"
                  >
                    <span>DOI Resolver</span>
                    <ExternalLink size={13} />
                  </a>

                  <button
                    onClick={() => setShowBibtex(!showBibtex)}
                    className="btn btn-secondary btn-sm btn-mono"
                  >
                    <FileText size={14} />
                    <span>{showBibtex ? 'Hide BibTeX' : 'Cite (BibTeX)'}</span>
                  </button>
                </div>

                {/* BibTeX Drawer */}
                {showBibtex && (
                  <div style={{ marginTop: '16px', position: 'relative' }}>
                    <div className="code-block" style={{ fontSize: '0.75rem', position: 'relative' }}>
                      <pre>{PUBLICATION_DATA.bibtex}</pre>
                      <button
                        onClick={copyBibtexToClipboard}
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '5px 10px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--bg-surface-elevated)',
                          border: '1px solid var(--border-default)',
                          color: copiedBibtex ? 'var(--emerald-400)' : 'var(--text-secondary)',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {copiedBibtex ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copiedBibtex ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Visual Research Diagram */}
              <div>
                <div
                  style={{
                    backgroundColor: '#090d0e',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={PUBLICATION_DATA.image}
                    alt="Conditional Autoregressive Diffusion Architecture Diagram"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      display: 'block',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  />
                  <div style={{ padding: '16px 20px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--emerald-400)', marginBottom: '4px' }}>
                      Architecture & Denoising Progress
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Discrete token diffusion mechanism illustrating tile denoising steps, attention transformer blocks, and loss formulation for game level procedural generation.
                    </p>

                    {/* Keywords */}
                    <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {PUBLICATION_DATA.keywords.map((kw, idx) => (
                        <span key={idx} className="badge">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .publication-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .publication-body {
            padding: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .publication-body {
            padding: 18px !important;
          }
          .pub-action-btns {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
          }
          .pub-action-btns > * {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
