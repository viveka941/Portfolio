// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { MovingBorderDemo } from "./MovingBorderDemo";


const Hero = ({ darkMode }) => {
  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center pt-16 overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 to-gray-100"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <h3
            className={`text-lg font-medium mb-3 ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Hello, I'm{" "}
            <span>
              {" "}
              <MovingBorderDemo text={"Vivek kumar chaurasiya"}
                                />
            </span>
          </h3>
          <motion.h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Creative{" "}
            <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>
              Designer
            </span>{" "}
            &<br />
            FullStack{" "}
            <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>
              Developer
            </span>
          </motion.h1>

          <motion.p
            className={`text-lg mb-8 max-w-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            I create beautiful, functional digital experiences with a focus on
            user-centered design and modern development practices.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg font-medium ${
                darkMode
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              View Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg font-medium border ${
                darkMode
                  ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
             <a href="july.pdf" download>
              <button>Download Resume</button>
             </a>
            </motion.button>
          </motion.div>

          <div className="mt-12 flex items-center">
            <div className="flex -space-x-3 mr-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                >
                  <img src="vivek1.jpg" alt="" />
                </div>
              ))}
            </div>
            <div>
              <p
                className={`font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Trusted by 200+ clients worldwide
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div
              className={`absolute -top-6 -right-6 w-full h-full rounded-2xl ${
                darkMode ? "bg-indigo-500/20" : "bg-indigo-100"
              }`}
            ></div>
            <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
              <div
                className="border-2  rounded-xl w-full h-96 lg:h-[800px] bg-cover bg-center"
                style={{ backgroundImage: "url('/m1.jpg')" }}
              ></div>
            </div>

            {/* Floating elements */}
            <motion.div
              className={`absolute -bottom-6 -left-6 w-24 h-24 rounded-full flex items-center justify-center shadow-lg ${
                darkMode ? "bg-indigo-600" : "bg-indigo-500"
              }`}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-white font-bold">5+</span>
              <span className="text-white text-xs ml-1">Years</span>
            </motion.div>

            <motion.div
              className={`absolute -top-6 -right-6 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg ${
                darkMode ? "bg-purple-600" : "bg-purple-500"
              }`}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
            >
              <span className="text-white font-bold">120+</span>
              <span className="text-white text-xs">Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
