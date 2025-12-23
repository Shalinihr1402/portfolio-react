import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export default function Navbar() {
    return(
        <nav className="navbar">
            <h1 className="logo">SHALINI H R</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                 <Link to="/internships">Internships</Link>

                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}