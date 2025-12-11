import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaDownload } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { constructionProjects, services } from '../data/mockData';

const ConstructionServices = () => {
    const workflow = [
        {
            step: '01',
            title: 'Consultation',
            description: 'Understanding your vision and requirements',
        },
        {
            step: '02',
            title: 'Design & Planning',
            description: 'Creating detailed architectural plans',
        },
        {
            step: '03',
            title: 'Approvals',
            description: 'Obtaining necessary permits and approvals',
        },
        {
            step: '04',
            title: 'Construction',
            description: 'Building with precision and quality',
        },
        {
            step: '05',
            title: 'Handover',
            description: 'Delivering your dream space',
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <HeroSection
                title="Construction Excellence"
                subtitle="From concept to completion - Building your dreams with precision and passion"
                backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
            >
                <Button variant="primary">Get Quote</Button>
                <Button variant="outline">View Portfolio</Button>
            </HeroSection>

            {/* Services Overview */}
            <section className="section-padding bg-white dark:bg-gray-900">
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
                            Comprehensive construction solutions for all your needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow/Timeline */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Our <span className="gradient-text">Workflow</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            A systematic approach to deliver excellence
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-emerald-500 to-gold-500 transform -translate-y-1/2" />

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {workflow.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="card p-6 text-center relative z-10">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-500 to-emerald-500 
                    flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                            {item.step}
                                        </div>
                                        <h3 className="text-lg font-bold font-heading mb-2 text-gray-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio/Projects Gallery */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Our <span className="gradient-text">Portfolio</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Showcasing our completed projects and ongoing developments
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {constructionProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card overflow-hidden group"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gold-500 text-white rounded-full text-xs font-semibold">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h3 className="text-xl font-bold font-heading mb-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm opacity-90">📍 {project.location}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {project.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        {project.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <FaCheck className="text-emerald-500 flex-shrink-0" size={12} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            ⏱️ {project.duration}
                                        </span>
                                        <Button variant="outline" className="text-xs px-4 py-2">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                                Why Choose <span className="text-gold-400">PIMS</span> Construction?
                            </h2>
                            <p className="text-gray-200 text-lg mb-8">
                                With over 15+ years of experience and 6+ successful projects, we bring unmatched expertise and dedication to every construction.
                            </p>

                            <div className="space-y-4">
                                {[
                                    'Premium quality materials and craftsmanship',
                                    'On-time delivery with transparent pricing',
                                    'Expert architects and skilled workforce',
                                    'Complete project management and support',
                                    'Warranty and after-sales service',
                                    'Sustainable and eco-friendly practices'
                                ].map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                                            <FaCheck />
                                        </div>
                                        <p className="text-gray-100">{point}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <Button variant="primary" icon={<FaDownload />}>
                                    Download Brochure
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=1000&fit=crop"
                                alt="Construction"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 card p-6 max-w-xs">
                                <div className="text-4xl font-bold gradient-text mb-2">6+</div>
                                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConstructionServices;
