function ProblemSection({ problem }) {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">{problem.eyebrow}</p>
        <h2>{problem.title}</h2>
        <p>{problem.body}</p>
      </div>
    </section>
  );
}

export default ProblemSection;