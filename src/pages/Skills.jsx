import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend engineering",
    description:
      "Building responsive interfaces with strong structure, visual balance, and reusable React components.",
    stack: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend foundation",
    description:
      "Comfortable with application logic, APIs, and database-backed features for academic and portfolio projects.",
    stack: ["Node.js", "Express", "MongoDB", "MySQL"],
  },
  {
    title: "Workflow and tools",
    description:
      "Using version control, modern editors, and disciplined project organization to keep work maintainable.",
    stack: ["Git", "GitHub", "VS Code", "Responsive Design"],
  },
];

export default function Skills() {
  return (
    <section className="skills-page">
      <div className="section-intro">
        <p className="section-label">Capabilities</p>
        <h1>Skills that support both clean design and reliable development.</h1>
        <p>
          My strongest work sits at the intersection of interface design,
          structured front end code, and practical full stack fundamentals.
        </p>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            <div className="skill-tags">
              {group.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
