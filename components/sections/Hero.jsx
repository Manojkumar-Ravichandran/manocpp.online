"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";

export default function Hero() {
  const skillCount = skills.reduce((total, group) => total + group.items.length, 0);
  const stats = [
    { label: "Projects shipped", value: `${projects.length}+` },
    { label: "Core skills", value: `${skillCount}+` },
    { label: "Roles held", value: `${experience.length}` },
  ];

  return (
    <section id="top" className="px-6 pb-20 pt-28 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            {site.role}
          </span>

          <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-semibold leading-[1.05] text-slate-900">
            Hi, I'm {site.name}. I build resilient full-stack products.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-600">
            {site.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900"
            >
              Let's connect
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-slate-600 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3">
                <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-cyan-100 via-white to-amber-100 blur-2xl" />
          <div className="relative rounded-[28px] border border-white/80 bg-white/80 p-4 shadow-xl">
            <Image
              src={site.profile}
              alt={`${site.name} profile`}
              width={400}
              height={460}
              priority
              className="h-[420px] w-full rounded-[22px] object-cover"
            />
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Focus</p>
              <p className="mt-1">{site.tagline}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
