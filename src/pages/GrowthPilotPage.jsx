import growthPilot from "../data/growthpilot";
import EvolutionTimeline from "../components/caseStudy/EvolutionTimeline";

function GrowthPilotPage() {
  return (
    <>
      <section className="section case-hero">
        <div className="section-header">
          <p className="eyebrow">GrowthPilot Case Study</p>
          <h1>{growthPilot.title}</h1>
          <p>{growthPilot.tagline}</p>
        </div>
      </section>

      <section className="section case-section">
        <div className="section-header">
          <p className="eyebrow">The Challenge</p>
          <h2>Helping entrepreneurs make clearer business decisions.</h2>
          <p>{growthPilot.challenge}</p>
        </div>
      </section>

      <section className="section case-section">
        <div className="section-header">
          <p className="eyebrow">Product Evolution</p>
          <h2>From pricing calculator to AI decision workspace.</h2>
          <p>
            GrowthPilot evolved through multiple stages, each adding a new layer
            of engineering depth, product thinking, and decision-support
            capability.
          </p>
        </div>

        <EvolutionTimeline items={growthPilot.evolution} />
      </section>
    </>
  );
}

export default GrowthPilotPage;