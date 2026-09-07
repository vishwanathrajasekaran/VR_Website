import { useEffect, useState } from "react";

// Client-side reachability check. Uses no-cors mode since these are
// cross-origin subdomains — that means we can't read the actual HTTP
// status, only whether the request resolved at all (network/DNS/TLS
// level). Good enough to catch "this subdomain is actually down",
// which is the honest claim we're making with the label.
export function useLiveCheck(url, { timeout = 6000 } = {}) {
  const [state, setState] = useState("checking"); // checking | responding | unreachable

  useEffect(() => {
    if (!url) {
      setState("unreachable");
      return;
    }
    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    fetch(url, { mode: "no-cors", cache: "no-store", signal: controller.signal })
      .then(() => {
        if (!cancelled) setState("responding");
      })
      .catch(() => {
        if (!cancelled) setState("unreachable");
      })
      .finally(() => clearTimeout(timer));

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timer);
    };
  }, [url, timeout]);

  return state;
}
