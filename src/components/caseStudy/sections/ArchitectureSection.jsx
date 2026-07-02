function ArchitectureSection({ architecture }) {
  return (
    <section className="section architecture-section" id="architecture">
      <div className="section-header">
        <p className="eyebrow">{architecture.eyebrow}</p>
        <h2>{architecture.title}</h2>
        <p>{architecture.body}</p>
      </div>

      <div className="architecture-svg-card">
        <svg
          className="architecture-svg"
          viewBox="0 0 1100 760"
          role="img"
          aria-labelledby="architecture-title architecture-desc"
        >
          <title id="architecture-title">GrowthPilot system architecture</title>
          <desc id="architecture-desc">
            Diagram showing React frontend connected to FastAPI backend, business
            engine, AI reasoning, SQLite database, and decision support output.
          </desc>

          <defs>
            <linearGradient id="nodeGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(124, 92, 255, 0.28)" />
              <stop offset="100%" stopColor="rgba(42, 197, 255, 0.16)" />
            </linearGradient>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <text x="550" y="58" textAnchor="middle" className="svg-title">
            GrowthPilot
          </text>
          <text x="550" y="92" textAnchor="middle" className="svg-subtitle">
            AI Business Decision Support Platform
          </text>

          <line x1="550" y1="116" x2="550" y2="155" className="svg-line" />

          <g className="svg-node">
            <rect x="350" y="155" width="400" height="92" rx="24" />
            <text x="550" y="194" textAnchor="middle" className="svg-node-title">
              React Frontend
            </text>
            <text x="550" y="224" textAnchor="middle" className="svg-node-subtitle">
              Workspace • Dashboard • Chat
            </text>
          </g>

          <line x1="550" y1="247" x2="550" y2="292" className="svg-line" />

          <g className="svg-node">
            <rect x="350" y="292" width="400" height="92" rx="24" />
            <text x="550" y="331" textAnchor="middle" className="svg-node-title">
              FastAPI Backend
            </text>
            <text x="550" y="361" textAnchor="middle" className="svg-node-subtitle">
              API Routes • Application Logic
            </text>
          </g>

          <line x1="550" y1="384" x2="550" y2="430" className="svg-line" />
          <line x1="230" y1="430" x2="870" y2="430" className="svg-line" />
          <line x1="230" y1="430" x2="230" y2="475" className="svg-line" />
          <line x1="550" y1="430" x2="550" y2="475" className="svg-line" />
          <line x1="870" y1="430" x2="870" y2="475" className="svg-line" />

          <g className="svg-node">
            <rect x="75" y="475" width="310" height="118" rx="24" />
            <text x="230" y="515" textAnchor="middle" className="svg-node-title">
              Business Engine
            </text>
            <text x="230" y="545" textAnchor="middle" className="svg-node-subtitle">
              Pricing • Forecasting
            </text>
            <text x="230" y="571" textAnchor="middle" className="svg-node-subtitle">
              Profitability Analytics
            </text>
          </g>

          <g className="svg-node">
            <rect x="395" y="475" width="310" height="118" rx="24" />
            <text x="550" y="515" textAnchor="middle" className="svg-node-title">
              AI Reasoning
            </text>
            <text x="550" y="545" textAnchor="middle" className="svg-node-subtitle">
              Structured Responses
            </text>
            <text x="550" y="571" textAnchor="middle" className="svg-node-subtitle">
              Recommendation Logic
            </text>
          </g>

          <g className="svg-node">
            <rect x="715" y="475" width="310" height="118" rx="24" />
            <text x="870" y="515" textAnchor="middle" className="svg-node-title">
              SQLite Database
            </text>
            <text x="870" y="545" textAnchor="middle" className="svg-node-subtitle">
              Products • Costs
            </text>
            <text x="870" y="571" textAnchor="middle" className="svg-node-subtitle">
              Business Data
            </text>
          </g>

          <line x1="230" y1="593" x2="230" y2="635" className="svg-line" />
          <line x1="550" y1="593" x2="550" y2="635" className="svg-line" />
          <line x1="870" y1="593" x2="870" y2="635" className="svg-line" />
          <line x1="230" y1="635" x2="870" y2="635" className="svg-line" />
          <line x1="550" y1="635" x2="550" y2="665" className="svg-line" />

          <g className="svg-node svg-node-accent">
            <rect x="350" y="665" width="400" height="78" rx="24" />
            <text x="550" y="699" textAnchor="middle" className="svg-node-title">
              Decision Support
            </text>
            <text x="550" y="726" textAnchor="middle" className="svg-node-subtitle">
              Clearer Business Recommendations
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}

export default ArchitectureSection;