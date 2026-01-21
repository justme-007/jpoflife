import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital growth services by Theofey including strategy, content development, Shopify marketing, and research-driven support.",
};

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      
      {/* Page title */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-gray-600 max-w-2xl">
          I offer focused digital growth services designed to help individuals
          and businesses build visibility, traction, and long-term value.
        </p>
      </header>

      {/* Services grid */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Digital Growth */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Digital Growth Strategy
          </h2>
          <p className="text-gray-700 mb-4">
            Clear marketing direction built around audience understanding,
            positioning, and measurable growth.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Digital marketing strategy</li>
            <li>Brand positioning & messaging</li>
            <li>Growth planning & execution</li>
          </ul>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Content & Brand Growth
          </h2>
          <p className="text-gray-700 mb-4">
            Strategic content designed to build authority, trust, and consistent
            engagement across platforms.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Content strategy</li>
            <li>Personal & business branding</li>
            <li>Audience engagement systems</li>
          </ul>
        </div>

        {/* Shopify */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Shopify Marketing
          </h2>
          <p className="text-gray-700 mb-4">
            Helping Shopify store owners improve traffic quality, conversion,
            and overall store performance.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Store growth strategy</li>
            <li>Conversion optimization</li>
            <li>Marketing funnel support</li>
          </ul>
        </div>

        {/* Research & Tech */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Research & Technical Support
          </h2>
          <p className="text-gray-700 mb-4">
            Research-driven insights and technical support that complement
            digital growth and decision-making.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Crypto market research</li>
            <li>Technical & networking support</li>
            <li>Data-informed decision support</li>
          </ul>
        </div>

      </div>

      {/* Closing note */}
      <div className="mt-20 max-w-2xl">
        <p className="text-gray-600">
          Beyond digital services, I’m building long-term interests in
          agribusiness and sustainable ventures as part of a broader vision.
        </p>
      </div>

    </section>
  );
}