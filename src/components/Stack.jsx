import { skillGroups } from "../data.js";

export function Stack() {
  return (
    <section id="stack">
      <div className="col">
        <p className="eyebrow">stack</p>
        <h2 className="heading">What I actually reach for.</h2>

        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <div className="skill-group__label">{group.category}</div>
            <div className="skill-group__tags">
              {group.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
