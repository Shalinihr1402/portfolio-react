import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { name: "About", href: "#about", emoji: "👋" },
  { name: "Skills", href: "#skills", emoji: "🛠️" },
  { name: "Projects", href: "#projects", emoji: "🚀" },
  { name: "GitHub", href: "#github", emoji: "🐙" },
  { name: "Journey", href: "#journey", emoji: "✨" },
  { name: "Contact", href: "#contact", emoji: "📬" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" aria-label="Shalini H R Homepage">
          <motion.div
            className="brand-avatar-badge"
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span>SH</span>
          </motion.div>
          <div className="brand-text">
            <strong>Shalini H R</strong>
            <span className="brand-sub">Full Stack Dev ✨</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              <span className="nav-emoji">{link.emoji}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-icon-btn"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="nav-cta-resume"
            aria-label="Download Resume"
          >
            <FiDownload />
            <span>CV</span>
          </a>
          <a href="#contact" className="nav-cta-btn">
            <span>Say Hi! 💬</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-xl">{link.emoji}</span>
                  <span>{link.name}</span>
                </a>
              ))}
              <div className="mobile-cta-group">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="mobile-resume-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiDownload /> Download Resume
                </a>
                <a
                  href="#contact"
                  className="mobile-contact-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Connect 🚀
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
