import { experience } from "../data.js";

export function Experience() {
  return (
    <section id="experience">
      <div className="col">
        <p className="eyebrow">experience</p>
        <h2 className="heading">How I got here.</h2>

        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline__item" key={item.role}>
              <div className="timeline__period">{item.period}</div>
              <div>
                <div className="timeline__role">{item.role}</div>
                <div className="timeline__org">{item.org}</div>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
