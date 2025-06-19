import { motion, useScroll, useTransform } from 'framer-motion';

const projectsData = [
  {
    title: "AM Perfume",
    image: "/src/assets/img/perfume.png",
    category: "E-commerce Platform",
    description: "Modern perfume e-commerce platform with elegant design and seamless shopping experience.",
    technologies: ["Next JS", ".NET", "MYSQL"],
    link: ["https://github.com/nguyentrong3114/FE-PerfumeStore","https://github.com/nguyentrong3114/BE-PerfumeStore","https://github.com/nguyentrong3114/FE-AdminAMPerfume"],
    
  },
  {
    title: "App Chat",
    image: "/src/assets/img/chat1.webp",
    category: "Real-time Communication",
    description: "Secure messaging app with end-to-end encryption and group chat features.",
    technologies: ["React Native", "Socket.io", "Firebase"],
    link: "https://github.com/nguyentrong3114/AppChat",
  },
  {
    title: "App Reminder",
    image: "/src/assets/img/reminder.png",
    category: "Productivity Tool",
    description: "Smart reminder app with AI-powered scheduling and cross-platform synchronization.",
    technologies: ["Flutter", "Firebase"],
    link: "https://github.com/nguyentrong3114/appreminder",
  },
  {
    title: "Flower Store",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format",
    category: "E-commerce & Lifestyle",
    description: "Beautiful flower delivery platform with real-time inventory and local florist network.",
    technologies: ["HTML","CSS","Bootstrap" ,"ASP .NET", "SQL Server"],
    link: "https://github.com/nguyentrong3114/laptrinhweb",
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
            {projectsData.map((project, index) => (
              <motion.div
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
                className="group cursor-pointer  rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0  transition-all duration-300" />                  {/* Overlay content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40"
                  >
                    <div className="flex gap-4 flex-wrap justify-center">
                      {Array.isArray(project.link)
                        ? project.link.map((l, i) => (
                            <motion.a
                              key={i}
                              href={l}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
                            >
                              {['Frontend', 'Backend', 'Admin'][i] || `Source Code ${i+1}`}
                            </motion.a>
                          ))
                        : project.link && (
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
                            >
                              Source Code
                            </motion.a>
                          )}
                    </div>
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1  rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-4 pt-2 flex-wrap">
                    {Array.isArray(project.link)
                      ? project.link.map((l, i) => (
                          <motion.a
                            key={i}
                            href={l}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                            whileHover={{ x: 5 }}
                          >
                            <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            {['Frontend', 'Backend', 'Admin'][i] || `Source Code ${i+1}`}
                          </motion.a>
                        ))
                      : project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                            whileHover={{ x: 5 }}
                          >
                            <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            Source Code
                          </motion.a>
                        )}
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
            className="inline-flex items-center border-2 border-blue-500 gap-2 px-8 py-4  font-semibold rounded-full hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >

            Hire Me
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}