import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Analysis",
      description:
        "Leverage Google Gemini 1.5 Pro for intelligent code review and suggestions",
    },
    {
      icon: "🐛",
      title: "Bug Detection",
      description:
        "Automatically identify bugs with severity levels and fix recommendations",
    },
    {
      icon: "🔒",
      title: "Security Scanning",
      description:
        "Detect vulnerabilities and get mitigation strategies for secure code",
    },
    {
      icon: "⚡",
      title: "Performance Tips",
      description:
        "Optimize your code with AI-driven performance improvement suggestions",
    },
    {
      icon: "✨",
      title: "Code Quality",
      description:
        "Follow best practices with detailed code quality recommendations",
    },
    {
      icon: "🔧",
      title: "Refactored Code",
      description:
        "Get complete refactored examples showing improved code structure",
    },
  ];

  const languages = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "Go",
    "Rust",
    "PHP",
    "Ruby",
    "Swift",
    "Kotlin",
  ];

  const stats = [
    { number: "12+", label: "Languages Supported" },
    { number: "100%", label: "AI-Powered" },
    { number: "24/7", label: "Available" },
    { number: "Free", label: "To Use" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                AI Code Review
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-white hover:text-blue-200 font-medium transition-colors">
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate Your Code with
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                AI-Powered Reviews
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get instant, comprehensive code analysis powered by Google Gemini
              AI. Detect bugs, security issues, and performance bottlenecks in
              seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1">
                Start Reviewing Code Free
              </Link>
              <a
                href="#features"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border-2 border-white/30">
                Learn More
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Everything you need for comprehensive code analysis in one
              platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Support for 12+ Languages
            </h2>
            <p className="text-xl text-blue-200">
              Analyze code in your favorite programming language
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all">
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-blue-200">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Paste Your Code
              </h3>
              <p className="text-blue-200">
                Simply paste your code into our Monaco editor and select the
                programming language
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                AI Analysis
              </h3>
              <p className="text-blue-200">
                Our AI analyzes your code for bugs, security issues,
                performance, and quality
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Get Results
              </h3>
              <p className="text-blue-200">
                Receive detailed feedback with suggestions and refactored code
                examples
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Improve Your Code?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join developers worldwide using AI to write better, safer, and
            faster code
          </p>
          <Link
            to="/register"
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1">
            Get Started for Free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-sm border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <span className="text-white font-bold">AI Code Review</span>
              </div>
              <p className="text-blue-200 text-sm">
                Powered by Google Gemini AI for intelligent code analysis
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-blue-200 text-sm">
            <p>&copy; 2024 AI Code Review Platform. All rights reserved.</p>
            <p className="mt-2">
              Built with ❤️ using MERN Stack and Google Gemini AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
