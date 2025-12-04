import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-[85vh] mt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight"
          >
            Ambientes que unem arte, conforto e arquitetura para valorizar cada detalhe do seu espaço.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-lg text-[#5C544A]"
          >
            Projetos autorais que transformam interiores com estética moderna, funcionalidade e personalidade.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <button className="
              bg-[#5C544A] text-white px-6 py-3 rounded-full
              hover:bg-[#423D37] transition
            ">
              Começar Projeto
            </button>

            <button className="
              border border-[#5C544A] text-[#5C544A] px-6 py-3 rounded-full
              hover:bg-[#D1C7BD]/40 transition
            ">
              Saiba +
            </button>
          </motion.div>

          {/* SMALL IMAGES UNDER CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex gap-3 mt-4"
          >
            <img
              src="https://scontent.cdninstagram.com/v/t51.82787-15/581227685_17951724993024631_5010175627100194521_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzc2NzQxMjgzMjQ2ODkyNzIzMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4ODEwLnNkci5DMyJ9&_nc_ohc=-E07Vt-vCY0Q7kNvwGxXPtt&_nc_oc=AdlG6QfWDNq3md7bKcCmKA3Z_Y2rkFcyjUd13ERx07lXX7ewErmVlp2Y0sOKD-57emI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=qNCV3KdYHRUTcwNF8Goikg&oh=00_Afl8mQLnt43orACwKm1BLqvcuP2zsaljZrc8QozmrXVUcA&oe=69367F83"
              className="h-40 w-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://scontent.cdninstagram.com/v/t51.82787-15/588855844_17952612687024631_7695954963027296350_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc3Mzk2NTQ0MDk3NzQxMzU1NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjgxMHg0NTUuc2RyLkMzIn0%3D&_nc_ohc=l_iP4l9jZqQQ7kNvwHDXTkH&_nc_oc=AdmcM9bPMNp-fzJ8MCGmDDRMIXe_7hbUlBM0Wy3GjDdYV7H6CcOoLpoXtOPCe3yfz2c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=qNCV3KdYHRUTcwNF8Goikg&oh=00_Afn35Ii0X1fMUQBJVBH2QILdS1SSBFof-LWXFciEGWVuHA&oe=6936B454"
              className="h-40 w-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://scontent.cdninstagram.com/v/t51.75761-15/488549919_17927090946024631_1868214487545308344_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzYwNDEwMzc4OTY1MDg1NjUyOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTAxMy5zZHIuQzMifQ%3D%3D&_nc_ohc=XGP87YvrMSEQ7kNvwFLeqSt&_nc_oc=Adn6QQYpMZr71yANVGfvexcwtUF9yGD1YyzbNChAYmn8zPCRQeDXmrRCjodTtLM2TGg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Ywu3h3VJ3q6GK7FQIKX-rw&oh=00_AfkHcAvpEmhuSn4zruiq1r8_SeVWeKGub30MkTUNpn9tsg&oe=693759D5"
              className="h-40 w-40 object-cover rounded-lg shadow-md"
            />
          </motion.div>

        </div>

        {/* RIGHT SIDE - LARGE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full h-[480px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://scontent.cdninstagram.com/v/t51.82787-15/591125745_17952898434024631_4438993959887438573_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc3NjA5MzU5OTI1MjQ4NTE0OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=p8kfNSpePNcQ7kNvwG3THPN&_nc_oc=Adk_QQiyYoO0Pf9K-RhddUdZhNXQhlNnm5Sm0ZzqQ9AjeM7e5u26rjHrYpMBbKZ_soY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=qNCV3KdYHRUTcwNF8Goikg&oh=00_AfkEty5QZLEbN1J1wN5QtRQLLt4z_ppuvs59jZGelHEyRQ&oe=693692BF"
            alt="Projeto interno"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
