import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaLinkedinIn, FaInstagram  } from 'react-icons/fa';

// Animation Variant
const fadeIn = (direction = 'up', delay = 0.2) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? 40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
};

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="bg-gray-900 text-gray-400 py-10 px-6 mt-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Meer Hamza</h2>
          <p className="text-sm leading-relaxed">
            Frontend Developer focused on building creative & responsive UIs with React & Tailwind CSS.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-accent transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-accent transition duration-300">About</a></li>
            <li><a href="#services" className="hover:text-accent transition duration-300">Services</a></li>
            <li><a href="#contact" className="hover:text-accent transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Connect with Me</h2>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="https://www.facebook.com/meerhamza77777/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/meerhamza77/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/meerhamza777" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              <FaGithub />
            </a>
            <a href='https://www.instagram.com/meer.hamza77/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4 border-gray-700">
        &copy; {new Date().getFullYear()} Meer Hamza. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
