import { useState } from "react";

interface PortraitProps {
  src?: string;
  alt: string;
  initials: string;
}

export function Portrait({ src, alt, initials }: PortraitProps) {
  const [failed, setFailed] = useState(false);
  const showFallback = !src || failed;

  if (showFallback) {
    return (
      <div className="portrait-fallback" role="img" aria-label={alt}>
        <span className="portrait-fallback-orb" aria-hidden="true" />
        <span className="portrait-fallback-ring" aria-hidden="true">
          <span className="portrait-fallback-mono">{initials}</span>
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={900}
      height={1350}
      fetchPriority="high"
      onError={() => setFailed(true)}
    />
  );
}
