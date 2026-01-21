export default function AboutPage() {
  return (
<section className="bg-sky-200">
  <div className="max-w-5xl mx-auto px-6 py-20">

    <div className="bg-white rounded-2xl shadow-sm p-10 md:p-14">

      {/* HEADER */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        About PVM Sports Hub
      </h1>

      <div className="mt-4 h-1 w-24 bg-sky-600 rounded"></div>

      {/* CONTENT */}
      <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">
        <p>
          Welcome to <strong>PVM Sports Hub</strong>, your trusted destination for
          premium sports jerseys. Born from a deep passion for sports and style,
          we are dedicated to providing high-quality jerseys that blend comfort,
          durability, and modern design.
        </p>

        <p>
          Our mission is simple: to make authentic, stylish, and affordable jerseys
          accessible to fans who want to proudly represent their favorite teams
          and players — on match days and beyond.
        </p>

        <p>
          Every jersey we offer is carefully selected to ensure you look good
          and feel confident, whether you're cheering from the stadium,
          watching from home, or stepping out in style.
        </p>

        <p>
          Thank you for choosing PVM Sports Hub and becoming part of our growing
          community of passionate sports fans.
        </p>
      </div>

    </div>

  </div>
</section>
  )
}