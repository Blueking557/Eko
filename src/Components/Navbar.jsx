import { useState } from "react";
import { User, Handbag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close menu on click
    }
  };

  return (
    <nav className="px-4 sm:px-6 md:px-14 py-4 bg-white shadow-sm relative z-50 overflow-x-hidden">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo */}
        <h1
          className="text-xl font-bold text-blue-950 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          Eko
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
          {["home", "products", "about", "testimonials", "contact"].map((item, i) => (
            <li
              key={i}
              onClick={() => handleScroll(item)}
              className="hover:text-blue-950 cursor-pointer capitalize"
            >
              {item === "testimonials" ? "Testimonial" : item}
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-3 p-2 text-blue-950 bg-orange-50 rounded-full">
          <Handbag />
          <User />
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-blue-950">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-6 space-y-5 w-full max-w-xs mx-auto">
          
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-600">
            {["home", "products", "about", "testimonials", "contact"].map((item, i) => (
              <li
                key={i}
                onClick={() => handleScroll(item)}
                className="hover:text-blue-950 cursor-pointer capitalize"
              >
                {item === "testimonials" ? "Testimonial" : item}
              </li>
            ))}
          </ul>

          <div className="flex gap-4 pt-4 border-t text-blue-950">
            <Handbag />
            <User />
          </div>
        </div>
      )}
    </nav>
  );
}








