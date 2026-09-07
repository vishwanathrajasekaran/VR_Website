import { profile } from "../data.js";

export function Contact() {
  const year = new Date().getFullYear();
  return (
    <section id="contact">
      <div className="col">
        <p className="eyebrow">contact</p>
        <h2 className="heading">Let's talk automation.</h2>

        <div className="contact__links">
          <a className="contact__link" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <span className="contact__link-sub">in/vishwanathrajasekaran</span>
          </a>
          <a className="contact__link" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
            <span className="contact__link-sub">@{profile.githubHandle}</span>
          </a>
        </div>

        <div className="footer">
          <span>{profile.name} · {profile.location}</span>
          <span>© {year}</span>
        </div>
      </div>
    </section>
  );
}
