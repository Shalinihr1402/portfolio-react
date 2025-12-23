import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contact Me</h2>

      <div className="social-links">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          in
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          ig
        </a>

        <a
          href="https://www.naukri.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon naukri"
        >
          N
        </a>

        <a
          href="https://github.com/shalini1402"
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
        >
          Git
        </a>
      </div>

      <p className="footer-text">
        © 2025 Shalini H R | MCA Student & Web Developer
      </p>
    </footer>
  );
}
