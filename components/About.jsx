"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-blue-600 mb-6"
      >
        About Me
      </motion.h2>

      <p className="text-gray-700 leading-7 max-w-3xl">
        I am a Full Stack Developer with experience in Java, Spring Boot, React,
        and SQL. I transitioned from mechanical engineering into software
        development, bringing analytical thinking, process understanding, and a
        passion for building real-world applications. I enjoy solving problems,
        optimizing systems, and creating responsive user interfaces.
      </p>
    </section>
  );
}
