import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAWhats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center py-12 bg-[#E8DED3]/30"
    >
      <button
        className="
          flex items-center gap-3 
          bg-[#5C544A] text-white px-6 py-4 rounded-full
          hover:bg-[#4a463f] transition
          font-sans text-lg
          shadow-md
        "
        // href ou onClick futuro para o WhatsApp
      >
        <FaWhatsapp size={24} />
        <span>Fale com a Aline</span>
      </button>
    </motion.div>
  );
}
