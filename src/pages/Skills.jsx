import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <h1>My Skills</h1>

      <div className="skill-grid">
        <div className="skill-card">
          <h3>Front End Skills</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="skill-card">
          <h3>Back End Skills</h3>
          <p>Node.js, Express, MongoDB,Mysql</p>
        </div>

        <div className="skill-card">
          <h3>Tools & Platforms</h3>
          <p>Git, GitHub, VS Code</p>
        </div>
      </div>
    </div>
  );
}
