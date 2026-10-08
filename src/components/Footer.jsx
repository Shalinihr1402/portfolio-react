import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { FiArrowUp, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content-wrap">
        {/* Brand Column */}
        <div className="footer-brand-side">
          <div className="footer-logo-lockup">
            <span className="footer-avatar-chip">SH</span>
            <div>
              <strong>Shalini H R</strong>
              <small>Full Stack Developer & AI Enthusiast</small>
            </div>
          </div>
          <p className="footer-brand-bio">
            Crafting creative, high-impact web software and intelligent AI solutions with love and clean code.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="footer-links-group">
          <div className="footer-col">
            <h5>Navigation</h5>
            <a href="#about">About Me</a>
            <a href="#skills">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#github">GitHub</a>
          </div>

          <div className="footer-col">
            <h5>Connect</h5>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
            <a href={personalInfo.resumeUrl} download>
              Resume PDF
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <div className="footer-top-col">
          <motion.button
            type="button"
            className="btn-scroll-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll back to top"
          >
            <FiArrowUp />
            <span>Top 🚀</span>
          </motion.button>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>
          Designed & Built with <span className="heart-icon">💖</span>, ☕, and React by{" "}
          <strong>Shalini H R</strong> © {new Date().getFullYear()}
        </p>
        <div className="footer-social-icons">
          <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
