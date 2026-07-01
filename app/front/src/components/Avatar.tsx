import { useState } from "react";
import { useContent } from "../hooks/useContent";

interface AvatarProps {
  name: string;
  src?: string;
  onOpen?: (src: string) => void;
}

function initialsOf(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function Avatar({ name, src, onOpen }: AvatarProps) {
  const { c } = useContent();
  const [broken, setBroken] = useState(false);

  if (src && !broken) {
    return (
      <button
        type="button"
        className="avatar avatar-btn"
        onClick={() => onOpen?.(src)}
        aria-label={`${c.a11y.openPhoto}: ${name}`}
      >
        <img src={src} alt={name} onError={() => setBroken(true)} />
      </button>
    );
  }

  return (
    <span className="avatar avatar-fallback" aria-hidden="true">
      {initialsOf(name)}
    </span>
  );
}
