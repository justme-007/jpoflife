import { client } from "@/sanity/lib/client"
import Image from "next/image"
import { notFound } from "next/navigation"

type Product = {
  name: string
  price: number
  description: string
  imageUrl: string
}

async function getProduct(slug: string): Promise<Product | null> {
  const query = `
    *[_type == "product" && slug.current == $slug][0]{
      name,
      price,
      description,
      "imageUrl": image.asset->url
    }
  `
  return client.fetch(query, { slug })
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  if (!product) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      
      <div className="relative w-full h-[400px] bg-gray-100 rounded-lg">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl text-purple-600 font-semibold mb-4">
          ₦{product.price}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>
        <a
  href={`https://wa.me/2348157009524?text=${encodeURIComponent(
    `Hello, I'm interested in ${product.name} (₦${product.price.toLocaleString()}).`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
>
  Chat on WhatsApp
</a>
      </div>

    </div>
  )
}