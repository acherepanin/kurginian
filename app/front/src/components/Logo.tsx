interface LogoProps {
  className?: string;
}

/**
 * Brand mark: a blossoming sprout — two green leaves opening around a golden
 * bud of new life. An analogy of birth / new beginnings, detailed with veins
 * and a two-tone fold. Minimal, no frame or background.
 */
export function Logo({ className }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="brand-leaf" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#3c7a36" />
          <stop offset="1" stopColor="#7cc061" />
        </linearGradient>
        <linearGradient id="brand-leaf-r" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#3c7a36" />
          <stop offset="1" stopColor="#7cc061" />
        </linearGradient>
        <linearGradient id="brand-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2d290" />
          <stop offset="1" stopColor="#c1913f" />
        </linearGradient>
        <linearGradient id="brand-gold-deep" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9a955" />
          <stop offset="1" stopColor="#a5761d" />
        </linearGradient>
      </defs>

      <path
        d="M20 31C13.2 29 8.3 22.4 8.5 14.6C14.2 16.8 18.9 22.5 20 31Z"
        fill="url(#brand-leaf)"
      />
      <path
        d="M20 31C26.8 29 31.7 22.4 31.5 14.6C25.8 16.8 21.1 22.5 20 31Z"
        fill="url(#brand-leaf-r)"
      />
      <g
        fill="none"
        stroke="#255022"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.4"
      >
        <path d="M19.4 30C16.5 24.5 12.8 19.8 9.4 16.4" />
        <path d="M20.6 30C23.5 24.5 27.2 19.8 30.6 16.4" />
      </g>

      <path
        d="M20 33C16.4 25.8 16.4 15 20 7.5C23.6 15 23.6 25.8 20 33Z"
        fill="url(#brand-gold-deep)"
      />
      <path
        d="M20 7.5C23.6 15 23.6 25.8 20 33L20 7.5Z"
        fill="url(#brand-gold)"
      />
      <path
        d="M20 10C20.4 18 20.4 26 20 31.5"
        fill="none"
        stroke="#8a6522"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
