"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menu = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2 font-display text-lg font-semibold text-slate-900">
          {site.name}
          <span className="text-xs font-medium text-slate-500">{site.role}</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium uppercase tracking-widest text-slate-500 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
          >
            Let's talk
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg">
            {menu.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
