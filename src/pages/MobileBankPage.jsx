function MobileBankPage() {
  const features = [
    "Password Hashing",
    "Persistent File Storage",
    "Deposits & Withdrawals",
    "Transaction History",
    "Account Management",
    "Console User Interface",
  ];

  const technologies = [
    "C++",
    "File I/O",
    "std::hash",
    "fstream",
    "filesystem",
    "vector",
  ];

  return (
    <>
      <section className="section case-hero">
        <div className="case-hero-card">
          <p className="eyebrow">Completed Project</p>

          <h1>Mobile Bank</h1>

          <h2>
            A C++ console banking application demonstrating authentication,
            persistent storage, and transaction management.
          </h2>

          <p className="case-hero-copy">
            Mobile Bank was built to strengthen my understanding of software
            engineering fundamentals including secure credential handling, file
            persistence, and structured program design.
          </p>

          <div className="hero-actions">
            <a
              href="https://github.com/ebappiahkub10-code"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              View GitHub
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

          <h2>Building the foundations of secure software.</h2>

          <p>
            Mobile Bank simulates a simple banking system through a command-line
            interface. The application supports secure account creation,
            persistent storage, deposits, withdrawals, balance inquiries, and
            transaction history while demonstrating core C++ programming
            concepts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Core Features</p>

          <h2>Key functionality.</h2>
        </div>

        <div className="currently-building-grid">
          {features.map((feature) => (
            <article className="building-card" key={feature}>
              <h3>{feature}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">System Flow</p>

          <h2>How the application works.</h2>
        </div>

        <div className="architecture-svg-card">

User

↓

Console Interface

↓

Account Logic

↓

MobileBankDB.txt

↓

Persistent Storage

        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Technologies</p>

          <h2>Tools used throughout development.</h2>
        </div>

        <div className="case-tech-strip">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>
    </>
  );
}

export default MobileBankPage;
