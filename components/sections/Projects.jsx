"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Projects</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              Selected work that blends product and engineering.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-500">
            Focused on internal platforms, workflows, and data-driven user experiences.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article key={project.slug} variants={item}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                    Case study
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{project.shortDesc}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  View details
                  <span className="transition group-hover:translate-x-1">-&gt;</span>
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
