import { useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "../components/splitText";
import ButtonEffect from "../components/button";
import Box from "../components/box";


const Home = () => {
    const profileRef = useRef(null);

    const demoItems = [
        { text: 'REACT JS' }, { text: 'NEXT JS' }, { text: '.NET' }, { text: 'NODE JS' },
        { text: 'MONGO DB' }, { text: 'SQL SERVER' }, { text: 'MYSQL' }, { text: 'POSTGRESQL' },

    ];
    const demoItems2 = [
        { text: 'C#' }, { text: 'Typescript' }, { text: 'Tailwind CSS' }, { text: 'Framer Motion' },
        { text: 'Git' }, { text: 'Docker' }, { text: 'HTML' }, { text: 'CSS' },
    ];
    return (
        <main className="min-h-screen transition-colors duration-200">

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-14 md:mb-0">
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            Xin chào, tôi là
                            <SplitText
                                text="Nguyễn Sang Trọng"
                                className="text-5xl font-semibold text-center text-blue-600"
                                delay={100}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 20 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center" />
                        </motion.h1>
                        <motion.p
                            className="text-xl mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        >
                            Frontend Developer | UI/UX Designer | Creative Thinker
                        </motion.p>
                        <div className="flex space-x-4">
                            <motion.button
                                onClick={() => (window.location.href = "/contact")}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                whileHover={{ scale: 1.08 }}
                            >
                                <ButtonEffect className="bg-blue-600 text-white" text="Liên hệ với tôi" />
                            </motion.button>
                            <motion.button
                                onClick={() => (window.location.href = "/projects")}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="focus:outline-none"
                            >
                                <ButtonEffect text="Xem dự án" />
                            </motion.button>
                        </div>
                    </div>
                    <motion.div
                        ref={profileRef}
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
                    >
                        <div className="relative w-64 h-64 mx-auto">
                            <img
                                src="/src/assets/anh.png"
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover ring-4 ring-gray-200 dark:ring-gray-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="flex justify-center items-center gap-8">
                <div className="flex flex-col items-center border-2 border-blue-500 rounded-xl p-4 w-42">
                    <p className="text-2xl font-bold">Dự án</p>
                    <Box
                        from={0}
                        to={23}
                        separator=","
                        direction="up"
                        duration={1}
                        className="text-6xl"
                    />
                </div>
                <div className="flex flex-col items-center border-2 border-blue-500 rounded-xl p-4 w-42">
                    <p className="text-2xl font-bold">Độ tuổi</p>
                    <Box
                        from={0}
                        to={21}
                        separator=","
                        direction="up"
                        duration={1}
                        className="text-6xl"
                    />
                </div>
                <div className="flex flex-col items-center border-2 border-blue-500 rounded-xl p-4 w-42">
                    <p className="text-2xl font-bold">Ly Coffee</p>
                    <Box
                        from={0}
                        to={500}
                        separator=","
                        direction="up"
                        duration={1}
                        className="text-6xl"
                    />
                </div>
                <div className="flex flex-col items-center border-2 border-blue-500 rounded-xl p-4 w-42">
                    <p className="text-2xl font-bold">Ngủ</p>
                    <Box
                        from={0}
                        to={8}
                        separator=","
                        direction="up"
                        duration={1}
                        className="text-6xl"
                    />
                </div>
            </section >
            {/* About Section */}
            <section className="py-20" >
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Giới Thiệu
                    </motion.h2>
                    <div className="max-w-3xl mx-auto">
                        <motion.p
                            className="mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Tôi là một Frontend Developer với niềm đam mê tạo ra những trải nghiệm web tuyệt vời.
                            Với kinh nghiệm trong việc phát triển các ứng dụng web hiện đại, tôi luôn tìm kiếm
                            những thách thức mới để phát triển bản thân.
                        </motion.p>
                        <motion.p
                            className="mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Tôi có kiến thức sâu rộng về các công nghệ web hiện đại như React, Next.js,
                            TypeScript và Tailwind CSS. Tôi cũng rất chú trọng đến việc tạo ra giao diện
                            người dùng đẹp mắt và trải nghiệm người dùng tốt.
                        </motion.p>
                    </div>
                </div>
            </section>
            {/* Skills Section */}
            <section className="py-20" >
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Kỹ năng
                    </motion.h2>
                    <div className="flex justify-center flex-col gap-4 w-1/2 mx-auto">
                        <div className="relative w-full overflow-hidden">
                            {/* Motion wrapper that moves */}
                            <motion.div
                                className="flex w-max space-x-8"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 28,
                                    ease: "linear",
                                    repeat: Infinity
                                }}
                            >
                                {[...demoItems, ...demoItems].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="skill-card flex-shrink-0 w-40 p-2"
                                        whileHover={{ scale: 1.08 }}
                                    >
                                        <div className="border-2 border-blue-500 flex rounded-xl flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 p-2">
                                            <p className="text-center" >{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        <div className="relative w-full overflow-hidden">
                            <motion.div
                                className="flex w-max space-x-8"
                                animate={{ x: ["-50%", "0%"] }}
                                transition={{
                                    duration: 28,
                                    ease: "linear",
                                    repeat: Infinity
                                }}
                            >
                                {[...demoItems2, ...demoItems2].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="skill-card flex-shrink-0 w-40 p-2"
                                        whileHover={{ scale: 1.08 }}
                                    >
                                        <div className="border-2 rounded-xl border-blue-500 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 p-2">
                                            <p className="text-center" >{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Home; 