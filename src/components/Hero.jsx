import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiMail, FiZap } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../assets/Shaluu.jpeg";
import { personalInfo, heroTags } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="hero-container">
      {/* Background Decorative Blobs */}
      <div className="hero-decor-blob blob-purple" />
      <div className="hero-decor-blob blob-pink" />
      <div className="hero-decor-blob blob-cyan" />

      <div className="hero-wrapper">
        {/* Left Column: Introduction & CTAs */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Badge */}
          <div className="status-badge-container">
            <span className="status-dot">
              <span className="status-ping" />
              <span className="status-circle" />
            </span>
            <span className="status-text">{personalInfo.status}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            Hey there! I'm <br />
            <span className="gradient-text-rainbow">{personalInfo.name}</span>{" "}
            <span className="wave-hand">👋</span>
          </h1>

          <h2 className="hero-subheadline">
            {personalInfo.role}
          </h2>

          <p className="hero-bio">
            {personalInfo.bio}
          </p>

          {/* Playful Emoji Pill Badges */}
          <div className="hero-tags-wrapper">
            {heroTags.map((tag, idx) => (
              <motion.div
                key={tag.text}
                className="hero-tag-pill"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx, type: "spring", stiffness: 200 }}
              >
                <span className="tag-emoji">{tag.emoji}</span>
                <span className="tag-text">{tag.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hero-actions-row">
            <motion.a
              href="#projects"
              className="btn-primary-glow"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>🚀 Explore Projects</span>
              <FiArrowUpRight className="btn-icon" />
            </motion.a>

            <motion.a
              href="#contact"
              className="btn-secondary-glow"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>📬 Let's Talk</span>
            </motion.a>

            <motion.a
              href={personalInfo.resumeUrl}
              download
              className="btn-ghost-pill"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Download Resume"
            >
              <FiDownload />
              <span>Resume</span>
            </motion.a>

            <motion.a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-icon-bubble"
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Cartoon-Style Avatar & Floating Stickers */}
        <motion.div
          className="hero-avatar-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="avatar-frame">
            {/* Ambient Animated Gradient Border */}
            <div className="avatar-glow-ring" />

            <div className="avatar-img-box">
              <img
                src={profilePhoto}
                alt={`${personalInfo.name} - ${personalInfo.role}`}
                className="avatar-img"
              />
            </div>

            {/* Floating Glass Bubble 1: MCA Graduate (Top-Left) */}
            <motion.div
              className="glass-bubble bubble-purple bubble-top-left"
              animate={{ y: [0, -9, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              whileHover={{ scale: 1.06, y: -4 }}
            >
              <div className="bubble-icon-orb">🎓</div>
              <div className="bubble-text-group">
                <strong>MCA Graduate</strong>
                <small>Class of 2026</small>
              </div>
            </motion.div>

            {/* Floating Glass Bubble 2: Vibe Coder (Top-Right) */}
            <motion.div
              className="glass-bubble bubble-pink bubble-top-right"
              animate={{ y: [0, 9, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.3 }}
              whileHover={{ scale: 1.06, y: -4 }}
            >
              <div className="bubble-icon-orb">✨</div>
              <div className="bubble-text-group">
                <strong>Vibe Coder</strong>
                <small>Creative & Fast</small>
              </div>
            </motion.div>

            {/* Floating Glass Bubble 3: Open Source Contributor (Bottom-Left) */}
            <motion.div
              className="glass-bubble bubble-cyan bubble-bottom-left"
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 }}
              whileHover={{ scale: 1.06, y: -4 }}
            >
              <div className="bubble-icon-orb">🐙</div>
              <div className="bubble-text-group">
                <strong>Open Source</strong>
                <small>Active Contributor</small>
              </div>
            </motion.div>

            {/* Floating Glass Bubble 4: AI / ML Projects (Bottom-Right) */}
            <motion.div
              className="glass-bubble bubble-indigo bubble-bottom-right"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.2 }}
              whileHover={{ scale: 1.06, y: -4 }}
            >
              <div className="bubble-icon-orb">🤖</div>
              <div className="bubble-text-group">
                <strong>AI / ML Projects</strong>
                <small>Voice & Vision AI</small>
              </div>
            </motion.div>
          </div>

          {/* Attractive Theme-Matching Bubble Tags Bar */}
          <div className="avatar-identity-bar">
            <motion.span
              className="bubble-pill bubble-pill-pink"
              whileHover={{ scale: 1.08, y: -3 }}
            >
              <span className="bubble-pill-emoji">✨</span> Vibe Coder
            </motion.span>
            <motion.span
              className="bubble-pill bubble-pill-cyan"
              whileHover={{ scale: 1.08, y: -3 }}
            >
              <span className="bubble-pill-emoji">🐙</span> Open Source Contributor
            </motion.span>
            <motion.span
              className="bubble-pill bubble-pill-purple"
              whileHover={{ scale: 1.08, y: -3 }}
            >
              <span className="bubble-pill-emoji">🤖</span> AI / ML Projects
            </motion.span>
            <motion.span
              className="bubble-pill bubble-pill-amber"
              whileHover={{ scale: 1.08, y: -3 }}
            >
              <span className="bubble-pill-emoji">⚡</span> Full Stack Explorer
            </motion.span>
            <motion.span
              className="bubble-pill bubble-pill-emerald"
              whileHover={{ scale: 1.08, y: -3 }}
            >
              <span className="bubble-pill-emoji">🎨</span> Modern UI Enthusiast
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
