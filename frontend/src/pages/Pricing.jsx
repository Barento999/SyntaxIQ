import { Link } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out SyntaxIQ",
      features: [
        "10 reviews per month",
        "Basic code analysis",
        "Bug detection",
        "Community support",
        "12+ languages",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For professional developers",
      features: [
        "Unlimited reviews",
        "Advanced AI analysis",
        "Security scanning",
        "Performance optimization",
        "Priority support",
        "Team collaboration",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Custom AI training",
        "Dedicated support",
        "SLA guarantee",
        "On-premise deployment",
        "Advanced security",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <PublicNavbar />

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border-2 ${
                plan.highlighted
                  ? "border-green-500/50 scale-105"
                  : "border-white/10"
              } bg-gradient-to-br from-gray-900 to-black p-8 transition-all hover:border-green-500/30`}>
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-black shadow-lg shadow-green-500/50">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all"></div>

              <div className="relative text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-400">/month</span>
                  )}
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <ul className="relative space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/register"
                className={`relative block w-full text-center py-3 px-4 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-green-400 to-emerald-500 text-black hover:from-green-500 hover:to-emerald-600 shadow-lg shadow-green-500/50 hover:shadow-green-500/70"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <dl className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 p-6 hover:border-green-500/30 transition-all">
              <dt className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-green-400 mr-3">Q:</span>
                Can I change plans later?
              </dt>
              <dd className="text-gray-400 pl-8">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be reflected in your next billing cycle.
              </dd>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 p-6 hover:border-green-500/30 transition-all">
              <dt className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-green-400 mr-3">Q:</span>
                What payment methods do you accept?
              </dt>
              <dd className="text-gray-400 pl-8">
                We accept all major credit cards, PayPal, and wire transfers for
                enterprise customers.
              </dd>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 p-6 hover:border-green-500/30 transition-all">
              <dt className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-green-400 mr-3">Q:</span>
                Is there a free trial?
              </dt>
              <dd className="text-gray-400 pl-8">
                Yes, Pro plan comes with a 14-day free trial. No credit card
                required.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
