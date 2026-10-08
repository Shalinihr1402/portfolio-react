import {
  FaDatabase,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPhoneAlt,
  FaPython,
  FaReact,
  FaAward,
  FaCodeBranch,
  FaFire,
  FaStar,
} from "react-icons/fa";
import {
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiPhp,
  SiSpringboot,
  SiTailwindcss,
  SiPostman,
  SiFigma,
  SiPostgresql,
  SiAnthropic,
} from "react-icons/si";
import {
  FiArrowUpRight,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiMail,
  FiServer,
  FiZap,
  FiCheckCircle,
  FiLayers,
  FiCpu,
} from "react-icons/fi";

export const personalInfo = {
  name: "Shalini H R",
  role: "Full Stack Developer & AI Enthusiast",
  subRole: "MCA Graduate | Creative UI Engineer | Backend Builder",
  bio: "Passionate developer crafting playful, high-performance web applications, intelligent AI voice systems, and rock-solid backend architectures. I turn ambitious ideas into delightful digital products with clean code and creative energy! 🚀✨",
  email: "shalinidvg16@gmail.com",
  phone: "7411156526",
  location: "Karnataka, India 📍",
  githubUrl: "https://github.com/Shalinihr1402",
  linkedinUrl:
    "https://www.linkedin.com/in/shalini-h-r-90862a251?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resumeUrl: "/Shalini-H-R-Resume.pdf",
  status: "Open to Full Stack & Backend Roles 🟢",
};

export const heroTags = [
  { emoji: "✨", text: "Vibe Coder", color: "from-pink-500 to-rose-500" },
  { emoji: "🐙", text: "Open Source Contributor", color: "from-blue-500 to-cyan-500" },
  { emoji: "🤖", text: "AI / ML Projects", color: "from-purple-500 to-indigo-500" },
  { emoji: "🚀", text: "React Developer", color: "from-amber-400 to-orange-500" },
  { emoji: "⚡", text: "Full Stack Explorer", color: "from-emerald-400 to-teal-500" },
  { emoji: "💻", text: "Problem Solver", color: "from-indigo-400 to-purple-600" },
];

export const developerDna = [
  {
    emoji: "🎨",
    title: "Playful & Polished UI",
    description: "Designing joyful, human-centered interfaces with smooth physics and rich aesthetic depth.",
    accent: "badge-purple",
  },
  {
    emoji: "⚙️",
    title: "Solid Backend Systems",
    description: "Architecting reliable RESTful APIs, relational databases, and secure role-based services.",
    accent: "badge-blue",
  },
  {
    emoji: "🤖",
    title: "Applied AI Solutions",
    description: "Integrating LLMs, Deepgram speech engines, and vision intelligence for real-world user workflows.",
    accent: "badge-amber",
  },
  {
    emoji: "🔥",
    title: "Continuous Learner",
    description: "Consistently sharpening problem-solving speed, exploring modern frameworks, and pushing code.",
    accent: "badge-emerald",
  },
];

export const skillCategories = [
  {
    title: "Frontend Magic",
    emoji: "🎨",
    color: "#ec4899",
    skills: [
      { name: "React 19", icon: FaReact, level: "Advanced", badge: "Core" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: "Advanced", badge: "Core" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", badge: "Styling" },
      { name: "Framer Motion", icon: FiZap, level: "Intermediate", badge: "Motion" },
      { name: "HTML5 & Modern CSS", icon: FiCode, level: "Advanced", badge: "Layout" },
      { name: "Responsive Design", icon: FiLayers, level: "Advanced", badge: "UI/UX" },
    ],
  },
  {
    title: "Backend & APIs",
    emoji: "⚙️",
    color: "#3b82f6",
    skills: [
      { name: "Java", icon: FaJava, level: "Proficient", badge: "Language" },
      { name: "Spring Boot", icon: SiSpringboot, level: "Intermediate", badge: "Framework" },
      { name: "PHP", icon: SiPhp, level: "Proficient", badge: "Backend" },
      { name: "Python", icon: FaPython, level: "Intermediate", badge: "Scripting & ML" },
      { name: "Node.js", icon: FaNodeJs, level: "Intermediate", badge: "Runtime" },
      { name: "REST APIs", icon: FiServer, level: "Advanced", badge: "Architecture" },
    ],
  },
  {
    title: "Databases & Storage",
    emoji: "🗄️",
    color: "#10b981",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced", badge: "SQL Database" },
      { name: "MySQL", icon: SiMysql, level: "Advanced", badge: "RDBMS" },
      { name: "MongoDB", icon: SiMongodb, level: "Intermediate", badge: "NoSQL" },
      { name: "Schema Design", icon: FaDatabase, level: "Proficient", badge: "Data Modeling" },
      { name: "Query Tuning", icon: FaDatabase, level: "Advanced", badge: "Optimization" },
    ],
  },
  {
    title: "AI & Smart Tech",
    emoji: "🤖",
    color: "#8b5cf6",
    skills: [
      { name: "Claude AI", icon: SiAnthropic, level: "Advanced", badge: "Anthropic LLM" },
      { name: "OpenAI Codex", icon: SiOpenai, level: "Proficient", badge: "Code Models" },
      { name: "OpenAI GPT-4", icon: SiOpenai, level: "Proficient", badge: "LLM Systems" },
      { name: "Deepgram Voice", icon: FiZap, level: "Proficient", badge: "Speech-to-Text" },
      { name: "Vapi Voice AI", icon: FiCpu, level: "Proficient", badge: "Voice Agent" },
      { name: "Vision AI & ML", icon: FiZap, level: "Intermediate", badge: "Multimodal" },
    ],
  },
  {
    title: "Tools & Workflow",
    emoji: "🛠️",
    color: "#f59e0b",
    skills: [
      { name: "Git & GitHub", icon: FaGithub, level: "Advanced", badge: "VCS & PRs" },
      { name: "Vite Bundler", icon: FiZap, level: "Proficient", badge: "Build Tool" },
      { name: "Postman", icon: SiPostman, level: "Proficient", badge: "API Testing" },
      { name: "Figma UI", icon: SiFigma, level: "Intermediate", badge: "Design" },
    ],
  },
];

