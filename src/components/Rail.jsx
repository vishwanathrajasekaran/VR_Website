import { profile } from "../data.js";
import { ThemeToggle } from "../useTheme.jsx";

const STAGES = [
  { id: "hero", label: "intro" },
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "projects", label: "projects" },
  { id: "recommendations", label: "recs" },
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

export function Rail({ activeIndex, theme, toggleTheme }) {
  return (
    <nav className="rail" aria-label="Page sections">
      <div>
        <div className="rail__top">
          <span className="rail__mark-wrap">
            <img className="rail__mark" src="/assets/shield.png" alt="" />
          </span>
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
      <div>
        <div className="rail__foot">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <ThemeToggle theme={theme} toggle={toggleTheme} />
      </div>
    </nav>
  );
}

export function RailMobile({ activeIndex, theme, toggleTheme }) {
  const current = STAGES[activeIndex];
  return (
    <div className="rail-mobile">
      <span className="rail__mark-wrap">
        <img src="/assets/shield.png" alt="" />
      </span>
      <span className="rail-mobile__name">Vishwanath Rajasekaran</span>
      <span className="rail-mobile__progress">
        {String(activeIndex + 1).padStart(2, "0")}/{String(STAGES.length).padStart(2, "0")} · {current.label}
      </span>
      <ThemeToggle theme={theme} toggle={toggleTheme} variant="mobile" />
    </div>
  );
}

export { STAGES };
