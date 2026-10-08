import { motion } from "framer-motion";
import { FiCheckCircle, FiCompass, FiHeart, FiSmile } from "react-icons/fi";
import { developerDna, personalInfo } from "../data/portfolioData";

export default function About() {
  const quickFacts = [
    { emoji: "🎓", label: "Education", value: "MCA (Master of Computer Applications)" },
    { emoji: "📍", label: "Location", value: "Karnataka, India (Available for Remote & Onsite)" },
    { emoji: "💡", label: "Passion", value: "Interactive Web Apps & AI Voice Agents" },
    { emoji: "☕", label: "Fuel", value: "Curiosity, Clean Code & Continuous Learning" },
  ];

  return (
    <section id="about" className="section-container">
      {/* Section Header */}
      <div className="section-badge-header">
        <span className="section-pill">
          <span>👋</span> Get to Know Me
        </span>
        <h2 className="section-title">
          Blending Creative Frontend with <br />
          <span className="gradient-text-rainbow">Intelligent Backend & AI</span>
        </h2>
        <p className="section-desc">
          I'm a full-stack developer who loves designing interfaces that make people smile and writing backend systems that just work.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: Personal Narrative */}
        <motion.div
          className="about-story-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="story-card-top">
            <span className="story-sticker">✨ My Story</span>
            <h3>Building with Purpose & Joy</h3>
          </div>

          <p>
            Hello! I'm <strong>Shalini H R</strong>, an MCA graduate with a deep passion for modern web technologies, AI-powered applications, and reliable backend engineering.
          </p>

          <p>
            My journey began with curiosity about how complex digital systems communicate behind the scenes. That curiosity evolved into developing enterprise-grade systems like the <strong>GMU VoiceBot Assistant</strong>, predictive ML models, and accessible vision companions.
          </p>

          <p>
            Whether it's building interactive user interfaces with <strong>React and Framer Motion</strong>, designing relational databases with <strong>MySQL</strong>, or hooking up modern AI APIs from <strong>OpenAI and Deepgram</strong>, I love crafting software that feels effortless, intuitive, and delightful to use.
          </p>

          {/* Quick Facts List */}
          <div className="quick-facts-grid">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="quick-fact-item">
                <span className="fact-emoji">{fact.emoji}</span>
                <div>
                  <small>{fact.label}</small>
                  <strong>{fact.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Developer DNA Cards */}
        <div className="developer-dna-grid">
          {developerDna.map((item, idx) => (
            <motion.div
              key={item.title}
              className={`dna-card ${item.accent}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="dna-icon-bubble">
                <span>{item.emoji}</span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
