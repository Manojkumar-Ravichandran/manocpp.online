"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["about", "skills", "projects", "experience", "contact"];

  return (
    <>
      {/* TOP NAV */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md shadow-sm z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <a href="/">
            <h1 className="cursor-pointer text-xl font-bold text-blue-600">
              Manojkumar
            </h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative group cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1">
              <span
                className={`block h-[3px] w-6 bg-gray-800 transition-all ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-[3px] w-6 bg-gray-800 transition-all ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-[3px] w-6 bg-gray-800 transition-all ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg z-40 py-4"
          >
            <div className="flex flex-col items-center gap-4 text-gray-700 font-medium">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="py-2 text-lg"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
