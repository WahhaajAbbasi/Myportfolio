"use client";
import React from "react";
import projectsData from "@/app/data/project.json";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="container mx-auto py-8 px-4 " id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center mt-5 mb-12 md:mb-20 gradient-text"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.slice(0, 6).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-xl overflow-hidden border border-gray-600 bg-gray-900 flex flex-col h-full"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.imageAlt || "Abstract project artwork"}
                width={800} // or your appropriate width
                height={192} // matching h-48
                className={`w-full h-48 ${project.imageFit === "contain" ? "object-contain" : "object-cover"} object-center`}
              />
            </motion.div>

            {/* Details */}
            <div className="p-4 flex flex-col flex-grow">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-[23px] font-bold mb-4 gradient-text text-center"
              >
                {project.name}
              </motion.h2>
              {project.subtitle && (
                <p className="-mt-2 text-center text-sm text-cyan-300">
                  {project.subtitle}
                </p>
              )}

              <motion.hr
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                className="border-t border-gray-300 my-4 origin-center"
              />

              {project.techStack?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-4 mt-4"
                >
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.description && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-4 flex-grow"
                >
                  <p className="text-gray-300">{project.description}</p>
                </motion.div>
              )}

              {project.link && (
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-auto pt-4"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full hover-scale py-3 px-4 text-center gradient-bg text-white font-medium rounded-lg transition-colors"
                >
                  {project.buttonText}
                </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center mt-20 mb-20"
      >
        <Link
          href="/projects"
          className="block py-3 hover-scale px-4 text-center gradient-bg text-white font-medium rounded-lg transition-colors"
        >
          View all projects
        </Link>
      </motion.div>
    </div>
  );
};

export default Projects;
