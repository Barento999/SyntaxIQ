const CodeReviewIllustration = () => {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full">
      {/* Background */}
      <rect width="800" height="600" fill="transparent" />

      {/* Code Editor Window */}
      <g className="animate-float">
        <rect
          x="50"
          y="100"
          width="350"
          height="400"
          rx="12"
          fill="url(#gradient1)"
          stroke="#10b981"
          strokeWidth="2"
        />
        {/* Window Header */}
        <rect x="50" y="100" width="350" height="40" rx="12" fill="#1a1a1a" />
        <circle cx="70" cy="120" r="6" fill="#ef4444" />
        <circle cx="90" cy="120" r="6" fill="#f59e0b" />
        <circle
          cx="110"
          cy="120"
          r="6"
          fill="#10b981"
          className="animate-pulse"
        />

        {/* Code Lines */}
        <rect
          x="70"
          y="160"
          width="100"
          height="8"
          rx="4"
          fill="#10b981"
          opacity="0.6"
          className="animate-pulse"
        />
        <rect
          x="70"
          y="180"
          width="150"
          height="8"
          rx="4"
          fill="#34d399"
          opacity="0.5"
        />
        <rect
          x="90"
          y="200"
          width="120"
          height="8"
          rx="4"
          fill="#6ee7b7"
          opacity="0.4"
        />
        <rect
          x="90"
          y="220"
          width="180"
          height="8"
          rx="4"
          fill="#10b981"
          opacity="0.6"
        />
        <rect
          x="70"
          y="240"
          width="140"
          height="8"
          rx="4"
          fill="#34d399"
          opacity="0.5"
        />
        <rect
          x="90"
          y="260"
          width="100"
          height="8"
          rx="4"
          fill="#6ee7b7"
          opacity="0.4"
        />
        <rect
          x="70"
          y="280"
          width="160"
          height="8"
          rx="4"
          fill="#10b981"
          opacity="0.6"
        />

        {/* Cursor */}
        <rect
          x="230"
          y="280"
          width="2"
          height="10"
          fill="#10b981"
          className="animate-pulse"
        />
      </g>

      {/* AI Brain */}
      <g className="animate-float-delayed">
        <circle
          cx="600"
          cy="200"
          r="80"
          fill="url(#gradient2)"
          opacity="0.2"
          className="animate-pulse"
        />
        <circle cx="600" cy="200" r="60" fill="url(#gradient3)" />

        {/* Brain Pattern */}
        <path
          d="M 580 180 Q 590 170 600 180 T 620 180"
          stroke="#10b981"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M 580 200 Q 590 190 600 200 T 620 200"
          stroke="#34d399"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M 580 220 Q 590 210 600 220 T 620 220"
          stroke="#6ee7b7"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* AI Eyes */}
        <circle
          cx="585"
          cy="195"
          r="5"
          fill="#10b981"
          className="animate-pulse"
        />
        <circle
          cx="615"
          cy="195"
          r="5"
          fill="#10b981"
          className="animate-pulse"
        />
      </g>

      {/* Connection Lines */}
      <g className="animate-fade-in">
        <path
          d="M 400 300 Q 500 250 520 200"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
        <circle
          cx="520"
          cy="200"
          r="6"
          fill="#10b981"
          className="animate-pulse"
        />
      </g>

      {/* Check Marks */}
      <g className="animate-slide-in-right">
        <circle cx="650" cy="350" r="30" fill="#10b981" opacity="0.2" />
        <path
          d="M 640 350 L 648 358 L 665 340"
          stroke="#10b981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      <g className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
        <circle cx="650" cy="420" r="30" fill="#10b981" opacity="0.2" />
        <path
          d="M 640 420 L 648 428 L 665 410"
          stroke="#10b981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Floating Particles */}
      <circle
        cx="150"
        cy="80"
        r="4"
        fill="#10b981"
        opacity="0.6"
        className="animate-float"
      />
      <circle
        cx="700"
        cy="500"
        r="3"
        fill="#34d399"
        opacity="0.5"
        className="animate-float-delayed"
      />
      <circle
        cx="100"
        cy="500"
        r="5"
        fill="#6ee7b7"
        opacity="0.4"
        className="animate-float-slow"
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CodeReviewIllustration;
