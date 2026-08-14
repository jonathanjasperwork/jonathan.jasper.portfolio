import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="hero">

      <div className="hero-content">

        <p className="eyebrow">
          SOFTWARE ENGINEERING · CYBERSECURITY
        </p>

        <h1>
          Jonathan Timothy Jasper
        </h1>

        <h2>
          I build software.
          <br />
          I'm learning how to secure it.
        </h2>

        <p className="description">
          I am a full stack developer interested in transforming ideas 
          into reality with the help of technology. 
          Over time, my curiosity towards cybersecurity has grown, 
          so I can not only build something fun but also make it secure.
        </p>

        <div className="buttons">

          {/* <a href="/about" className="button">
            About Me
          </a> */}
          <Link to="/about" className="button">About</Link>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            GitHub ↗
          </a>

        </div>

      </div>


      <div className="focus-panel">

        <p className="panel-label">
          CURRENT FOCUS
        </p>


        <div className="focus-item">

          <div className="focus-header">
            <span>FULL-STACK DEVELOPMENT</span>
            <span>EXPERIENCE</span>
          </div>

          <div className="progress">
            <div className="progress-fill fullstack"></div>
          </div>

        </div>


        <div className="focus-item">

          <div className="focus-header">
            <span>APPLICATION SECURITY</span>
            <span>EXPLORING</span>
          </div>

          <div className="progress">
            <div className="progress-fill security"></div>
          </div>

        </div>


        <div className="learning">

          <p className="learning-label">
            CURRENTLY LEARNING
          </p>

          <div className="tags">
            <span>OWASP</span>
            <span>LINUX</span>
            <span>NETWORKING</span>
            <span>SECURE APIs</span>
          </div>

        </div>


        <div className="status">

          <span className="status-dot"></span>

          <span>
            BUILDING → SECURING
          </span>

        </div>

      </div>

    </main>
  );
}

export default Home;