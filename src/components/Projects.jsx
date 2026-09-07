import { useState } from "react";
import { projects } from "../data.js";
import { useLiveCheck } from "../useLiveCheck.js";

function LivePing({ url }) {
  const state = useLiveCheck(url);
  const label = { checking: "checking…", responding: "responding", unreachable: "not responding" }[state];
  return (
    <span className="ping" data-state={state}>
      <span className="ping__dot" />
      {label}
    </span>
  );
}

function CaseStudy({ data }) {
  return (
    <div className="case-study">
      <div className="case-study__block">
        <span className="case-study__label">Problem</span>
        <p>{data.problem}</p>
      </div>
      <div className="case-study__block">
        <span className="case-study__label">Approach</span>
        <p>{data.approach}</p>
      </div>
      <div className="case-study__block">
        <span className="case-study__label">Challenges &amp; fixes</span>
        <ul>
          {data.challenges.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
      <div className="case-study__block">
        <span className="case-study__label">Outcome</span>
        <p>{data.outcome}</p>
      </div>
    </div>
  );
}

export function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects">
      <div className="col">
        <p className="eyebrow">projects</p>
        <h2 className="heading">Weekend builds, running in production.</h2>

        {projects.map((project) => {
          const isOpen = expanded === project.name;
          return (
            <div className="project" key={project.name}>
              <div className="project__head">
                <span className="project__name">{project.name}</span>
                <span className="status" data-state={project.status}>
                  <span className="status__dot" />
                  {project.statusLabel}
                </span>
                <LivePing url={project.url} />
              </div>
              <p className="project__desc">{project.description}</p>
              <div className="project__stack">
                {project.stack.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project__actions">
                <a className="project__link" href={project.url} target="_blank" rel="noreferrer">
                  Visit site
                </a>
                {project.repo && (
                  <a className="project__link" href={project.repo} target="_blank" rel="noreferrer">
                    Source
                  </a>
                )}
                {project.caseStudy && (
                  <button
                    className="project__link project__link--btn"
                    onClick={() => setExpanded(isOpen ? null : project.name)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? "Hide case study" : "Case study"}
                  </button>
                )}
              </div>
              {project.caseStudy && isOpen && <CaseStudy data={project.caseStudy} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
