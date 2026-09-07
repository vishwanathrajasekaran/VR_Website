import { projects } from "../data.js";

export function Projects() {
  return (
    <section id="projects">
      <div className="col">
        <p className="eyebrow">projects</p>
        <h2 className="heading">Weekend builds, running in production.</h2>

        {projects.map((project) => (
          <div className="project" key={project.name}>
            <div className="project__head">
              <span className="project__name">{project.name}</span>
              <span className="status" data-state={project.status}>
                <span className="status__dot" />
                {project.statusLabel}
              </span>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
