import "./About.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-header">

        <p className="section-number">
          01
        </p>

        <h1>
          About Me
        </h1>

      </section>


      <section className="about-grid">

        <div className="about-description">

          <p className="about-intro">
            Hi everyone, my name is Jonathan, but usually people at my workplace call me Jojo. I am currently working at PT. Vektor Inti Prima as a full stack developer and web scraper.
          </p>

          <p>
            A little bit about me, I love watching movies, listening to music, and reading books.
          </p>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="resume-link"
          >
            View Resume ↗
          </a>

        </div>


        <div className="about-sidebar">

          <p className="sidebar-label">
            TECHNICAL SKILLS
          </p>

          <div className="skills-list">

            <span>Javascript Framework</span>
            <span>Restful API</span>
            <span>Web Development Stack</span>
            <span>Architectural Design</span>

          </div>

          <p className="sidebar-label">
            INDUSTRY KNOWLEDGE
          </p>

          <div className="skills-list">

            <span>Front-end Development</span>
            <span>Back-end Development</span>
            <span>Sprint Methodology</span>

          </div>

          <p className="sidebar-label">
            TOOLS AND SOFTWARE
          </p>

          <div className="skills-list">

            <span>ReactJS</span>
            <span>AngularJS</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>Java</span>
            <span>Laravel</span>
            <span>C#/C++</span>
            <span>SQL/NoSQL</span>
            <span>ORM</span>
            <span>Microsoft Azure</span>
            <span>GCP</span>
            <span>Elastic Stack</span>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;