import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Theofey to discuss digital growth, strategy, and collaboration opportunities.",
};

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">

      {/* Page title */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-gray-600 max-w-2xl">
          If you’d like to discuss a project, collaboration, or idea,
          feel free to reach out.
        </p>
      </header>

      {/* Contact options */}
      <div className="space-y-8 text-gray-700">

        <div>
          <h2 className="text-xl font-semibold mb-2">WhatsApp</h2>
          <p>
            <a
              href="https://wa.me/234XXXXXXXXXX"
              className="text-gray-600 hover:text-purple-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message me on WhatsApp
            </a>
          </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p>
            <a
              href="mailto:hello@theofey.com"
              className="text-gray-600 hover:text-purple-700 transition"
            >
              hello@theofey.com
            </a>
          </p>
        </div>

<div>
  <h2 className="text-xl font-semibold mb-3">Social</h2>

  <div className="flex items-center gap-6 text-2xl">
    <a
      href="https://x.com/username"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-purple-700 transition"
      aria-label="Twitter"
    >
      <FaXTwitter />
    </a>

    <a
      href="https://linkedin.com/in/username"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-purple-700 transition"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>

    <a
      href="https://instagram.com/username"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-purple-700 transition"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
  </div>
</div>

    </section>
  );
}