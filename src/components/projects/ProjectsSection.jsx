function ProjectsSection() {
  return (
    <section className="section engineering-work-section" id="projects">
      <div className="section-header">
        <p className="eyebrow">Selected Engineering Work</p>
        <h2>
          Building software that connects AI, business, and secure engineering.
        </h2>
        <p>
          My work focuses on intelligent systems, financial technology, and
          decision-support tools. GrowthPilot is the centerpiece of that journey.
        </p>
      </div>

      <article className="featured-work-card">
        <div className="featured-work-copy">
          <span className="project-tag">Flagship Case Study</span>

          <h3>GrowthPilot</h3>

          <p>
            A business decision-support platform designed to help entrepreneurs
            explore pricing, profitability, and growth decisions through
            structured analysis and evolving AI capabilities.
          </p>

          <div className="project-snapshot">
            <div>
              <strong>Role</strong>
              <span>Sole Developer</span>
            </div>

            <div>
              <strong>Status</strong>
              <span>Actively Developing</span>
            </div>

            <div>
              <strong>Focus</strong>
              <span>AI • FinTech • Cybersecurity</span>
            </div>
          </div>

          <a href="/growthpilot" className="primary-button">
            Read Case Study
          </a>
        </div>

        <div className="featured-project-panel">
          <div className="project-stat">
            <span>PROJECT</span>
            <h3>GrowthPilot</h3>
          </div>

          <div className="project-stat">
            <span>TYPE</span>
            <p>Business Decision Support Platform</p>
          </div>

          <div className="project-stat">
            <span>STACK</span>
            <p>React • FastAPI • Python • SQLite</p>
          </div>

          <div className="project-stat">
            <span>STATUS</span>
            <p>Actively Developing</p>
          </div>

          <div className="project-stat">
            <span>FOCUS</span>
            <p>AI • Financial Technology • Cybersecurity</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProjectsSection;