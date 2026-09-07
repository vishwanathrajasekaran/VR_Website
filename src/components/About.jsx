import { about, profile } from "../data.js";
import { GithubPanel } from "./GithubPanel.jsx";

export function About() {
  const words = profile.tagline.replace(/\.$/, "").split(". ");

  return (
    <section id="about">
      <div className="col about">
        <p className="eyebrow">about</p>
        <h2 className="heading">Ten years in delivery, now shipping tests.</h2>

        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <div className="tagline-strip">
          {words.map((word) => (
            <span className="tagline-strip__word" key={word}>
              {word}
              <span className="tagline-strip__check">✓</span>
            </span>
          ))}
        </div>

        <GithubPanel />
      </div>
    </section>
  );
}
