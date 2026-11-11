"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaLinkedin,
  FaPhone,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";

const links = [
  { label: "About Me", href: "/about-me" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact-us" },
];

const linkedIn = "https://www.linkedin.com/in/wahhaaj-abbasi";
const profileLinks = [
  { href: linkedIn, icon: FaLinkedin, label: "LinkedIn", external: true },
  { href: "mailto:wahhaaj90@gmail.com", icon: FaRegEnvelope, label: "Email" },
  { href: "tel:+923345060670", icon: FaPhone, label: "Phone" },
  {
    href: "https://maps.google.com/?q=Islamabad%2C+Pakistan",
    icon: FaMapMarkerAlt,
    label: "Location",
    external: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="fixed top-0 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md w-full z-50 text-white">
      <div className="flex justify-between items-center py-3 px-6 lg:px-12">
        <Link href="/" className="text-base sm:text-xl font-semibold">
          Ahmed Wahhaaj Abbasi
        </Link>

        <nav className="hidden lg:flex gap-8 text-md font-medium border border-[#7042f861] bg-[#0300145e] px-5 py-2.5 rounded-3xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex gap-4 text-xl">
          {profileLinks.map(({ href, icon: Icon, label, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={label}
              title={label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform duration-300"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="flex flex-col absolute right-6 gradient-bg top-16 w-[250px] lg:hidden items-center gap-6 py-6 text-white rounded-lg shadow-lg z-50"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="flex gap-4 text-xl mt-2">
            {profileLinks.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
