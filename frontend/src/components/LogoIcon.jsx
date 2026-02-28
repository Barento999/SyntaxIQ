const LogoIcon = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`${className} relative group cursor-pointer`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>

          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#logoGradient)"
          opacity="0.1"
          className="group-hover:opacity-20 transition-opacity duration-300"
        />

        {/* Main circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="url(#logoGradient)"
          className="group-hover:scale-105 transition-transform duration-300"
          style={{ transformOrigin: "center" }}
        />

        {/* AI Brain/Circuit pattern */}
        <g filter="url(#glow)">
          {/* Center node */}
          <circle cx="50" cy="50" r="6" fill="white" opacity="0.9" />

          {/* Neural connections */}
          <line
            x1="50"
            y1="50"
            x2="35"
            y2="35"
            stroke="white"
            strokeWidth="2"
            opacity="0.7"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="50"
            x2="65"
            y2="35"
            stroke="white"
            strokeWidth="2"
            opacity="0.7"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="50"
            x2="35"
            y2="65"
            stroke="white"
            strokeWidth="2"
            opacity="0.7"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="50"
            x2="65"
            y2="65"
            stroke="white"
            strokeWidth="2"
            opacity="0.7"
            strokeLinecap="round"
          />

          {/* Outer nodes */}
          <circle cx="35" cy="35" r="4" fill="white" opacity="0.8" />
          <circle cx="65" cy="35" r="4" fill="white" opacity="0.8" />
          <circle cx="35" cy="65" r="4" fill="white" opacity="0.8" />
          <circle cx="65" cy="65" r="4" fill="white" opacity="0.8" />

          {/* Code brackets */}
          <path
            d="M 28 45 L 23 50 L 28 55"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
          <path
            d="M 72 45 L 77 50 L 72 55"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
        </g>

        {/* Animated pulse ring */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.3"
          className="animate-ping"
          style={{ animationDuration: "3s" }}
        />
      </svg>
    </div>
  );
};

export default LogoIcon;
