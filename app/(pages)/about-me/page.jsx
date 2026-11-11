"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceData from "@/app/data/experience.json";

const skillGroups = [
  {
    name: "Frontend",
    skills: ["Next.js", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "State Management & APIs",
    skills: ["Redux Toolkit", "Context API", "REST APIs"],
  },
  {
    name: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "MySQL",
      "MongoDB",
      "Python",
      "Django",
      "SQLite",
    ],
  },
  {
    name: "AI & Computer Vision",
    skills: ["Roboflow", "YOLOv5", "Tesseract OCR"],
  },
  {
    name: "Design & Development Tools",
    skills: ["Figma", "Git", "VS Code", "Postman"],
  },
];

const capabilities = [
  {
    title: "Websites & Storefronts",
    description:
      "I can create responsive product and food-service websites, meal-delivery pages, and e-commerce storefronts with search, categories, promotions, shopping features, pricing, and testimonials.",
  },
  {
    title: "Application Features",
    description:
      "I can build booking flows, product and order management, user access, role-based access, dynamic forms, and reporting workflows.",
  },
  {
    title: "Healthcare Experiences",
    description:
      "I can create patient-facing features for tracking vaccination histories and finding nearby vaccine availability, with clinic and vaccine details.",
  },
  {
    title: "AI & Computer Vision",
    description:
      "I can build license plate detection and text-recognition workflows using YOLOv5 and Tesseract OCR.",
  },
  {
    title: "Figma UI Design",
    description:
      "I can create website and landing-page designs in Figma, including directory layouts with search and listings.",
  },
];

const cardClass =
  "bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-xl";

const AboutMe = () => (
  <main className="container mx-auto text-gray-100 mt-20 px-4 py-16">
    <motion.header
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gradient-to-br from-indigo-500 to-cyan-500 w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl font-bold">
        AW
      </div>
      <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-3">
        Ahmed Wahhaaj Abbasi
      </h1>
      <p className="text-xl text-gray-300">
        Software Engineer | MERN Stack Developer
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <a
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
          href="mailto:wahhaaj90@gmail.com"
        >
          Email
        </a>
        <a
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
          href="tel:+923345060670"
        >
          Call
        </a>
        <a
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
          href="https://www.linkedin.com/in/wahhaaj-abbasi"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </motion.header>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
      <section className={`${cardClass} lg:col-span-2`}>
        <h2 className="text-3xl font-bold mb-5 gradient-text">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I&apos;m Ahmed Wahhaaj, a Software Engineer and MERN Stack Developer.
          I build responsive full-stack web applications with MongoDB,
          Express.js, React, and Node.js, as well as Next.js applications. I
          also design interfaces in Figma and build practical web, healthcare,
          management, and computer-vision features.
        </p>
        <p className="text-gray-400 mt-4">Based in Islamabad, Pakistan.</p>
      </section>

      <section className={`${cardClass} lg:col-span-2`}>
        <h2 className="text-3xl font-bold mb-6 gradient-text">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-indigo-900/50 text-indigo-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={cardClass}>
        <h2 className="text-3xl font-bold mb-5 gradient-text">Education</h2>
        <h3 className="text-xl font-semibold">
          Bachelor&apos;s in Software Engineering
        </h3>
        <p className="text-cyan-300 mt-1">SZABIST Islamabad</p>
        <p className="text-gray-400">2021-2025</p>
        <h3 className="text-lg font-semibold text-gray-200">Certifications</h3>
        <ul className="mt-2 space-y-2 text-gray-300">
          <li>Ultimate React.js &amp; Next.js · Udemy</li>
          <li>Node.js Backend · Udemy</li>
        </ul>
        <h3 className="text-lg font-semibold text-gray-200 mt-6">Languages</h3>
        <p className="mt-2 text-gray-300">English · Urdu · Punjabi</p>
      </section>

      <section className={cardClass}>
        <h2 className="text-3xl font-bold mb-6 gradient-text">
          Professional Experience
        </h2>
        {ExperienceData.map((experience) => (
          <div key={experience.index}>
            <h3 className="text-xl font-semibold">{experience.job_title}</h3>
            <p className="text-cyan-300 mt-1">
              {experience.company_name} | {experience.site} |{" "}
              {experience.duration}
            </p>
            <p className="text-gray-300 mt-3 leading-relaxed">
              {experience.description}
            </p>
          </div>
        ))}
      </section>

      <section className="lg:col-span-2 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-6 md:p-8">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          What I Can Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="bg-gray-800/50 p-6 rounded-xl border border-indigo-500/30"
            >
              <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default AboutMe;
