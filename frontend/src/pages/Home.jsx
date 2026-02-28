import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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

            {/* Code Preview */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-500">example.js</span>
                </div>
                <div className="p-6 text-left font-mono text-sm">
                  <div className="text-gray-500">1</div>
                  <div className="text-gray-300">
                    2 <span className="text-purple-400">function</span>{" "}
                    <span className="text-blue-400">analyzeCode</span>() {"{"}
                  </div>
                  <div className="text-gray-300">
                    3 <span className="text-purple-400">const</span> result ={" "}
                    <span className="text-green-400">'AI-powered review'</span>;
                  </div>
                  <div className="text-gray-300">
                    4 <span className="text-purple-400">return</span> result;
                  </div>
                  <div className="text-gray-300">5 {"}"}</div>
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
