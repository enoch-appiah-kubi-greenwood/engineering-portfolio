function HeroSection({ hero }) {
  return (
    <section className="section case-hero">
      <div className="case-hero-card">
        <p className="eyebrow">{hero.label}</p>

        <h1>GrowthPilot</h1>

        <h2>Helping entrepreneurs make better business decisions with AI.</h2>

        <p className="case-hero-copy">
          GrowthPilot combines pricing analytics, profitability modeling,
          structured AI reasoning, and intelligent workflows into one
          decision-support platform.
        </p>

        <div className="hero-actions">
          <a href="#architecture" className="primary-button">
            See How It Works
          </a>

          <a
            href="https://github.com/ebappiahkub10-code"
            className="secondary-button"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>

          <a href="/" className="secondary-button">
            Back Home
          </a>
        </div>

        <div className="case-tech-strip">
          <span>React</span>
          <span>FastAPI</span>
          <span>SQLite</span>
          <span>Machine Learning</span>
          <span>AI Reasoning</span>
        </div>

        <div className="case-metrics-grid">
          <div>
            <strong>15+</strong>
            <span>Business Analytics Capabilities</span>
          </div>

          <div>
            <strong>7+</strong>
            <span>Integrated Technologies</span>
          </div>

          <div>
            <strong>6</strong>
            <span>Major Product Iterations</span>
          </div>

          <div>
            <strong>AI</strong>
            <span>Decision Support Platform</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;