import { Handbag } from "lucide-react";

const products = [
  {
    img: "/Eko/images/cardiopod.png",
    description: "Cardiopod | Combo Package Stethoscope Case",
    price: "$29.99",
    bg: "bg-[#ecc8ec]",
  },
  {
    img: "/Eko/images/eko-core.webp",
    description: "Eko CORE Digital Device Set Attachment",
    price: "$259",
    bg: "bg-[#ede2cf]",
  },
  {
    img: "/Eko/images/eko-duo.png",
    description: "Eko DUO ECG + Digital Device Stethoscope",
    price: "$399",
    bg: "bg-[#E8E7F4]",
  },
];

function ProductCard() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-6 max-w-7xl mx-auto overflow-x-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-950">
          Clinicians Also Purchased.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Buy risk-free. Our 75-day trial, flexible payment options, and no-hassle
          <br />returns make it easy for you to try Eko in your practice.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="group border rounded-2xl transition hover:shadow-xl bg-white"
          >
            {/* Image */}
            <div
              className={`mb-5 h-auto max-h-72 sm:h-64 md:h-72 w-full rounded-xl flex items-center justify-center ${product.bg}`}
            >
              <img
                src={product.img}
                alt={product.description}
                className="h-full max-h-72 w-auto object-contain"
              />
            </div>

            {/* Description */}
            <p className="font-medium px-4 sm:px-6 leading-snug text-gray-700 text-sm sm:text-base">
              {product.description}
            </p>

            {/* Price + Cart */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2">
              <span className="rounded-full px-3 sm:px-4 py-1 sm:py-1.5 font-semibold transition group-hover:bg-blue-600 group-hover:text-white whitespace-nowrap">
                {product.price}
              </span>

              <button className="h-9 w-9 rounded-full flex items-center justify-center transition group-hover:bg-blue-600 group-hover:text-white">
                <Handbag size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;


