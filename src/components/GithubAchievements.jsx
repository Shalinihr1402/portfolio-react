import { motion } from "framer-motion";
import { FaGithub, FaFire, FaCodeBranch, FaStar, FaAward } from "react-icons/fa";
import { FiArrowUpRight, FiGitPullRequest, FiCheckCircle } from "react-icons/fi";
import { githubStats, personalInfo } from "../data/portfolioData";

export default function GithubAchievements() {
  // Generate a playful mock 12-week GitHub activity grid with varied intensities
  const activityWeeks = 14;
  const daysPerWeek = 7;
  const mockHeatLevels = [0, 1, 2, 3, 4, 3, 2, 4, 1, 3, 4, 2, 1, 4, 3, 2];

  return (
    <section id="github" className="section-container">
      {/* Section Header */}
      <div className="section-badge-header">
        <span className="section-pill">
          <span>🐙</span> Code In Action
        </span>
        <h2 className="section-title">
          GitHub Highlights & <br />
          <span className="gradient-text-rainbow">Development Momentum</span>
        </h2>
        <p className="section-desc">
          Continuous commits, real-world open source builds, and algorithmic problem-solving drive my daily routine.
        </p>
      </div>

      {/* GitHub Metric Cards */}
      <div className="github-stats-grid">
        {githubStats.map((item, idx) => (
          <motion.div
            key={item.title}
            className="stat-highlight-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * idx, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <div className="stat-card-icon">
              <span>{item.emoji}</span>
            </div>
            <strong className="stat-card-number">{item.metric}</strong>
            <h4 className="stat-card-title">{item.title}</h4>
            <small className="stat-card-subtitle">{item.subtitle}</small>
          </motion.div>
        ))}
      </div>

      {/* Visual GitHub Activity Visualizer Card */}
      <motion.div
        className="github-activity-showcase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="activity-showcase-header">
          <div className="profile-mini-lockup">
            <div className="github-mascot-bubble">
              <FaGithub />
            </div>
            <div>
              <h3>Shalinihr1402</h3>
              <p>Full Stack & AI Projects • Active Contributor</p>
            </div>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-github-follow"
            aria-label="Visit GitHub Profile"
          >
            <span>Follow on GitHub</span>
            <FiArrowUpRight />
          </a>
        </div>

        {/* Activity Heatmap Visualizer */}
        <div className="contribution-board">
          <div className="board-top-info">
            <span>🔥 <strong>Active Coding Rhythm:</strong> Daily Git commits & architecture refactoring</span>
            <div className="heat-legend">
              <small>Less</small>
              <span className="heat-box heat-0" />
              <span className="heat-box heat-1" />
              <span className="heat-box heat-2" />
              <span className="heat-box heat-3" />
              <span className="heat-box heat-4" />
              <small>More</small>
            </div>
          </div>

          <div className="heat-grid-container" aria-label="GitHub contribution activity representation">
            {Array.from({ length: activityWeeks * daysPerWeek }).map((_, i) => {
              const level = mockHeatLevels[i % mockHeatLevels.length];
              return (
                <div
                  key={i}
                  className={`heat-cell heat-level-${level}`}
                  title={`Activity day ${i + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Highlight Bullets under Heatmap */}
        <div className="github-highlights-chips">
          <span className="chip-badge">🔀 33+ Git Merged Pull Requests</span>
          <span className="chip-badge">⚡ React 19 & Vite Tooling</span>
          <span className="chip-badge">🤖 Claude, Codex & OpenAI APIs</span>
          <span className="chip-badge">🗄️ PostgreSQL & MySQL Databases</span>
        </div>
      </motion.div>
    </section>
  );
}
