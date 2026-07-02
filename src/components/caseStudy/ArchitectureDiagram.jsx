function ArchitectureDiagram() {
  return (
    <section className="architecture-section">
      <div className="section-header">
        <p className="eyebrow">System Architecture</p>

        <h2>How GrowthPilot works.</h2>

        <p>
          GrowthPilot separates presentation, business logic, AI reasoning, and
          data persistence into distinct layers. This architecture makes the
          platform easier to extend as new capabilities are added.
        </p>
      </div>

      <div className="architecture-flow">
        <div className="architecture-node">
          <h3>React</h3>
          <p>User Interface</p>
        </div>

        <div className="architecture-arrow">↓</div>

        <div className="architecture-node">
          <h3>FastAPI</h3>
          <p>Application API</p>
        </div>

        <div className="architecture-arrow">↓</div>

        <div className="architecture-row">
          <div className="architecture-node">
            <h3>Business Logic</h3>
            <p>Pricing & Analytics</p>
          </div>

          <div className="architecture-node">
            <h3>AI Engine</h3>
            <p>Reasoning & Recommendations</p>
          </div>
        </div>

        <div className="architecture-arrow">↓</div>

        <div className="architecture-node">
          <h3>SQLite</h3>
          <p>Persistent Business Data</p>
        </div>

        <div className="architecture-arrow">↓</div>

        <div className="architecture-node accent-node">
          <h3>Decision Support</h3>
          <p>Business Recommendations</p>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureDiagram;