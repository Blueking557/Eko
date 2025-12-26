function Newsletter() {
  return (
    <section id="contact" className="bg-[#ede2cf] p-6 md:p-10 m-4 md:m-20 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-visible">
      
      {/* Left Side: Text & Input */}
      <div className="flex-1 space-y-6 pr-0 md:pr-8 z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
          Subscribe To Our <br /> Newsletter
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          To know more offers, subscribe to our newsletter.
        </p>
        
        {/* Input + Button Overlap on Right */}
        <div className="relative w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="absolute top-1/2 right-1 -translate-y-1/2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Side: Image Extending Downwards */}
      <div className="flex-1 flex justify-end relative bg-subtle-grid">
        <img
          src="/images/stethoscope.png"
          alt="Stethoscope"
          className="max-w-[300px] md:max-w-[350px] h-auto object-contain -mb-16 md:-mb-20"
        />
      </div>
    </section>
  );
}

export default Newsletter;









