import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiEye, FiCheck } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { featuredProjects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

function ImageWithFallback({ src, alt, emoji, title }) {
  return (
    <div className="project-image-box">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement.classList.add("image-error-fallback");
        }}
      />
      <div className="project-placeholder-overlay">
        <span className="placeholder-emoji">{emoji}</span>
        <strong>{title}</strong>
        <small>AI Architecture • APIs • Full Stack UI</small>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-container">
      {/* Section Header */}
      <div className="section-badge-header">
        <span className="section-pill">
          <span>🚀</span> Featured Creations
        </span>
        <h2 className="section-title">
          Projects That Deliver Real <br />
          <span className="gradient-text-rainbow">Impact & Intelligence</span>
        </h2>
        <p className="section-desc">
          From voice AI university assistants to machine learning hazard detection and accessible vision apps.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-cards-grid">
        {featuredProjects.map((project, idx) => (
          <motion.article
            key={project.id}
            className={`project-card ${idx === 0 ? "project-card-featured" : ""}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            {/* Visual Cover */}
            <div className="project-media-wrapper">
              <ImageWithFallback
                src={project.image}
                alt={`${project.title} screenshot`}
                emoji={project.emoji}
                title={project.title}
              />
              <span className="project-floating-badge">{project.badge}</span>
            </div>

            {/* Content Body */}
            <div className="project-details">
              <div className="project-title-row">
                <span className="project-emoji-icon">{project.emoji}</span>
                <h3 className="project-heading">{project.title}</h3>
              </div>

              <p className="project-short-desc">{project.shortDesc}</p>

              {/* Emoji Tags */}
              <div className="project-emoji-tags">
                {project.emojiTags.map((tag) => (
                  <span key={tag} className="emoji-tag-chip">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="project-mini-highlights">
                {project.highlights.slice(0, 2).map((hl, i) => (
                  <li key={i}>
                    <FiCheck className="highlight-mini-check" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="project-tech-pills">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-pill-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions-footer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn-github"
                  aria-label={`GitHub repo for ${project.title}`}
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                <button
                  type="button"
                  className="project-btn-preview"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Live preview and details for ${project.title}`}
                >
                  <FiEye />
                  <span>Quick View</span>
                </button>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn-demo"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <span>Demo</span>
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal View for Project Details */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
