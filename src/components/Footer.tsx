import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-[#E8DED3] py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LOGO */}
        <h2 className="font-serif text-2xl tracking-wide">
          Aline Alberto
        </h2>

        {/* LINKS */}
        <nav className="flex gap-8 text-sm uppercase tracking-wide text-[#CFC6BB]">
          <a href="#" className="hover:text-white transition">Sobre</a>
          <a href="#" className="hover:text-white transition">Projetos</a>
          <a href="#" className="hover:text-white transition">Serviços</a>
          <a href="#" className="hover:text-white transition">Contato</a>
        </nav>

        {/* WHATS BUTTON */}
        <button
          className="
            flex items-center gap-2 
            bg-[#5C544A] px-5 py-3 rounded-full 
            text-white text-sm
            hover:bg-[#4a443d] transition
          "
        >
          <FaWhatsapp size={18} />
          <span>Fale no Whats</span>
        </button>

      </div>

      {/* Copy final */}
      <div className="text-center text-xs text-[#B8B0A3] mt-8">
        © {new Date().getFullYear()} Aline Alberto — Todos os direitos reservados.
      </div>
    </footer>
  );
}
