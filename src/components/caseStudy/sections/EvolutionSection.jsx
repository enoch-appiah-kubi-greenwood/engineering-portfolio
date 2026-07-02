import EvolutionTimeline from "../EvolutionTimeline";

function EvolutionSection({ evolution }) {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Product Evolution</p>

        <h2>How GrowthPilot evolved over time.</h2>

        <p>
          GrowthPilot did not begin as the platform it is today. Each iteration
          solved a new problem, refined the architecture, and expanded the
          platform's ability to support better business decisions.
        </p>
      </div>

      <EvolutionTimeline items={evolution} />
    </section>
  );
}

export default EvolutionSection;