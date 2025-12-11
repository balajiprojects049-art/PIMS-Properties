import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHandshake, FaUserTie, FaCheckCircle } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import { teamMembers, achievements, stats, partners } from '../data/mockData';

const AboutUs = () => {
    const values = [
        {
            icon: <FaHandshake />,
            title: 'Integrity',
            description: 'We believe in transparency and honesty in all our dealings',
        },
        {
            icon: <FaAward />,
            title: 'Excellence',
            description: 'Committed to delivering the highest quality in every project',
        },
        {
            icon: <FaUsers />,
            title: 'Customer First',
            description: 'Your satisfaction and trust are our top priorities',
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <HeroSection
                title="Building Dreams Since 2021"
                subtitle="Your trusted partner in creating exceptional real estate experiences"
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            >
                <Button variant="primary">Our Story</Button>
            </HeroSection>

            {/* Company Story */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
                                Our <span className="gradient-text">Story</span>
                            </h2>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Founded in April 2021 (07/04/2021), PIMS Properties LLP (LLPIN: AAW-6044) began with a clear vision: to transform the real estate landscape by delivering exceptional properties and unparalleled customer service in Puttaparthi and beyond.
                                </p>
                                <p>
                                    Registered under ROC Vijayawada, what started as a partnership with big dreams has quickly grown into a trusted name in real estate development. We've built more than just properties – we've built relationships, communities, and dreams.
                                </p>
                                <p>
                                    Today, as an active LLP with committed designated partners, we continue to push boundaries and set new standards in the industry. Our commitment to quality, transparency, and customer satisfaction remains unwavering.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                                alt="Team Meeting"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 card p-6">
                                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                                <p className="text-gray-600 dark:text-gray-400">Years of Excellence</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-effect rounded-2xl p-8"
                        >
                            <div className="text-5xl mb-4">🎯</div>
                            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">Our Mission</h3>
                            <p className="text-gray-200 leading-relaxed">
                                To create exceptional real estate solutions that exceed expectations, deliver lasting value, and contribute to building better communities. We're committed to integrity, innovation, and customer-centricity in everything we do.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-effect rounded-2xl p-8"
                        >
                            <div className="text-5xl mb-4">🔭</div>
                            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">Our Vision</h3>
                            <p className="text-gray-200 leading-relaxed">
                                To be the most trusted and preferred real estate developer in India, known for quality, transparency, and customer satisfaction. We envision creating sustainable communities that enhance lives and build a better tomorrow.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card p-8 text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-500 to-emerald-500 
                flex items-center justify-center text-3xl text-white shadow-lg">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3 text-gray-900 dark:text-white">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Timeline */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Our <span className="gradient-text">Journey</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Milestones that mark our growth
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold-500 via-emerald-500 to-gold-500 hidden md:block" />

                        <div className="space-y-12">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    <div className="flex-1">
                                        <div className={`card p-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <h3 className="text-2xl font-bold gradient-text mb-2">
                                                {achievement.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-emerald-500 
                  flex items-center justify-center text-white font-bold shadow-lg z-10 flex-shrink-0">
                                        {achievement.year}
                                    </div>

                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl mb-4">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-300">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Designated Partners */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Our <span className="gradient-text">Leadership</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Designated Partners leading PIMS Properties LLP
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="card overflow-hidden group"
                            >
                                <div className="relative h-96 overflow-hidden">
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                    {/* Partner Details Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaUserTie className="text-gold-400" />
                                            <span className="text-gold-400 text-sm font-semibold">{partner.designation}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold font-heading mb-2">
                                            {partner.name}
                                        </h3>
                                        {partner.isSignatory && (
                                            <div className="flex items-center gap-2 text-emerald-400 text-sm">
                                                <FaCheckCircle />
                                                <span>Authorized Signatory</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {partner.bio}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">DIN</p>
                                            <p className="font-semibold text-gray-900 dark:text-white">{partner.din}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Appointed</p>
                                            <p className="font-semibold text-gray-900 dark:text-white">{partner.appointmentDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Meet Our <span className="gradient-text">Team</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            The passionate people behind our success
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card overflow-hidden text-center group"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-heading mb-1 text-gray-900 dark:text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-gold-600 dark:text-gold-400 mb-3 font-medium">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
