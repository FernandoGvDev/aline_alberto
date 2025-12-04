import { motion } from "framer-motion";
import {type ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100"
    >
      <div className="text-4xl mb-4 text-[#222]">{icon}</div>
      <h3 className="text-2xl font-semibold text-[#222]">{title}</h3>
      <p className="text-[#555] mt-3 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Servicos() {
  return (
    <section id="servicos" className="w-full py-24 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#222] mb-14"
        >
          Serviços
        </motion.h2>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-3 gap-10">

          <ServiceCard
            title="Projeto Arquitetônico"
            description="Elaboração completa do projeto, com plantas humanizadas, layout funcional e visual elegante para residências e comércios."
            icon={"🏛️"}
          />

          <ServiceCard
            title="Interiores"
            description="Transformação de espaços internos com móveis planejados, iluminação adequada e estética sofisticada."
            icon={"🛋️"}
          />

          <ServiceCard
            title="Consultoria"
            description="Orientação profissional para quem busca ideias, reorganização de espaços ou soluções rápidas e inteligentes."
            icon={"✨"}
          />
        </div>
      </div>
    </section>
  );
}
