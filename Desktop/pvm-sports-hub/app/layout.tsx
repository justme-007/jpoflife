import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PVM Sports Hub",
  description: "Premium sports jerseys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
       <footer className="bg-black text-gray-300">
  <div className="max-w-7xl mx-auto px-6 py-14">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

      {/* BRAND */}
      <div>
        <h3 className="text-xl font-bold text-white">PVM Sports Hub</h3>
        <p className="mt-4 text-sm text-gray-400">
          Premium football jerseys made for true fans.
          Quality, comfort, and confidence — on and off the pitch.
        </p>
      </div>

      {/* QUICK LINKS */}
      <div>
        <h4 className="font-semibold text-white">Quick Links</h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <a href="/" className="hover:text-sky-500 transition">Home</a>
          </li>
          <li>
            <a href="/shop" className="hover:text-sky-500 transition">Shop</a>
          </li>
          <li>
            <a href="/about" className="hover:text-sky-500 transition">About</a>
          </li>
        </ul>
      </div>

      {/* SUPPORT */}
      <div>
        <h4 className="font-semibold text-white">Support</h4>
        <p className="mt-4 text-sm text-gray-400">
          Email us for enquiries or support:
        </p>
        <a
          href="mailto:Holuwapvm1@gmail.com"
          className="mt-2 inline-block text-sm text-sky-500 hover:underline"
        >
        Support@Holuwapvm1@gmail.com
        </a>
      </div>
      </div>

{/* SOCIALS */}
<div>
  <h4 className="font-semibold text-white">Follow Us</h4>

  <div className="mt-4 flex items-center space-x-4">

    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/16sj71MDYC/?mibextid=wwXIfr"
      target="_blank"
      rel="noonpener noreferrer"
      aria-label="Facebook"
      className="text-gray-400 hover:text-sky-500 hover:-translate-y-0.5 transition"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/oluwapelumi-ogunsola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      target="_blank"
      rel="noonpener noreferrer"
      aria-label="LinkedIn"
      className="text-gray-400 hover:text-sky-500 hover:-translate-y-0.5 transition"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.226.79 24 1.77 24h20.46C23.2 24 24 23.226 24 22.273V1.727C24 .774 23.2 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03 1.12 0 2.03.91 2.03 2.03 0 1.12-.91 2.03-2.03 2.03zM20.452 20.452h-3.5v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666h-3.5V9h3.36v1.561h.046c.468-.886 1.612-1.82 3.316-1.82 3.548 0 4.205 2.337 4.205 5.379v6.332z"/>
      </svg>
    </a>

    {/* Twitter */}
    <a
      href="https://x.com/oluwapelumi_pvm?s=21"
      target="_blank"
      rel="noonpener noreferrer"
      aria-label="Twitter"
      className="text-gray-400 hover:text-sky-500 hover:-translate-y-0.5 transition"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.917 4.917 0 001.523 6.573 4.903 4.903 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.919 4.919 0 004.59 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634A10.012 10.012 0 0024 4.557z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/pvmjerseys?igsh=MTZ1a3N1dmhwd2J1cw%3D%3D&utm_source=qr"
      target="_blank"
      rel="noonpener noreferrer"
      aria-label="Instagram"
      className="text-gray-400 hover:text-sky-500 hover:-translate-y-0.5 transition"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.069 1.646.069 4.84s-.012 3.575-.07 4.84c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608C2.175 15.738 2.163 15.358 2.163 12s.012-3.575.07-4.84c.062-1.366.343-2.633 1.318-3.608C4.526 2.576 5.793 2.295 7.159 2.233 8.425 2.175 8.805 2.163 12 2.163zm0 3.675a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
      </svg>
    </a>

  </div>
</div>

    {/* BOTTOM */}
    <div className="mt-12 pt-6 border-t border-gray-800 text-sm text-gray-500 text-center">
      © {new Date().getFullYear()} PVM Sports Hub. All rights reserved.
    </div>

  </div>
</footer>
<a
  href="https://wa.me/2348157009524?text=Hello%20PVM%20Sports%20Hub,%20I'm%20interested%20in%20your%20jerseys."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="
    fixed bottom-6 right-6
    z-50
    flex items-center justify-center
    w-14 h-14
    rounded-full
    bg-green-500
    text-white
    text-2xl
    shadow-lg
    hover:bg-green-600
    hover:scale-105
    transition
  "
>
  💬
</a>
      </body>
    </html>
  );
}
