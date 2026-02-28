import { Link } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";

const Documentation = () => {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", href: "#intro" },
        { name: "Quick Start", href: "#quickstart" },
        { name: "Installation", href: "#installation" },
      ],
    },
    {
      title: "Features",
      items: [
        { name: "Code Analysis", href: "#analysis" },
        { name: "Bug Detection", href: "#bugs" },
        { name: "Security Scanning", href: "#security" },
      ],
    },
    {
      title: "API Reference",
      items: [
        { name: "Authentication", href: "#auth" },
        { name: "Endpoints", href: "#endpoints" },
        { name: "Rate Limits", href: "#limits" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <PublicNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 space-y-8">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-bold text-white mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a
                          href={item.href}
                          className="text-sm text-gray-400 hover:text-green-400 transition-colors block py-1">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-9">
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
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto border border-white/10 my-6">
                <code>{`{
  "code": "function example() { ... }",
  "language": "javascript"
}`}</code>
              </pre>

              <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                GET /api/review/:id
              </h3>
              <p className="text-gray-400 mb-6">
                Retrieve a specific review by ID.
              </p>

              <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                GET /api/review/user
              </h3>
              <p className="text-gray-400 mb-6">
                Get all reviews for the authenticated user.
              </p>

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
                <p className="text-gray-300">
                  If you have questions or need assistance, please contact our
                  support team at{" "}
                  <a
                    href="mailto:support@syntaxiq.ai"
                    className="text-green-400 hover:text-green-300 font-semibold underline">
                    support@syntaxiq.ai
                  </a>
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
