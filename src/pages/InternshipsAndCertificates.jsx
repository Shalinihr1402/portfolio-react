import "./Internships.css";

export default function InternshipsAndCertificates() {
  return (
    <div className="internship">
      <h1>Internships & Certificates</h1>

      <div className="internship-grid">
        {/* Internship */}
        <div className="internship-card">
          <h3>Frontend Developer Intern</h3>
          <p className="company">Wipro | 2025</p>
          <ul>
            <li>Built responsive UI using HTML & CSS</li>
            <li>Worked with React components</li>
            <li>Collaborated in team projects</li>
          </ul>
        </div>

        {/* Certificate */}
        <div className="certificate-card">
          <h3>Full Stack Java Developer</h3>
          <p className="company">Tap Academy | 2024</p>
          <p className="company">HackerRank | 2024</p>
        </div>
      </div>
    </div>
  );
}
