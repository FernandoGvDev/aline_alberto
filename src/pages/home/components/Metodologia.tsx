import { motion } from "framer-motion";

const steps = [
  {
    title: "Briefing",
    description:
      "Conversamos para entender suas necessidades, estilo pessoal, preferências e objetivos do projeto.",
  },
  {
    title: "Estudo Preliminar",
    description:
      "Criamos as primeiras propostas, distribuindo o layout e apresentando soluções iniciais.",
  },
  {
    title: "Projeto Executivo",
    description:
      "Detalhamento completo com plantas, materiais, medidas e tudo o que é necessário para execução.",
  },
  {
    title: "Acompanhamento",
    description:
      "Orientação durante a obra para garantir que tudo seja executado conforme o projeto.",
  },
];

export default function Metodologia() {
  return (
    <section id="metodologia" className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#222] mb-16"
        >
          Metodologia de Trabalho
        </motion.h2>

        {/* Etapas */}
        <div className="grid md:grid-cols-4 gap-10">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#f8f8f8] border border-gray-100 shadow-md p-8 rounded-2xl text-center hover:shadow-lg transition-all"
            >
              <div className="text-4xl font-bold text-[#222] mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[#222]">{step.title}</h3>
              <p className="text-[#555] leading-relaxed mt-3">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
