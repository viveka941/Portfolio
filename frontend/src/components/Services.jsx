// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { MovingBorderDemo } from "./MovingBorderDemo";

const Services = ({ darkMode }) => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive and beautiful interfaces that enhance user experience and drive engagement.",
      icon: "🎨",
    },
    {
      title: "Web Development",
      description:
        "Building responsive, performant websites and applications with modern frameworks and technologies.",
      icon: "💻",
    },
    {
      title: "Mobile App Design",
      description:
        "Designing seamless mobile experiences for iOS and Android with a focus on usability and aesthetics.",
      icon: "📱",
    },
    {
      title: "Brand Identity",
      description:
        "Creating cohesive brand systems that communicate your unique value and personality.",
      icon: "🆔",
    },
    {
      title: "Motion Design",
      description:
        "Adding life to interfaces with smooth animations and transitions that delight users.",
      icon: "🎬",
    },
    {
      title: "Design Systems",
      description:
        "Developing scalable design systems that ensure consistency and efficiency across products.",
      icon: "📐",
    },
  ];

  return (
    <section
      id="services"
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
            <MovingBorderDemo text={"My Services"} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl transition-all ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-50 hover:bg-white"
              } border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } hover:shadow-lg`}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`text-4xl mb-5 p-3 w-16 h-16 rounded-full flex items-center justify-center ${
                  darkMode
                    ? "bg-indigo-500/20 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                {service.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
