import { Link } from "react-router-dom";
import { useState } from "react";
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const coreFeatures = [
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
      category: "ai",
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
      category: "analysis",
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
      category: "security",
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
      title: "Performance Optimization",
      description:
        "Get AI-driven suggestions to improve code speed and efficiency",
      category: "performance",
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Code Documentation",
      description:
        "Automatically generate comprehensive documentation for your code",
      category: "productivity",
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "Code Refactoring",
      description:
        "Get complete refactored examples with improved structure and patterns",
      category: "quality",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <PublicNavbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm text-gray-300">
                Powered by Google Gemini 1.5 Pro
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Features That
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Transform Code
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover the comprehensive suite of AI-powered tools designed to
              elevate your code quality, security, and performance
            </p>
          </div>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Core Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Six powerful features working together for comprehensive code
              analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all h-full">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
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

      {/* Interactive Demo Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                See It In Action
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Watch how SyntaxIQ analyzes different types of code issues
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="inline-flex bg-white/5 rounded-xl p-1 border border-white/10">
              {["Bug Detection", "Security Scan", "Performance"].map(
                (tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                      activeTab === index
                        ? "bg-gradient-to-r from-green-400 to-emerald-500 text-black shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}>
                    {tab}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Demo Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Code Sample */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-500 font-mono">
                  example.js
                </span>
              </div>
              <div className="p-6 font-mono text-sm">
                {activeTab === 0 && (
                  <div className="space-y-1">
                    <div className="text-gray-500">1</div>
                    <div className="text-gray-300">
                      2 <span className="text-purple-400">function</span>{" "}
                      <span className="text-blue-400">divide</span>(a, b) {"{"}
                    </div>
                    <div className="text-gray-300 bg-red-500/10 border-l-4 border-red-500 pl-4">
                      3 <span className="text-purple-400">return</span> a / b;{" "}
                      <span className="text-red-400">// ⚠️ No zero check</span>
                    </div>
                    <div className="text-gray-300">4 {"}"}</div>
                    <div className="text-gray-500 mt-4">5</div>
                    <div className="text-gray-300">
                      6 <span className="text-blue-400">divide</span>(
                      <span className="text-orange-400">10</span>,{" "}
                      <span className="text-orange-400">0</span>);{" "}
                      <span className="text-red-400">// Runtime error!</span>
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="space-y-1">
                    <div className="text-gray-500">1</div>
                    <div className="text-gray-300 bg-red-500/10 border-l-4 border-red-500 pl-4">
                      2 <span className="text-blue-400">query</span> ={" "}
                      <span className="text-orange-400">
                        "SELECT * FROM users WHERE id="
                      </span>{" "}
                      + userId;
                    </div>
                    <div className="text-gray-300">
                      3 db.<span className="text-blue-400">execute</span>
                      (query);
                    </div>
                    <div className="text-gray-500 mt-4">4</div>
                    <div className="text-gray-400">
                      5{" "}
                      <span className="text-red-400">
                        // Vulnerable to SQL injection!
                      </span>
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="space-y-1">
                    <div className="text-gray-500">1</div>
                    <div className="text-gray-300 bg-yellow-500/10 border-l-4 border-yellow-500 pl-4">
                      2 <span className="text-purple-400">for</span> (
                      <span className="text-purple-400">let</span> i ={" "}
                      <span className="text-orange-400">0</span>; i {"<"}{" "}
                      arr.length; i++) {"{"}
                    </div>
                    <div className="text-gray-300">
                      3 console.<span className="text-blue-400">log</span>
                      (arr[i]);
                    </div>
                    <div className="text-gray-300">4 {"}"}</div>
                    <div className="text-gray-500 mt-4">5</div>
                    <div className="text-gray-400">
                      6{" "}
                      <span className="text-yellow-400">
                        // Length calculated every iteration
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* AI Analysis */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-green-500/30 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-3 bg-green-500/10 border-b border-green-500/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-green-400 font-semibold">
                    AI Analysis Result
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
                {activeTab === 0 && (
                  <>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-red-400"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-red-400 font-semibold">
                          Critical Bug Detected
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          Division by zero not handled. This will cause runtime
                          errors when b is 0.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <p className="text-green-400 font-semibold mb-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Suggested Fix:
                      </p>
                      <pre className="text-sm text-gray-300 bg-black/30 p-3 rounded overflow-x-auto">
                        {`if (b === 0) {
  throw new Error('Division by zero');
}
return a / b;`}
                      </pre>
                    </div>
                  </>
                )}
                {activeTab === 1 && (
                  <>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-red-400"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-red-400 font-semibold">
                          SQL Injection Vulnerability
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          User input concatenated directly into SQL query.
                          Attackers can manipulate the query.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <p className="text-green-400 font-semibold mb-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Secure Alternative:
                      </p>
                      <pre className="text-sm text-gray-300 bg-black/30 p-3 rounded overflow-x-auto">
                        {`const query = 'SELECT * FROM users WHERE id=?';
db.execute(query, [userId]);`}
                      </pre>
                    </div>
                  </>
                )}
                {activeTab === 2 && (
                  <>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-yellow-400 font-semibold">
                          Performance Issue
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          Array length calculated on every iteration. Cache it
                          for O(1) access instead of O(n).
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <p className="text-green-400 font-semibold mb-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Optimized Version:
                      </p>
                      <pre className="text-sm text-gray-300 bg-black/30 p-3 rounded overflow-x-auto">
                        {`for (let i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i]);
}`}
                      </pre>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Analysis Features */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Advanced Analysis
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Deep insights that go beyond surface-level code review
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
                title: "Complexity Analysis",
                description:
                  "Measure cyclomatic complexity and cognitive load of your code",
                features: [
                  "McCabe complexity scoring",
                  "Nested loop detection",
                  "Function length analysis",
                  "Maintainability index calculation",
                ],
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Time Complexity Detection",
                description:
                  "Identify algorithmic inefficiencies and suggest optimizations",
                features: [
                  "Big O notation analysis",
                  "Nested iteration warnings",
                  "Recursive depth checking",
                  "Space complexity insights",
                ],
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                ),
                title: "Memory Leak Detection",
                description:
                  "Find potential memory leaks and resource management issues",
                features: [
                  "Unclosed connections",
                  "Event listener leaks",
                  "Circular references",
                  "Resource cleanup validation",
                ],
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
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Code Smell Detection",
                description:
                  "Identify anti-patterns and suggest better alternatives",
                features: [
                  "Long method detection",
                  "Duplicate code identification",
                  "God object warnings",
                  "Feature envy detection",
                ],
              },
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg
                          className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language Support */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Universal Language Support
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Works seamlessly with all major programming languages
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "JavaScript",
                icon: "JS",
                color: "from-yellow-400 to-yellow-600",
                desc: "ES6+ & Node.js",
              },
              {
                name: "TypeScript",
                icon: "TS",
                color: "from-blue-400 to-blue-600",
                desc: "Type-safe analysis",
              },
              {
                name: "Python",
                icon: "PY",
                color: "from-green-400 to-green-600",
                desc: "2.x & 3.x support",
              },
              {
                name: "Java",
                icon: "JV",
                color: "from-red-400 to-red-600",
                desc: "8 through 21",
              },
              {
                name: "C++",
                icon: "C++",
                color: "from-blue-400 to-purple-600",
                desc: "Modern C++ standards",
              },
              {
                name: "C#",
                icon: "C#",
                color: "from-purple-400 to-purple-600",
                desc: ".NET Framework",
              },
              {
                name: "Go",
                icon: "GO",
                color: "from-cyan-400 to-cyan-600",
                desc: "Concurrent patterns",
              },
              {
                name: "Rust",
                icon: "RS",
                color: "from-orange-400 to-orange-600",
                desc: "Memory safety",
              },
              {
                name: "PHP",
                icon: "PHP",
                color: "from-indigo-400 to-indigo-600",
                desc: "7.x & 8.x",
              },
              {
                name: "Ruby",
                icon: "RB",
                color: "from-red-400 to-pink-600",
                desc: "Rails optimized",
              },
              {
                name: "Swift",
                icon: "SW",
                color: "from-orange-400 to-red-600",
                desc: "iOS & macOS",
              },
              {
                name: "Kotlin",
                icon: "KT",
                color: "from-purple-400 to-pink-600",
                desc: "Android ready",
              },
            ].map((lang, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${lang.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                    {lang.icon}
                  </div>
                  <p className="text-white font-semibold mb-1">{lang.name}</p>
                  <p className="text-gray-500 text-xs">{lang.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration & Workflow */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Seamless Workflow Integration
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Fits perfectly into your existing development process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                ),
                title: "Instant Upload",
                description:
                  "Paste code directly or upload files for immediate analysis",
                time: "< 1 second",
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
                title: "Lightning Analysis",
                description:
                  "AI processes your code and generates comprehensive reports",
                time: "< 2 seconds",
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
                title: "Detailed Results",
                description:
                  "Get actionable insights with code examples and explanations",
                time: "Instant access",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all h-full">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 text-green-400">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                    <svg
                      className="w-4 h-4 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-green-400 text-sm font-semibold">
                      {step.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Features Deep Dive */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Enterprise-Grade Security Analysis
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive vulnerability detection powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                ),
                title: "SQL Injection",
                severity: "Critical",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
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
                title: "XSS Vulnerabilities",
                severity: "High",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                ),
                title: "Authentication Flaws",
                severity: "Critical",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
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
                title: "Data Exposure",
                severity: "High",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "CSRF Protection",
                severity: "Medium",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Insecure Crypto",
                severity: "High",
              },
            ].map((vuln, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">
                      {vuln.icon}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        vuln.severity === "Critical"
                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                          : vuln.severity === "High"
                            ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}>
                      {vuln.severity}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{vuln.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Optimization Features */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Performance Optimization
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Make your code faster and more efficient
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400">
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
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Algorithm Optimization
                  </h3>
                  <p className="text-gray-400">Improve time complexity</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Identify O(n²) loops that can be O(n)",
                  "Suggest better data structures",
                  "Optimize recursive algorithms",
                  "Reduce unnecessary iterations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <svg
                      className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Memory Management
                  </h3>
                  <p className="text-gray-400">Reduce memory footprint</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Detect memory leaks early",
                  "Optimize object allocation",
                  "Suggest garbage collection improvements",
                  "Identify unused variables",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <svg
                      className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                metric: "50%",
                label: "Faster Execution",
                icon: (
                  <svg
                    className="w-10 h-10"
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
              {
                metric: "30%",
                label: "Less Memory",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                ),
              },
              {
                metric: "40%",
                label: "Fewer Bugs",
                icon: (
                  <svg
                    className="w-10 h-10"
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
                metric: "60%",
                label: "Better Quality",
                icon: (
                  <svg
                    className="w-10 h-10"
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
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-white/10 text-center">
                <div className="flex justify-center text-green-400 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Quality Standards */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Code Quality Standards
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Enforce best practices and coding standards automatically
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Style Guide Compliance",
                items: [
                  "Naming conventions",
                  "Indentation rules",
                  "Comment standards",
                  "File organization",
                ],
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                ),
                title: "Documentation Quality",
                items: [
                  "Function documentation",
                  "Parameter descriptions",
                  "Return value docs",
                  "Usage examples",
                ],
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
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                ),
                title: "Design Patterns",
                items: [
                  "SOLID principles",
                  "DRY violations",
                  "Pattern suggestions",
                  "Architecture advice",
                ],
              },
            ].map((standard, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all h-full">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 text-green-400">
                    {standard.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {standard.title}
                  </h3>
                  <ul className="space-y-3">
                    {standard.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg
                          className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-green-500/30 p-12 md:p-16 text-center shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Ready to Transform Your Code?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of developers using SyntaxIQ to write better,
                safer, and faster code
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl font-bold text-xl transition-all shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 hover:scale-105 text-black">
                  Get Started for Free
                  <svg
                    className="w-6 h-6 ml-2"
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
                <Link
                  to="/docs"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl font-bold text-xl transition-all border border-white/10 text-white">
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
