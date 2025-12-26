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
    <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto overflow-x-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-950">
          Clinicians Also Purchased.
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Buy risk-free. Our 75-day trial, flexible payment options, and no-hassle
          <br />returns make it easy for you to try Eko in your practice.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="group border rounded-2xl transition hover:shadow-xl bg-white overflow-hidden"
          >
            {/* Image */}
            <div
              className={`mb-5 h-56 sm:h-64 md:h-72 w-full rounded-xl flex items-center justify-center ${product.bg}`}
            >
              <img
                src={product.img}
                alt={product.description}
                className="h-full object-contain max-w-full"
              />
            </div>

            {/* Description */}
            <p className="font-medium m-4 leading-snug text-gray-700">
              {product.description}
            </p>

            {/* Price + Cart */}
            <div className="flex items-center justify-between m-4 flex-wrap">
              <span
                className="
                  rounded-full px-4 py-1
                  font-semibold
                  transition
                  group-hover:bg-blue-600
                  group-hover:text-white
                  whitespace-nowrap
                "
              >
                {product.price}
              </span>

              <button
                className="
                  h-9 w-9 rounded-full
                  flex items-center justify-center
                  transition
                  group-hover:bg-blue-600
                  group-hover:text-white
                "
              >
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




