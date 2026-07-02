import socials from "../../data/socials";

function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-card">
        <p className="eyebrow">Let’s Connect</p>

        <h2>
          Open to software engineering, AI, fintech, and cybersecurity
          opportunities.
        </h2>

        <p>
          I’m looking for internship opportunities where I can contribute to
          meaningful engineering work, keep growing technically, and build
          software that helps people make better decisions.
        </p>

        <div className="contact-actions">
          <a
            href={socials.resume}
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>

          <a
            href={socials.github}
            className="secondary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={socials.linkedin}
            className="secondary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href={`mailto:${socials.email}`} className="secondary-button">
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;