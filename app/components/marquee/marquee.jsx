"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Marquee = () => {
  const images = [
    { src: "/html.png", alt: "html", className: "w-16 h-16" },
    { src: "/css.png", alt: "css", className: "w-[80px] h-[80px]" },
    {
      src: "/bootstrap.png",
      alt: "bootstrap",
      className: "w-[80px] h-[80px] bg-transparent mt-3",
    },
    { src: "/js.png", alt: "javascript", className: "w-12 mt-3 h-12" },
    { src: "/react.png", alt: "react", className: "w-12 mt-3 h-12" },
    { src: "/next.png", alt: "nextjs", className: "w-12 mt-3 h-12" },
    { src: "/tailwind.png", alt: "tailwind", className: "w-12 mt-3 h-12" },
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <motion.section
      id="marquee"
      className="container mx-auto overflow-hidden py-4 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden">
        <div className="flex w-max animate-seamless">
          {duplicatedImages.map((img, i) => (
            <div key={i} className="mx-8 flex items-center justify-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width || 300}
                height={img.height || 200}
                className={`${img.className} flex-shrink-0`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Marquee;
