import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

const WHATSAPP_NUMBER = "2348157009524" // 👈 replace with your number

type Product = {
  _id: string
  name: string
  price: number
  image: any
}

export default async function ShopPage() {
  const products: Product[] = await client.fetch(`
    *[_type == "product"] | order(_createdAt desc){
      _id,
      "name": title,
      price,
      image
    }
  `)

  return (
    <section className="bg-sky-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      
      {/* SHOP PAGE HEADER */}
<div className="mb-12">
  <h1 className="text-3xl font-bold text-gray-900">
    Shop Jerseys
  </h1>

  <p className="mt-2 text-gray-800">
    Original-quality football jerseys, ready for delivery.
  </p>

  <div className="mt-4 h-1 w-20 bg-sky-600 rounded"></div>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {products.map((product) => (
          <a
            key={product._id}
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hello, I'm interested in ${product.name || "this product"} (₦${product.price.toLocaleString()}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5 hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden"
          >
           
            {product.image && (
  <div className="relative w-full h-[220px] sm:h-[260px] bg-gray-100 rounded-xl overflow-hidden">
    <Image
      src={urlFor(product.image).width(400).height(400).url()}
      alt={product.name || "Product image"}
      fill
      className="object-contain p-4 transition-transform duration-300 hover:scale-105"
    />
  </div>
)}

         <div className="p-5 flex flex-col gap-2">

  <h3 className="text-base font-semibold text-gray-900 leading-snug">
    {product.name}
  </h3>

  <p className="text-sky-600 font-bold text-lg">
    ₦{product.price?.toLocaleString()}
  </p>

  <div className="mt-2 space-y-1 text-xs text-gray-500">
    <p>🚚 Nationwide delivery</p>
    <p>💳 Secure payment</p>
    <p>⚡ Fast WhatsApp response</p>
  </div>

</div>
          </a>
        ))}
      </div>
    </div>
    </section>
  )
}