import { Link } from "react-router-dom";
import { useState } from "react";
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or annual
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const plans = [
    {
      name: "Free",
      price: "$0",
      annualPrice: "$0",
      description: "Perfect for trying out SyntaxIQ",
      features: [
        "10 reviews per month",
        "Basic code analysis",
        "Bug detection",
        "Community support",
        "12+ languages",
        "Public code only",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      annualPrice: "$290",
      savings: "Save $58",
      description: "For professional developers",
      features: [
        "Unlimited reviews",
        "Advanced AI analysis",
        "Security scanning",
        "Performance optimization",
        "Priority support",
        "Team collaboration",
        "API access",
        "Private repositories",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      annualPrice: "Custom",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Custom AI training",
        "Dedicated support",
        "SLA guarantee",
        "On-premise deployment",
        "Advanced security",
        "Custom integrations",
        "Unlimited team members",
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-gray-300">
              14-day free trial • No credit card required
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade, downgrade, or cancel
            anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-1 inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-green-400 to-emerald-500 text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}>
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all relative ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-green-400 to-emerald-500 text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}>
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs px-2 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
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
                    {billingCycle === "monthly" ? plan.price : plan.annualPrice}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-400">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  )}
                </div>
                {billingCycle === "annual" && plan.savings && (
                  <div className="mb-2">
                    <span className="text-green-400 text-sm font-semibold">
                      {plan.savings}
                    </span>
                  </div>
                )}
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <ul className="relative space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
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
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.name === "Enterprise" ? "/contact" : "/register"}
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

        {/* Feature Comparison */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Compare Plans
            </span>
          </h2>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white font-bold">
                      Features
                    </th>
                    <th className="text-center p-6 text-white font-bold">
                      Free
                    </th>
                    <th className="text-center p-6 text-white font-bold bg-green-500/5">
                      Pro
                    </th>
                    <th className="text-center p-6 text-white font-bold">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Code Reviews",
                      free: "10/month",
                      pro: "Unlimited",
                      enterprise: "Unlimited",
                    },
                    {
                      feature: "AI Analysis",
                      free: "Basic",
                      pro: "Advanced",
                      enterprise: "Custom",
                    },
                    {
                      feature: "Security Scanning",
                      free: false,
                      pro: true,
                      enterprise: true,
                    },
                    {
                      feature: "Performance Optimization",
                      free: false,
                      pro: true,
                      enterprise: true,
                    },
                    {
                      feature: "API Access",
                      free: false,
                      pro: true,
                      enterprise: true,
                    },
                    {
                      feature: "Team Collaboration",
                      free: false,
                      pro: "Up to 5",
                      enterprise: "Unlimited",
                    },
                    {
                      feature: "Support",
                      free: "Community",
                      pro: "Priority",
                      enterprise: "Dedicated",
                    },
                    {
                      feature: "SLA",
                      free: false,
                      pro: false,
                      enterprise: true,
                    },
                    {
                      feature: "On-Premise",
                      free: false,
                      pro: false,
                      enterprise: true,
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-gray-300">{row.feature}</td>
                      <td className="p-6 text-center">
                        {typeof row.free === "boolean" ? (
                          row.free ? (
                            <svg
                              className="w-5 h-5 text-green-400 mx-auto"
                              fill="currentColor"
                              viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 text-gray-600 mx-auto"
                              fill="currentColor"
                              viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )
                        ) : (
                          <span className="text-gray-400">{row.free}</span>
                        )}
                      </td>
                      <td className="p-6 text-center bg-green-500/5">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <svg
                              className="w-5 h-5 text-green-400 mx-auto"
                              fill="currentColor"
                              viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 text-gray-600 mx-auto"
                              fill="currentColor"
                              viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )
                        ) : (
                          <span className="text-white font-semibold">
                            {row.pro}
                          </span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof row.enterprise === "boolean" ? (
                          row.enterprise ? (
                            <svg
                              className="w-5 h-5 text-green-400 mx-auto"
                              fill="currentColor"
                              viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 text-gray-600 mx-auto"
                              fill="currentColor"
                              viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )
                        ) : (
                          <span className="text-gray-400">
                            {row.enterprise}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Click on any question to see the answer
          </p>
          <dl className="space-y-4">
            {[
              {
                question: "Can I change plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. If you upgrade mid-cycle, you'll be charged a prorated amount.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for enterprise customers. All payments are processed securely through Stripe.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes! The Pro plan comes with a 14-day free trial with full access to all features. No credit card required to start. You can cancel anytime during the trial period.",
              },
              {
                question: "What happens when I reach my review limit?",
                answer:
                  "On the Free plan, you'll be notified when you approach your 10 review limit. You can upgrade to Pro for unlimited reviews, or wait until the next month when your limit resets.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with SyntaxIQ, contact our support team within 30 days of purchase for a full refund.",
              },
              {
                question: "Can I get a discount for annual billing?",
                answer:
                  "Absolutely! Annual billing saves you 20% compared to monthly billing. That's 2 months free when you pay annually.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  openFaqIndex === index
                    ? "border-green-500/50 shadow-lg shadow-green-500/20"
                    : "border-white/10 hover:border-green-500/30"
                }`}
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }>
                <div className="p-6 flex items-center justify-between">
                  <dt className="text-lg font-bold text-white flex items-center flex-1">
                    <span className="text-green-400 mr-3">Q:</span>
                    {faq.question}
                  </dt>
                  <div
                    className={`ml-4 transition-transform duration-300 ${openFaqIndex === index ? "rotate-180" : ""}`}>
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaqIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}>
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-white/10 pt-4">
                      <dd className="text-gray-400 leading-relaxed pl-8">
                        <span className="text-green-400 mr-3">A:</span>
                        {faq.answer}
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
