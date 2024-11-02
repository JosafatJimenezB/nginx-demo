// src/components/Footer.tsx

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-8 relative overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Formas Geométricas Decorativas */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-300 rounded-lg opacity-50 animate-pulse"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Texto de Derechos Reservados */}
        <motion.p
          className="mb-4 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          &copy; {new Date().getFullYear()} Digital Nao. Todos los derechos
          reservados.
        </motion.p>

        {/* Enlaces de Redes Sociales */}
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.a
            href="https://www.linkedin.com/company/naoisnow/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            variants={iconVariants}
            whileHover="hover"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://x.com/nowisnao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            variants={iconVariants}
            whileHover="hover"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/now_is_nao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            variants={iconVariants}
            whileHover="hover"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Línea Divisoria */}
      <motion.div
        className="mt-6 border-t border-gray-700 pt-4"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}
      ></motion.div>

      {/* Mensaje de Agradecimiento */}
      <motion.p
        className="mt-4 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        Gracias por visitar nuestro sitio web.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
