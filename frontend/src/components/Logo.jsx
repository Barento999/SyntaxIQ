const Logo = ({ size = "md", showText = true, variant = "default" }) => {
  const sizes = {
    sm: { icon: "w-8 h-8", svg: "w-5 h-5", text: "text-base" },
    md: { icon: "w-10 h-10", svg: "w-6 h-6", text: "text-xl" },
    lg: { icon: "w-12 h-12", svg: "w-7 h-7", text: "text-2xl" },
    xl: { icon: "w-16 h-16", svg: "w-10 h-10", text: "text-3xl" },
  };

  const variants = {
    default: {
      bg: "bg-gradient-to-br from-blue-600 to-indigo-600",
      text: "text-gray-900",
      glow: "shadow-lg shadow-blue-500/50",
    },
    light: {
      bg: "bg-gradient-to-br from-blue-500 to-indigo-500",
      text: "text-white",
      glow: "shadow-xl shadow-blue-400/30",
    },
    dark: {
      bg: "bg-gradient-to-br from-blue-400 to-indigo-400",
      text: "text-white",
      glow: "shadow-2xl shadow-blue-300/40",
    },
  };

  const currentSize = sizes[size];
  const currentVariant = variants[variant];

  return (
    <div className="flex items-center space-x-3">
      <div
        className={`${currentSize.icon} ${currentVariant.bg} rounded-xl flex items-center justify-center ${currentVariant.glow} transform hover:scale-105 transition-all duration-300 relative overflow-hidden group`}>
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

        {/* AI Brain Icon */}
        <svg
          className={`${currentSize.svg} text-white relative z-10`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>

        {/* Sparkle effect */}
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`${currentSize.text} font-bold ${currentVariant.text} leading-tight`}>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              CodeReview AI
            </span>
          </span>
          <span className="text-xs text-gray-500 font-medium">
            Powered by Gemini
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
