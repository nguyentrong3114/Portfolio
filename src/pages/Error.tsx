import FuzzyText from "../components/fuzzyText";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover={true}
                    fontSize="clamp(2rem, 8vw, 8rem)"
                    fontWeight={900}
                    fontFamily="inherit"
                    color="#fff"
                >
                    404 ERROR
                </FuzzyText>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-2xl text-gray-400 text-center mb-8"
                >
                    Oops! Trang bạn đang tìm kiếm không tồn tại.
                </motion.div>
            </motion.div>
            
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link 
                    to="/" 
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-xl font-medium transition-colors duration-300 inline-flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Về trang chủ
                </Link>
            </motion.div>
        </div>
    );
}