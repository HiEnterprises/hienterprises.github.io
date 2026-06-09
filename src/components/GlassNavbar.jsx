import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

/**
 * GlassNavbar - Reusable floating navigation bar component
 * 
 * This component renders a floating glassmorphic navbar with:
 * - Brand logo and name
 * - Desktop navigation links
 * - Mobile hamburger menu with overlay
 * - Active link highlighting
 * 
 * PROPS:
 * @param {string} brandLogo - URL to logo image (shown next to brand name)
 * @param {string} brandName - Brand name to display (e.g., "HiCafe™")
 * @param {string} brandLink - Route to navigate when logo is clicked (default: "/")
 * @param {Array} links - Navigation links array. Each link object can have:
 *   {
 *     to: string,              // Route path (e.g., "/hicafe/menu")
 *     label: string,           // Link text (e.g., "Menu")
 *     end?: boolean,           // Match route exactly (for home links)
 *     isExternal?: boolean,    // Opens in new tab (external link)
 *     isCta?: boolean         // Highlighted button style (Call-to-action)
 *   }
 * 
 * EXAMPLE USAGE:
 * const links = [
 *   { to: '/hicafe', label: 'HOME', end: true },
 *   { to: '/hicafe/menu', label: 'Menu' },
 *   { to: '/hicafe/reviews', label: 'Reviews' },
 *   { to: 'https://external.com', label: 'External', isExternal: true },
 *   { to: '/harmony', label: 'Mobile App', isCta: true }
 * ];
 * 
 * <GlassNavbar
 *   brandLogo="/assets/pics/hicafe/logo.png"
 *   brandName="The Highland Cafe™"
 *   brandLink="/hicafe"
 *   links={links}
 * />
 */

export default function GlassNavbar({ brandLogo, brandName, brandLink = '/', links = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes (user navigates to a new page)
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Disable body scroll when mobile menu is open
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
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Link className="navbar-brand" to={brandLink}>
            {brandLogo && <img src={brandLogo} alt={brandName} style={{ height: '32px', borderRadius: '4px' }} />}
            <span style={{ marginLeft: '8px', fontSize: '1rem', fontWeight: '600' }}>{brandName}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <div className="nav-pill-container">
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
                      className="btn-nav-cta"
                      style={{ marginLeft: '12px' }}
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
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
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
