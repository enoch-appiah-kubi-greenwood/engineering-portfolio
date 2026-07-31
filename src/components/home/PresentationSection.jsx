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
        <a
          href="/presentations/accessible-route-for-everyone.pdf"
          target="_blank"
          rel="noreferrer"
          className="presentation-cover"
        >
          <img
            src="/presentations/accessible-route-cover.png"
            alt="Accessible Route for Everyone presentation cover"
            className="presentation-image"
          />
        </a>

        <div className="presentation-content">
          <span className="project-role-label">
            FEATURED PRESENTATION
          </span>

          <h3>Accessible Route for Everyone</h3>

          <p>
            An Apple Maps accessibility concept proposing real-time CTA elevator
            status, accessibility-aware navigation, crowd information, and
            community reporting to improve travel for riders with mobility
            needs.
          </p>

          <a
            href="/presentations/accessible-route-for-everyone.pdf"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            View Presentation
          </a>
        </div>
      </article>
    </section>
  );
}

export default PresentationSection;