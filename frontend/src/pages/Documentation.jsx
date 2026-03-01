import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", href: "#intro", id: "intro" },
        { name: "Quick Start", href: "#quickstart", id: "quickstart" },
        { name: "Installation", href: "#installation", id: "installation" },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
        { name: "AI Analysis", href: "#ai-analysis", id: "ai-analysis" },
        { name: "Review Types", href: "#review-types", id: "review-types" },
      ],
    },
    {
      title: "Features",
      items: [
        { name: "Code Analysis", href: "#analysis", id: "analysis" },
        { name: "Bug Detection", href: "#bugs", id: "bugs" },
        { name: "Security Scanning", href: "#security", id: "security" },
        {
          name: "Performance Tips",
          href: "#performance",
          id: "performance",
        },
      ],
    },
    {
      title: "API Reference",
      items: [
        { name: "Authentication", href: "#auth", id: "auth" },
        { name: "Endpoints", href: "#endpoints", id: "endpoints" },
        { name: "Webhooks", href: "#webhooks", id: "webhooks" },
        { name: "Rate Limits", href: "#limits", id: "limits" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

      {/* Navigation */}
      <Navbar />

      {/* Sidebar - Fixed at left */}
      <aside className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-black border-r border-white/10 overflow-y-auto z-40">
        <nav className="p-6 space-y-6">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.href}
                      onClick={() => setActiveSection(item.id)}
                      className={`text-sm transition-colors block py-1.5 px-3 rounded-lg ${
                        activeSection === item.id
                          ? "text-green-400 bg-green-500/10 font-semibold"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick Links */}
          <div className="pt-6 border-t border-white/10">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors block py-1.5 px-3 rounded-lg">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors block py-1.5 px-3 rounded-lg">
                  Sign Up
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@syntaxiq.ai"
                  className="text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors block py-1.5 px-3 rounded-lg">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main content with left margin for sidebar */}
      <div className="lg:ml-64">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <main>
            <div className="prose prose-invert max-w-none">
              <h1
                id="intro"
                className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl text-gray-400 mb-12">
                Learn how to integrate SyntaxIQ into your development workflow.
              </p>

              <h2
                id="quickstart"
                className="text-3xl font-bold text-white mt-16 mb-6">
                Quick Start
              </h2>
              <p className="text-gray-400 mb-6">
                Get started with SyntaxIQ in minutes. Follow these simple steps
                to submit your first code review.
              </p>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 my-8 border border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-400">
                    1
                  </span>
                  Create an Account
                </h3>
                <p className="text-gray-400 mb-6">
                  Sign up for a free account to get started. No credit card
                  required.
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black rounded-lg font-semibold transition-all shadow-lg shadow-green-500/50">
                  Create Account
                </Link>
              </div>

              <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                Step 2: Submit Your Code
              </h3>
              <p className="text-gray-400 mb-6">
                Navigate to your dashboard and paste your code into the editor.
                Select the programming language and click "Submit for Review".
              </p>

              <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto border border-white/10 my-6">
                <code>{`function example() {
  console.log('Hello, World!');
  return true;
}`}</code>
              </pre>

              <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                Step 3: Review Results
              </h3>
              <p className="text-gray-400 mb-4">
                Within seconds, you'll receive a comprehensive analysis
                including:
              </p>
              <ul className="space-y-3 mb-12">
                <li className="flex items-start text-gray-300">
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
                  Bug detection with severity levels
                </li>
                <li className="flex items-start text-gray-300">
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
                  Security vulnerability scanning
                </li>
                <li className="flex items-start text-gray-300">
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
                  Performance optimization suggestions
                </li>
                <li className="flex items-start text-gray-300">
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
                  Code quality recommendations
                </li>
                <li className="flex items-start text-gray-300">
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
                  Refactored code examples
                </li>
              </ul>

              <h2
                id="analysis"
                className="text-3xl font-bold text-white mt-16 mb-6">
                Code Analysis
              </h2>
              <p className="text-gray-400 mb-6">
                Our AI-powered analysis uses Google Gemini 1.5 Pro to provide
                intelligent feedback on your code.
              </p>

              <h3
                id="installation"
                className="text-2xl font-bold text-white mt-12 mb-6">
                Installation
              </h3>
              <p className="text-gray-400 mb-6">
                SyntaxIQ can be used directly through our web interface or
                integrated into your development workflow.
              </p>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10 mb-8">
                <h4 className="text-lg font-bold text-white mb-4">
                  Web Interface
                </h4>
                <p className="text-gray-400 mb-4">
                  Simply visit our dashboard and start reviewing code
                  immediately. No installation required.
                </p>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black rounded-lg font-semibold transition-all text-sm">
                  Go to Dashboard
                </Link>
              </div>

              <h3
                id="how-it-works"
                className="text-2xl font-bold text-white mt-12 mb-6">
                How It Works
              </h3>
              <p className="text-gray-400 mb-6">
                SyntaxIQ uses advanced AI models to analyze your code in
                real-time:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-green-400"
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
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    1. Code Submission
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Submit your code through our web interface, API, or IDE
                    integration.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-green-400"
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
                  <h4 className="text-lg font-bold text-white mb-2">
                    2. AI Analysis
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Our AI analyzes syntax, logic, security, and performance
                    patterns.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    3. Detailed Report
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Receive comprehensive feedback with severity levels and fix
                    suggestions.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-green-400"
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
                  <h4 className="text-lg font-bold text-white mb-2">
                    4. Refactored Code
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Get improved code examples showing best practices and
                    optimizations.
                  </p>
                </div>
              </div>

              <h3
                id="ai-analysis"
                className="text-2xl font-bold text-white mt-12 mb-6">
                AI Analysis Capabilities
              </h3>
              <p className="text-gray-400 mb-6">
                Our AI model is trained on millions of code samples and can
                detect:
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Syntax Errors
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Missing brackets, semicolons, and language-specific
                        syntax issues
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Logic Bugs
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Infinite loops, null pointer exceptions, and logical
                        errors
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Security Vulnerabilities
                      </h4>
                      <p className="text-gray-400 text-sm">
                        SQL injection, XSS, CSRF, and other security risks
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Performance Issues
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Inefficient algorithms, memory leaks, and optimization
                        opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3
                id="review-types"
                className="text-2xl font-bold text-white mt-12 mb-6">
                Review Types
              </h3>
              <p className="text-gray-400 mb-6">
                SyntaxIQ offers different types of code reviews based on your
                needs:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">
                    Quick Review
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Fast analysis focusing on critical issues and syntax errors.
                    Perfect for quick checks.
                  </p>
                  <span className="text-green-400 text-sm font-semibold">
                    ~5 seconds
                  </span>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-green-500/30">
                  <h4 className="text-lg font-bold text-white mb-3">
                    Standard Review
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Comprehensive analysis including bugs, security, and
                    performance. Recommended for most use cases.
                  </p>
                  <span className="text-green-400 text-sm font-semibold">
                    ~15 seconds
                  </span>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">
                    Deep Review
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    In-depth analysis with refactoring suggestions and
                    architectural recommendations.
                  </p>
                  <span className="text-green-400 text-sm font-semibold">
                    ~30 seconds
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">
                Supported Languages
              </h3>
              <p className="text-gray-400 mb-6">
                SyntaxIQ supports 12+ programming languages:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                {[
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
                ].map((lang) => (
                  <div
                    key={lang}
                    className="flex items-center p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/10 hover:border-green-500/30 transition-all">
                    <span className="text-sm font-semibold text-white">
                      {lang}
                    </span>
                  </div>
                ))}
              </div>

              <h2
                id="bugs"
                className="text-3xl font-bold text-white mt-16 mb-6">
                Bug Detection
              </h2>
              <p className="text-gray-400 mb-6">
                Our AI identifies various types of bugs with detailed
                explanations and fix suggestions.
              </p>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10 mb-8">
                <h4 className="text-lg font-bold text-white mb-4">
                  Example Bug Detection
                </h4>
                <pre className="bg-black/50 text-gray-100 p-4 rounded-lg overflow-x-auto border border-red-500/30 mb-4">
                  <code>{`// Potential null pointer exception
function getUserName(user) {
  return user.name.toUpperCase(); // ⚠️ user might be null
}`}</code>
                </pre>
                <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="text-red-400 font-semibold mb-2">
                    ⚠️ Potential Bug Detected
                  </p>
                  <p className="text-gray-400 text-sm">
                    The function doesn't check if 'user' or 'user.name' exists
                    before accessing properties. This could cause a runtime
                    error.
                  </p>
                </div>
              </div>

              <h2
                id="security"
                className="text-3xl font-bold text-white mt-16 mb-6">
                Security Scanning
              </h2>
              <p className="text-gray-400 mb-6">
                Protect your code from common security vulnerabilities with our
                advanced security scanner.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    name: "SQL Injection",
                    desc: "Detects unsafe database queries and SQL injection risks",
                  },
                  {
                    name: "XSS Attacks",
                    desc: "Identifies cross-site scripting vulnerabilities",
                  },
                  {
                    name: "CSRF Protection",
                    desc: "Checks for missing CSRF token validation",
                  },
                  {
                    name: "Authentication Issues",
                    desc: "Finds weak authentication and authorization logic",
                  },
                  {
                    name: "Data Exposure",
                    desc: "Detects sensitive data leaks and improper encryption",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-white/10 flex items-start">
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
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2
                id="performance"
                className="text-3xl font-bold text-white mt-16 mb-6">
                Performance Optimization
              </h2>
              <p className="text-gray-400 mb-6">
                Get actionable recommendations to improve your code's
                performance and efficiency.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">
                    Algorithm Optimization
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Identifies inefficient algorithms and suggests better
                    alternatives with improved time complexity.
                  </p>
                  <span className="text-green-400 text-xs font-mono">
                    O(n²) → O(n log n)
                  </span>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">
                    Memory Management
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Detects memory leaks, unnecessary allocations, and suggests
                    efficient data structures.
                  </p>
                  <span className="text-green-400 text-xs font-mono">
                    -40% memory usage
                  </span>
                </div>
              </div>

              <h2
                id="auth"
                className="text-3xl font-bold text-white mt-16 mb-6">
                API Authentication
              </h2>
              <p className="text-gray-400 mb-6">
                All API requests require authentication using JWT tokens.
                Include your token in the Authorization header:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto border border-white/10 my-6">
                <code>{`Authorization: Bearer YOUR_JWT_TOKEN`}</code>
              </pre>

              <h2
                id="endpoints"
                className="text-3xl font-bold text-white mt-16 mb-6">
                API Endpoints
              </h2>

              <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                POST /api/review
              </h3>
              <p className="text-gray-400 mb-4">Submit code for AI review.</p>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10 mb-6">
                <h4 className="text-white font-semibold mb-3">Request Body</h4>
                <pre className="bg-black/50 text-gray-100 p-4 rounded-lg overflow-x-auto border border-white/10">
                  <code>{`{
  "code": "function example() { ... }",
  "language": "javascript",
  "reviewType": "standard" // optional: quick, standard, deep
}`}</code>
                </pre>
                <h4 className="text-white font-semibold mb-3 mt-6">Response</h4>
                <pre className="bg-black/50 text-gray-100 p-4 rounded-lg overflow-x-auto border border-white/10">
                  <code>{`{
  "reviewId": "rev_abc123",
  "status": "completed",
  "analysis": {
    "bugs": [...],
    "security": [...],
    "performance": [...],
    "refactoredCode": "..."
  }
}`}</code>
                </pre>
              </div>

              <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                GET /api/review/:id
              </h3>
              <p className="text-gray-400 mb-6">
                Retrieve a specific review by ID. Returns the complete analysis
                results.
              </p>

              <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                GET /api/review/user
              </h3>
              <p className="text-gray-400 mb-6">
                Get all reviews for the authenticated user. Supports pagination
                and filtering.
              </p>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10 mb-8">
                <h4 className="text-white font-semibold mb-3">
                  Query Parameters
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-400 text-sm">
                    <code className="text-green-400">page</code> - Page number
                    (default: 1)
                  </li>
                  <li className="text-gray-400 text-sm">
                    <code className="text-green-400">limit</code> - Items per
                    page (default: 20)
                  </li>
                  <li className="text-gray-400 text-sm">
                    <code className="text-green-400">language</code> - Filter by
                    programming language
                  </li>
                </ul>
              </div>

              <h2
                id="webhooks"
                className="text-3xl font-bold text-white mt-16 mb-6">
                Webhooks
              </h2>
              <p className="text-gray-400 mb-6">
                Configure webhooks to receive real-time notifications when
                reviews are completed.
              </p>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10 mb-8">
                <h4 className="text-lg font-bold text-white mb-4">
                  Webhook Payload
                </h4>
                <pre className="bg-black/50 text-gray-100 p-4 rounded-lg overflow-x-auto border border-white/10">
                  <code>{`{
  "event": "review.completed",
  "reviewId": "rev_abc123",
  "timestamp": "2024-03-01T12:00:00Z",
  "data": {
    "language": "javascript",
    "issuesFound": 5,
    "severity": "medium"
  }
}`}</code>
                </pre>
              </div>

              <h2
                id="limits"
                className="text-3xl font-bold text-white mt-16 mb-6">
                Rate Limits
              </h2>
              <p className="text-gray-400 mb-4">
                To ensure fair usage, we implement the following rate limits:
              </p>
              <ul className="space-y-3 mb-12">
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3">•</span>
                  <span>
                    <strong className="text-white">Free Plan:</strong> 10
                    reviews per month
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3">•</span>
                  <span>
                    <strong className="text-white">Pro Plan:</strong> Unlimited
                    reviews
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3">•</span>
                  <span>
                    <strong className="text-white">API Requests:</strong> 100
                    requests per 15 minutes
                  </span>
                </li>
              </ul>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 my-12 rounded-r-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <svg
                    className="w-6 h-6 text-green-400 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Need Help?
                </h3>
                <p className="text-gray-300 mb-4">
                  If you have questions or need assistance, please contact our
                  support team at{" "}
                  <a
                    href="mailto:support@syntaxiq.ai"
                    className="text-green-400 hover:text-green-300 font-semibold underline">
                    support@syntaxiq.ai
                  </a>
                </p>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black rounded-lg font-semibold transition-all text-sm">
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
