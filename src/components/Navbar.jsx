import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="logo">
          JonathanJasper<span>.dev</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Link
          href="https://github.com/jonathanjasperwork"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          GitHub ↗
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;

