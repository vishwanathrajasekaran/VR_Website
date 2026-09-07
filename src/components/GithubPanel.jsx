import { useEffect, useState } from "react";
import { profile } from "../data.js";

export function GithubPanel() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${profile.githubHandle}`)
      .then((res) => {
        if (!res.ok) throw new Error("request failed");
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const memberSince = data?.created_at ? new Date(data.created_at).getFullYear() : null;

  return (
    <div className="gh-panel">
      <div className="gh-panel__head">
        <span className="gh-panel__live-dot" />
        live from github api
      </div>

      {error && (
        <p className="gh-panel__error">
          Couldn't reach the GitHub API right now — see the full profile at{" "}
          <a href={profile.github} target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>
            github.com/{profile.githubHandle}
          </a>.
        </p>
      )}

      {!error && !data && <p className="gh-panel__error">Fetching…</p>}

      {data && (
        <div className="gh-panel__stats">
          <div>
            <div className="gh-stat__value">{data.public_repos}</div>
            <div className="gh-stat__label">public repos</div>
          </div>
          <div>
            <div className="gh-stat__value">{data.followers}</div>
            <div className="gh-stat__label">followers</div>
          </div>
          {memberSince && (
            <div>
              <div className="gh-stat__value">{memberSince}</div>
              <div className="gh-stat__label">on github since</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
