import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import FeaturedProjects from "./components/FeaturedProjects";
import GithubAchievements from "./components/GithubAchievements";
import AchievementsJourney from "./components/AchievementsJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio-main">
      {/* Background Dotted Grid & Ambient Mesh Glows */}
      <div className="dotted-pattern-grid" aria-hidden="true" />
      <div className="ambient-light-mesh" aria-hidden="true">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>

      {/* Top Floating Navbar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <FeaturedProjects />
        <GithubAchievements />
        <AchievementsJourney />
        <Contact />
      </main>

      {/* Playful Footer */}
      <Footer />
    </div>
  );
}

export default App;
