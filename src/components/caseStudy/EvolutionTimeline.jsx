function EvolutionTimeline({ items }) {
  return (
    <div className="evolution-timeline">
      {items.map((item, index) => (
        <article
          className={`timeline-item ${
            index % 2 === 0 ? "left" : "right"
          }`}
          key={item.id}
        >
          <div className="timeline-content">
            <span className="timeline-number">
              {String(item.id).padStart(2, "0")}
            </span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="timeline-lesson">
              <strong>Engineering Insight</strong>

              <p>{item.lesson}</p>
            </div>
          </div>

          <div className="timeline-image">
            <img src={item.image} alt={item.title} />
          </div>
        </article>
      ))}
    </div>
  );
}

export default EvolutionTimeline;