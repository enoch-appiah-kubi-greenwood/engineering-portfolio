function DecisionSection({ decisions }) {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Engineering Decisions</p>

        <h2>Important technical decisions made throughout development.</h2>

        <p>
          GrowthPilot evolved through decisions that supported scalability,
          maintainability, and reliable business analysis.
        </p>
      </div>

      <div className="currently-building-grid">
        {decisions.map((decision) => (
          <article className="building-card" key={decision.title}>
            <h3>{decision.title}</h3>

            <h4>Why</h4>
            <p>{decision.why}</p>

            <h4>Tradeoff</h4>
            <p>{decision.tradeoff}</p>

            <h4>Outcome</h4>
            <p>{decision.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DecisionSection;