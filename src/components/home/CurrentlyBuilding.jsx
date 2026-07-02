import { Link } from "react-router-dom";

function CurrentlyBuilding() {
  const projects = [
    {
      title: "GrowthPilot",
      label: "Featured Project",
      status: "Flagship Case Study",
      description:
        "An AI-powered business decision support platform that combines analytics, structured reasoning, and intelligent workflows to help entrepreneurs make more informed business decisions.",
      link: "/growthpilot",
      button: "Read Case Study",
    },
    {
      title: "Mobile Bank",
      label: "Software Project",
      status: "Completed",
      description:
        "A C++ console banking application demonstrating secure authentication, persistent file storage, transaction management, and core software engineering fundamentals.",
      link: "/mobile-bank",
      button: "View Project",
    },
    {
      title: "AI Fraud Detection System",
      label: "Next Project",
      status: "Concept Exploration",
      description:
        "Exploring machine learning approaches for detecting fraudulent financial transactions with a focus on explainable AI, risk analysis, and practical decision support.",
      link: null,
      button: null,
    },
  ];

  return (
    <section className="section" id="engineering-projects">
      <div className="section-header">
        <p className="eyebrow">Engineering Projects</p>

        <h2>Projects that show how I’m growing as an engineer.</h2>

        <p>
          GrowthPilot shows product and AI systems thinking. Mobile Bank shows
          core software engineering fundamentals. AI Fraud Detection represents
          where I’m expanding next across AI, fintech, and cybersecurity.
        </p>
      </div>

      <div className="project-role-grid">
        {projects.map((project) => (
          <article className="project-role-card" key={project.title}>
            <span className="project-role-label">{project.label}</span>

            <div>
              <p className="project-role-status">{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            {project.link && (
              <Link to={project.link} className="secondary-button">
                {project.button}
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default CurrentlyBuilding;