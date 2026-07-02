function JournalSection({ journal }) {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Engineering Insights</p>

        <h2>Lessons that shaped the project.</h2>

        <p>
          Building GrowthPilot wasn't just about writing code. It was about
          learning how product decisions, architecture, and engineering judgment
          influence the quality of software.
        </p>
      </div>

      <div className="currently-building-grid">
        {journal.map((entry) => (
          <article className="building-card" key={entry.number}>
            <span>{entry.number}</span>

            <h3>{entry.title}</h3>

            <p>{entry.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default JournalSection;