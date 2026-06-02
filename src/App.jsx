import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import {
  SiDeepgram,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiPhp,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import {
  FiArrowUpRight,
  FiCode,
  FiExternalLink,
  FiMail,
  FiServer,
  FiZap,
} from "react-icons/fi";
import "./App.css";

const navItems = ["Projects", "Skills", "Experience", "GitHub", "Contact"];

const badges = ["Full Stack Developer", "AI Projects", "Open to Opportunities"];

const floatingTech = [
  { icon: FaReact, label: "React", className: "left-[8%] top-[18%]" },
  { icon: SiPhp, label: "PHP", className: "right-[12%] top-[22%]" },
  { icon: SiOpenai, label: "OpenAI", className: "left-[16%] bottom-[24%]" },
  { icon: FaDatabase, label: "SQL", className: "right-[18%] bottom-[20%]" },
];

const stats = [
  { value: "3+", label: "AI and full stack projects" },
  { value: "5", label: "Backend/API technologies" },
  { value: "SIH", label: "Team presentation experience" },
  { value: "MCA", label: "Computer applications" },
];

const projects = [
  {
    title: "GMU VoiceBot Assistant",
    label: "Featured AI system",
    description:
      "Multilingual AI voice assistant for university ERP workflows with voice interaction, backend APIs, and multilingual support.",
    tech: ["React", "PHP", "MySQL", "OpenAI", "Vapi", "Deepgram"],
    accent: "from-indigo-500 to-cyan-400",
    image: "/presentation/gmu-voice-assistant-team.jpg",
  },
  {
    title: "AI Rockfall Prediction",
    label: "Machine learning",
    description:
      "Predictive analytics project for geological rockfall risk using structured mining datasets and ML models.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    accent: "from-amber-400 to-rose-400",
    image: "",
  },
  {
    title: "Voice & Vision Assistant",
    label: "Accessibility AI",
    description:
      "AI accessibility assistant concept with voice interaction, scene understanding, and real-time support for visually impaired users.",
    tech: ["React", "OpenAI", "GPT-4o", "Llama Vision"],
    accent: "from-violet-500 to-fuchsia-400",
    image: "",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: FaReact,
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: FiServer,
    items: ["PHP", "Node.js", "REST APIs", "API Integration", "Auth Basics"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    items: ["MySQL", "MongoDB", "Schema Design", "CRUD", "Data Modeling"],
  },
  {
    title: "AI & APIs",
    icon: FiZap,
    items: ["OpenAI", "Deepgram", "Vapi", "ElevenLabs", "Vision AI"],
  },
  {
    title: "Tools",
    icon: FiCode,
    items: ["GitHub", "VS Code", "Vite", "npm", "Deployment"],
  },
];

const experience = [
  "Smart India Hackathon participation",
  "Technical project presentations",
  "Backend and API development",
  "Team leadership",
  "Problem solving practice",
  "Certifications",
];

const repoCards = [
  {
    name: "GMU VoiceBot Assistant",
    type: "AI + Backend",
    stack: "React, PHP, MySQL, OpenAI",
  },
  {
    name: "Rockfall Prediction",
    type: "ML Analytics",
    stack: "Python, Pandas, Scikit-learn",
  },
  {
    name: "Portfolio UI",
    type: "Frontend",
    stack: "Vite, Tailwind, Framer Motion",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "shalinidvg16@gmail.com",
    href: "mailto:shalinidvg16@gmail.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    value: "github.com/shalini1402",
    href: "https://github.com/shalini1402",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Add LinkedIn profile",
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    label: "Phone",
    value: "7411156526",
    href: "tel:7411156526",
    icon: FaPhoneAlt,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={reveal}
      transition={{ duration: 0.55 }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className="project-visual">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} presentation`}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : null}
      <div className={`visual-gradient bg-gradient-to-br ${project.accent}`}>
        <div>
          <span>{project.label}</span>
          <strong>{project.title}</strong>
        </div>
      </div>
    </div>
  );
}

function App() {
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
        <a href="#contact" className="nav-action">
          Hire me
        </a>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          {floatingTech.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.label}
                className={`floating-tech ${tech.className}`}
                animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon />
                <span>{tech.label}</span>
              </motion.div>
            );
          })}

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="hero-badges">
              {badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <h1>
              Full Stack Developer building scalable, AI-powered, and
              user-focused applications.
            </h1>
            <p>
              MCA student focused on backend systems, APIs, AI integrations,
              databases, and responsive modern web applications.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                View projects <FiArrowUpRight />
              </a>
              <a href="#contact" className="secondary-button">
                Contact me
              </a>
            </div>
          </motion.div>

          <motion.div
            className="stats-grid"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {stats.map((stat) => (
              <motion.article key={stat.label} variants={reveal}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="projects" className="content-section">
          <SectionHeader
            eyebrow="Featured projects"
            title="AI products, backend systems, and practical full stack builds."
            text="Concise, visual, and focused on what recruiters need to see first."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className={index === 0 ? "project-card project-featured" : "project-card"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={reveal}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <ProjectVisual project={project} />
                <div className="project-body">
                  <span>{project.label}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-row">
                    {project.tech.map((item) => (
                      <em key={item}>{item}</em>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href="https://github.com/shalini1402" target="_blank" rel="noreferrer">
                      <FaGithub /> GitHub
                    </a>
                    <a href="#contact">
                      <FiExternalLink /> Live demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <SectionHeader
            eyebrow="Skill system"
            title="Balanced frontend, backend, database, and AI capability."
          />
          <div className="skills-bento">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  className="skill-panel"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={reveal}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="skill-icon">
                    <Icon />
                  </div>
                  <h3>{group.title}</h3>
                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="content-section split-section">
          <SectionHeader
            eyebrow="Experience"
            title="Leadership proof without inflated claims."
            text="Academic work, SIH participation, technical presentations, and team ownership."
          />
          <div className="experience-layout">
            <motion.div
              className="experience-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <span>Team leader</span>
              <h3>GMU Intelligent Role-Based Voice Assistant System</h3>
              <p>
                Led a team presentation around an AI voice assistant for
                university workflows, role-based access, and backend integration.
              </p>
            </motion.div>
            <div className="experience-list">
              {experience.map((item, index) => (
                <motion.article
                  key={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={reveal}
                  transition={{ delay: index * 0.04 }}
                >
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="github" className="content-section">
          <SectionHeader
            eyebrow="GitHub"
            title="Code practice, project repositories, and continuous improvement."
          />
          <div className="github-panel">
            <div className="github-profile">
              <FaGithub />
              <h3>shalini1402</h3>
              <p>Full stack projects, AI experiments, and academic builds.</p>
              <a href="https://github.com/shalini1402" target="_blank" rel="noreferrer">
                Open GitHub profile <FiArrowUpRight />
              </a>
            </div>
            <div className="contribution-map" aria-label="GitHub contribution style graphic">
              {Array.from({ length: 84 }).map((_, index) => (
                <span key={index} className={`heat heat-${index % 5}`} />
              ))}
            </div>
            <div className="repo-grid">
              {repoCards.map((repo) => (
                <article key={repo.name}>
                  <span>{repo.type}</span>
                  <strong>{repo.name}</strong>
                  <p>{repo.stack}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <SectionHeader
            eyebrow="Contact"
            title="Available for full stack, backend, and AI project opportunities."
            text="Open to internships, junior roles, and product-focused teams."
          />
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
        <p>Shalini H R. Full stack developer portfolio.</p>
        <div>
          <a href="https://github.com/shalini1402" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="#home" className="scroll-top">
            ↑
          </a>
        </div>
      </footer>

      <div className="tech-marquee" aria-hidden="true">
        <SiJavascript />
        <SiPhp />
        <FaNodeJs />
        <SiMysql />
        <SiMongodb />
        <SiOpenai />
        <SiDeepgram />
        <SiTailwindcss />
        <SiVite />
        <FaPython />
      </div>
    </div>
  );
}

export default App;
