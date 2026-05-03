import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-kicker">Portfolio</p>
        <h2>Shalini H R</h2>
        <p className="footer-text">
          MCA student focused on modern web development, responsive UI, and
          practical project building.
        </p>
      </div>

      <div className="social-links">
        <a href="mailto:shalinidvg16@gmail.com" className="icon">
          Email
        </a>

        <a href="tel:7411156526" className="icon">
          Call
        </a>

        <a
          href="https://github.com/shalini1402"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          GitHub
        </a>
      </div>

      <p className="footer-note">Copyright 2026 Shalini H R. Built with React.</p>
    </footer>
  );
}
