export default function TrustedBy() {
  const logos = [
    "/images/Sutter-Health-logo.jpg",
    "/images/Renown_health_logo.webp",
    "/images/U-F Health.webp",
    "/images/SanderlingHealth logo.jpg",
    "/images/uams-logo.webp",
  ];

  return (
    <section className="bg-gray-100 py-10 sm:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Scrolling row */}
        <div className="relative overflow-hidden">
          <div
            className="
              flex w-max items-center
              gap-10 sm:gap-16 lg:gap-20
              px-4 sm:px-10
              animate-scroll
              hover:[animation-play-state:paused]
            "
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Trusted partner"
                className="
                  h-6 sm:h-7 lg:h-8
                  w-auto
                  object-contain
                  opacity-40
                  grayscale
                  hover:opacity-100
                  hover:grayscale-0
                  transition
                "
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


