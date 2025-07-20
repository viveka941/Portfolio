// src/components/Portfolio.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import { MovingBorderDemo } from "./MovingBorderDemo";

const Portfolio = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Design" },
    { id: "app", name: "Mobile Apps" },
    { id: "brand", name: "Branding" },
    { id: "ui", name: "UI Design" },
  ];

  const projects = [
    {
      id: 1,
      title: "School Application",
      category: "web",
      description: "A comprehensive dashboard for e-commerce analytics",
      img: "school1.png",
      link: "https://schoolapplication-1-h1ku.onrender.com",
    },
    {
      id: 2,
      title: "JobPortal",
      category: "web",
      description: "Search new IT job any location also share feedback ",
      img: "job6.png",
      link: "https://jobportal-1-axap.onrender.com/",
    },
    {
      id: 3,
      title: "Cafe Brand Identity",
      category: "brand",
      description: "Complete branding for an artisanal coffee shop",
    },
    {
      id: 4,
      title: "Banking UI Design",
      category: "ui",
      description: "Modern interface for a digital banking platform",
    },
    {
      id: 5,
      title: "Travel Booking Platform",
      category: "web",
      description: "End-to-end travel booking experience",
    },
    {
      id: 6,
      title: "Health Tracking App",
      category: "app",
      description: "Personal health monitoring and insights",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
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
            {" "}
            <MovingBorderDemo text={" My Portfolio"} />
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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? darkMode
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-600 text-white"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`overflow-hidden rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-63 bg-gray-200 border-2 border-dashed rounded-t-2xl w-full flex items-center justify-center">
                <img
                  src={project.img || "comming.webp"}
                  alt="Hospital"
                  className="h-full object-contain"
                />
              </div>

              <div className="p-6">
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    darkMode
                      ? "bg-indigo-900 text-indigo-300"
                      : "bg-indigo-100 text-indigo-800"
                  }`}
                >
                  {project.category === "web" && "Web Design"}
                  {project.category === "app" && "Mobile App"}
                  {project.category === "brand" && "Branding"}
                  {project.category === "ui" && "UI Design"}
                </span>

                <h3
                  className={`text-xl font-bold mt-3 mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {project.description}
                </p>

                <div className="mt-4">
                  <a href={project.link} target="_blank">
                    <button
                      className={`text-sm font-medium ${
                        darkMode
                          ? "text-indigo-400 hover:text-indigo-300"
                          : "text-indigo-600 hover:text-indigo-800"
                      }`}
                    >
                      View Case Study →
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
