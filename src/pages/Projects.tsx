import { motion } from "framer-motion";


const projects = [
  { name: "Portfolio", desc: "Website cá nhân với React, Tailwind, Framer Motion.", tech: "React, Tailwind, Framer Motion", link: "#" },
  { name: "E-commerce", desc: "Web bán hàng fullstack.", tech: "Next.js, MongoDB, Stripe", link: "#" },
  // ...
];

export default function Projects() {
  return (
    <main>
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.h1 className="text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Dự án nổi bật
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, idx) => (
              <motion.div key={idx} className="rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}>
                <h2 className="text-2xl font-bold mb-2">{p.name}</h2>
                <p className="mb-2">{p.desc}</p>
                <p className="mb-2 text-sm italic">{p.tech}</p>
                <a href={p.link} className="text-blue-500 underline">Xem chi tiết</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
