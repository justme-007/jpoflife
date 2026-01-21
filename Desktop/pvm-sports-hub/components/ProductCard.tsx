type ProductProps = {
  name: string
  price: number
}

export default function ProductCard({ name, price }: ProductProps) {
  const whatsappNumber = "2348157009524" // 

  const message = `Hello, I'm interested in the ${name} priced at ₦${price}.`

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="mb-3 h-40 w-full rounded-md bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
        Image
      </div>

      <h3 className="text-sm font-medium text-black">
        {name}
      </h3>

      <p className="mt-1 text-sm text-gray-600">
        ₦{price.toLocaleString()}
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block w-full rounded-md border border-black px-4 py-2 text-center text-sm font-medium text-black hover:bg-black hover:text-white"
      >
        Order on WhatsApp
      </a>
    </div>
  )
}