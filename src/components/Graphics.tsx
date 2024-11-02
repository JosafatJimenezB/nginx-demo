// src/components/Graphics.tsx

import React from "react";
import SecurityIllustration from "../assets/security-server.svg"; // Asegúrate de que la ruta sea correcta
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};

const svgPathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const Graphics: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative">
        {/* Formas Geométricas Decorativas */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-300 rounded-lg opacity-50 animate-pulse"></div>

        {/* Imagen con Animación */}
        <motion.div
          className="md:w-1/2 w-full mb-10 md:mb-0 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={SecurityIllustration}
            alt="Ilustración de Seguridad"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        {/* Texto y SVG con Animación */}
        <motion.div
          className="md:w-1/2 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left text-gray-800"
            variants={textVariants}
          >
            Potencia la Seguridad de tu Aplicación
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg mb-6 text-center md:text-left"
            variants={textVariants}
          >
            Implementar SSL y gestionar proxies inversos con NGINX Proxy Manager
            no solo protege tus datos, sino que también mejora el rendimiento y
            la confianza de tus usuarios.
          </motion.p>
          <motion.div
            className="flex items-center justify-center md:justify-start"
            variants={svgPathVariants}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial="hidden"
              animate="visible"
              variants={svgPathVariants}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 .667-.333 1-1 1s-1-.333-1-1 .333-1 1-1 1 .333 1 1zm0 5c-2.5 0-4.5-2-4.5-4.5S9.5 7 12 7s4.5 2 4.5 4.5S14.5 16 12 16z"
                variants={svgPathVariants}
              />
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                variants={svgPathVariants}
              />
            </motion.svg>
            <span className="text-gray-700 font-semibold">
              Configuración Sencilla y Eficiente
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Graphics;
