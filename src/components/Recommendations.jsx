import { recommendations } from "../data.js";

export function Recommendations() {
  if (!recommendations.length) return null;

  return (
    <section id="recommendations">
      <div className="col">
        <p className="eyebrow">recommendations</p>
        <h2 className="heading">What people I've worked with say.</h2>

        <div className="recs">
          {recommendations.map((r, i) => (
            <blockquote className="rec" key={i}>
              <p className="rec__quote">&ldquo;{r.quote}&rdquo;</p>
              <footer className="rec__attr">
                <span className="rec__name">{r.name}</span>
                <span className="rec__role">{r.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
