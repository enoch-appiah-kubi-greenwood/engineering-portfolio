function SolutionSection({ solution }) {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">{solution.eyebrow}</p>
        <h2>{solution.title}</h2>
        <p>{solution.body}</p>
      </div>

      <div className="currently-building-grid">
        {solution.pillars.map((pillar) => (
          <article className="building-card" key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SolutionSection;