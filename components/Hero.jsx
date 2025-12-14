"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-20 mt-16 gap-12">

      {/* LEFT — TEXT */}
      <div className="flex-1">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl mb-3 font-semibold text-gray-700"
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-blue-600"
        >
          Manojkumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl mt-4 text-gray-600 max-w-xl"
        >
          Full Stack Developer specializing in Java, Spring Boot, React, and
          modern API integrations. Passionate about building clean, scalable, and
          efficient applications.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700"
        >
          Contact Me
        </motion.a>
      </div>

      {/* RIGHT — PROFILE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="flex-1 flex justify-center"
      >
        <Image
          src="/images/profile.jpg"
          width={260}
          height={260}
          alt="Manojkumar Profile"
          className="rounded-full shadow-lg object-cover border-4 border-blue-500"
        />
      </motion.div>

    </section>
  );
}
