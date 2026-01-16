"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f1713]/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
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

        {/* Navigation */}
        <div className="flex items-center gap-10 text-sm tracking-wide text-[#b7c1bb]">
          <Link href="/" className="hover:text-[#e6e8e5] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#e6e8e5] transition">
            About
          </Link>
          <Link href="/work" className="hover:text-[#e6e8e5] transition">
            Work
          </Link>
          <Link href="/books" className="hover:text-[#e6e8e5] transition">
            Books
          </Link>
        </div>

      </div>
    </nav>
  );
}