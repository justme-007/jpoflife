"use client";

import { useState} from "react";
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen]= useState (false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-14 sm:h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/pvm-logo.png"
            alt="PVM Sports Hub logo"
            width={80}
            height={40}
            priority
          />
        </Link>

        <button
  onClick={() => setOpen(!open)}
  className="md:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition"
  aria-label="Toggle menu"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-800"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

        {/* Navigation */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/shop" className="hover:text-black">
            Shop
          </Link>
          <Link href="/about" className="hover:text-black">
            About
          </Link>
        </div>

      </nav>
      {open && (
  <div className="md:hidden border-t bg-white">
    <div className="px-4 py-4 space-y-3">
      <Link
        href="/"
        onClick={() => setOpen(false)}
        className="block px-3 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100"
      >
        Home
      </Link>

      <Link
        href="/shop"
        onClick={() => setOpen(false)}
        className="block px-3 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100"
      >
        Shop
      </Link>

      <Link
        href="/about"
        onClick={() => setOpen(false)}
        className="block px-3 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100"
      >
        About
      </Link>
    </div>
  </div>
)}
    </header>
  )
}