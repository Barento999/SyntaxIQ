import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AIAnalysisIllustration from "../components/AIAnalysisIllustration";
import CodeReviewIllustration from "../components/CodeReviewIllustration";

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "AI-Powered Analysis",
      description:
        "Leverage Google Gemini 1.5 Pro for intelligent code review and suggestions",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      title: "Bug Detection",
      description:
        "Automatically identify bugs with severity levels and fix recommendations",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Security Scanning",
      description:
        "Detect vulnerabilities and get mitigation strategies for secure code",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Performance Tips",
      description:
        "Optimize your code with AI-driven performance improvement suggestions",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Code Quality",
      description:
        "Follow best practices with detailed code quality recommendations",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer",
      company: "TechCorp",
      content:
        "SyntaxIQ has transformed how we review code. It catches issues we might have missed and saves hours of manual review time.",
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "Tech Lead",
      company: "StartupXYZ",
      content:
        "The AI-powered suggestions are incredibly accurate. It's like having a senior developer reviewing every line of code.",
      avatar: "MR",
    },
    {
      name: "Emily Watson",
      role: "Full Stack Engineer",
      company: "DevStudio",
      content:
        "Best code review tool I've used. The security scanning alone has prevented multiple vulnerabilities from reaching production.",
      avatar: "EW",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50">
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
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                SyntaxIQ
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white font-medium transition-colors text-sm">
                Pricing
              </Link>
              <Link
                to="/docs"
                className="text-gray-300 hover:text-white font-medium transition-colors text-sm">
                Docs
              </Link>
              <Link
                to="/login"
                className="text-gray-300 hover:text-white font-medium transition-colors text-sm">
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black px-5 py-2 rounded-lg font-semibold transition-all shadow-lg shadow-green-500/50 hover:shadow-green-500/70 text-sm">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 shadow-lg">
            <code className="text-green-400 text-sm font-mono">{"<AI />"}</code>
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 shadow-lg">
            <code className="text-green-400 text-sm font-mono">{"{ }"}</code>
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float-slow">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 shadow-lg">
            <code className="text-green-400 text-sm font-mono">{"=> {}"}</code>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm text-gray-300">
                Powered by Google Gemini 1.5 Pro
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Elevate Your Code
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                with AI Reviews
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get instant, comprehensive code analysis. Detect bugs, security
              issues, and performance bottlenecks in seconds with AI-powered
              intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/register"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 hover:scale-105 text-black">
                <span className="relative z-10">Start Reviewing Free</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl font-bold text-lg transition-all border border-white/10">
                Learn More
              </a>
            </div>

            {/* Animated Code Preview with AI Analysis */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Code Editor */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-white/10">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <span className="text-xs text-gray-500">example.js</span>
                  </div>
                  <div className="p-6 text-left font-mono text-sm space-y-1">
                    <div className="text-gray-500">1</div>
                    <div className="text-gray-300 animate-fade-in">
                      2 <span className="text-purple-400">function</span>{" "}
                      <span className="text-blue-400">calculateTotal</span>
                      (items) {"{"}
                    </div>
                    <div className="text-gray-300 animate-fade-in-delayed">
                      3 <span className="text-purple-400">let</span> total ={" "}
                      <span className="text-orange-400">0</span>;
                    </div>
                    <div className="text-gray-300 animate-fade-in-delayed-2">
                      4 <span className="text-purple-400">for</span> (
                      <span className="text-purple-400">let</span> i ={" "}
                      <span className="text-orange-400">0</span>; i {"<"}{" "}
                      items.length; i++) {"{"}
                    </div>
                    <div className="text-gray-300 animate-fade-in-delayed-3">
                      5 total += items[i];
                    </div>
                    <div className="text-gray-300">6 {"}"}</div>
                    <div className="text-gray-300">
                      7 <span className="text-purple-400">return</span> total;
                    </div>
                    <div className="text-gray-300">8 {"}"}</div>
                  </div>
                </div>

                {/* AI Analysis Result */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-green-500/30 shadow-2xl overflow-hidden animate-slide-in-right">
                  <div className="flex items-center justify-between px-6 py-3 bg-green-500/10 border-b border-green-500/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-green-400 font-semibold">
                        AI Analysis
                      </span>
                    </div>
                    <svg
                      className="w-4 h-4 text-green-400 animate-spin-slow"
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
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start space-x-3 animate-fade-in">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-yellow-400 font-semibold">
                          Performance Issue
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Use reduce() for better performance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 animate-fade-in-delayed">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-green-400 font-semibold">
                          Code Quality
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Good function naming
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 animate-fade-in-delayed-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-blue-400 font-semibold">
                          Suggestion
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Add input validation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-black border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all">
                  <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Illustration */}
          <div className="max-w-md mx-auto mb-16">
            <AIAnalysisIllustration />
          </div>

          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need for comprehensive code analysis in one
              platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  activeFeature === index
                    ? "ring-2 ring-green-500 scale-105"
                    : ""
                }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-green-500/50">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                12+ Languages Supported
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Analyze code in your favorite programming language
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black px-8 py-4 rounded-xl border border-white/10 hover:border-green-500/50 transition-all hover:scale-110 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-xl transition-all"></div>
                <span className="relative text-white font-semibold">
                  {lang}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Get started in three simple steps
            </p>
          </div>

          {/* Illustration */}
          <div className="max-w-3xl mx-auto mb-16">
            <CodeReviewIllustration />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Paste Your Code",
                description:
                  "Simply paste your code into our Monaco editor and select the programming language",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "AI Analysis",
                description:
                  "Our AI analyzes your code for bugs, security issues, performance, and quality",
                icon: (
                  <svg
                    className="w-8 h-8"
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
                ),
              },
              {
                step: "3",
                title: "Get Results",
                description:
                  "Receive detailed feedback with suggestions and refactored code examples",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/50">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Loved by Developers
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              See what developers are saying about SyntaxIQ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Quality Metrics Section */}
      <div className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Comprehensive Code Analysis
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get detailed insights into every aspect of your code
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bug Detection",
                description:
                  "Identify logical errors, runtime exceptions, and edge cases before they reach production",
                metrics: [
                  "Syntax Errors",
                  "Logic Bugs",
                  "Runtime Issues",
                  "Edge Cases",
                ],
                color: "red",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                ),
              },
              {
                title: "Security Analysis",
                description:
                  "Detect vulnerabilities, injection attacks, and security best practice violations",
                metrics: [
                  "SQL Injection",
                  "XSS Attacks",
                  "Auth Issues",
                  "Data Leaks",
                ],
                color: "yellow",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
              },
              {
                title: "Performance Optimization",
                description:
                  "Find bottlenecks, memory leaks, and inefficient algorithms in your codebase",
                metrics: [
                  "Time Complexity",
                  "Memory Usage",
                  "API Calls",
                  "Database Queries",
                ],
                color: "green",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all"></div>
                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-${item.color}-500/20 rounded-xl flex items-center justify-center mb-6 text-${item.color}-400`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Perfect For Every Developer
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Whether you're solo or in a team, SyntaxIQ adapts to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Solo Developers",
                description:
                  "Get instant feedback without waiting for code reviews",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
                benefits: [
                  "24/7 availability",
                  "Instant feedback",
                  "Learn best practices",
                ],
              },
              {
                title: "Startups",
                description: "Ship faster with automated code quality checks",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                benefits: [
                  "Reduce review time",
                  "Maintain quality",
                  "Scale efficiently",
                ],
              },
              {
                title: "Enterprise Teams",
                description:
                  "Standardize code quality across large organizations",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                benefits: [
                  "Consistent standards",
                  "Team collaboration",
                  "Compliance ready",
                ],
              },
              {
                title: "Open Source",
                description: "Help contributors write better code from day one",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                benefits: [
                  "Onboard faster",
                  "Maintain quality",
                  "Community growth",
                ],
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 text-green-400 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <svg
                          className="w-4 h-4 text-green-400 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Demo Section */}
      <div className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                See It In Action
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Watch how SyntaxIQ analyzes code in real-time
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-green-500/30 overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                {/* Before */}
                <div className="p-8 border-r border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Before</h3>
                      <p className="text-sm text-gray-400">Problematic Code</p>
                    </div>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-500">1</div>
                    <div className="text-gray-300">
                      2 <span className="text-purple-400">function</span>{" "}
                      <span className="text-red-400">getData</span>() {"{"}
                    </div>
                    <div className="text-gray-300">
                      3 <span className="text-purple-400">var</span> data =
                      fetchAPI();
                    </div>
                    <div className="text-gray-300 bg-red-500/10">
                      4{" "}
                      <span className="text-red-400">
                        // No error handling!
                      </span>
                    </div>
                    <div className="text-gray-300">
                      5 <span className="text-purple-400">return</span> data;
                    </div>
                    <div className="text-gray-300">6 {"}"}</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start text-sm">
                      <span className="text-red-400 mr-2">⚠️</span>
                      <span className="text-gray-400">No error handling</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <span className="text-red-400 mr-2">⚠️</span>
                      <span className="text-gray-400">
                        Using var instead of const/let
                      </span>
                    </div>
                    <div className="flex items-start text-sm">
                      <span className="text-red-400 mr-2">⚠️</span>
                      <span className="text-gray-400">No async/await</span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">After</h3>
                      <p className="text-sm text-gray-400">AI-Optimized Code</p>
                    </div>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-500">1</div>
                    <div className="text-gray-300">
                      2 <span className="text-purple-400">async function</span>{" "}
                      <span className="text-green-400">getData</span>() {"{"}
                    </div>
                    <div className="text-gray-300">
                      3 <span className="text-purple-400">try</span> {"{"}
                    </div>
                    <div className="text-gray-300">
                      4 <span className="text-purple-400">const</span> data ={" "}
                      <span className="text-purple-400">await</span> fetchAPI();
                    </div>
                    <div className="text-gray-300">
                      5 <span className="text-purple-400">return</span> data;
                    </div>
                    <div className="text-gray-300">
                      6 {"}"} <span className="text-purple-400">catch</span>{" "}
                      (error) {"{"}
                    </div>
                    <div className="text-gray-300">7 console.error(error);</div>
                    <div className="text-gray-300">
                      8 <span className="text-purple-400">throw</span> error;
                    </div>
                    <div className="text-gray-300">9 {"}"}</div>
                    <div className="text-gray-300">10 {"}"}</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start text-sm">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-300">
                        Proper error handling
                      </span>
                    </div>
                    <div className="flex items-start text-sm">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-300">
                        Modern const declaration
                      </span>
                    </div>
                    <div className="flex items-start text-sm">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-300">Async/await pattern</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Why Choose SyntaxIQ?
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              See how we compare to traditional code review methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Review */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-red-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Traditional Review
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Takes hours or days",
                  "Depends on reviewer availability",
                  "Inconsistent feedback quality",
                  "Limited to human knowledge",
                  "Can miss subtle issues",
                  "Expensive for teams",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SyntaxIQ */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-green-500/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">SyntaxIQ</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Instant results in seconds",
                  "Available 24/7",
                  "Consistent AI-powered analysis",
                  "Trained on millions of code samples",
                  "Catches even subtle bugs",
                  "Affordable for all team sizes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats & Numbers Section */}
      <div className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Trusted by Developers Worldwide
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "1M+",
                label: "Code Reviews",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                number: "50K+",
                label: "Active Users",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                number: "99.9%",
                label: "Accuracy Rate",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                number: "10ms",
                label: "Avg Response Time",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How accurate is the AI code review?",
                answer:
                  "Our AI is trained on millions of code samples and achieves 99.9% accuracy in detecting common bugs, security issues, and code quality problems. It's continuously learning and improving.",
              },
              {
                question: "What programming languages do you support?",
                answer:
                  "We support 12+ major programming languages including JavaScript, TypeScript, Python, Java, C++, C#, Go, Rust, PHP, Ruby, Swift, and Kotlin.",
              },
              {
                question: "Is my code secure?",
                answer:
                  "Absolutely. Your code is encrypted in transit and at rest. We never store your code permanently, and it's only used for analysis. We're SOC 2 Type II certified.",
              },
              {
                question: "Can I integrate SyntaxIQ with my CI/CD pipeline?",
                answer:
                  "Yes! We offer seamless integration with popular CI/CD tools like GitHub Actions, GitLab CI, Jenkins, and more through our API.",
              },
              {
                question: "What's included in the free plan?",
                answer:
                  "The free plan includes 10 code reviews per month, basic analysis features, and support for all programming languages. Perfect for individual developers.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-4 flex items-start">
                  <span className="text-green-400 mr-3">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-8">
                  <span className="text-green-400 mr-3">A:</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Ready to Improve Your Code?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of developers worldwide using AI to write better,
              safer, and faster code
            </p>
            <Link
              to="/register"
              className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl font-bold text-xl transition-all shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 hover:scale-105 text-black">
              <span>Get Started for Free</span>
              <svg
                className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <p className="text-sm text-gray-500 mt-6">
              No credit card required • Free forever plan available
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50">
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
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  SyntaxIQ
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Powered by Google Gemini AI for intelligent code analysis and
                reviews
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/docs"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/docs#endpoints"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    API Reference
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; 2024 SyntaxIQ. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
