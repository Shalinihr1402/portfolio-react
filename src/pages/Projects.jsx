import "./Project.css";

const projects = [
  {
    title: "Home Service Management System",
    description:
      "A service discovery workflow that connects customers with local home service providers through a structured booking experience.",
    stack: "HTML, CSS, JavaScript, PHP, MySQL",
    focus: "UX structure, booking flow, and information clarity",
  },
  {
    title: "Online Food Ordering System",
    description:
      "A web platform for browsing restaurants, placing food orders, and presenting status updates in a more intuitive way.",
    stack: "HTML, CSS, JavaScript, Node.js, MongoDB",
    focus: "Responsive ordering flow and dashboard-style content layout",
  },
  {
    title: "AI Rockfall Prediction for Open Pit Mines",
    description:
      "A machine learning project focused on identifying geological risk patterns and presenting prediction insights from structured datasets.",
    stack: "Python, Scikit-learn, Pandas, NumPy",
    focus: "Data analysis, model thinking, and problem-solving",
  },
];

export default function Projects() {
  return (
    <section className="projects-page">
      <div className="section-intro">
        <p className="section-label">Selected work</p>
        <h1>
          Projects that show how I approach real product and technical problems.
        </h1>
        <p>
          Each project helped me strengthen a different skill area, from user
          flow planning to full stack implementation and applied machine
          learning.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card">
            <span className="project-index">0{index + 1}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-meta">
              <strong>Tech stack</strong>
              <span>{project.stack}</span>
            </div>
            <div className="project-meta">
              <strong>Main focus</strong>
              <span>{project.focus}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
