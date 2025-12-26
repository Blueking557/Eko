import { ShoppingBag } from "lucide-react"; // icon

const products = [
  {
    img: "/images/cardiopod.png",
    description: "Cardiopod | Combo Package Stethoscope Case",
    price: "$29.99",
  },
  {
    img: "/images/eko-core.png",
    description: "Eko CORE Digital Device Set Attachment",
    price: "$259",
  },
  {
    img: "/images/eko-duo.png",
    description: "Eko DUO ECG + Digital Device Stethoscope",
    price: "$399",
  },
];

export default function ProductCard() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-3">
          Clinicians Also Purchased
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Buy risk free. Our 75-day trial, flexible payment options, and
          no-hassle returns make it easy for you to try Eko in your practice.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 hover:shadow-lg transition group"
          >
            <div className="relative h-48 rounded-lg mb-4 flex items-center justify-center bg-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-white/40" />
              <img
                src={product.img}
                alt={product.description}
                className="relative z-10 h-full object-contain group-hover:scale-105 transition"
              />
            </div>

            <p className="font-medium mb-4">{product.description}</p>

            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">{product.price}</p>
              <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-gray-900 transition" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

