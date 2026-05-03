import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="section-intro">
        <p className="section-label">Get in touch</p>
        <h1>
          Open to opportunities where I can keep learning and contribute well.
        </h1>
        <p>
          If you are hiring for internships, junior developer roles, or project
          collaboration, I would love to connect.
        </p>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <strong>Email</strong>
          <a href="mailto:shalinidvg16@gmail.com">shalinidvg16@gmail.com</a>
          <p>
            Best for internship opportunities, project discussions, and formal
            communication.
          </p>
        </article>

        <article className="contact-card">
          <strong>Phone</strong>
          <a href="tel:7411156526">7411156526</a>
          <p>
            Useful for quick contact if you would like to discuss availability.
          </p>
        </article>

        <article className="contact-card">
          <strong>GitHub</strong>
          <a
            href="https://github.com/shalini1402"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/shalini1402
          </a>
          <p>Browse code samples, experiments, and project repositories.</p>
        </article>
      </div>
    </section>
  );
}
