function FutureSection({ futureVision }) {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Future Direction</p>

        <h2>Where GrowthPilot is heading.</h2>

        <p>
          GrowthPilot continues to evolve through thoughtful engineering rather
          than rapid feature expansion. The focus remains on building reliable,
          understandable, and genuinely useful decision-support capabilities.
        </p>
      </div>

      <div className="currently-building-grid">
        {futureVision.map((item) => (
          <article className="building-card" key={item.title}>
            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FutureSection;