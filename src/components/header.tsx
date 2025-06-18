import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const menuItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/projects", label: "Dự án" },
  { href: "/contact", label: "Liên hệ" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [showHeader, setShowHeader] = useState(false);

  // Scroll-based logo scale
  const scrollY = useMotionValue(0);
  const scale = useTransform(scrollY, [0, 400], [1, 0.5]);
  const fontSize = useTransform(scrollY, [0, 400], [72, 24]); 
  const springScale = useSpring(scale, { stiffness: 200, damping: 30 });
  const springFontSize = useSpring(fontSize, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeader(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Variants cho hiệu ứng nổi lên tuần tự từ dưới lên trên
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed w-full z-50 transition-colors duration-200 pointer-events-none"
        >
          <nav className="container mx-auto px-6 py-3 flex items-center justify-between pointer-events-auto">
            {/* Logo lớn, không ảnh hưởng layout, scale khi scroll */}
            <motion.div
              style={{
                scale: springScale,
                fontSize: springFontSize,
                originX: 0,
                originY: 0.5, // Giữ logo ở góc trái
              }}
              className="font-extrabold text-yellow-400 select-none"
              initial={false}
            >
              Portfolio
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              className="hidden md:flex items-center space-x-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className=""
                  variants={itemVariants}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-300 transition-colors"
                aria-label="Toggle theme"
                variants={itemVariants}
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              className="md:hidden flex items-center space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-300 transition-colors"
                aria-label="Toggle theme"
                variants={itemVariants}
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </motion.button>
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none"
                aria-label="Toggle menu"
                variants={itemVariants}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </motion.div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link to={item.href} className="">{item.label}</Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
