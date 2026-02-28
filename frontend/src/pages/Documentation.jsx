import { Link } from "react-router-dom";
import Logo from "../components/Logo";

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <Logo size="md" showText={true} variant="default" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Sign in
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-8 space-y-8">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
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
            <div className="prose prose-blue max-w-none">
              <h1 id="intro">Documentation</h1>
              <p className="lead">
                Learn how to integrate SyntaxIQ into your development workflow.
              </p>

              <h2 id="quickstart">Quick Start</h2>
              <p>
                Get started with SyntaxIQ in minutes. Follow these simple steps
                to submit your first code review.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">
                  Step 1: Create an Account
                </h3>
                <p className="text-gray-700 mb-4">
                  Sign up for a free account to get started. No credit card
                  required.
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                  Create Account
                </Link>
              </div>

              <h3>Step 2: Submit Your Code</h3>
              <p>
                Navigate to your dashboard and paste your code into the editor.
                Select the programming language and click "Submit for Review".
              </p>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`function example() {
  console.log('Hello, World!');
  return true;
}`}</code>
              </pre>

              <h3>Step 3: Review Results</h3>
              <p>
                Within seconds, you'll receive a comprehensive analysis
                including:
              </p>
              <ul>
                <li>Bug detection with severity levels</li>
                <li>Security vulnerability scanning</li>
                <li>Performance optimization suggestions</li>
                <li>Code quality recommendations</li>
                <li>Refactored code examples</li>
              </ul>

              <h2 id="analysis">Code Analysis</h2>
              <p>
                Our AI-powered analysis uses Google Gemini 1.5 Pro to provide
                intelligent feedback on your code.
              </p>

              <h3>Supported Languages</h3>
              <p>SyntaxIQ supports 12+ programming languages:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
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
                    className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-sm font-medium text-gray-900">
                      {lang}
                    </span>
                  </div>
                ))}
              </div>

              <h2 id="auth">API Authentication</h2>
              <p>
                All API requests require authentication using JWT tokens.
                Include your token in the Authorization header:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`Authorization: Bearer YOUR_JWT_TOKEN`}</code>
              </pre>

              <h2 id="endpoints">API Endpoints</h2>

              <h3>POST /api/review</h3>
              <p>Submit code for AI review.</p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`{
  "code": "function example() { ... }",
  "language": "javascript"
}`}</code>
              </pre>

              <h3>GET /api/review/:id</h3>
              <p>Retrieve a specific review by ID.</p>

              <h3>GET /api/review/user</h3>
              <p>Get all reviews for the authenticated user.</p>

              <h2 id="limits">Rate Limits</h2>
              <p>
                To ensure fair usage, we implement the following rate limits:
              </p>
              <ul>
                <li>
                  <strong>Free Plan:</strong> 10 reviews per month
                </li>
                <li>
                  <strong>Pro Plan:</strong> Unlimited reviews
                </li>
                <li>
                  <strong>API Requests:</strong> 100 requests per 15 minutes
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Need Help?
                </h3>
                <p className="text-blue-800">
                  If you have questions or need assistance, please contact our
                  support team at{" "}
                  <a
                    href="mailto:support@codereview.ai"
                    className="font-medium underline">
                    support@codereview.ai
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
