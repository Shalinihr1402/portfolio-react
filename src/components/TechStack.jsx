import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolioData";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills", emoji: "✨" },
    ...skillCategories.map((c) => ({ id: c.title, label: c.title, emoji: c.emoji })),
  ];

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="section-container">
      {/* Section Header */}
      <div className="section-badge-header">
        <span className="section-pill">
          <span>🛠️</span> Tech Arsenal
        </span>
        <h2 className="section-title">
          Tools, Frameworks & <br />
          <span className="gradient-text-rainbow">Superpowers I Wield</span>
        </h2>
        <p className="section-desc">
          A battle-tested toolkit crafted through hands-on project builds, academic excellence, and modern engineering practices.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="skill-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`filter-pill-btn ${activeCategory === cat.id ? "filter-pill-active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skill-categories-grid">
        {filteredCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            className="skill-category-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * catIdx, duration: 0.4 }}
          >
            <div className="category-header">
              <span className="category-emoji">{category.emoji}</span>
              <h3>{category.title}</h3>
            </div>

            <div className="skills-badge-collection">
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="skill-badge-item"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <div className="skill-icon-bubble">
                      <Icon />
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-badge-tag">{skill.badge}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
