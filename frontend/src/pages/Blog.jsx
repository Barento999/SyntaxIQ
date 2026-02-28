import { Link } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";

const Blog = () => {
  const blogPosts = [
    {
      title: "Introducing SyntaxIQ: AI-Powered Code Review for Everyone",
      excerpt:
        "Learn how we're using Google Gemini 1.5 Pro to revolutionize code review and make it accessible to developers worldwide.",
      date: "March 1, 2024",
      author: "Alex Johnson",
      category: "Product",
      readTime: "5 min read",
      image: "📢",
    },
    {
      title: "10 Common Security Vulnerabilities AI Can Detect",
      excerpt:
        "Discover the most common security issues in code and how AI-powered analysis can help you catch them before they reach production.",
      date: "February 28, 2024",
      author: "Sarah Chen",
      category: "Security",
      readTime: "8 min read",
      image: "🔒",
    },
    {
      title: "How to Write Clean, Maintainable Code",
      excerpt:
        "Best practices and tips for writing code that's easy to read, understand, and maintain over time.",
      date: "February 25, 2024",
      author: "Michael Rodriguez",
      category: "Best Practices",
      readTime: "6 min read",
      image: "✨",
    },
    {
      title: "The Future of AI in Software Development",
      excerpt:
        "Exploring how artificial intelligence is transforming the way we write, review, and deploy code.",
      date: "February 20, 2024",
      author: "Alex Johnson",
      category: "AI & ML",
      readTime: "10 min read",
      image: "🤖",
    },
    {
      title: "Performance Optimization: Tips from the Trenches",
      excerpt:
        "Real-world strategies for optimizing code performance and reducing bottlenecks in your applications.",
      date: "February 15, 2024",
      author: "Sarah Chen",
      category: "Performance",
      readTime: "7 min read",
      image: "⚡",
    },
    {
      title: "Building a Culture of Code Quality",
      excerpt:
        "How to establish and maintain high code quality standards across your development team.",
      date: "February 10, 2024",
      author: "Michael Rodriguez",
      category: "Team Culture",
      readTime: "9 min read",
      image: "🎯",
    },
  ];

  const categories = [
    "All",
    "Product",
    "Security",
    "Best Practices",
    "AI & ML",
    "Performance",
    "Team Culture",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <PublicNavbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                SyntaxIQ Blog
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, tutorials, and best practices for writing better code
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? "bg-gradient-to-r from-green-400 to-emerald-500 text-black"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden hover:border-green-500/30 transition-all group">
            <div className="grid md:grid-cols-2 gap-8 p-12">
              <div className="flex items-center justify-center">
                <div className="text-9xl">{blogPosts[0].image}</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-4xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <span>{blogPosts[0].author}</span>
                  <span>•</span>
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors">
                  Read More
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 hover:border-green-500/30 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all"></div>
                <div className="relative p-8">
                  <div className="text-6xl mb-6">{post.image}</div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs font-semibold mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-2">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Stay Updated
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on code
              quality, AI, and software development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl font-bold transition-all shadow-lg shadow-green-500/50 hover:shadow-green-500/70 hover:scale-105 text-black">
                Subscribe
              </button>
            </div>
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
                Powered by Google Gemini AI for intelligent code analysis
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/features"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Features
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
                  <Link
                    to="/docs"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:support@syntaxiq.ai"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 text-sm text-center">
              © 2024 SyntaxIQ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
