// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { MovingBorderDemo } from "./MovingBorderDemo";

const About = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
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
          <MovingBorderDemo text={"About me"}  />
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div
                className={`absolute -top-6 -left-6 w-full h-full rounded-2xl ${
                  darkMode ? "bg-indigo-500/20" : "bg-indigo-100"
                }`}
              ></div>
              <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-xl">
                <div
                  className="border-2 border-dashed rounded-xl w-full h-96 lg:h-[500px] bg-cover bg-center"
                  style={{ backgroundImage: "url('/idcard.jpg')" }}
                ></div>
              </div>
            </div>
          </motion.div> 

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              variants={itemVariants}
            >
              Professional Summary 
            </motion.h3>

            <motion.p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              variants={itemVariants}
            >
              I'm a passionate designer and developer with over 5 years of
              experience creating digital products. My approach combines
              aesthetic design with functional solutions to create memorable
              user experiences.
            </motion.p>

            <motion.p
              className={`mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              variants={itemVariants}
            >
              I am currently working as a Teaching Assistant at Poornima
              University, where I assist students in mastering topics related to
              Full Stack Development and DevOps. I specialize in:
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                { label: "Name:", value: "Vivek kumar chaurasiya" },
                { label: "Email:", value: "viveka9415@gmail.com" },
                { label: "Location:", value: "Rajsthan sitapur" },
                { label: "Freelance:", value: "Available" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  variants={itemVariants}
                >
                  <span
                    className={`font-medium mr-2 ${
                      darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
                         href="july.pdf"
                         download
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className={`px-8 py-3 rounded-lg font-medium border text-center ${
                           darkMode
                             ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                             : "border-gray-300 text-gray-700 hover:bg-gray-100"
                         }`}
                       >
                         Download Resume
                       </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
