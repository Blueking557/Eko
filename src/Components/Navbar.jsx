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
    <nav className="px-4 md:px-14 py-4 bg-white shadow-sm relative z-50">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1
          className="text-xl font-bold text-blue-950 cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          Eko
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
          <li onClick={() => handleScroll("hero")} className="hover:text-blue-950 cursor-pointer">Home</li>
          <li onClick={() => handleScroll("products")} className="hover:text-blue-950 cursor-pointer">Products</li>
          <li onClick={() => handleScroll("about")} className="hover:text-blue-950 cursor-pointer">About</li>
          <li onClick={() => handleScroll("testimonials")} className="hover:text-blue-950 cursor-pointer">Testimonial</li>
          <li onClick={() => handleScroll("contact")} className="hover:text-blue-950 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-4 p-2 text-blue-950 bg-orange-50 rounded-full">
          <Handbag />
          <User />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-950"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-6 space-y-5">

          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-600">
            <li onClick={() => handleScroll("hero")} className="hover:text-blue-950 cursor-pointer">Home</li>
            <li onClick={() => handleScroll("products")} className="hover:text-blue-950 cursor-pointer">Products</li>
            <li onClick={() => handleScroll("about")} className="hover:text-blue-950 cursor-pointer">About</li>
            <li onClick={() => handleScroll("testimonials")} className="hover:text-blue-950 cursor-pointer">Testimonial</li>
            <li onClick={() => handleScroll("contact")} className="hover:text-blue-950 cursor-pointer">Contact</li>
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







