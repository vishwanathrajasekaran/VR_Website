import { useEffect, useState } from "react";

const STORAGE_KEY = "vr-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
}

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="10" cy="10" r="3.6" />
      <path d="M10 1.6v2.1M10 16.3v2.1M3.5 3.5l1.5 1.5M15 15l1.5 1.5M1.6 10h2.1M16.3 10h2.1M3.5 16.5L5 15M15 5l1.5-1.5" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M17 11.5A7 7 0 1 1 8.5 3a5.5 5.5 0 0 0 8.5 8.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function ThemeToggle({ theme, toggle, variant = "rail" }) {
  const label = theme === "dark" ? "Light mode" : "Dark mode";
  if (variant === "mobile") {
    return (
      <button className="rail-mobile__theme-toggle" onClick={toggle} aria-label={label} title={label}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    );
  }
  return (
    <button className="theme-toggle" onClick={toggle} aria-label={label}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
