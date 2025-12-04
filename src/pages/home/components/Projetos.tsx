import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

const images = [
  "https://archshop.com.br/imagens/projetos/projeto-archshop.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0Ux_Z8zRdx4pNbm3kevBwZ4rdfbG2yv5GA&s",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80",
  "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?q=80",
];

export default function Projetos() {
  return (
    <section className="w-full py-10 mt-20 bg-[#E8DED3]/70">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TÍTULO CENTRALIZADO */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-20">
          Projetos
        </h2>

        <div className="relative flex justify-center items-center">

          {/* MINIATURAS GRANDE NA ESQUERDA */}
          <div className="hidden md:flex flex-col gap-6 absolute left-0 top-1/2 -translate-y-1/2">
            {images.slice(1, 4).map((img) => (
              <motion.img
                key={img}
                src={img}
                className="
                  w-48 h-36 object-cover rounded-xl shadow-lg 
                  border border-[#e5d8c9] cursor-pointer
                "
                whileHover={{ scale: 1.05, x: 5 }}
              />
            ))}
          </div>

          {/* SWIPER PRINCIPAL */}
          <div className="w-full md:w-[60%] mx-auto relative">

            {/* NAVEGAÇÃO FORA DA IMAGEM */}
            <div
              className="
                swiper-button-prev 
                !left-[-60px] 
                !text-[#4A453F] hover:opacity-80
              "
            />
            <div
              className="
                swiper-button-next 
                !right-[-60px] 
                !text-[#4A453F] hover:opacity-80
              "
            />

            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              navigation
              loop
              effect="fade"
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              speed={1000}
              className="rounded-3xl shadow-xl overflow-hidden"
            >
              {images.map((img) => (
                <SwiperSlide key={img}>
                  <img
                    src={img}
                    className="w-full h-[450px] md:h-[550px] object-cover"
                    alt="Projeto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
