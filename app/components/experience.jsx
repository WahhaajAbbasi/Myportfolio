"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceData from "../data/experience.json";
import Image from "next/image";

const Experience = () => (
  <div className="container mx-auto py-8 px-4" id="experience">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-center mt-5 mb-12 md:mb-20 gradient-text"
    >
      Experience
    </motion.h1>

    <div className={`grid grid-cols-1 ${ExperienceData.length === 1 ? "max-w-3xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"} gap-8`}>
      {ExperienceData.map((data, index) => (
        <motion.div
          key={data.index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-xl overflow-hidden border border-gray-600 bg-gray-900 h-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden"
          >
            <Image
              src={data.image}
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 mx-auto mt-5 rounded-full object-cover object-center"
            />
          </motion.div>

          <div className="p-4 flex-grow">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl mt-3 font-bold mb-3 gradient-text text-center"
            >
              {data.company_name}
            </motion.h2>

            <motion.hr
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="border-t border-gray-300 my-4 origin-center"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-4 mt-7"
            >
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  {data.job_title}
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  {data.site}
                </span>
              </div>
              {data.duration && (
                <p className="mt-3 text-center text-sm text-gray-400">{data.duration}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-4 flex-grow"
            >
              <p className="text-gray-300 text-center">{data.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Experience;
