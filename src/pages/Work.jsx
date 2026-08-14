import { useEffect, useRef } from "react";
import "./Work.css";

const experiences = [
  {
    number: "06",
    role: "Full Stack Developer",
    company: "PT. Vektor Inti Prima",
    period: "12/2024 - present",

    description: [
      "I learned how to design a well-structured database and work with Linux servers, including navigating logs and debugging issues.",
      "I also gained experience working with cloud infrastructure through GCP and Cloudflare.",
    ],

    technologies: [
      "Laravel",
      "Mysql",
      "GCP",
      "Linux",
      "Cloudflare"
    ],
  },

  {
    number: "05",
    role: "Full Stack Developer",
    company: "Siloam Hospitals",
    period: "07/2025 - 03/2026",

    description: [
      "I learned how to write better and more maintainable code by applying principles such as SOLID and Clean Architecture, while improving my approach to testing with 3A and 1C.",
      "I also became a better team member by communicating my ideas, learned how to handle UI latency and asynchronous logic with RxJS, and gained experience debugging production issues using the Elastic Stack.",
    ],

    technologies: [
      "Javascript",
      "Typescript",
      "Angular.js",
      "ORM",
      "redis",
      "CLEAN Architecture",
      "SOLID Principle",
      "Elastic Stack"
    ],
  },

  {
    number: "04",
    role: "Web Scraper & Data Automation",
    company: "PT. Vektor Inti Prima",
    period: "04/2025 - 06/2026",

    description: [
      "This was my first experience collecting data directly from the internet, which gave me a different perspective from my usual work of consuming APIs.",
      "I learned how to scrape and transform raw data into meaningful information while also discovering the challenges of automation when some data cannot be reliably extracted and requires manual work.",
    ],

    technologies: [
      "Python",
      "Javascript",
      "BeautifulSoup",
      "Selenium",
      "Pandas"
    ],
  },

  {
    number: "03",
    role: "Software Engineer Intern",
    company: "Desimone Consulting Engineer",
    period: "09/2023 - 03/2024",

    description: [
      "This experience taught me how to work as part of a larger team and integrate applications with cloud technologies such as Egnyte and Microsoft Azure.",
      "I also learned the fundamentals of Docker and Kubernetes and developed the habit of documenting my work so that problems could be understood and resolved more easily later.",
    ],

    technologies: [
      "C#",
      "Python",
      "Git",
      "Microsoft Azure",
      "Egnyte"
    ],
  },

  {
    number: "02",
    role: "Software Engineer Intern",
    company: "Astronics AES",
    period: "09/2022 — 06/2023",

    description: [
        "Astronics AES was the beginning of my experience as a software engineer, where I applied concepts I learned in school such as APIs, libraries, and Git to real-world projects.",
        "I was also introduced to cybersecurity concepts including SHA-256, file signing, and CRC, while learning how to plan development and handle testing when exact data was not available.",
    ],

    technologies: [
      "C#",
      "Python",
      "Git",
    ],
  },

  {
    number: "01",
    role: "Computer Science Teaching Assistant",
    company: "Seattle University",
    period: "09/2022 — 06/2024",

    description: [
      "This was my first work experience and helped build my foundation in teaching and communication.",
      "I learned how to explain technical concepts from different perspectives and use multiple analogies when my initial explanation was not enough for someone to understand.",
    ],

    technologies: [],
  },
];


function ExperienceItem({ experience }) {

  const itemRef = useRef(null);


  useEffect(() => {

    const element = itemRef.current;

    if (!element) return;


    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          element.classList.add("is-visible");

          observer.unobserve(element);

        }

      },
      {
        threshold: 0.2,
      }
    );


    observer.observe(element);


    return () => observer.disconnect();

  }, []);


  return (
    <article
      ref={itemRef}
      className="experience-item"
    >

      <div className="experience-meta">

        <span className="experience-number">
          {experience.number}
        </span>

        <span className="experience-period">
          {experience.period}
        </span>

      </div>


      <div className="experience-line">

        <span className="experience-dot"></span>

      </div>


      <div className="experience-content">

        <p className="experience-role">
          {experience.role}
        </p>

        <h2>
          {experience.company}
        </h2>


        <div className="experience-description">

          {experience.description.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}

        </div>


        <div className="experience-technologies">

          {experience.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}

        </div>

      </div>

    </article>
  );
}


function Work() {

  return (
    <main className="experience-page">

      <header className="experience-header">

        <p className="section-number">
          02
        </p>

        <h1>
          Experiences
        </h1>

        <p className="experience-intro">
          A look at the experiences that shaped
          how I approach software development.
        </p>

      </header>


      <section className="experience-list">

        {experiences.map((experience) => (

          <ExperienceItem
            key={experience.number}
            experience={experience}
          />

        ))}

      </section>

    </main>
  );
}


export default Work;