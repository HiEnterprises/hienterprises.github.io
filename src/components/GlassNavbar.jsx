import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function GlassNavbar({
  brandLogo,
  brandName,
  brandLink = "/",
  showBrandName = true,
  links = [],
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <style>{`
        /* Scoped styles bypassing glass.css and style.css conflicts */
        .card-nav-wrapper {
                  position: fixed; /* Detaches it from the page flow to float */
                  top: 16px;
                  left: 0;
                  width: 100%;
                  z-index: 9999;
                  padding: 0 16px;
                  box-sizing: border-box;
                  pointer-events: none; /* Lets you click the page behind the empty space */
                }

                .card-nav-container {
                  pointer-events: auto; /* Re-enables clicking on the actual navbar */
                  max-width: 1140px;
                  margin: 0 auto;
                  background-color: var(--primaryContainer);
                  border: 0.5px solid var(--outline);
                  border-radius: var(--border-radius-lg, 35px);
                  padding: 12px 24px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  box-shadow: var(--shadow-sm);
                  position: relative;
                }

        .card-nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--primary);
        }

        .card-nav-brand:hover {
          color: var(--primary);
          opacity: 0.85;
        }

        .card-nav-logo {
          height: 36px;
          width: auto;
          border-radius: 6px;
          object-fit: contain;
        }

        .card-nav-title {
          font-weight: 700;
          font-size: 1.25rem;
          font-family: var(--fontPrimary, "Outfit", sans-serif);
          margin: 0;
          line-height: 1;
        }

        .card-nav-desktop-links {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .card-nav-link {
          text-decoration: none;
          color: var(--onPrimaryContainer);
          font-weight: 500;
          font-size: 1rem;
          padding: 8px 16px;
          border-radius: 50rem;
          transition: all 0.2s ease-out;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .card-nav-link:hover {
          background-color: rgba(0, 0, 0, 0.05);
          color: var(--primary);
        }

        :root[data-theme="dark"] .card-nav-link:hover,
        @media (prefers-color-scheme: dark) {
          .card-nav-link:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }

        .card-nav-link.active {
          background-color: var(--primary);
          color: var(--onPrimary) !important;
          font-weight: 600;
        }

        .card-nav-cta {
          background-color: var(--primary);
          color: var(--onPrimary) !important;
          font-weight: 600;
          padding: 8px 24px;
          border-radius: 50rem;
          box-shadow: var(--shadow-xs);
          transition: all 0.2s ease-out;
          margin-left: 8px;
        }

        .card-nav-cta:hover {
          background-color: var(--secondary);
          transform: translateY(-2px);
        }

        .card-nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .card-nav-hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: var(--onPrimaryContainer);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .card-nav-hamburger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .card-nav-hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .card-nav-hamburger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Dropdown Menu */
        .card-nav-mobile-menu {
          display: none;
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          background-color: var(--primaryContainer);
          border: 0.5px solid var(--outline);
          border-radius: var(--border-radius-lg, 35px);
          padding: 16px;
          box-shadow: var(--shadow-md);
          flex-direction: column;
          gap: 8px;
          z-index: 10000;
        }

        .card-nav-mobile-menu.open {
          display: flex;
          animation: fadeInUp 0.3s ease-out forwards;
        }

        @media (max-width: 992px) {
          .card-nav-desktop-links {
            display: none;
          }
          .card-nav-hamburger {
            display: flex;
          }
          .card-nav-container {
            padding: 12px 20px;
          }
          .card-nav-link {
            width: 100%;
            padding: 12px 20px;
          }
          .card-nav-cta {
            text-align: center;
            justify-content: center;
            margin-top: 8px;
            margin-left: 0;
          }
        }
      `}</style>

      <header className="card-nav-wrapper">
        <nav className="card-nav-container" aria-label="Main Navigation">
          <NavLink
            to={brandLink}
            className="card-nav-brand"
            onClick={() => setMenuOpen(false)}
          >
            {brandLogo && (
              <img src={brandLogo} alt="" className="card-nav-logo" />
            )}
            {showBrandName && brandName && (
              <h1 className="card-nav-title">{brandName}</h1>
            )}
          </NavLink>

          <ul className="card-nav-desktop-links">
            {links.map((link, idx) => (
              <li key={link.to ?? idx}>
                {link.isExternal ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card-nav-link ${link.isCta ? "card-nav-cta" : ""}`}
                  >
                    {link.icon && (
                      <span className="material-symbols-rounded">{link.icon}</span>
                    )}
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `card-nav-link ${isActive ? "active" : ""} ${
                        link.isCta ? "card-nav-cta" : ""
                      }`.trim()
                    }
                  >
                    {link.icon && (
                      <span className="material-symbols-rounded">{link.icon}</span>
                    )}
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`card-nav-hamburger ${menuOpen ? "open" : ""}`}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`card-nav-mobile-menu ${menuOpen ? "open" : ""}`}>
            {links.map((link, idx) => (
              <React.Fragment key={link.to ?? idx}>
                {link.isExternal ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card-nav-link ${link.isCta ? "card-nav-cta" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.icon && (
                      <span className="material-symbols-rounded">{link.icon}</span>
                    )}
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `card-nav-link ${isActive ? "active" : ""} ${
                        link.isCta ? "card-nav-cta" : ""
                      }`.trim()
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.icon && (
                      <span className="material-symbols-rounded">{link.icon}</span>
                    )}
                    {link.label}
                  </NavLink>
                )}
              </React.Fragment>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
