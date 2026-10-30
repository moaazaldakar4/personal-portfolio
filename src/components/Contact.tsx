import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  FileDown,
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE_DATA.contact.email}?subject=${encodeURIComponent(subject || 'Inquiry: Engineering Opportunity')}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="indicator-dot" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether discussing AI engineering roles, computer vision collaborations, or generative diffusion research inquiries, I welcome communication.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '44px' }} className="contact-grid">
          {/* Left Column: Direct Contact Cards */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Email Card */}
              <div
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--emerald-glow)',
                      border: '1px solid var(--emerald-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--emerald-400)',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${PROFILE_DATA.contact.email}`}
                      style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-bright)' }}
                      className="hover-emerald"
                    >
                      {PROFILE_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="btn btn-secondary btn-sm btn-mono"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} style={{ color: 'var(--emerald-400)' }} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-default)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--emerald-400)',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Direct Phone / WhatsApp
                    </div>
                    <a
                      href={`tel:${PROFILE_DATA.contact.phone.replace(/\s+/g, '')}`}
                      style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-bright)' }}
                      className="hover-emerald"
                    >
                      {PROFILE_DATA.contact.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={copyPhone}
                    className="btn btn-secondary btn-sm btn-mono"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check size={14} style={{ color: 'var(--emerald-400)' }} /> : <Copy size={14} />}
                  </button>

                  <a
                    href={PROFILE_DATA.contact.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-secondary btn-sm btn-mono"
                    title="Chat on WhatsApp"
                  >
                    <MessageSquare size={14} style={{ color: 'var(--emerald-400)' }} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Social Channels Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-social-row">
                {/* LinkedIn Card */}
                <a
                  href={PROFILE_DATA.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card card-interactive"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '18px 20px',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-default)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0ea5e9',
                    }}
                  >
                    <LinkedinIcon size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-bright)' }}>
                      LinkedIn
                    </div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      moaaz-al-dakar
                    </div>
                  </div>
                  <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                </a>

                {/* GitHub Card */}
                <a
                  href={PROFILE_DATA.contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card card-interactive"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '18px 20px',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-default)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-bright)',
                    }}
                  >
                    <GithubIcon size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-bright)' }}>
                      GitHub
                    </div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      moaazaldakar4
                    </div>
                  </div>
                  <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                </a>
              </div>

              {/* CV Download Strip */}
              <div
                className="contact-cv-strip"
                style={{
                  padding: '20px 24px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginTop: '8px',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-bright)' }}>
                    Curriculum Vitae (PDF)
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Updated with IEEE publication & project metrics
                  </div>
                </div>

                <a
                  href={PROFILE_DATA.contact.resumeUrl}
                  download={PROFILE_DATA.contact.resumeFileName}
                  className="btn btn-primary btn-sm btn-mono"
                >
                  <FileDown size={14} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Dispatch Form */}
          <div className="card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '8px' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
              Launches your email client with your message pre-populated directly to <strong style={{ color: 'var(--text-primary)' }}>{PROFILE_DATA.contact.email}</strong>.
            </p>

            <form onSubmit={handleSendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label
                  htmlFor="contact-subject"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. AI Engineering Role / Computer Vision Project"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--emerald-400)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-default)')}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Hello Moaaz, I reviewed your research and computer vision projects..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--emerald-400)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-default)')}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '13px 20px', marginTop: '6px' }}
              >
                <Send size={16} />
                <span>Compose Email to Moaaz</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 520px) {
          .contact-social-row {
            grid-template-columns: 1fr !important;
          }
          .contact-cv-strip {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .contact-cv-strip > * {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
