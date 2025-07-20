// src/components/Pricing.jsx
import React from "react";
import { motion } from "framer-motion";
import { MovingBorderDemo } from "./MovingBorderDemo";

const Pricing = ({ darkMode }) => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: 2000,
      period: "per hour",
      features: [
        "UI Design",
        "Responsive Design",
        "Basic Prototyping",
        "1 Revision Round",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Standard",
      price: 10000,
      period: "per hour",
      features: [
        "UI/UX Design",
        "Responsive Design",
        "Interactive Prototyping",
        "3 Revision Rounds",
        "Basic Design System",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Premium",
      price: 20000,
      period: "per hour",
      features: [
        "UI/UX Design",
        "Responsive Design",
        "Advanced Prototyping",
        "Unlimited Revisions",
        "Complete Design System",
        "Developer Handoff",
        "Ongoing Support",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MovingBorderDemo text={"Pricing Plans"} />
          </motion.h2>
          <motion.div
            className={`w-24 h-1 mx-auto rounded-full ${
              darkMode ? "bg-indigo-500" : "bg-indigo-600"
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? darkMode
                    ? "bg-gradient-to-br from-indigo-700 to-purple-800 border-indigo-500"
                    : "bg-gradient-to-br from-indigo-600 to-purple-700 border-indigo-400"
                  : darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              } border shadow-xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                    darkMode
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-yellow-400 text-gray-900"
                  }`}
                >
                  MOST POPULAR
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-2 ${
                  plan.popular
                    ? "text-white"
                    : darkMode
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.popular
                      ? "text-white"
                      : darkMode
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  ₹{plan.price}
                </span>
                <span
                  className={`ml-2 ${
                    plan.popular
                      ? "text-indigo-200"
                      : darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul
                className={`space-y-3 mb-8 ${
                  plan.popular
                    ? "text-gray-200"
                    : darkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${
                        plan.popular
                          ? "text-green-400"
                          : darkMode
                          ? "text-indigo-500"
                          : "text-indigo-600"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-bold transition ${
                  plan.popular
                    ? "bg-white text-indigo-700 hover:bg-gray-100"
                    : darkMode
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
