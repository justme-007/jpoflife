export default function Home() {
  return (
    <section className="bg-sky-300">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="bg-white rounded-2xl shadow-sm p-12 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-sky-600 uppercase tracking-wide">
              Premium Sportswear
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Premium Sports Jerseys, <br /> Made for True Fans
            </h1>

            <p className="mt-6 text-gray-600 max-w-lg">
              PVM Sports Hub brings you quality, stylish, and affordable jerseys designed
              for comfort and confidence — on and off the pitch.
            </p>

            <a
              href="/shop"
              className="inline-block mt-8 bg-sky-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-sky-700 transition"
            >
              Shop Jerseys Now!!!
            </a>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-center">
            <div className="w-15 h-15 rounded-full bg-sky-300 flex items-center justify-center">
              <span className="text-sky-800 text-2xl font-bold">PVM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}