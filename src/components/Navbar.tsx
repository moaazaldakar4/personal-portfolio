import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { FileDown, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'research', 'projects', 'about', 'skills', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#home', id: 'home' },
    { label: 'Research', href: '#research', id: 'research', badge: 'IEEE' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'About & Experience', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'all var(--transition-normal)',
        backgroundColor: isScrolled ? 'rgba(9, 12, 13, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Monogram / Brand */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
          aria-label="Moaaz Aldakar - Home"
        >
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
              color: 'var(--emerald-400)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.9375rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            M<span style={{ color: 'var(--text-bright)' }}>A</span>
          </div>
          <div>
            <span
              style={{
                display: 'block',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--text-bright)',
                letterSpacing: '-0.015em',
                lineHeight: 1.2,
              }}
            >
              Moaaz Aldakar
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--emerald-400)' }} />
              AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--text-bright)' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--bg-surface-elevated)' : 'transparent',
                  border: isActive ? '1px solid var(--border-default)' : '1px solid transparent',
                  transition: 'all var(--transition-fast)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {link.label}
                {link.badge && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      padding: '1px 6px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--emerald-glow)',
                      color: 'var(--emerald-400)',
                      border: '1px solid var(--emerald-border)',
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={PROFILE_DATA.contact.resumeUrl}
            download={PROFILE_DATA.contact.resumeFileName}
            className="btn btn-secondary btn-sm btn-mono"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            title="Download Official CV (PDF)"
          >
            <FileDown size={14} style={{ color: 'var(--emerald-400)' }} />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>Contact</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-default)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(9, 12, 13, 0.98)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: activeSection === link.id ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)',
                border: '1px solid',
                borderColor: activeSection === link.id ? 'var(--emerald-border)' : 'var(--border-subtle)',
                color: activeSection === link.id ? 'var(--emerald-400)' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--emerald-glow)',
                    color: 'var(--emerald-400)',
                  }}
                >
                  {link.badge}
                </span>
              )}
            </a>
          ))}

          <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href={PROFILE_DATA.contact.resumeUrl}
              download={PROFILE_DATA.contact.resumeFileName}
              className="btn btn-secondary"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileDown size={16} style={{ color: 'var(--emerald-400)' }} />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive media query styling */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
