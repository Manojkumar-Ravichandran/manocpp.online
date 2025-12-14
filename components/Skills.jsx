"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "React JS",
    "MongoDB",
    "MySQL",
    "JWT / OAuth2 / CSRF",
    "API Integration",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-blue-600 mb-10"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-4 border rounded-md shadow-sm bg-white text-center text-gray-700 font-medium"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
