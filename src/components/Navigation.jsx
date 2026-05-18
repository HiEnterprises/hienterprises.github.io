import { NavLink } from "react-router-dom";

export function TopNav({ logoSrc, altText, navItems, homePath = "/" }) {
  return (
    <nav className="unified-top-nav">
      <ul>
        {/* Logo treated as the first integrated nav button */}
        <li className="nav-brand-item">
          <NavLink
            to={homePath}
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            <img src={logoSrc} alt={altText} className="nav-brand-img" />
          </NavLink>
        </li>

        {/* Dynamic Nav Items */}
        {navItems &&
          navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <span className="material-symbols-rounded">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
