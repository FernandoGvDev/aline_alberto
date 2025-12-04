import { motion } from "framer-motion";

export default function AboutArquiteta() {
  return (
    <section
      id="sobre"
      className="w-full py-20 bg-white text-[#333] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://scontent.cdninstagram.com/v/t51.82787-15/587761272_17952898602024631_1153715638760411120_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzc3NjA5MzU5ODkyNTM3NjA2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=0fHRq7zTV9IQ7kNvwFaeiSp&_nc_oc=AdnNQd0PsiFHdpb1-H-V5J7CvhVusRtAM3qICBYU9mw22lGH4gWSi9Wk-8Ff6WkXxug&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lSTp2jzdMnGz8wu44cmCGw&oh=00_AfmSMOK1xsXWUw-OdtfbnK3JlEe2zmWfw7T3QZLsQWT86g&oe=69375570"
            alt="Arquiteta trabalhando"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#222]">
            Sobre a Aline Alberto
          </h2>

          <p className="text-lg leading-relaxed text-[#555]">
            Com mais de <strong>5 anos de experiência</strong> criando ambientes
            elegantes, funcionais e personalizados, a arquiteta desenvolve
            projetos residenciais e comerciais que unem estética, conforto e
            praticidade.
          </p>

          <p className="text-lg leading-relaxed text-[#555]">
            Cada projeto é pensado para refletir a personalidade e as
            necessidades do cliente, garantindo soluções únicas, modernas e
            totalmente otimizadas.
          </p>

          <p className="text-lg leading-relaxed text-[#555]">
            Seu compromisso é entregar resultados que superem expectativas,
            valorizem os espaços e proporcionem bem-estar no dia a dia.
          </p>

          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-6 py-3 bg-[#222] text-white rounded-xl shadow-md hover:bg-black transition-all"
          >
            Falar com a arquiteta
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
