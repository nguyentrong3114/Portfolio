'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

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

export default function About() {
    return (
        <div>
            <AnimatedSection>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-5xl font-bold">
                        Tôi tên là Sang Trọng
                    </h2>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/src/assets/iimg/cv.png"
                        alt="Ảnh 1"
                        className="max-w-full rounded-lg shadow-xl"
                    />
                </div>
            </AnimatedSection>

            <AnimatedSection reverse>
                <div className="w-full md:w-1/2 text-center md:text-right">
                    <h2 className="text-5xl font-bold">
                        Tôi là một Frontend Developer với niềm đam mê tạo ra
                        những trải nghiệm web tuyệt vời.
                    </h2>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/me2.jpg"
                        alt="Ảnh 2"
                        className="max-w-full rounded-lg shadow-xl"
                    />
                </div>
            </AnimatedSection>
        </div>
    );
}
