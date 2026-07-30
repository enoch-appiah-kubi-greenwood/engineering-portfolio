function AccessibleRoutePage() {
  return (
    <>
      <section className="section case-hero">
        <div className="case-hero-card">
          <p className="eyebrow">Presentation & Innovation</p>

          <h1>Accessible Route for Everyone</h1>

          <h2>
            Reimagining public transit accessibility through Apple Maps and CTA
            integration.
          </h2>

          <p className="case-hero-copy">
            This team presentation explores how real-time elevator status,
            accessibility-aware routing, crowd information, and community
            reporting could improve the experience of navigating Chicago's CTA
            system for riders with mobility needs.
          </p>

          <div className="hero-actions">
            <a
              href="/presentations/accessible-route-for-everyone.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Open Presentation
            </a>

            <a href="/" className="secondary-button">
              Back Home
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Overview</p>

          <h2>Designing technology with accessibility in mind.</h2>

          <p>
            Working as part of a multidisciplinary team, we explored how Apple
            Maps could better support public transit riders by integrating
            real-time CTA accessibility information. Our concept focused on
            reducing uncertainty and improving confidence for users who depend
            on elevators and accessible routes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Key Ideas</p>

          <h2>Highlights from the proposal.</h2>
        </div>

        <div className="currently-building-grid">
          <article className="building-card">
            <h3>Real-Time Elevator Status</h3>
            <p>
              Live operational updates to help riders plan reliable routes.
            </p>
          </article>

          <article className="building-card">
            <h3>Accessibility-Aware Navigation</h3>
            <p>
              Route recommendations that prioritize accessible paths.
            </p>
          </article>

          <article className="building-card">
            <h3>Community Reporting</h3>
            <p>
              Allow riders to report accessibility issues and improve awareness.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default AccessibleRoutePage;