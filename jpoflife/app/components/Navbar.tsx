"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f1713]/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/jpoflife-logo.png"
              alt="Jpoflife"
              width={28}
              height={28}
              className="opacity-90"
            />
            <span className="text-sm font-medium tracking-wide text-[#e6e8e5]">
              Jpoflife
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="ml-auto hidden md:flex items-center gap-10 text-sm tracking-wide text-[#b7c1bb]">
            <Link href="/" className="hover:text-[#e6e8e5] transition">Home</Link>
            <Link href="/about" className="hover:text-[#e6e8e5] transition">About</Link>
            <Link href="/work" className="hover:text-[#e6e8e5] transition">Work</Link>
            <Link href="/books" className="hover:text-[#e6e8e5] transition">Books</Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto md:hidden text-2xl text-[#e6e8e5]"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-16 left-0 w-full bg-[#0f1713]/95 backdrop-blur-sm md:hidden z-40">
          <div className="flex flex-col items-center gap-6 py-8 text-sm tracking-widest text-[#b7c1bb]">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
            <Link href="/books" onClick={() => setOpen(false)}>Books</Link>
          </div>
        </div>
      )}
    </>
  );
}