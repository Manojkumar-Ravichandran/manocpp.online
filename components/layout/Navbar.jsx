"use client";

import { site } from "@/data/site";

export default function Navbar() {
  const menu = ["about", "skills", "projects", "experience", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <a href="#" className="font-bold text-blue-600">{site.name}</a>
        <div className="hidden md:flex gap-6">
          {menu.map(m => (
            <a key={m} href={`#${m}`} className="hover:text-blue-600">
              {m.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}