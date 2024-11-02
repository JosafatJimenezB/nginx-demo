// src/components/Features.tsx

import React from "react";
import {
  LockClosedIcon,
  ServerIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { FaShieldAlt, FaTools, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> | React.ComponentProps<"svg">
  >;
}

const features: Feature[] = [
  {
    title: "Certificados de Seguridad SSL 🔒",
    description:
      "Configura e implementa certificados SSL para proteger los datos de tus usuarios y garantizar conexiones seguras.",
    icon: FaShieldAlt,
  },
  {
    title: "Gestión Simplificada con NGINX 🛠️",
    description:
      "Utiliza NGINX Proxy Manager para administrar proxies inversos de manera eficiente y visual.",
    icon: FaTools,
  },
  {
    title: "Mejora del Rendimiento 📈",
    description:
      "Optimiza el rendimiento de tu aplicación mediante configuraciones avanzadas de seguridad y proxies.",
    icon: FaChartLine,
  },
  {
    title: "Monitoreo en Tiempo Real ⏱️",
    description:
      "Supervisa el estado y el rendimiento de tus servicios en tiempo real para una mejor gestión.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Escalabilidad Asegurada 📊",
    description:
      "Asegura que tu infraestructura pueda escalar según las necesidades de tu negocio sin comprometer la seguridad.",
    icon: ServerIcon,
  },
  {
    title: "Soporte y Actualizaciones Continuas 🔄",
    description:
      "Recibe soporte constante y actualizaciones para mantener tu sistema siempre al día.",
    icon: LockClosedIcon,
  },
];

// Variants para animaciones de las tarjetas
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Qué Ofrecemos?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={cardVariants}
            >
              <div className="flex items-center justify-center mb-4">
                <feature.icon className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center flex-grow">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center mb-4 flex-grow">
                {feature.description}
              </p>
              <a
                href="#learn-more"
                className="mt-auto text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300 text-center"
              >
                Saber Más →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
