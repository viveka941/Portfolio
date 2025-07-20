// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      content:
        "Working with Alex was transformative for our product. His design thinking approach helped us solve complex user problems in elegant ways.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, StartupHub",
      content:
        "The mobile app Alex designed for us exceeded all expectations. Our user engagement increased by 140% after launch.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandWorks",
      content:
        "Alex created a stunning brand identity that perfectly captures our values. The response from our clients has been phenomenal.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
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
            Client Testimonials
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              } border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? darkMode
                          ? "text-yellow-400"
                          : "text-yellow-500"
                        : darkMode
                        ? "text-gray-700"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p
                className={`mb-6 italic ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                <div className="ml-4">
                  <h4
                    className={`font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
