import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ContadorProps {
  finalNumber: number;
  label: string;
  delay?: number;
}

function Contador({ finalNumber, label, delay = 0 }: ContadorProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, finalNumber, {
      duration: 1.5,
      delay,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(Math.floor(v));
      },
    });

    return () => controls.stop();
  }, [isInView, finalNumber, delay]);

  return (
    <div className="text-center">
      {/* Número animado */}
      <motion.span
        ref={ref}
        className="text-4xl font-serif text-[#1A1A1A] block"
      >
        +{display}
      </motion.span>

      {/* Subtítulo aparece depois */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 1.2, duration: 0.5 }}
        className="text-[#5C544A] text-sm uppercase tracking-wide"
      >
        {label}
      </motion.p>
    </div>
  );
}

export default function Estatisticas() {
  return (
    <section className="mt-20 w-full py-28 relative">
      
      {/* FUNDO BEGE INTEIRO ATÉ METADE DA IMAGEM */}
      <div className="absolute inset-0 bg-[#E8DED3]/70 h-full w-1/3 rounded-r-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT SIDE IMAGE */}
        <div className="relative w-full flex items-center justify-center">
          <motion.img 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="https://scontent.cdninstagram.com/v/t51.75761-15/476240044_17920379988024631_7022271733368153761_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzU2MTQ1NjE3MjE0NDIxMzAyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=W_vDA09OessQ7kNvwG7cvsy&_nc_oc=Adl4XKFLc4xpKSUxAeZR6pnJkgrqEABMoHVDinDNIgLT-9W7Xz8sSmn9ayQGW1VHMks&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Ywu3h3VJ3q6GK7FQIKX-rw&oh=00_Aflcfdbu637EymKx5yVgk3hv34w9JUmGkDITmJsG0MDGgg&oe=69374FAA"
            alt="Cozinha moderna"
            className="
              relative z-10 w-[90%] h-[500px] object-cover 
              rounded-2xl shadow-xl 
            "
          />
        </div>

        {/* RIGHT SIDE TEXT + NUMBERS */}
        <div className="space-y-12 relative z-20">

          {/* COPY */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-xl text-[#5C544A] font-light leading-relaxed"
          >
            Projetos pensados para transformar ambientes 
            em experiências únicas, unindo estética, funcionalidade 
            e uma identidade que reflete quem você é.
          </motion.p>

          {/* NUMBERS WITH ANIMATIONS */}
          <div className="flex gap-10 md:gap-14">

            <Contador finalNumber={300} label="Projetos" delay={0} />
            <Contador finalNumber={200} label="Produtos" delay={0.4} />
            <Contador finalNumber={260} label="Clientes Satisfeitos" delay={0.8} />

          </div>
        </div>
      </div>
    </section>
  );
}
