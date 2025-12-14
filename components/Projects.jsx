"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "GoalSync – OKR Management Tool",
      desc: "A platform to define, align, and track organizational OKRs with real-time progress metrics.",
    },
    {
      title: "SOP PO Tool",
      desc: "Purchase order tracking tool with workflow improvements.",
    },
    {
      title: "ERP / CRM System",
      desc: "Built React pages, fixed UI bugs, improved responsiveness.",
    },
    {
      title: "VVG Construction Renting System",
      desc: "Created reusable components, improved UI, integrated APIs.",
    },
    {
      title: "BPL Medical Workflow Tracker",
      desc: "Bug fixes and workflow enhancements.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-blue-600 mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 border rounded-lg bg-white shadow"
          >
            <h3 className="text-xl font-bold text-gray-800">{p.title}</h3>
            <p className="mt-3 text-gray-600">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
