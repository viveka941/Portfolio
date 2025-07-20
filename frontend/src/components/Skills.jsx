// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Development", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Cloud Infrastructure", level: 80 },
    { name: "DevOps & CI/CD", level: 75 },
    { name: "Database Management", level: 70 },
  ];

  const tools = [
    { name: "HTML", icon: "🔡" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "React", icon: "⚛️" },
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🌱" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚓" },
    { name: "Git", icon: "🔄" },
    { name: "Jenkins", icon: "⚙️" },
    { name: "SQL", icon: "🗃️" },
  ];

  return (
    <section
      id="skills"
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
            My Technical Expertise
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3
              className={`text-xl font-semibold mb-8 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Core Competencies
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {skill.name}
                    </span>
                    <span
                      className={`font-medium ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full h-3 rounded-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <motion.div
                      className={`h-full rounded-full ${
                        darkMode ? "bg-indigo-500" : "bg-indigo-600"
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className={`text-xl font-semibold mb-8 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Technologies & Tools
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl flex flex-col items-center justify-center ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-white hover:bg-gray-100"
                  } shadow-md transition-all cursor-pointer border ${
                    darkMode ? "border-gray-600" : "border-gray-200"
                  }`}
                  whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-3xl mb-2">{tool.icon}</span>
                  <span
                    className={`font-medium text-center ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
