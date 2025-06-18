'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import AudioPlayer from '../components/audio';

function AnimatedSection({
    children,
    reverse = false,
}: {
    children: React.ReactNode;
    reverse?: boolean;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, threshold: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: 'easeOut' },
            });
        }
    }, [inView, controls]);

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, x: reverse ? 100 : -100 }}
            animate={controls}
            className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''
                } items-center justify-between min-h-screen px-6 md:px-20 gap-10`}
        >
            {children}
        </motion.section>
    );
}
const techTimeline = [
    {
        name: "HTML & CSS",
        desc: "Nắm vững HTML5, CSS3, Flexbox, Grid, Responsive Design.",
        icon: "/src/assets/img/htmlcss.png",
        time: "2021 - 2022",
    },
    {
        name: "JavaScript & TypeScript",
        desc: "Sử dụng thành thạo ES6+, TypeScript cho dự án lớn.",
        icon: "/src/assets/img/js-ts.png",
        time: "2022 - 2023",
    },
    {
        name: "ReactJS & NextJS",
        desc: "Xây dựng SPA, SSR, tối ưu SEO với ReactJS và NextJS.",
        icon: "/src/assets/img/react-next.png",
        time: "2022 - 2023",
    },
    {
        name: ".NET",
        desc: "Phát triển API với ASP.NET Core, Entity Framework.",
        icon: "/src/assets/img/dotnet.png",
        time: "2023",
    },
    {
        name: "NodeJS & ExpressJS",
        desc: "Xây dựng RESTful API, xác thực, bảo mật với NodeJS, ExpressJS.",
        icon: "/src/assets/img/node-express.png",
        time: "2023 - 2024",
    },
    {
        name: "MongoDB",
        desc: "Thiết kế database NoSQL, tối ưu truy vấn với MongoDB.",
        icon: "/src/assets/img/mongodb.png",
        time: "2024",
    },
    {
        name: "SQL Server & MySQL",
        desc: "Thiết kế, tối ưu hóa truy vấn, stored procedure.",
        icon: "/src/assets/img/sql.png",
        time: "2024",
    },
    {
        name: "Dart & Flutter",
        desc: "Phát triển ứng dụng di động với Dart, Flutter.",
        icon: "/src/assets/img/sql.png",
        time: "2025",
    },
    {
        name: "React Native",
        desc: "Xây dựng ứng dụng di động với React Native.",
        icon: "/src/assets/img/sql.png",
        time: "2025",
    },
    {
        name: "PostgreSQL & Redis",
        desc: "Thiết kế database quan hệ, tối ưu hiệu suất với PostgreSQL, Redis.",
        icon: "/src/assets/img/sql.png",
        time: "2025",
    },
    {
        name: "Docker",
        desc: "Triển khai ứng dụng với Docker, containerization.",
        icon: "/src/assets/img/sql.png",
        time: "2025",
    },
];

export default function About() {
    return (
        <div>
            <AnimatedSection>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-3">
                        Mình tên là Sang Trọng
                    </h2>
                    <div className='flex flex-col gap-y-4'>
                        <p>Mình thích đọc truyện tranh, truyện chữ, nghe nhạc</p>
                        <p>
                            Mình là một người thích tìm hiểu về công nghệ, đặc biệt
                            Website
                        </p>
                        <p>
                            Mình thích tìm hiểu những công nghệ, cách nó hoạt động
                            và cách nó được tối ưu hóa
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <AudioPlayer></AudioPlayer>
                </div>
            </AnimatedSection>
            <AnimatedSection>
                <div className="w-full">
                    <h2 className="text-3xl font-bold mb-6 text-center">Kỹ năng & Công nghệ</h2>
                    <div className="relative mx-auto max-w-2xl">
                        {/* Vertical timeline line */}
                        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 -translate-x-1/2 z-0" />
                        <ul className="relative z-10 space-y-16">
                            {techTimeline.map((tech, idx) => (
                                <motion.li
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
                                    viewport={{ once: true }}
                                    className="flex items-center w-full"
                                >
                                    {/* Left side */}
                                    <div className={`w-1/2 flex justify-end pr-6 ${idx % 2 === 0 ? '' : 'opacity-0 pointer-events-none'}`}>
                                        <div className="max-w-xs border-2 rounded-xl shadow-lg p-4 text-right">
                                            <div className="flex items-center gap-3 mb-1 justify-end">
                                                <span className="font-semibold text-lg">{tech.name}</span>
                                            </div>
                                            <div className="text-sm">{tech.desc}</div>
                                            <div className="text-xs text-blue-500 mt-1">{tech.time}</div>
                                        </div>
                                    </div>
                                    {/* Timeline dot */}
                                    <div className="flex flex-col items-center w-0">
                                        <motion.div
                                            className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-pink-400 border-4 z-10"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ delay: idx * 0.1 + 0.2, type: "spring" }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                    {/* Right side */}
                                    <div className={`w-1/2 flex justify-start pl-6 ${idx % 2 !== 0 ? '' : 'opacity-0 pointer-events-none'}`}>
                                        <div className="max-w-xs border-2 rounded-xl shadow-lg p-4 text-left">
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="font-semibold text-lg">{tech.name}</span>
                                            </div>
                                            <div className="text-sm">{tech.desc}</div>
                                            <div className="text-xs text-blue-500 mt-1">{tech.time}</div>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection reverse>
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h2 className="text-3xl font-bold">Dự án nổi bật</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <span className="font-semibold">Portfolio cá nhân:</span> Xây dựng bằng ReactJS, NextJS, TailwindCSS, deploy trên Vercel.
                        </li>
                        <li>
                            <span className="font-semibold">API Blog:</span> NodeJS, ExpressJS, MongoDB, JWT, RESTful, xác thực đa tầng.
                        </li>
                        <li>
                            <span className="font-semibold">Quản lý sản phẩm:</span> ASP.NET Core, SQL Server, Entity Framework, ReactJS.
                        </li>
                        <li>
                            <span className="font-semibold">Hệ thống đặt vé:</span> NextJS, MySQL, Prisma, xác thực OAuth2.
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <motion.img
                        src="/src/assets/img/image.png"
                        alt="Project"
                        className="max-w-full rounded-lg shadow-xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, type: "spring" }}
                        viewport={{ once: true }}
                    />
                </div>
            </AnimatedSection>

        </div>
    );
}
