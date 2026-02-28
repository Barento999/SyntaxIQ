import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <nav className="bg-black/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
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
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white font-medium transition-colors text-sm">
                Pricing
              </Link>
              <Link
                to="/features"
                className="text-gray-300 hover:text-white font-medium transition-colors text-sm">
                Features
              </Link>
              <Link
                to="/docs"
                className="text-gray-300 hover:text-white font-medium transition-colors text-sm">
                Docs
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white font-medium transition-colors text-sm">
                About
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white font-medium transition-colors text-sm">
                Blog
              </Link>
            </div>

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
  );
};

export default PublicNavbar;