export const featuredProjects = [
  {
    id: "gmu-voicebot",
    title: "GMU VoiceBot Assistant",
    emoji: "🎙️",
    badge: "🌟 Flagship AI + Backend",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    image: "/projects/voicebot.jpg",
    shortDesc:
      "Multilingual AI university assistant supporting campus ERP workflows, voice navigation, student services, and natural language query routing.",
    fullDesc:
      "Developed a full-stack, voice-enabled intelligent campus assistant that automates student inquiries, simplifies administrative portal access, and delivers conversational responses in multiple regional languages.",
    tech: ["React.js", "PHP", "MySQL", "OpenAI", "Deepgram", "Vapi", "REST APIs"],
    emojiTags: ["🗣️ Multilingual Voice", "🏫 Campus ERP", "⚡ Real-time STT", "🤖 GPT Intelligence"],
    highlights: [
      "Real-time voice processing using Deepgram speech-to-text and Vapi conversational orchestration.",
      "Integrated PHP REST backend with MySQL database to query student records and course workflows.",
      "Custom role-based permissions separating student queries from administrative management.",
      "Designed an intuitive responsive conversational UI with animated speech waveforms.",
    ],
    githubUrl: "https://github.com/Shalinihr1402",
    demoUrl: "https://github.com/Shalinihr1402/portfolio-react",
    stats: { users: "500+ Campus Inquiries", responseTime: "<450ms Voice AI", satisfaction: "98% Positive" },
  },
  {
    id: "rockfall-prediction",
    title: "AI Rockfall Hazard Predictor",
    emoji: "🏔️",
    badge: "🧠 Machine Learning System",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    image: "/projects/rockfall.jpg",
    shortDesc:
      "Predictive analytics & machine learning engine that calculates geological rockfall hazards and terrain instability using structured seismic datasets.",
    fullDesc:
      "Engineered an automated risk assessment pipeline analyzing geological and meteorological parameters to predict rockfall hazards along high-risk transport corridors and hilly terrains.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Data Analytics"],
    emojiTags: ["📊 Predictive ML", "⚠️ Risk Analytics", "📈 Data Modeling", "🔬 Terrain Analysis"],
    highlights: [
      "Cleaned, preprocessed, and trained predictive models on geological hazard datasets.",
      "Evaluated classification and regression algorithms to achieve high risk-detection accuracy.",
      "Created visual correlation matrices and hazard vulnerability scoring metrics.",
      "Designed for early hazard warning scenarios in high-altitude infrastructure safety.",
    ],
    githubUrl: "https://github.com/Shalinihr1402",
    demoUrl: "https://github.com/Shalinihr1402/portfolio-react",
    stats: { accuracy: "High Precision Model", dataset: "Thousands of Data Points", impact: "Public Safety" },
  },
  {
    id: "voice-vision-assistant",
    title: "Vision & Voice Accessibility Assistant",
    emoji: "👁️",
    badge: "💖 AI Accessibility App",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    image: "/projects/visually-impaired.jpeg",
    shortDesc:
      "Assistive AI companion combining camera scene understanding, object detection, and friendly voice feedback for visually impaired users.",
    fullDesc:
      "Built an empathetic accessibility application providing real-time audio guidance to visually impaired individuals. Captures surroundings, analyzes scenes via vision models, and communicates via clear conversational audio.",
    tech: ["React.js", "OpenAI GPT-4o", "Computer Vision", "Speech Synthesis", "Web Audio"],
    emojiTags: ["👁️ Vision AI", "🔊 Audio Guidance", "♿ Inclusive Tech", "⚡ Real-time Feedback"],
    highlights: [
      "Leveraged GPT-4o multimodal vision capabilities to describe obstacles and read text in surroundings.",
      "Engineered low-latency audio interaction flow allowing natural question-and-answer voice dialogues.",
      "High-contrast, screen-reader optimized accessibility design for effortless interaction.",
      "Empowers users to navigate unfamiliar environments with greater autonomy and safety.",
    ],
    githubUrl: "https://github.com/Shalinihr1402",
    demoUrl: "https://github.com/Shalinihr1402/portfolio-react",
    stats: { feedback: "Hands-Free Voice", accessibility: "WCAG AAA UI", models: "Multimodal GPT-4o" },
  },
];

