// FILE: src/components/Hero.jsx
import CTAButton from './CTAButton';

export default function Hero() {
  // Smooth scroll for CTA button
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id='home' className="relative px-4 md:px-16 py-6 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-dark">
            3M™ Littmann® CORE <br /> Digital Stethoscope
          </h1>

          <p className="text-gray-500 mt-4 max-w-md">
            Best in class 3M Littmann stethoscope technology meets advanced Eko digital innovations.
          </p>

          <div className="flex items-center p-3 gap-4 mt-6 flex-wrap">
            <p className="text-2xl font-semibold">$349.99</p>

            {/* Color / Material options */}
            <div className="rounded-full h-9 w-9 bg-black"></div>
            <div className="rounded-full h-9 w-9 bg-gradient-to-br from-purple-600 via-green-400 to-yellow-400"></div>
            <div className="rounded-full h-9 w-9 bg-gradient-to-tl from-orange-200 via-white to-orange-400"></div>
            <div className="rounded-full h-9 w-9 bg-gradient-to-bl from-white via-gray-100 to-white"></div>

            <p className="text-gray-400 ml-2">High Polish Copper</p>
          </div>

          <div className="mt-6">
            {/* CTA Button navigates to Products section */}
            <CTAButton text="Add to Cart" onClick={() => handleScroll('products')} />
          </div>
        </div>

        {/* RIGHT IMAGE WITH GRID BACKGROUND */}
        <div className="relative flex justify-center items-center min-h-[400px] md:min-h-screen bg-subtle-grid">
          <img
            src="/images/stethoscope.png"
            alt="3M Littmann CORE Digital Stethoscope"
            className="relative z-10 max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}













