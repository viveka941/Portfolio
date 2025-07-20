// src/components/Timeline.jsx
import React from "react";
import { motion } from "framer-motion";

const Timeline = ({ darkMode }) => {
  const experiences = [
    {
      id: 1,
      year: "2021 - Present",
      role: "Senior Product Designer",
      company: "InnovateTech",
      description:
        "Leading design for enterprise SaaS products used by Fortune 500 companies.",
    },
    {
      id: 2,
      year: "2019 - 2021",
      role: "UX Designer",
      company: "Digital Solutions Inc.",
      description:
        "Designed mobile and web applications for fintech and e-commerce clients.",
    },
    {
      id: 3,
      year: "2017 - 2019",
      role: "UI Designer",
      company: "Creative Studio",
      description:
        "Created interfaces for various clients across different industries.",
    },
    {
      id: 4,
      year: "2015 - 2017",
      role: "Design Intern",
      company: "BrandVision",
      description:
        "Assisted in creating branding materials and digital designs.",
    },
  ];

  return (
    <section
      id="timeline"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
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
            Work Experience
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

        <div className="relative">
          {/* Vertical timeline bar */}
          <div
            className={`absolute left-0 md:left-1/2 top-0 h-full w-1 transform -translate-x-1/2 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          ></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`mb-12 relative pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-2 left-0 md:left-1/2 w-5 h-5 rounded-full transform -translate-x-1/2 ${
                  darkMode ? "bg-indigo-500" : "bg-indigo-600"
                } border-4 ${darkMode ? "border-gray-800" : "border-gray-50"}`}
              ></div>

              <div
                className={`p-6 rounded-2xl shadow-lg ${
                  darkMode ? "bg-gray-700" : "bg-white"
                } ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
              >
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  {exp.year}
                </span>
                <h3
                  className={`text-xl font-bold mt-2 mb-1 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exp.role}
                </h3>
                <p
                  className={`font-medium mb-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {exp.company}
                </p>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
