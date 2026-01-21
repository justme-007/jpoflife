import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Theofey is a digital growth strategist helping individuals and businesses grow online through strategy, content, and data-driven marketing.",
};

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            THEOFEY
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Digital Growth Strategist & Marketer
          </p>
          <p className="text-gray-600 mb-10">
            I help individuals and businesses grow online through strategy,
            content, and data-driven marketing — with a long-term vision for
            sustainable ventures.
          </p>

          <Link
            href="/contact"
            className="bg-purple-700 text-white px-6 py-3 text-sm font-medium hover:bg-purple-800 transition"
          >
            Work with me
          </Link>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-12">
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Digital Strategy
              </h3>
              <p className="text-gray-600">
                Helping brands and individuals define clear growth direction
                through positioning, planning, and execution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Content & Brand Growth
              </h3>
              <p className="text-gray-600">
                Building authority and trust through intentional content and
                brand systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Shopify Marketing
              </h3>
              <p className="text-gray-600">
                Supporting store owners with growth strategy, optimization, and
                marketing execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-6">
            My Approach
          </h2>
          <p className="text-gray-600 max-w-3xl">
            I focus on clarity over noise, systems over shortcuts, and long-term
            thinking over quick wins. My work blends strategy, research, and
            execution to create sustainable digital growth.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-6">
            Long-Term Vision
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Beyond digital growth, I’m building long-term interests in
            agribusiness and sustainable ventures as part of a broader vision
            for impact and value creation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-6">
            Let’s Work Together
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            If you’re looking for clarity, structure, and intentional growth,
            let’s talk.
          </p>

          <Link
            href="/contact"
            className="bg-purple-700 text-white px-6 py-3 text-sm font-medium hover:bg-purple-800 transition"
          >
            Contact me
          </Link>
        </div>
      </section>

    </main>
  );
}