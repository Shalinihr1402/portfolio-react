import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/internships", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="brand" aria-label="Shalini H R portfolio">
          <span className="brand-mark">SH</span>
          <span className="brand-copy">
            <strong>Shalini H R</strong>
            <small>Developer Portfolio</small>
          </span>
        </NavLink>

        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <NavLink to="/contact" className="nav-cta">
          Let&apos;s talk
        </NavLink>
      </nav>
    </header>
  );
}
