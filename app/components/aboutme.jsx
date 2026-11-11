"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "Next.js",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "Redux Toolkit",
  "Context API",
  "Node.js",
  "Express.js",
  "REST APIs",
  "Prisma ORM",
  "MySQL",
  "MongoDB",
  "Python",
  "Django",
  "SQLite",
  "Roboflow",
  "YOLOv5",
  "Tesseract OCR",
  "Figma",
  "Git",
  "VS Code",
  "Postman",
];

const timeline = [
  {
    year: "2021",
    title: "Bachelor's in Software Engineering",
    description: "Studied Software Engineering at SZABIST Islamabad from 2021 to 2025.",
  },
  {
    year: "2025",
    title: "BrainArt Marketing",
    description: "Worked as a Front-End Developer from September 2025 to March 2026.",
  },
];

const About = () => {
  const [activeCard, setActiveCard] = useState(0);
  const headerRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);
  const skillsRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((previous) => (previous + 1) % timeline.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px 0px 0px 0px" });
  const p1InView = useInView(paragraph1Ref, { once: true, margin: "-100px 0px 0px 0px" });
  const p2InView = useInView(paragraph2Ref, { once: true, margin: "-100px 0px 0px 0px" });
  const p3InView = useInView(paragraph3Ref, { once: true, margin: "-100px 0px 0px 0px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px 0px 0px 0px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px 0px 0px 0px" });

  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative bg-gradient-to-br text-white py-20">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-emerald-500 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto">
        <div className="mb-16" ref={headerRef}>
          <motion.h2
            className="text-center text-4xl gradient-text font-bold"
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-center text-2xl gradient-text mt-2"
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            Software Engineer building responsive web applications and computer vision projects
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[8fr_5fr] gap-8 px-4 lg:px-12">
          <div className="rounded-2xl p-6 md:p-8 border border-gray-700/50">
            <div ref={paragraph1Ref}>
              <motion.p className="text-gray-200 mb-6 text-lg" variants={fadeUp} initial="hidden" animate={p1InView ? "visible" : "hidden"}>
                I&apos;m Ahmed Wahhaaj Abbasi, a Software Engineer and MERN Stack Developer building responsive full-stack web applications with MongoDB, Express.js, React, and Node.js, as well as Next.js applications.
              </motion.p>
            </div>
            <div ref={paragraph2Ref}>
              <motion.p className="text-gray-400 mb-6" variants={fadeUp} initial="hidden" animate={p2InView ? "visible" : "hidden"} transition={{ delay: 0.1 }}>
                My experience includes frontend and backend development with Node.js and Express, REST APIs, and relational and document databases such as MySQL and MongoDB. I also use Redux Toolkit and Context API for application state.
              </motion.p>
            </div>
            <div ref={paragraph3Ref}>
              <motion.p className="text-gray-400 mb-10" variants={fadeUp} initial="hidden" animate={p3InView ? "visible" : "hidden"} transition={{ delay: 0.2 }}>
                I can design interfaces in Figma, build responsive landing pages and e-commerce or food-service experiences, and create booking, order-management, user-access, dynamic-form, and reporting features. I can also develop patient tools for vaccination history and nearby availability, along with computer-vision features for license plate detection and text recognition.
              </motion.p>
            </div>

            <div ref={skillsRef} className="mt-10">
              <motion.h3 className="text-xl gradient-text font-bold mb-6" variants={fadeUp} initial="hidden" animate={skillsInView ? "visible" : "hidden"}>
                My Skills
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all hover:scale-[1.03]"
                    variants={fadeUp}
                    initial="hidden"
                    animate={skillsInView ? "visible" : "hidden"}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <span className="font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div ref={timelineRef}>
            <motion.h3 className="text-xl font-bold mb-6 text-center gradient-text" variants={fadeUp} initial="hidden" animate={timelineInView ? "visible" : "hidden"}>
              My Journey
            </motion.h3>
            <motion.div className="relative" variants={fadeUp} initial="hidden" animate={timelineInView ? "visible" : "hidden"} transition={{ delay: 0.1 }}>
              <div className="absolute left-[7px] top-0 h-full w-0.5 gradient-bg z-0" />
              <div className="relative space-y-8 pl-12">
                {timeline.map((item, index) => (
                  <div key={item.title} className={`relative transition-all duration-500 transform ${activeCard === index ? "scale-105" : "scale-95 opacity-70"}`}>
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-indigo-600 flex items-center justify-center z-10 shadow-lg">
                      <span className="text-xs font-bold">{item.year}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveCard(index)}
                      className={`text-left w-full bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border ${activeCard === index ? "border-cyan-500/50" : "border-gray-700"} transition-all`}
                    >
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
