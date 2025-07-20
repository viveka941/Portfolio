// src/components/Testimonials.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MovingBorderDemo } from "./MovingBorderDemo";

const Testimonials = ({ darkMode }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_USER_URL}/user/list`);
        setTestimonials(res.data.list || []);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    }

    fetchFeedback();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
       `${import.meta.env.VITE_BACKEND_USER_URL}/user/feed`,
        data
      );
      console.log("Submitted:", response.data);
      setTestimonials((prev) => [data, ...prev]);
      reset(); // Clear form
    } catch (error) {
      console.error("Failed to submit testimonial:", error);
    }
  };

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
            {" "}
            <MovingBorderDemo text={"Client Testimonials"} />
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

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mb-16">
          <motion.div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-gray-50"
            } border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Rating Input */}
            <div className="flex mb-5">
              {[...Array(5)].map((_, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    value={i + 1}
                    {...register("rating", { required: true })}
                    className="hidden"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 cursor-pointer ${
                      i < (parseInt(watch("rating")) || 0)
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
                </label>
              ))}
            </div>
            {errors.rating && (
              <p className="text-red-500 text-sm mb-3">Rating is required</p>
            )}

            {/* Feedback */}
            <textarea
              {...register("feedback", { required: true })}
              placeholder="Write your feedback..."
              className={`w-full mb-6 italic p-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-700 text-gray-300 border-gray-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            />
            {errors.feedback && (
              <p className="text-red-500 text-sm mb-3">Feedback is required</p>
            )}

            {/* Name and Role */}
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
              <div className="ml-4 flex-1">
                <input
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className={`w-full font-bold mb-1 p-1 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">Name is required</p>
                )}
                <input
                  {...register("role", { required: true })}
                  placeholder="Your Role (e.g., Student)"
                  className={`w-full text-sm p-1 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 text-gray-400 border-gray-600"
                      : "bg-white text-gray-600 border-gray-300"
                  }`}
                />
                {errors.role && (
                  <p className="text-red-500 text-xs">Role is required</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`mt-4 px-4 py-2 rounded-lg font-semibold ${
                darkMode
                  ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              Submit Feedback
            </button>
          </motion.div>
        </form>

        {/* Testimonials Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id || index}
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
                "{testimonial.feedback}"
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
