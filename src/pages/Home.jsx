import "./Home.css";
import Shaluu from "../assets/Shaluu.jpeg";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-txt">
          <h1>Welcome to My Portfolio</h1>
          <h2>Shalini H R</h2>
          <h2>MCA Student | Web Developer</h2>
          <p>
            I build responsive, accessible and user-friendly web applications
            using modern technologies.
          </p>
        </div>

        <div className="hero-img">
          <img src={Shaluu} alt="Shalini H R" className="img" />
          <button className="hero-btn">Hii, This is Shals</button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
