function AlsoPurchased() {
  return (
    <section
      id="products"
      className="px-4 sm:px-6 md:px-16 py-12 md:py-20 overflow-x-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">

        {/* LEFT: IMAGE */}
        <div className="relative flex justify-center bg-subtle-grid p-6 overflow-hidden">
          <img
            src="/Eko/images/stethoscope.png"
            alt="Stethoscope"
            className="
              w-full
              max-w-[260px]
              sm:max-w-[320px]
              md:max-w-[380px]
              h-auto
              object-contain
              md:-mb-20
            "
          />
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="flex flex-col p-4 sm:p-6 md:p-10 space-y-4 md:space-y-6 justify-center">
          <h1 className="text-2xl sm:text-3xl text-blue-950 font-bold leading-tight">
            The Most Advanced Littmann <br className="hidden sm:block" />
            Stethoscope Yet
          </h1>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            The Littmann CORE Stethoscope combines the outstanding acoustics,
            comfort, and quality of a Littmann cardiology-grade stethoscope.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-blue-950">
            The primary features of the stethoscope are:
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
            <li>40× amplification and active noise cancellation</li>
            <li>Toggle between analog and amplified modes</li>
            <li>Telehealth ready</li>
            <li>Tunable adult and pediatric diaphragms</li>
          </ul>

          <button className="mt-4 w-fit rounded-full border-2 border-blue-600 px-6 py-3 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
}

export default AlsoPurchased;


