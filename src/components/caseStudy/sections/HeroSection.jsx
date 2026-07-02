function HeroSection({ hero }) {
  return (
    <section className="section case-hero">
      <div className="section-header">
        <p className="eyebrow">{hero.label}</p>

        <h1>{hero.title}</h1>

        <p>{hero.subtitle}</p>

        <div className="hero-actions">
          <a
            href="https://github.com/ebappiahkub10-code"
            className="primary-button"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>

          <a href="/" className="secondary-button">
            Back Home
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;