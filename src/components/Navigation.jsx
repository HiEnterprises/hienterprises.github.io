import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", icon: "home", label: "Home" },
  { path: "/blog", icon: "article", label: "Blog" },
  { path: "/webnb", icon: "hotel", label: "weB&B" },
  { path: "/hicafe", icon: "restaurant", label: "HiCafe" },
  { path: "/brands", icon: "category", label: "Brands" },
];

export function TopNav() {
  return (
    <nav className="unified-top-nav">
      <ul>
        {navItems.map((item) => (
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
