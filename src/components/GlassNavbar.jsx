import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function GlassNavbar({ brandLogo, brandName, brandLink = '/', links = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="navbar-brand d-flex align-items-center gap-2 text-on-surface" to={brandLink}>
            {brandLogo && <img src={brandLogo} alt={brandName} height="32" className="rounded" />}
            <span>{brandName}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <div className="nav-pill-container d-flex align-items-center">
              {links.map((link, idx) => {
                if (link.isExternal) {
                  return (
                    <a
                      key={idx}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      {link.label}
                    </a>
                  );
                }
                if (link.isCta) {
                  return (
                    <Link
                      key={idx}
                      to={link.to}
                      className="btn-nav-cta ms-3 text-center"
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <NavLink
                    key={idx}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Custom Morphing Hamburger Button */}
          <button
            className={`mobile-nav-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
        </div>
      </nav>

      {/* Overhauled Mobile Menu Overlay */}
      <div className={`mobile-overlay-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-overlay-links">
          {links.map((link, idx) => {
            if (link.isExternal) {
              return (
                <a
                  key={idx}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-overlay-link"
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <NavLink
                key={idx}
                to={link.to}
                end={link.end}
                className={({ isActive }) => isActive ? "mobile-overlay-link active" : "mobile-overlay-link"}
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                {link.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
