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

      <div className="mt-4 space-y-2">
        <p><strong>Email:</strong> manojkumar.work1@gmail.com</p>
        <p><strong>Phone:</strong> +91 9600879006</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/manocpp</p>
      </div>
    </section>
  );
}