export const githubStats = [
  {
    emoji: "🔀",
    metric: "33+",
    title: "Git Merged PRs",
    subtitle: "Pull requests merged & reviewed",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400",
  },
  {
    emoji: "🏆",
    metric: "15+",
    title: "Projects Built",
    subtitle: "AI, Full Stack & Backend",
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-400",
  },
  {
    emoji: "⭐",
    metric: "10+",
    title: "Active Repositories",
    subtitle: "Public codebases & labs",
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/40 text-pink-400",
  },
  {
    emoji: "🔥",
    metric: "100%",
    title: "Daily Consistency",
    subtitle: "Committed to continuous learning",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-400",
  },
  {
    emoji: "💡",
    metric: "150+",
    title: "Problems Solved",
    subtitle: "Data structures & algorithms",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400",
  },
];

export const achievementCards = [
  {
    emoji: "⚡",
    title: "HackerRank SQL (Basic) Certification",
    badge: "HackerRank Verified",
    year: "2024",
    desc: "Earned SQL Skill Certification demonstrating proficiency in relational queries, complex joins, filtering, and database logic.",
    tags: ["SQL Certified", "HackerRank", "Database Logic"],
    image: "/presentation/sih-team-presentation.jpeg",
  },
  {
    emoji: "📜",
    title: "Full Stack Web Development Certification",
    badge: "Tap Academy",
    year: "2024",
    desc: "Intensive professional training in modern frontend frameworks, backend microservices, SQL databases, and full stack projects.",
    tags: ["Java Full Stack", "React", "Spring Boot", "SQL"],
    image: "/certificates/certificate-1.jpeg",
  },
  {
    emoji: "☁️",
    title: "Cloud Computing Paper Presentation",
    badge: "Bapuji Institute (BIHE)",
    year: "2022",
    desc: "Presented seminar paper on Cloud Computing paradigms, scalable virtualization, and serverless architectures.",
    tags: ["Cloud Computing", "Paper Presentation", "Tech Seminar"],
    image: "/certificates/certificate-2.jpeg",
  },
  {
    emoji: "🏆",
    title: "Smart India Hackathon (SIH)",
    badge: "National Hackathon",
    year: "2025",
    desc: "Spearheaded team ideation, solution framing, and system architecture for high-impact civic problem solving.",
    tags: ["Team Leadership", "Rapid Prototyping", "Pitch Presentation"],
    image: null,
  },
  {
    emoji: "🎓",
    title: "Master of Computer Applications (MCA)",
    badge: "Academic Degree",
    year: "2024–2026",
    desc: "Graduate coursework in Advanced Software Engineering, Distributed Systems, Database Architectures, and AI.",
    tags: ["MCA Graduate", "Computer Science", "Honors Discipline"],
    image: "/presentation/academic-topic-presentation.jpeg",
  },
];

export const journeyMilestones = [
  {
    year: "Current",
    role: "Full Stack & AI Project Builder",
    org: "Personal Labs & GitHub",
    description: "Developing modern AI voice agents, full-stack applications with React & Spring Boot, and contributing open-source projects.",
    emoji: "🚀",
  },
  {
    year: "2025",
    role: "Hackathon Team Leader",
    org: "Smart India Hackathon",
    description: "Led team technical design, API structure, and presentation for an innovative technology solution in SIH.",
    emoji: "💡",
  },
  {
    year: "2024",
    role: "Full Stack Development Scholar",
    org: "Tap Academy",
    description: "Completed comprehensive hands-on training across frontend components, database modeling, RESTful services, and deployment.",
    emoji: "📜",
  },
  {
    year: "2022",
    role: "Technical Speaker & Problem Solver",
    org: "Bapuji Institute of Hi-Tech Education",
    description: "Presented research insights on Cloud Infrastructure and honed foundational programming discipline in Java and C.",
    emoji: "🎓",
  },
];

export const contactLinks = [
  {
    label: "Email Me",
    value: "shalinidvg16@gmail.com",
    href: "mailto:shalinidvg16@gmail.com",
    icon: FiMail,
    emoji: "📬",
    action: "Send an email",
    badge: "Quick Reply",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shalini-h-r",
    href: "https://www.linkedin.com/in/shalini-h-r-90862a251?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: FaLinkedin,
    emoji: "💼",
    action: "Connect on LinkedIn",
    badge: "Professional Network",
  },
  {
    label: "GitHub",
    value: "github.com/Shalinihr1402",
    href: "https://github.com/Shalinihr1402",
    icon: FaGithub,
    emoji: "🐙",
    action: "Explore repositories",
    badge: "Open Source",
  },
  {
    label: "Direct Phone",
    value: "+91 7411156526",
    href: "tel:7411156526",
    icon: FaPhoneAlt,
    emoji: "📞",
    action: "Call / WhatsApp",
    badge: "Direct Contact",
  },
];
