import { useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    type: "FULL-STACK",
    title: "Project Name",
    year: "2026",
    status: "COMPLETED",

    description:
      "A full-stack application built to solve a practical problem. This project helped me strengthen my understanding of application architecture, APIs, databases, and building software from end to end.",

    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
    ],

    github: "https://github.com/yourusername/project",
    demo: "https://your-project.com",
  },

  {
    number: "02",
    type: "SOFTWARE",
    title: "Project Name",
    year: "2025",
    status: "COMPLETED",

    description:
      "A project focused on improving my understanding of backend development and how different components of an application communicate with each other.",

    technologies: [
      "React",
      "Express",
      "SQL",
      "REST API",
    ],

    github: "https://github.com/yourusername/project",
    demo: "",
  },

  {
    number: "03",
    type: "SECURITY / LEARNING",
    title: "Project Name",
    year: "2026",
    status: "IN PROGRESS",

    description:
      "A learning project exploring security concepts from a developer's perspective, with a focus on understanding how applications can be designed and built more securely.",

    technologies: [
      "Python",
      "Linux",
      "OWASP",
      "APIs",
    ],

    github: "https://github.com/yourusername/project",
    demo: "",
  },

  {
    number: "04",
    type: "EXPERIMENT",
    title: "Project Name",
    year: "2025",
    status: "COMPLETED",

    description:
      "An experimental project created to explore a new technology and better understand how it could be applied in a real application.",

    technologies: [
      "Python",
      "Docker",
      "API",
    ],

    github: "https://github.com/yourusername/project",
    demo: "",
  },
];


function ProjectCard({ project, index }) {

  const cardRef = useRef(null);

  useEffect(() => {

    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          element.classList.add("is-visible");

          observer.unobserve(element);

        }

      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();

  }, []);


  return (
    <article
      ref={cardRef}
      className="project-card"
      style={{
        "--animation-delay": `${index * 0.1}s`,
      }}
    >

      {/* TOP */}

      <div className="project-card-top">

        <span className="project-number">
          {project.number}
        </span>

        <span className="project-arrow">
          ↗
        </span>

      </div>


      {/* TITLE */}

      <div className="project-card-heading">

        <p className="project-type">
          {project.type}
        </p>

        <h2>
          {project.title}
        </h2>

      </div>


      {/* DESCRIPTION */}

      <p className="project-card-description">
        {project.description}
      </p>


      {/* TECHNOLOGIES */}

      <div className="project-card-technologies">

        {project.technologies.map(
          (technology) => (
            <span key={technology}>
              {technology}
            </span>
          )
        )}

      </div>


      {/* FOOTER */}

      <div className="project-card-footer">

        <div className="project-card-meta">

          <span>
            {project.year}
          </span>

          <span className="project-status">

            <span className="project-status-dot"></span>

            {project.status}

          </span>

        </div>


        <div className="project-card-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live ↗
            </a>
          )}

        </div>

      </div>

    </article>
  );
}


function Projects() {

  return (
    <main className="projects-page">

      <header className="projects-header">

        <p className="section-number">
          03
        </p>

        <h1>
          Projects
        </h1>

        <p className="projects-intro">
          Things I've built, experimented with,
          and explored along the way.
        </p>

      </header>


      <section className="projects-grid">

        {projects.map((project, index) => (

          <ProjectCard
            key={project.number}
            project={project}
            index={index}
          />

        ))}

      </section>

    </main>
  );
}

export default Projects;