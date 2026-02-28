import { Link } from "react-router-dom";
import Logo from "../components/Logo";

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

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border-2 ${
                plan.highlighted
                  ? "border-blue-600 shadow-xl scale-105"
                  : "border-gray-200"
              } bg-white p-8 relative`}>
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-600">/month</span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/register"
                className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <dl className="space-y-8">
            <div>
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Can I change plans later?
              </dt>
              <dd className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be reflected in your next billing cycle.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </dt>
              <dd className="text-gray-600">
                We accept all major credit cards, PayPal, and wire transfers for
                enterprise customers.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial?
              </dt>
              <dd className="text-gray-600">
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
