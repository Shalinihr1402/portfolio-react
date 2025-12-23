import "./Project.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>

      <div className="project-grid">
        <div className="project-card">
          <h2>Home Based Service Management System</h2>
          <p>
            Developed a web application to connect service providers with
            customers for home-based services.
          </p>
          <span>HTML, CSS, JavaScript, PHP, MySQL</span>
        </div>

        <div className="project-card">
          <h2>Online Food Ordering System</h2>
          <p>
            Created an online platform for users to order food from local
            restaurants with real-time tracking.
          </p>
          <span>HTML, CSS, JavaScript, Node.js, MongoDB</span>
        </div>

        <div className="project-card">
          <h2>AI Open Pit Mines Rockfall Prediction</h2>
          <p>
            Developed a machine learning model to predict rockfalls in open pit
            mines using geological data.
          </p>
          <span>Python, Scikit-learn, Pandas, NumPy</span>
        </div>
      </div>
    </div>
  );
}
