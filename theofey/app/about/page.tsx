import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Theofey — his journey, values, and approach to digital growth, strategy, and long-term impact.",
};

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">

      {/* Page title */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-gray-600 max-w-2xl">
          A brief look into my journey, values, and the thinking behind my work.
        </p>
      </header>

      {/* Story */}
      <div className="max-w-3xl space-y-8 text-gray-700">

        <p>
          My work is centered around understanding how people, systems, and
          technology come together to create growth. I started my journey in
          digital marketing with a strong interest in research, strategy, and
          problem-solving.
        </p>

        <p>
          Over time, I developed experience across digital marketing, content
          strategy, Shopify growth, and technical support. Rather than focusing
          on trends, I prioritize clarity, structure, and long-term thinking in
          everything I build.
        </p>

        <p>
          I approach projects by first understanding the goal, the audience,
          and the environment. From there, I design systems that are practical,
          adaptable, and aligned with real outcomes — not just visibility.
        </p>

        <p>
          Beyond digital work, I am building long-term interests in agribusiness
          and sustainable ventures. This reflects my belief in creating value
          that extends beyond the digital space and into tangible, lasting
          impact.
        </p>

      </div>

    </section>
  );
}