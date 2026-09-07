import { useEffect, useRef, useState } from "react";
import { profile } from "../data.js";

const LINES = [
  { prompt: "$", text: "whoami --role" },
  { prompt: ">", text: "Automation Engineer, evolving toward SDET" },
  { prompt: "$", text: "status --check" },
  { prompt: ">", text: "600+ test cases scripted · 1,000+ running in parallel · all green" },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);
  return reduced;
}

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const [displayLines, setDisplayLines] = useState(reducedMotion ? LINES : []);
  const [typingLine, setTypingLine] = useState("");
  const ranRef = useRef(false);

  useEffect(() => {
    if (reducedMotion || ranRef.current) return;
    ranRef.current = true;

    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    function typeNextChar() {
      if (cancelled) return;
      const line = LINES[lineIndex];
      if (!line) return;

      if (charIndex <= line.text.length) {
        setTypingLine(line.text.slice(0, charIndex));
        charIndex++;
        setTimeout(typeNextChar, line.prompt === "$" ? 32 : 14);
      } else {
        setDisplayLines((prev) => [...prev, line]);
        setTypingLine("");
        lineIndex++;
        charIndex = 0;
        if (lineIndex < LINES.length) {
          setTimeout(typeNextChar, 260);
        }
      }
    }

    const start = setTimeout(typeNextChar, 300);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [reducedMotion]);

  const currentLine = LINES[displayLines.length];

  return (
    <section id="hero" className="hero">
      <div className="col">
        <p className="eyebrow">vishwanathrajasekaran.in</p>

        <div className="terminal" aria-hidden={false}>
          {displayLines.map((line, i) => (
            <div key={i}>
              <span className="terminal__prompt">{line.prompt}</span> {line.text}
            </div>
          ))}
          {!reducedMotion && currentLine && (
            <div>
              <span className="terminal__prompt">{currentLine.prompt}</span> {typingLine}
              <span className="terminal__cursor" />
            </div>
          )}
        </div>

        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title} — based in {profile.location}.</p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
            View projects
          </a>
          <a className="btn btn--outline" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn--outline" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
