import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 w-full z-50 
        backdrop-blur-xl bg-white/70 
        border-b border-black/5
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="font-[Cormorant_Garamond] text-2xl tracking-wide text-[#5C544A]">
          Aline Alberto
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-10 text-[#1A1A1A] font-light">
          <a href="#" className="hover:opacity-70 transition">Sobre</a>
          <a href="#" className="hover:opacity-70 transition">Projetos</a>
        </nav>

        {/* BOTÃO WHATS DESKTOP */}
        <a 
          href="#" 
          className="
            hidden md:flex items-center gap-2 
            border border-[#5C544A] 
            text-[#5C544A]
            px-4 py-2 rounded-full 
            hover:bg-[#D1C7BD]/40 
            transition
          "
        >
          <FaWhatsapp size={18} />
          <span>Fale comigo</span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-[#5C544A]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/90 backdrop-blur-xl border-t border-black/5"
        >
          <nav className="flex flex-col px-6 py-4 space-y-4 text-[#1A1A1A]">
            <a href="#" className="hover:opacity-70 transition">Sobre</a>
            <a href="#" className="hover:opacity-70 transition">Projetos</a>

            <a 
              href="#" 
              className="
                flex items-center gap-2 
                border border-[#5C544A] 
                text-[#5C544A]
                px-4 py-2 rounded-full 
                w-fit
                hover:bg-[#D1C7BD]/40 
                transition
              "
            >
              <FaWhatsapp size={18} />
              <span>Fale comigo</span>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
