function CurrentlyBuilding() {
  const projects = [
    {
      title: "GrowthPilot",
      status: "Flagship Project",
      description:
        "An AI-powered business decision support platform that combines analytics, structured reasoning, and intelligent workflows to help entrepreneurs make more informed business decisions.",
    },
    {
      title: "AI Fraud Detection System",
      status: "Coming Next",
      description:
        "Building a machine learning system that detects suspicious financial transactions and explains model predictions.",
    },
    {
      title: "Mobile Banking Application",
      status: "Completed",
      description:
        "Built a C++ banking application with account management, authentication concepts, file persistence, and transaction workflows.",
    },
  ];

  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Current & Upcoming Work</p>

        <h2>The next chapter of my engineering journey.</h2>

        <p>
          I’m continuing to grow through projects that connect artificial
          intelligence, financial technology, cybersecurity, and software
          engineering.
        </p>
      </div>

      <div className="currently-building-grid">
        {projects.map((project) => (
          <article className="building-card" key={project.title}>
            <span>{project.status}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CurrentlyBuilding;