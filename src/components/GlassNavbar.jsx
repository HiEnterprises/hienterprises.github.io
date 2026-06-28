import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * GlassNavbar - Unified floating navigation bar component
 * * PROPS:
 * @param {string} brandLogo - URL to logo image
 * @param {string} brandName - Brand name fallback/alt text
 * @param {string} brandLink - Route to navigate when logo is clicked (default: "/")
 * @param {Array} links - Navigation links array. Link objects can have:
 * {
 * to: string,          // Route path
 * label: string,       // Link text
 * icon?: string,       // Material Symbols icon name (optional)
 * end?: boolean,       // Match route exactly
 * isExternal?: boolean,// Opens in new tab
 * isCta?: boolean      // Highlighted call-to-action styling
 * }
 */
export default function GlassNavbar({ brandLogo, brandName, brandLink = '/', links = [] }) {
  return (
    <nav className="unified-top-nav">
      <ul>
        {/* Brand Logo / Home */}
        <li className="nav-brand-item">
          <NavLink
            to={brandLink}
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            {brandLogo ? (
              <img src={brandLogo} alt={brandName} className="nav-brand-img" />
            ) : (
              <span className="nav-label brand-text-fallback">{brandName}</span>
            )}
          </NavLink>
        </li>

        {/* Dynamic Navigation Links */}
        {links.map((link, idx) => {
          if (link.isExternal) {
            return (
              <li key={idx}>
                <a 
                  href={link.to} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={link.isCta ? "nav-cta" : ""}
                >
                  {link.icon && <span className="material-symbols-rounded">{link.icon}</span>}
                  <span className="nav-label">{link.label}</span>
                </a>
              </li>
            );
          }

          return (
            <li key={idx}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => 
                  `${isActive ? "active" : ""} ${link.isCta ? "nav-cta" : ""}`.trim()
                }
              >
                {link.icon && <span className="material-symbols-rounded">{link.icon}</span>}
                <span className="nav-label">{link.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}