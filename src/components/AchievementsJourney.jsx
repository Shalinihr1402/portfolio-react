import { useState } from "react";
import { motion } from "framer-motion";
import { FiAward, FiEye, FiCheckCircle, FiCalendar } from "react-icons/fi";
import { achievementCards, journeyMilestones } from "../data/portfolioData";
import CertificateModal from "./CertificateModal";

export default function AchievementsJourney() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="journey" className="section-container">
      {/* Section Header */}
      <div className="section-badge-header">
        <span className="section-pill">
          <span>🏆</span> Milestones & Credentials
        </span>
        <h2 className="section-title">
          My Journey & <br />
          <span className="gradient-text-rainbow">Key Achievements</span>
        </h2>
        <p className="section-desc">
          Academic excellence, national hackathons, and certified mastery across full-stack engineering domains.
        </p>
      </div>

      {/* Achievement / Certificate Cards */}
      <div className="achievements-cards-grid">
        {achievementCards.map((item, idx) => (
          <motion.div
            key={item.title}
            className="achievement-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
            whileHover={{ y: -6 }}
          >
            <div className="achievement-card-top">
              <div className="achievement-emoji-badge">
                <span>{item.emoji}</span>
              </div>
              <span className="achievement-year-pill">{item.year}</span>
            </div>

            <div className="achievement-body">
              <span className="achievement-org-tag">{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

            <div className="achievement-tags-row">
              {item.tags.map((t) => (
                <span key={t} className="achievement-pill">
                  {t}
                </span>
              ))}
            </div>

            {item.image && (
              <button
                type="button"
                className="btn-view-credential"
                onClick={() => setSelectedCert(item)}
              >
                <FiEye />
                <span>View Credential</span>
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Interactive Timeline of Journey */}
      <div className="journey-timeline-section">
        <div className="timeline-title-row">
          <span className="timeline-emoji">🚀</span>
          <h3>Milestone Timeline</h3>
        </div>

        <div className="timeline-tree">
          {journeyMilestones.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              className="timeline-node"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.4 }}
            >
              <div className="node-marker">
                <span className="node-emoji">{milestone.emoji}</span>
              </div>
              <div className="node-card">
                <div className="node-card-header">
                  <span className="node-year">{milestone.year}</span>
                  <span className="node-org">{milestone.org}</span>
                </div>
                <h4>{milestone.role}</h4>
                <p>{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
