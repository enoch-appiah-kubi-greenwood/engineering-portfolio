function ArchitectureSection({ architecture }) {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">{architecture.eyebrow}</p>

        <h2>{architecture.title}</h2>

        <p>{architecture.body}</p>
      </div>

      <div className="architecture-flow">
        {architecture.layers.map((layer, index) => (
          <div key={layer.name}>
            <div className="architecture-node">
              <h3>{layer.name}</h3>

              <p>{layer.detail}</p>
            </div>

            {index < architecture.layers.length - 1 && (
              <div className="architecture-arrow">↓</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArchitectureSection;