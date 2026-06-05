import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPhoneAlt,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiPhp,
  SiSpringboot,
} from "react-icons/si";
import {
  FiArrowUpRight,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiMail,
  FiServer,
  FiZap,
} from "react-icons/fi";
import profilePhoto from "./assets/Shaluu.jpeg";
import "./App.css";

const navItems = ["About", "Projects", "Skills", "Experience", "Certifications", "GitHub", "Contact"];

const projects = [
  {
    title: "GMU VoiceBot Assistant",
    type: "Featured AI + Backend Project",
    image: "/projects/voicebot.jpg",
    description:
      "Multilingual AI-powered university assistant supporting ERP workflows, voice navigation, student services, and intelligent query handling.",
    tech: ["React.js", "PHP", "MySQL", "REST APIs", "OpenAI", "Deepgram", "Vapi"],
    highlights: [
      "Multilingual Voice Support",
      "ERP Integration",
      "Student Services",
      "OpenAI + Deepgram",
      "Role-Based Workflows",
    ],
  },
  {
    title: "AI Rockfall Prediction",
    type: "Machine Learning System",
    image: "/projects/rockfall.jpg",
    description:
      "Machine learning system for predicting geological rockfall risks using structured datasets and predictive analytics.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    highlights: ["Machine Learning", "Risk Prediction", "Data Analysis", "Predictive Analytics"],
  },
  {
    title: "Voice & Vision Assistant",
    type: "AI Accessibility App",
    image: "/projects/visually-impaired.jpeg",
    description:
      "AI-powered accessibility assistant that combines voice interaction, scene understanding, and real-time assistance for visually impaired users.",
    tech: ["React", "OpenAI", "GPT-4o", "Vision Models"],
    highlights: ["Vision AI", "Voice Interface", "Accessibility", "Real-Time Assistance"],
  },
];

const skills = [
  {
    title: "Backend Engineering",
    icon: FiServer,
    items: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: FaPython },
      { name: "Node.js", icon: FaNodeJs },
      { name: "REST APIs", icon: FiServer },
    ],
  },
  {
    title: "Frontend Development",
    icon: FaReact,
    items: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FiCode },
      { name: "CSS3", icon: FiCode },
      { name: "Responsive UI", icon: FiCode },
    ],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "CRUD", icon: FaDatabase },
      { name: "Schema Design", icon: FaDatabase },
    ],
  },
  {
    title: "AI Applications",
    icon: FiZap,
    items: [
      { name: "OpenAI", icon: SiOpenai },
      { name: "RAG", icon: FiZap },
      { name: "Deepgram", icon: FiZap },
      { name: "Vapi", icon: FiZap },
      { name: "AI APIs", icon: FiZap },
    ],
  },
];

const achievements = [
  {
    year: "Current",
    title: "Full Stack Development Projects",
    detail: "Built AI, API, database, and React project case studies with backend-focused engineering presentation.",
  },
  {
    year: "2025",
    title: "Smart India Hackathon Participation and Team Leadership",
    detail: "Presented team solution ideas with problem framing, system flow, and implementation thinking.",
  },
  {
    year: "2024",
    title: "Full Stack Web Development certification",
    detail: "Completed training across frontend, backend, databases, and project implementation.",
  },
  {
    year: "2022",
    title: "Technical Presentations and Problem Solving Practice",
    detail: "Presented cloud computing concepts and strengthened communication, logic building, and coding discipline.",
  },
];

const certificates = [
  {
    title: "Cloud Computing",
    organization: "Bapuji Institute of Hi-Tech Education",
    year: "2022",
    image: "/certificates/certificate-2.jpeg",
  },
  {
    title: "Full Stack Web Development",
    organization: "Tap Academy",
    year: "2024",
    image: "/certificates/certificate-1.jpeg",
  },
  {
    title: "Problem Solving / Coding Practice",
    organization: "Academic and coding practice",
    year: "2024",
    image: "/presentation/sih-team-presentation.jpeg",
  },
];

const quickStack = [
  { icon: FaJava, label: "Java" },
  { icon: SiSpringboot, label: "Spring Boot" },
  { icon: SiPhp, label: "PHP" },
  { icon: FaPython, label: "Python" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiOpenai, label: "OpenAI" },
  { icon: FaReact, label: "React" },
  { icon: SiGit, label: "Git" },
];

const contactLinks = [
  { label: "Email", value: "shalinidvg16@gmail.com", href: "mailto:shalinidvg16@gmail.com", icon: FiMail },
  { label: "GitHub", value: "github.com/Shalinihr1402", href: "https://github.com/Shalinihr1402", icon: FaGithub },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shalini-h-r-90862a251",
    href: "https://www.linkedin.com/in/shalini-h-r-90862a251?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: FaLinkedin,
  },
  { label: "Phone", value: "7411156526", href: "tel:7411156526", icon: FaPhoneAlt },
];

const githubMetrics = ["AI Projects", "Full Stack Applications", "Continuous Learning"];

const professionalHighlights = [
  "MCA Graduate",
  "3 Major Projects",
  "AI Applications",
  "REST API Development",
  "Database Systems",
  "Full Stack Development",
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={reveal}
      transition={{ duration: 0.45 }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function ImageWithFallback({ src, alt, fallbackTitle = "Project dashboard mockup" }) {
  return (
    <div className="image-slot">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          event.currentTarget.parentElement.classList.add("image-missing");
        }}
      />
      <div className="image-placeholder">
        <div className="mock-window">
          <i />
          <i />
          <i />
        </div>
        <strong>{fallbackTitle}</strong>
        <small>Architecture | APIs | Data | AI workflow</small>
      </div>
    </div>
  );
}

function App() {
  const [previewCertificate, setPreviewCertificate] = useState(null);

  return (
    <div className="portfolio-shell">
      <div className="noise-layer" />
      <header className="top-nav">
        <a href="#home" className="brand-lockup" aria-label="Shalini H R home">
          <span>SH</span>
          <strong>Shalini H R</strong>
        </a>
        <nav>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section clean-hero">
          <motion.div
            className="hero-grid"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="hero-copy">
              <div className="hero-badges">
                <span>MCA Graduate</span>
                <span>Full Stack Developer</span>
                <span>Backend Engineering</span>
                <span>AI Applications</span>
              </div>
              <h1>Building AI Applications, Backend Systems, and Modern Software.</h1>
              <p>
                MCA Graduate focused on backend engineering, REST APIs,
                databases, AI integrations, and scalable full stack applications.
              </p>
              <p className="seeking-line">
                Seeking Full Stack Developer, Backend Developer, and Software Engineer opportunities.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="primary-button">
                  View projects <FiArrowUpRight />
                </a>
                <a href="/Shalini-H-R-Resume.pdf" download className="secondary-button">
                  Download resume <FiDownload />
                </a>
              </div>
            </div>

            <aside className="profile-panel">
              <img src={profilePhoto} alt="Shalini H R" />
              <div>
                <span>Developer identity</span>
                <h2>Software Engineer / Full Stack Developer</h2>
                <p>APIs | Databases | AI systems | React product UI</p>
                <div className="profile-badges">
                  <em>MCA Graduate</em>
                  <em>Full Stack Developer</em>
                  <em>Backend Engineer</em>
                  <em>AI Application Builder</em>
                </div>
              </div>
            </aside>
          </motion.div>

          <div className="quick-stack" aria-label="Primary technologies">
            {quickStack.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label}>
                  <Icon /> {item.label}
                </span>
              );
            })}
          </div>
        </section>

        <section id="about" className="content-section about-section">
          <SectionHeader
            eyebrow="About"
            title="I build practical software that connects APIs, databases, AI, and product interfaces."
            text="I enjoy building backend systems, AI-powered applications, and practical full stack solutions that solve real-world problems. My work combines APIs, databases, automation, and modern web technologies to create scalable and user-focused software."
          />
        </section>

        <section id="projects" className="content-section project-focus-section">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Project-first portfolio with clear engineering impact."
            text="The first 10 seconds should show what I build, how I think, and which technologies I can work with."
          />

          <div className="project-showcase">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className={index === 0 ? "project-card hero-project-card" : "project-card"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-90px" }}
                variants={reveal}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fallbackTitle={project.title}
                />
                <div className="project-body">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="highlight-list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="tech-row">
                    {project.tech.map((item) => (
                      <em key={item}>{item}</em>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href="https://github.com/Shalinihr1402" target="_blank" rel="noreferrer">
                      <FaGithub /> GitHub
                    </a>
                    <a href="#contact">
                      <FiExternalLink /> Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <SectionHeader eyebrow="Skills" title="Core skills grouped by engineering responsibility." />
          <div className="skills-grid-clean">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  className="skill-panel"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={reveal}
                  transition={{ delay: index * 0.04 }}
                >
                  <div className="skill-icon">
                    <Icon />
                  </div>
                  <h3>{group.title}</h3>
                  <div>
                    {group.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <span key={item.name}>
                          <ItemIcon /> {item.name}
                        </span>
                      );
                    })}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="content-section">
          <SectionHeader
            eyebrow="Experience & Achievements"
            title="One concise timeline for participation, certifications, and project growth."
          />
          <div className="achievement-timeline">
            {achievements.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{ delay: index * 0.04 }}
              >
                <span>{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="certifications" className="content-section">
          <SectionHeader
            eyebrow="Certifications"
            title="Certifications and proof of continuous learning."
            text="Certificate previews with quick access for recruiters who want evidence of training and participation."
          />
          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <motion.button
                type="button"
                key={certificate.title}
                className="certificate-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{ delay: index * 0.04 }}
                onClick={() => setPreviewCertificate(certificate)}
              >
                <ImageWithFallback
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fallbackTitle={certificate.title}
                />
                <div>
                  <span>{certificate.organization}</span>
                  <strong>{certificate.title}</strong>
                  <small>{certificate.year}</small>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="github" className="content-section">
          <SectionHeader
            eyebrow="GitHub Activity & Project Development"
            title="Projects, AI applications, experiments, and continuous learning."
            text="Code repositories, AI projects, backend systems, and continuous development."
          />
          <div className="github-compact">
            <div>
              <FaGithub />
              <h3>Shalinihr1402</h3>
              <p>Backend, AI integration, and full stack project builds.</p>
              <div className="github-metrics">
                {githubMetrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
              <a href="https://github.com/Shalinihr1402" target="_blank" rel="noreferrer">
                Open GitHub <FiArrowUpRight />
              </a>
            </div>
            <div className="contribution-map" aria-label="GitHub contribution style graphic">
              {Array.from({ length: 84 }).map((_, index) => (
                <span key={index} className={`heat heat-${index % 5}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="content-section highlights-section">
          <SectionHeader
            eyebrow="Professional Highlights"
            title="A quick snapshot of my developer profile."
          />
          <div className="professional-highlights">
            {professionalHighlights.map((highlight) => (
              <article key={highlight}>{highlight}</article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <SectionHeader
            eyebrow="Contact"
            title="Let's Build Something Impactful."
            text="Interested in Full Stack Development, Backend Engineering, AI Applications, and Software Engineering opportunities."
          />
          <div className="contact-actions">
            <a href="/Shalini-H-R-Resume.pdf" download className="primary-button">
              Download Resume <FiDownload />
            </a>
          </div>
          <div className="contact-grid">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="contact-card"
                >
                  <Icon />
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="footer-shell">
        <p>Shalini H R. Software Engineer / Full Stack Developer.</p>
        <div>
          <a href="https://github.com/Shalinihr1402" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shalini-h-r-90862a251?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="#home" className="scroll-top">Top</a>
        </div>
      </footer>

      {previewCertificate && (
        <div className="modal-backdrop" onClick={() => setPreviewCertificate(null)}>
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" onClick={() => setPreviewCertificate(null)}>Close</button>
            <img src={previewCertificate.image} alt={`${previewCertificate.title} certificate preview`} />
            <div>
              <span>{previewCertificate.organization}</span>
              <strong>{previewCertificate.title}</strong>
              <small>{previewCertificate.year}</small>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default App;

