import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaArrowRight } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Button from '../components/Button';
import { properties, constructionProjects, services, testimonials, stats } from '../data/mockData';

const Home = () => {
    const featuredPlots = properties.filter(p => p.status === 'Available').slice(0, 3);
    const featuredProjects = constructionProjects.slice(0, 3);

    return (
        <div>
            {/* Hero Section */}
            <HeroSection
                title="Discover Your Dream Property"
                subtitle="Premium plots, luxury constructions, and exceptional real estate services in Puttaparthi and Bangalore"
                showSearch={false}
            >
                <Button variant="primary" icon={<FaPhone />}>
                    Book Site Visit
                </Button>
                <Button variant="outline">
                    Explore Properties
                </Button>
            </HeroSection>

            {/* Stats Section */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl mb-2">{stat.icon}</div>
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Plots */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Featured <span className="gradient-text">Open Plots</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Explore our handpicked selection of premium plots in prime locations
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPlots.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Button variant="primary" icon={<FaArrowRight />}>
                            View All Plots
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Construction Services */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Construction <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            From dream to reality - exceptional construction services
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="card overflow-hidden group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gold-500 text-white rounded-full text-xs font-semibold">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">
                                            📍 {project.location}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400">
                                            ⏱️ {project.duration}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Our <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Comprehensive real estate solutions tailored to your needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            What Our <span className="gradient-text">Clients Say</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Don't just take our word for it
                        </p>
                    </motion.div>

                    <TestimonialsCarousel testimonials={testimonials} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                            Ready to Find Your Dream Property?
                        </h2>
                        <p className="text-xl text-gray-200 mb-8">
                            Get in touch with our expert team today for a personalized consultation
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="primary" icon={<FaPhone />} className="text-lg px-8 py-4">
                                Book Site Visit
                            </Button>
                            <Button variant="outline" className="text-lg px-8 py-4 !border-white !text-white hover:!bg-white hover:!text-navy-900">
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
