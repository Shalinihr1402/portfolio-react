import { Link } from "react-router-dom";
import Shaluu from "../assets/Shaluu.jpeg";
import "./Home.css";

const highlights = [
  { value: "MCA", label: "Postgraduate focus in software development" },
  { value: "3+", label: "Academic and internship projects delivered" },
  { value: "Front End", label: "Responsive UI, React, and clean layouts" },
];

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Available for internships and junior roles</p>
        <h1>Building polished web experiences with a developer mindset.</h1>
        <p className="hero-summary">
          I am Shalini H R, an MCA student focused on responsive interfaces,
          thoughtful user experience, and practical full stack projects that
          solve real problems.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="primary-link">
            View projects
          </Link>
          <Link to="/contact" className="secondary-link">
            Contact me
          </Link>
        </div>

        <div className="hero-highlights">
          {highlights.map((item) => (
            <article key={item.label} className="highlight-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>

      <aside className="hero-panel">
        <div className="portrait-frame">
          <img src={Shaluu} alt="Portrait of Shalini H R" className="img" />
        </div>

        <div className="snapshot-card">
          <p className="snapshot-label">Current focus</p>
          <h2>React interfaces, accessible layouts, and developer-ready UI</h2>
          <p>
            I enjoy turning simple ideas into clean products that look
            professional and feel easy to use.
          </p>
        </div>
      </aside>
    </section>
  );
}
