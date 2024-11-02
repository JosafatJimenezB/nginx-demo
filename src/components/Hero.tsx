// src/components/Hero.tsx

import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://dazzet.co/wp-content/uploads/2023/10/98029a9271165ff21c0ac9c52c19e52b170da75d-1024x536-1.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ShieldCheckIcon className="h-20 w-20 text-yellow-400 animate-pulse" />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 font-roboto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Protege y Optimiza Tu Aplicación
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Implementa certificados SSL y gestiona proxies inversos con NGINX
          Proxy Manager para una seguridad y rendimiento inigualables.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a
            href="#discover-more"
            className="bg-yellow-500 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Descubre Más
          </a>
          <a
            href="#sign-up"
            className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-colors duration-300"
          >
            Regístrate Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
