function AlsoPurchased() {
  return (
    <section id="products" className="m-4 md:m-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* LEFT: IMAGE */}
      <div className="flex justify-center bg-subtle-grid p-6 relative">
        <img
          src="/Eko/images/stethoscope.png"
          alt="Stethoscope"
          className="max-w-[280px] sm:max-w-[350px] md:max-w-[380px] h-auto object-contain -mb-16 md:-mb-20"
        />
      </div>

      {/* RIGHT: TEXT CONTENT */}
      <div className="flex flex-col p-6 md:p-10 space-y-4 md:space-y-6 justify-center">
        <h1 className="text-2xl md:text-3xl text-blue-950 font-bold leading-tight">
          The Most Advanced Littmann <br /> Stethoscope Yet
        </h1>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          The Littmann CORE Stethoscope combines the outstanding
          acoustics, comfort, and quality of a Littmann cardiology-grade
          stethoscope.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-blue-950">
          The primary features of the stethoscope are:
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
          <li>40× amplification and active noise cancellation</li>
          <li>Toggle between analog and amplified modes</li>
          <li>Telehealth ready</li>
          <li>Tunable adult and pediatric diaphragms</li>
        </ul>

        <button className="mt-4 w-fit rounded-full border-2 border-blue-600 px-6 py-3 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition">
          Explore More
        </button>
      </div>

    </section>
  );
}

export default AlsoPurchased;

