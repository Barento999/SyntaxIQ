const AIAnalysisIllustration = () => {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full">
      {/* Central AI Core */}
      <g className="animate-pulse">
        <circle
          cx="300"
          cy="300"
          r="100"
          fill="url(#coreGradient)"
          opacity="0.3"
        />
        <circle cx="300" cy="300" r="70" fill="url(#coreGradient2)" />
        <circle cx="300" cy="300" r="50" fill="#10b981" opacity="0.5" />
      </g>

      {/* Orbiting Elements - Bug Detection */}
      <g
        className="animate-spin-slow"
        style={{ transformOrigin: "300px 300px" }}>
        <circle
          cx="300"
          cy="150"
          r="30"
          fill="#1a1a1a"
          stroke="#ef4444"
          strokeWidth="2"
        />
        <path
          d="M 290 145 L 295 155 L 310 140"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="300"
          y="190"
          textAnchor="middle"
          fill="#ef4444"
          fontSize="12"
          fontWeight="bold">
          Bug
        </text>
      </g>

      {/* Orbiting Elements - Security */}
      <g
        className="animate-spin-slow"
        style={{ transformOrigin: "300px 300px", animationDelay: "1s" }}>
        <circle
          cx="450"
          cy="300"
          r="30"
          fill="#1a1a1a"
          stroke="#f59e0b"
          strokeWidth="2"
        />
        <path
          d="M 450 285 L 450 295 M 440 290 L 460 290 M 445 285 L 455 285 M 445 295 L 455 295"
          stroke="#f59e0b"
          strokeWidth="2"
        />
        <text
          x="490"
          y="305"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="12"
          fontWeight="bold">
          Security
        </text>
      </g>

      {/* Orbiting Elements - Performance */}
      <g
        className="animate-spin-slow"
        style={{ transformOrigin: "300px 300px", animationDelay: "2s" }}>
        <circle
          cx="300"
          cy="450"
          r="30"
          fill="#1a1a1a"
          stroke="#10b981"
          strokeWidth="2"
        />
        <path
          d="M 295 440 L 305 450 L 295 460"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="300"
          y="490"
          textAnchor="middle"
          fill="#10b981"
          fontSize="12"
          fontWeight="bold">
          Speed
        </text>
      </g>

      {/* Orbiting Elements - Code Quality */}
      <g
        className="animate-spin-slow"
        style={{ transformOrigin: "300px 300px", animationDelay: "3s" }}>
        <circle
          cx="150"
          cy="300"
          r="30"
          fill="#1a1a1a"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        <path
          d="M 145 295 L 150 305 L 155 295"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="110"
          y="305"
          textAnchor="middle"
          fill="#3b82f6"
          fontSize="12"
          fontWeight="bold">
          Quality
        </text>
      </g>

      {/* Data Streams */}
      <g className="animate-pulse">
        <path
          d="M 300 230 L 300 150"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.5"
        />
        <path
          d="M 370 300 L 450 300"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.5"
        />
        <path
          d="M 300 370 L 300 450"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.5"
        />
        <path
          d="M 230 300 L 150 300"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.5"
        />
      </g>

      {/* Center Icon */}
      <g>
        <path
          d="M 285 290 L 295 300 L 315 280"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="animate-pulse"
        />
      </g>

      {/* Gradients */}
      <defs>
        <radialGradient id="coreGradient">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </radialGradient>
        <radialGradient id="coreGradient2">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default AIAnalysisIllustration;
