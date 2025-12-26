import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const items = [
    {
      doc: "Dr. Dumebi",
      testimonial: "Beautiful brand new stethoscope with engraving!!",
      reviews: "123k reviews",
      country: "United States",
    },
    {
      doc: "Dr. Kingsley",
      testimonial: "Beautiful brand new stethoscope with engraving!!",
      reviews: "98k reviews",
      country: "France",
    },
    {
      doc: "Dr. Robert",
      testimonial: "Beautiful brand new stethoscope with engraving!!",
      reviews: "110k reviews",
      country: "Germany",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth; 
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="p-6 sm:p-10 border relative overflow-x-hidden"
    >
      {/* TITLE + ARROWS */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl font-bold text-blue-950">
            People say about Our Products
          </h1>
          <p className="text-blue-950 text-sm sm:text-base mt-1">
            Our products are trusted by medical professionals.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("prev")}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("next")}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* TESTIMONIAL CARDS */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row min-w-[280px] sm:min-w-[300px] md:min-w-[320px] h-auto min-h-[200px] p-4 shadow-sm border-t hover:shadow-2xl rounded-lg gap-4 sm:gap-6 flex-shrink-0 bg-white"
          >
            {/* LEFT BLOCK */}
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="text-sm sm:text-base text-blue-950 font-bold">
                {item.testimonial}
              </h3>

              <div className="flex items-center gap-3 border-t-2 pt-2">
                <img
                  src="/Eko/images/stethoscope.png"
                  alt="stethoscope"
                  className="w-10 h-10 object-contain"
                />

                <div>
                  <h2 className="font-bold text-blue-950">{item.doc}</h2>
                  <p className="text-sm text-gray-500">{item.country}</p>
                </div>
              </div>
            </div>

            {/* RIGHT BLOCK */}
            <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start">
              <p className="text-sm font-semibold">{item.reviews}</p>
              <div className="flex gap-[2px] mt-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="bg-teal-500 text-white p-0.5 text-xs rounded"
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}







