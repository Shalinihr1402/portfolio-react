import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="project-modal-container"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header">
            <div className="modal-title-group">
              <span className="modal-emoji">{project.emoji}</span>
              <div>
                <span className="modal-badge">{project.badge}</span>
                <h3>{project.title}</h3>
              </div>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <FiX />
            </button>
          </div>

          {/* Modal Body */}
          <div className="modal-body-content">
            {/* Project Image Preview */}
            <div className="modal-image-preview">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("modal-fallback");
                }}
              />
              <div className="modal-image-placeholder">
                <span>{project.emoji}</span>
                <strong>{project.title}</strong>
              </div>
            </div>

            {/* Description */}
            <p className="modal-long-desc">{project.fullDesc}</p>

            {/* Quick Metrics / Stats */}
            {project.stats && (
              <div className="modal-stats-row">
                {Object.entries(project.stats).map(([k, val]) => (
                  <div key={k} className="modal-stat-pill">
                    <small>{k.replace(/([A-Z])/g, " $1")}</small>
                    <strong>{val}</strong>
                  </div>
                ))}
              </div>
            )}

            {/* Key Highlights */}
            <div className="modal-highlights-box">
              <h4>✨ Key Features & Architecture</h4>
              <ul>
                {project.highlights.map((item, idx) => (
                  <li key={idx}>
                    <FiCheckCircle className="highlight-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div className="modal-tech-box">
              <h4>🛠️ Technologies Used</h4>
              <div className="modal-tech-badges">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge-item">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="modal-footer-actions">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="modal-btn-github"
            >
              <FaGithub /> View Source on GitHub
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="modal-btn-demo"
            >
              <FiExternalLink /> Live Preview / Repo
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
