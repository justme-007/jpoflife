"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-pink-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="text-xl font-semibold">
          Theofey
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-700">
          <Link href="/about" className="hover:text-purple-700 transition">About</Link>
          <Link href="/services" className="hover:text-purple-700 transition">Services</Link>
          <Link href="/projects" className="hover:text-purple-700 transition">Projects</Link>
          <Link href="/contact" className="hover:text-purple-700 transition">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-6 py-4 flex flex-col gap-4 text-gray-700">
            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-purple-700 transition">About</Link>
            <Link href="/services" onClick={() => setOpen(false)} className="hover:text-purple-700 transition">Services</Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="hover:text-purple-700 transition">Projects</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-purple-700 transition">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}