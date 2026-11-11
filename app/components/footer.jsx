import React from "react";
import { FaLinkedin, FaPhone, FaRegEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="text-white container mx-auto mt-20">
    <div className="container mx-auto px-4 grid lg:grid-cols-3 grid-cols-1 gap-4">
      <div>
        <p className="text-center text-2xl gradient-text">Community</p>
        <a href="https://www.linkedin.com/in/wahhaaj-abbasi" target="_blank" rel="noreferrer">
          <div className="flex items-center justify-center gap-3 mt-4 hover-scales">
            <FaLinkedin />
            <p>LinkedIn</p>
          </div>
        </a>
      </div>

      <div>
        <p className="text-center text-2xl gradient-text mt-8 lg:mt-0">Contact</p>
        <a href="mailto:wahhaaj90@gmail.com">
          <div className="flex items-center justify-center gap-3 mt-4 hover-scales">
            <FaRegEnvelope />
            <p>Email</p>
          </div>
        </a>
        <a href="tel:+923345060670">
          <div className="flex items-center justify-center gap-3 mt-4 hover-scales">
            <FaPhone />
            <p>Phone</p>
          </div>
        </a>
      </div>

      <div>
        <p className="text-center text-2xl gradient-text mt-8 lg:mt-0">About</p>
        <p className="text-center mt-4">Ahmed Wahhaaj Abbasi</p>
        <p className="text-center mt-2 text-gray-400">Islamabad, Pakistan</p>
      </div>
    </div>
    <p className="text-center mt-7 mb-4 text-sm text-gray-400">
      © 2026 Ahmed Wahhaaj Abbasi. All rights reserved.
    </p>
  </footer>
);

export default Footer;
