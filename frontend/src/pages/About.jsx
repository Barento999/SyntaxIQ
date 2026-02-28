import { Link } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";

const About = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former Google engineer with 10+ years in AI and machine learning",
      avatar: "AJ",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Expert in code analysis tools and developer productivity",
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of AI",
      bio: "PhD in Computer Science, specialized in natural language processing",
      avatar: "MR",
    },
  ];

  const values = [
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
      title: "Innovation First",
      description:
        "We push the boundaries of what's possible with AI-powered code analysis",
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Developer-Centric",
      description:
        "Built by developers, for developers. We understand your workflow",
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
      title: "Security & Privacy",
      description:
        "Your code is yours. We never store or share your code without permission",
    },
  ];

  const milestones = [
    {
      year: "2023",
      event: "SyntaxIQ Founded",
      description: "Started with a vision to revolutionize code review",
    },
    {
      year: "2023",
      event: "Beta Launch",
      description: "Released beta version to 1,000 developers",
    },
    {
      year: "2024",
      event: "Gemini Integration",
      description: "Integrated Google Gemini 1.5 Pro for advanced AI analysis",
    },
    {
      year: "2024",
      event: "50K+ Users",
      description: "Reached 50,000 active developers worldwide",
    },
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
                About SyntaxIQ
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're on a mission to make code review accessible, intelligent,
              and effortless for every developer
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              At SyntaxIQ, we believe every developer deserves access to
              world-class code review tools. By leveraging the power of Google
              Gemini AI, we're democratizing code quality analysis and helping
              developers write better, more secure, and more efficient code.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 text-green-400">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Passionate developers and AI experts working to improve code
              quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg shadow-green-500/50">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-500/50">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Join Our Community
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Be part of the growing community of developers using AI to write
              better code
            </p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl font-bold text-xl transition-all shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 hover:scale-105 text-black">
              Get Started for Free
            </Link>
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

export default About;
