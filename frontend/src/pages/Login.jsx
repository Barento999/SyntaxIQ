import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Logo from "../components/Logo";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

        <div className="mx-auto w-full max-w-sm relative z-10">
          <div className="mb-10">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50">
                <svg
                  className="w-7 h-7 text-white"
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
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                SyntaxIQ
              </span>
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-3">
              Welcome back
            </h2>
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-green-400 hover:text-green-300 transition-colors">
                Sign up for free
              </Link>
            </p>
          </div>

          <div>
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl backdrop-blur-sm">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-400 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="block w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="block w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-black bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-green-500/50 hover:shadow-green-500/70 hover:scale-[1.02]">
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in
                      <svg
                        className="w-5 h-5 ml-2"
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
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to home
              </Link>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Enhanced Gradient with Features */}
      <div className="hidden lg:block relative w-0 flex-1 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-md relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm text-gray-300">
                  Powered by Google Gemini AI
                </span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">
                Intelligent Code Review
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Get instant AI-powered feedback on your code. Detect bugs,
                security issues, and performance problems in seconds.
              </p>
            </div>

            <div className="space-y-6">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                  title: "AI-Powered Analysis",
                  description:
                    "Advanced code review using Google Gemini 1.5 Pro",
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
                  title: "12+ Languages",
                  description: "Support for all major programming languages",
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  title: "Instant Feedback",
                  description: "Get results in seconds, not hours",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">{feature.title}</p>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">
                  Trusted by developers
                </span>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-white font-semibold">
                50,000+ developers worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
