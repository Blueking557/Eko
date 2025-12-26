import { Handbag } from "lucide-react";

export default function CTAButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white flex items-center gap-2 px-6 py-3 rounded-full shadow-md hover:scale-105 transition transform focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {text} <Handbag size={18} />
    </button>
  );
}
