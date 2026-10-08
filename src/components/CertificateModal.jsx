import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiAward, FiCalendar } from "react-icons/fi";

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="certificate-modal-wrapper"
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="modal-header">
            <div className="modal-title-group">
              <span className="modal-emoji">📜</span>
              <div>
                <span className="modal-badge">{certificate.badge || "Verified Credential"}</span>
                <h3>{certificate.title}</h3>
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

          {/* Certificate Media View */}
          <div className="certificate-modal-img-box">
            <img
              src={certificate.image}
              alt={`${certificate.title} document`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.classList.add("cert-fallback");
              }}
            />
            <div className="cert-placeholder">
              <FiAward className="cert-placeholder-icon" />
              <strong>{certificate.title}</strong>
              <p>{certificate.badge} • {certificate.year}</p>
            </div>
          </div>

          {/* Meta Information */}
          <div className="certificate-modal-meta">
            <div>
              <small>Issuing Institution</small>
              <strong>{certificate.badge}</strong>
            </div>
            <div>
              <small>Year</small>
              <strong>{certificate.year}</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
