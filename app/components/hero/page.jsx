"use client";
import React from "react";
import { HiSparkles } from "react-icons/hi2";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-[100vh] overflow-hidden">
      {/* Background video animation */}
      <motion.div
        initial={{ y: -600 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 w-full z-[-10] top-[-380px] lg:top-[-550px]"
      >
        <video
          src="/blackhole.webm"
          autoPlay
          loop
          muted
          playsInline
          className="h-[900px] w-full lg:h-full object-cover"
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 container mx-auto min-h-[100vh] items-center lg:px-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-12 lg:py-0"
        >
          <div className="flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-24 flex w-fit max-w-full items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[11px] font-medium text-white shadow-[0_0_20px_rgba(180,155,255,0.2)] sm:text-xs md:text-sm lg:mt-0"
            >
              <HiSparkles className="flex-shrink-0 text-[#b49bff]" />
              <p className="whitespace-nowrap">Software Engineer · MERN Stack Developer</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-4xl mt-8"
          >
            <h1 className="text-white text-center lg:text-start font-bold uppercase">
              Building{" "}
              <span className=" gradient-text font-bold">thoughtful</span>
            </h1>

            <h1 className="text-white mt-3 text-center lg:text-start font-bold uppercase">
              digital experiences
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-md mt-8 text-center lg:text-start p-3 lg:p-0"
          >
            I build full-stack web applications with MongoDB, Express.js, React,
            and Node.js, alongside Next.js. I also build AI tools with YOLOv5
            and Tesseract OCR.
          </motion.p>

        </motion.div>

        {/* Right Column Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-12 lg:mt-0"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="Hero Image"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
