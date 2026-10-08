import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiMail, FiSend, FiCheck, FiCopy } from "react-icons/fi";
import { contactLinks, personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="contact" className="section-container">
      {/* Section Header */}
      <div className="section-badge-header">
        <span className="section-pill">
          <span>📬</span> Get In Touch
        </span>
        <h2 className="section-title">
          Let's Build Something <br />
          <span className="gradient-text-rainbow">Amazing Together!</span>
        </h2>
        <p className="section-desc">
          Interested in full stack development, AI projects, or looking for a talented and enthusiastic developer? Let's chat!
        </p>
      </div>

      <div className="contact-main-grid">
        {/* Left Column: Direct Contact Cards */}
        <div className="contact-methods-column">
          <div className="contact-intro-bubble">
            <span className="bubble-emoji">💬</span>
            <div>
              <h3>Open for Opportunities!</h3>
              <p>
                Currently exploring Full Stack Developer, Backend Engineer, and Frontend UI roles.
              </p>
            </div>
          </div>

          <div className="contact-cards-stack">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const isCopied = copiedKey === item.label;

              return (
                <motion.div
                  key={item.label}
                  className="contact-touch-card"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="touch-card-icon">
                    <Icon />
                  </div>

                  <div className="touch-card-info">
                    <span className="touch-badge">{item.badge}</span>
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                  </div>

                  <div className="touch-actions">
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="touch-open-btn"
                      aria-label={item.action}
                    >
                      {item.emoji}
                    </a>
                    {item.label === "Email Me" || item.label === "Direct Phone" ? (
                      <button
                        type="button"
                        className="touch-copy-btn"
                        onClick={() => handleCopy(item.value, item.label)}
                        aria-label={`Copy ${item.label}`}
                        title="Copy to clipboard"
                      >
                        {isCopied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                      </button>
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Resume Download Card */}
          <div className="resume-download-card">
            <div>
              <strong>Looking for my complete resume?</strong>
              <p>Get a detailed overview of my coursework, skills, and projects.</p>
            </div>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-download-resume"
              aria-label="Download Resume PDF"
            >
              <FiDownload />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Friendly Message Box */}
        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-header-bar">
            <span className="form-emoji-tag">💌 Send a Quick Note</span>
            <h3>Drop a Message</h3>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="form-success-celebration"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <div className="celebration-emoji">🎉✨</div>
                <h4>Thank you so much!</h4>
                <p>
                  Your message has been captured. I'm excited to connect and will get back to you shortly!
                </p>
                <button
                  type="button"
                  className="btn-reset-form"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message 🚀
                </button>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit} className="playful-contact-form">
                <div className="form-field-group">
                  <label htmlFor="contact-name">
                    <span>👤 Your Name</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-email">
                    <span>📧 Your Email</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-message">
                    <span>💬 Message</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Hi Shalini, I'd love to discuss an exciting opportunity or project with you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-submit-message"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message 🚀</span>
                  <FiSend />
                </motion.button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
