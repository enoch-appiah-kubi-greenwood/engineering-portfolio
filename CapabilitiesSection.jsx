function CapabilitiesSection({ capabilities }) {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Platform Capabilities</p>

        <h2>What GrowthPilot can do.</h2>
      </div>

      <div className="currently-building-grid">
        {capabilities.map((capability) => (
          <article className="building-card" key={capability}>
            <h3>{capability}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CapabilitiesSection;