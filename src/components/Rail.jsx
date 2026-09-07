import { profile } from "../data.js";

const STAGES = [
  { id: "hero", label: "intro" },
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
];

function stateFor(index, activeIndex) {
  if (index < activeIndex) return "done";
  if (index === activeIndex) return "current";
  return "pending";
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Rail({ activeIndex }) {
  return (
    <nav className="rail" aria-label="Page sections">
      <div>
        <div className="rail__top">
          <img className="rail__mark" src="/assets/shield.png" alt="" />
          <span className="rail__name">Vishwanath<br />Rajasekaran</span>
        </div>
        <ul className="rail__stages">
          {STAGES.map((stage, i) => (
            <li key={stage.id}>
              <button
                className="rail__stage"
                data-state={stateFor(i, activeIndex)}
                onClick={() => scrollTo(stage.id)}
              >
                <span className="rail__dot" />
                {stage.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="rail__foot">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </nav>
  );
}

export function RailMobile({ activeIndex }) {
  const current = STAGES[activeIndex];
  return (
    <div className="rail-mobile">
      <img src="/assets/shield.png" alt="" />
      <span className="rail-mobile__name">Vishwanath Rajasekaran</span>
      <span className="rail-mobile__progress">
        {String(activeIndex + 1).padStart(2, "0")}/{String(STAGES.length).padStart(2, "0")} · {current.label}
      </span>
    </div>
  );
}

export { STAGES };
