function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="eyebrow">AI • FINTECH • CYBERSECURITY</p>

        <h1>
          Building intelligent systems that help people and businesses make
          better decisions.
        </h1>

        <p className="hero-copy">
          I’m Enoch Appiah-Kubi, a software engineer focused on AI, financial
          technology, and cybersecurity. I enjoy building products that combine
          thoughtful engineering, intelligent systems, and great user
          experiences.
        </p>

        <div className="hero-actions">
          <a href="/growthpilot" className="primary-button">
            Explore GrowthPilot
          </a>
          <a href="#engineering-projects" className="secondary-button">
            Browse Projects
          </a>
        </div>
      </div>

      <div className="hero-product-frame">
        <div className="hero-window-bar">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <p>GrowthPilot Workspace</p>
        </div>

        <img
          src="/images/growthpilot/workspace-hero.png"
          alt="GrowthPilot AI workspace showing a business question, structured response, and active decision workspace"
        />
      </div>
    </section>
  );
}

export default Hero;