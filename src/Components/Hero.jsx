import CTAButton from "./CTAButton";

export default function Hero() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative px-4 sm:px-6 md:px-16 py-10 md:py-20 overflow-x-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
        
        {/* LEFT CONTENT */}
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-dark">
            3M™ Littmann® CORE <br className="hidden sm:block" />
            Digital Stethoscope
          </h1>

          <p className="text-gray-500 mt-4 max-w-md">
            Best in class 3M Littmann stethoscope technology meets advanced Eko digital innovations.
          </p>

          {/* PRICE + COLORS */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <p className="text-2xl font-semibold whitespace-nowrap">
              $349.99
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="h-8 w-8 rounded-full bg-black" />
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 via-green-400 to-yellow-400" />
              <div className="h-8 w-8 rounded-full bg-gradient-to-tl from-orange-200 via-white to-orange-400" />
              <div className="h-8 w-8 rounded-full bg-gradient-to-bl from-white via-gray-100 to-white" />
            </div>

            <p className="text-gray-400 text-sm w-full sm:w-auto">
              High Polish Copper
            </p>
          </div>

          <div className="mt-6">
            <CTAButton
              text="Add to Cart"
              onClick={() => handleScroll("products")}
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center min-h-[280px] sm:min-h-[350px] md:min-h-[600px] bg-subtle-grid">
          <img
            src="/Eko/images/stethoscope.png"
            alt="3M Littmann CORE Digital Stethoscope"
            className="relative z-10 w-full max-w-[260px] sm:max-w-sm md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}

















