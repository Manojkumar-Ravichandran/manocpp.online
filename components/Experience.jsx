"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      role: "Software Trainee – Proz Solutions",
      date: "May 2025 – Present",
      desc: "Worked on ERP/CRM, VVG, BPL Medical workflow tracker, UI improvements, API integrations.",
    },
    {
      role: "Trainee Developer – Hema’s Enterprises",
      date: "Oct 2024 – Apr 2025",
      desc: "Quality control plans, inspection documentation.",
    },
    {
      role: "Quality Engineer – Violin Technologies",
      date: "Aug 2022 – Dec 2022",
      desc: "Inspections, documentation, ISO standards.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-blue-600 mb-10"
      >
        Experience
      </motion.h2>

      <div className="space-y-8 max-w-3xl">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 border rounded-lg bg-white shadow"
          >
            <h3 className="text-xl font-bold">{job.role}</h3>
            <span className="text-sm text-blue-600">{job.date}</span>
            <p className="mt-3 text-gray-600">{job.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
