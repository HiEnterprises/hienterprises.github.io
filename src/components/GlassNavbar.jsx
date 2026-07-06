import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function GlassNavbar({
  brandLogo,
  brandName,
  brandLink = "/",
  links = [],
}) {
  const navListRef = useRef(null);

  const scrollNav = (direction) => {
    navListRef.current?.scrollBy({
      left: direction * 180,
      behavior: "smooth",
    });
  };

  return (
    <nav className="unified-top-nav">
      <ul ref={navListRef}>
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

        {links.map((link, idx) =>
          link.isExternal ? (
            <li key={idx}>
              <a
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className={link.isCta ? "nav-cta" : ""}
              >
                {link.icon && (
                  <span className="material-symbols-rounded">{link.icon}</span>
                )}
                <span className="nav-label">{link.label}</span>
              </a>
            </li>
          ) : (
            <li key={idx}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `${isActive ? "active" : ""} ${link.isCta ? "nav-cta" : ""}`.trim()
                }
              >
                {link.icon && (
                  <span className="material-symbols-rounded">{link.icon}</span>
                )}
                <span className="nav-label">{link.label}</span>
              </NavLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
