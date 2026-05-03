import "./Internships.css";

const timeline = [
  {
    type: "Internship",
    title: "Frontend Developer Intern",
    org: "Wipro",
    year: "2025",
    details: [
      "Built responsive UI sections with consistent spacing and visual structure.",
      "Worked with React components and layout patterns for maintainable screens.",
      "Collaborated on team tasks and improved confidence in developer workflows.",
    ],
  },
  {
    type: "Certification",
    title: "Full Stack Java Developer",
    org: "Tap Academy",
    year: "2024",
    details: [
      "Strengthened programming fundamentals and backend understanding.",
      "Practiced application structure, databases, and problem solving.",
    ],
  },
  {
    type: "Certification",
    title: "Problem Solving and Coding Practice",
    org: "HackerRank",
    year: "2024",
    details: [
      "Built consistency in coding practice and logical thinking.",
      "Improved confidence in solving technical questions independently.",
    ],
  },
];

export default function InternshipsAndCertificates() {
  return (
    <section className="experience-page">
      <div className="section-intro">
        <p className="section-label">Experience and learning</p>
        <h1>Hands-on work that is shaping me into a stronger developer.</h1>
        <p>
          My internship exposure and certifications reflect steady progress in
          frontend development, software fundamentals, and technical discipline.
        </p>
      </div>

      <div className="timeline">
        {timeline.map((item) => (
          <article key={`${item.title}-${item.org}`} className="timeline-card">
            <div className="timeline-top">
              <span className="timeline-type">{item.type}</span>
              <span className="timeline-year">{item.year}</span>
            </div>
            <h2>{item.title}</h2>
            <p className="company">{item.org}</p>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
