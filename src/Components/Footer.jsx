import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1437] text-[#CFD4FF] overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-14">
        
        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-semibold mb-4">Eko</h2>
          <p className="text-sm leading-relaxed opacity-80 max-w-sm">
            Eko builds digital tools that empower clinicians to deliver superior patient care.
          </p>

          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"
              >
                <Icon size={16} className="text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="hover:opacity-100 cursor-pointer">Home</li>
            <li className="hover:opacity-100 cursor-pointer">Products</li>
            <li className="hover:opacity-100 cursor-pointer">About</li>
            <li className="hover:opacity-100 cursor-pointer">Testimonials</li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-6">Product</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="hover:opacity-100 cursor-pointer">Product Details</li>
            <li className="hover:opacity-100 cursor-pointer">Product Features</li>
            <li className="hover:opacity-100 cursor-pointer">Support</li>
            <li className="hover:opacity-100 cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li>📞 +1 561 234 567</li>
            <li>📞 +1 561 234 567</li>
            <li>📧 info@ekohealth.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 p-4 md:p-6 text-xs opacity-70 flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
        <span className="w-full md:w-auto">© 2025 Eko Health. All rights reserved.</span>
        <span className="mt-2 md:mt-0 w-full md:w-auto">Designed by @Kings.Dev for Eko Health</span>
      </div>
    </footer>
  );
}



