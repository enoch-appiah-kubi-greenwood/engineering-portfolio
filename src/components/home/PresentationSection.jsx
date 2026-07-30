import { Link } from "react-router-dom";

function PresentationSection() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Presentations & Innovation</p>

        <h2>Using technology to improve everyday experiences.</h2>

        <p>
          Beyond building software, I enjoy exploring how thoughtful technology
          can solve real-world problems. This concept presentation reimagines
          public transit accessibility through Apple Maps and CTA integration.
        </p>
      </div>

      <article className="presentation-card">
        <div>
          <span className="project-role-label">FEATURED PRESENTATION</span>

          <h3>Accessible Route for Everyone</h3>

          <p>
            An Apple Maps accessibility concept proposing real-time CTA elevator
            status, accessibility-aware navigation, crowd information, and
            community reporting to improve travel for riders with mobility
            needs.
          </p>
        </div>

        <Link
          to="/accessible-route"
          className="primary-button"
        >
          View Presentation
        </Link>
      </article>
    </section>
  );
}

export default PresentationSection;