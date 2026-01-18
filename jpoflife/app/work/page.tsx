import Link from "next/link";
export default function Work() {
  return (
    <section className="space-y-6">
        <h1 className="text-3xl font-semibold">
          Work & Resources
        </h1>

        <p className="text-gray-600 leading-relaxed">
          This page holds the work I create, ideas refined into usable
          frameworks, and resources designed to support long-term growth.
        </p>

        {/* Resource Card */}
        <Link
          href="/books"
          className="block mt-12 border border-[#1f3a2e] rounded-lg p-6 hover:border-[#8fa89a] transition"
        >
          <h2 className="text-xl font-medium text-[#e6e8e5]">
            Ebooks
          </h2>

          <p className="mt-3 text-[#b7c1bb] leading-relaxed">
            A short, practical book exploring fundamental pathways to
            sustainable growth, clarity, and disciplined decision-making.
          </p>

          <p className="mt-4 text-sm uppercase tracking-widest text-[#8fa89a]">
            View details →
          </p>
        </Link>

        <div className="mt-10 text-sm text-[#8fa89a]">
          More work will be added here over time.
        </div>
    </section>
  );
}