"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-blue-600 mb-6"
      >
        Contact Me
      </motion.h2>

      <p className="text-gray-700">Let's connect!</p>

      <div className="mt-4 space-y-2 text-gray-800">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:manojkumar.work1@gmail.com"
            className="text-blue-600 hover:underline"
          >
            manojkumar.work1@gmail.com
          </a>
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+919600879006"
            className="text-blue-600 hover:underline"
          >
            +91 9600879006
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/manocpp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/manocpp
          </a>
        </p>
      </div>
    </section>
  );
}
