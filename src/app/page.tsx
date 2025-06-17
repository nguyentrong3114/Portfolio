'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Orb from '../components/orb';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const orbContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animation cho title
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.5
    });

    // Animation cho subtitle
    gsap.from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.8
    });

    // Animation cho orb
    gsap.from(orbContainerRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      delay: 1
    });

    // Scroll animations
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.2
      });
    });

    // Parallax effect cho orb
    gsap.to(orbContainerRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      ease: "none"
    });

  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            Xin chào, tôi là Maith
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
          >
            Frontend Developer & UI/UX Designer
          </p>
        </div>

        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="section">
            <div ref={orbContainerRef} className="aspect-square max-w-md mx-auto">
              <Orb 
                hue={200}
                hoverIntensity={0.3}
                text="Click me!"
                audioSrc="/music.mp3"
              />
            </div>
          </div>

          <div className="section space-y-6">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Kỹ năng</h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>UI/UX Design</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Liên hệ</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Email: your.email@example.com<br />
                GitHub: github.com/yourusername
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 section">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Dự án nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <div 
                key={project}
                className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Dự án {project}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mô tả ngắn về dự án và các công nghệ sử dụng.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 