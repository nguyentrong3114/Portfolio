import { motion, useScroll, useTransform } from 'framer-motion';

const projectsData = [
  {
    title: "AM Perfume",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format",
    category: "E-commerce Platform",
    description: "Modern perfume e-commerce platform with elegant design and seamless shopping experience.",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "App Chat",
    image: "https://images.unsplash.com/photo-1494790108755-2616c6d9a1ae?q=80&w=800&auto=format",
    category: "Real-time Communication",
    description: "Secure messaging app with end-to-end encryption and group chat features.",
    technologies: ["React Native", "Socket.io", "Firebase"]
  },
  {
    title: "App Reminder",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format",
    category: "Productivity Tool",
    description: "Smart reminder app with AI-powered scheduling and cross-platform synchronization.",
    technologies: ["Flutter", "Python", "PostgreSQL"]
  },
  {
    title: "Flower Store",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format",
    category: "E-commerce & Lifestyle",
    description: "Beautiful flower delivery platform with real-time inventory and local florist network.",
    technologies: ["Next.js", "Stripe", "Tailwind CSS"]
  }
];

export default function Projects() {
  const { scrollY } = useScroll();
  
  // Create individual transforms for the parallax effect
  const y1 = useTransform(scrollY, [0, 1000], [0, -20]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 20]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -20]);
  const y4 = useTransform(scrollY, [0, 1000], [0, 20]);
  
  const yOffsets = [y1, y2, y3, y4];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Projects</h1>
          <p className="text-xl opacity-70">Discover our latest work</p>
        </motion.div>      </section>

      {/* Introduction Section */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting Digital Experiences
            </h2>
            <p className="text-lg opacity-70 leading-relaxed">
              Each project represents a unique challenge and an opportunity to push the boundaries 
              of what's possible. From e-commerce platforms to mobile applications, 
              I focus on creating solutions that are both beautiful and functional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {projectsData.map((project, index) => (              <motion.div
                key={project.title}
                style={{ y: yOffsets[index] || 0 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group cursor-pointer bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  
                  {/* Overlay content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg"
                    >
                      View Project
                    </motion.button>
                  </motion.div>
                </div>
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-lg opacity-70 mb-3">{project.category}</p>
                  <p className="text-sm opacity-60 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Ready to start a project?</h2>
          <motion.a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            Back to Home
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}