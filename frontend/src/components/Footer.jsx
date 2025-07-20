// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Dribbble", icon: "🏀", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "GitHub", icon: "🐙", url: "#" },
    { name: "Behance", icon: "🎨", url: "#" },
  ];

  const footerLinks = [
    { title: "Home", links: ["About", "Services", "Portfolio", "Contact"] },
    { title: "Resources", links: ["Blog", "Help Center", "Tutorials", "FAQ"] },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <footer
      className={`pt-20 pb-10 ${
        darkMode ? "bg-gray-900" : "bg-gray-900 text-gray-300"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div
                className={`w-10 h-10 rounded-lg ${
                  darkMode ? "bg-indigo-500" : "bg-indigo-600"
                } flex items-center justify-center mr-3`}
              >
                <span className="text-white font-bold">FZ</span>
              </div>
              <span className="text-xl font-bold text-white">Frozon</span>
            </div>

            <p className="mb-6 text-gray-400">
              Crafting beautiful digital experiences that help you stand out and
              achieve your business goals.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold text-white mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest design tips and resources.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-l-lg w-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className={`px-4 py-3 rounded-r-lg font-medium ${
                  darkMode
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Frozon Portfolio Template. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
