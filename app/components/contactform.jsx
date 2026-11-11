"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wahhaaj-abbasi", icon: FaLinkedin, external: true },
  { label: "Email", href: "mailto:wahhaaj90@gmail.com", icon: FaRegEnvelope },
  { label: "Call", href: "tel:+923345060670", icon: FaPhone },
  { label: "Location", href: "https://maps.google.com/?q=I-9%2F1%2C+Islamabad", icon: FaMapMarkerAlt, external: true },
];

const ContactForm = () => (
  <div className="container mx-auto p-4" id="contact">
    <motion.div
      className="grid lg:grid-cols-2 items-start gap-12 p-8 mx-auto border border-gray-600 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.h2 variants={fadeUp} className="text-white text-3xl font-bold gradient-text">
          Let&apos;s Talk
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[15px] text-white mt-4 leading-relaxed">
          Have an idea or a project to discuss? Reach out and let&apos;s talk about how I can help.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 space-y-5">
          <div>
            <h3 className="text-white text-base font-semibold">Email</h3>
            <a href="mailto:wahhaaj90@gmail.com" className="gradient-text font-medium mt-2 inline-block">
              wahhaaj90@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-white text-base font-semibold">Phone</h3>
            <a href="tel:+923345060670" className="gradient-text font-medium mt-2 inline-block">
              +92 334 5060670
            </a>
          </div>
          <div>
            <h3 className="text-white text-base font-semibold">Location</h3>
            <p className="text-gray-300 mt-2">Islamabad, Pakistan</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-9">
          <h3 className="text-white text-base font-semibold">Connect with me</h3>
          <ul className="flex mt-4 space-x-4">
            {iconLinks.map(({ label, href, icon: Icon, external }) => (
              <li key={label} className="gradient-bg h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover-scales">
                <a href={href} aria-label={label} title={label} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                  <Icon className="text-black" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.form
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.input variants={fadeUp} type="text" placeholder="Name" className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
        <motion.input variants={fadeUp} type="email" placeholder="Email" className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
        <motion.input variants={fadeUp} type="text" placeholder="Subject" className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
        <motion.textarea variants={fadeUp} placeholder="Message" rows="6" className="w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-blue-500" />
        <motion.button variants={fadeUp} disabled type="submit" className="text-white gradient-bg rounded-md text-sm font-medium px-4 py-2.5 w-full cursor-not-allowed border-0 mt-2">
          Send message
        </motion.button>
        <p className="text-xs text-gray-400">Form submission is not active yet. Please email or call me directly.</p>
      </motion.form>
    </motion.div>
  </div>
);

export default ContactForm;
