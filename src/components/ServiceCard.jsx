import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="card p-8 text-center group"
        >
            <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 
        flex items-center justify-center text-4xl shadow-lg group-hover:shadow-2xl"
            >
                {service.icon}
            </motion.div>

            <h3 className="text-xl font-bold font-heading mb-3 text-gray-900 dark:text-white">
                {service.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
            </p>

            <div className="space-y-2">
                {service.features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                        <FaCheck className="text-emerald-500 flex-shrink-0" size={12} />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <a
                    href="#"
                    className="text-gold-600 dark:text-gold-400 font-semibold text-sm 
          hover:text-gold-700 dark:hover:text-gold-500 transition-colors"
                >
                    Learn More →
                </a>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
