import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import Button from './Button';

const HeroSection = ({
    title,
    subtitle,
    backgroundImage,
    showSearch = false,
    children
}) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={backgroundImage || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop'}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 hero-gradient opacity-90" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Animated Shapes */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-20 right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10 container-custom section-padding text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>

                    {showSearch && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="max-w-4xl mx-auto mb-8"
                        >
                            <div className="glass-effect rounded-2xl p-4 md:p-6 shadow-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="input-field"
                                    />
                                    <select className="input-field">
                                        <option>Property Type</option>
                                        <option>Residential Plot</option>
                                        <option>Commercial Plot</option>
                                        <option>Farmland</option>
                                    </select>
                                    <select className="input-field">
                                        <option>Price Range</option>
                                        <option>Under 1 Cr</option>
                                        <option>1-5 Cr</option>
                                        <option>Above 5 Cr</option>
                                    </select>
                                    <Button variant="primary" className="w-full" icon={<FaSearch />}>
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-3 bg-white rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
