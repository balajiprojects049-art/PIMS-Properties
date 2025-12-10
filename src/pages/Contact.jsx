import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    const contactInfo = [
        {
            icon: <FaPhone />,
            title: 'Phone',
            details: ['+91 98765 43210', '+91 98765 43211'],
            link: 'tel:+919876543210',
        },
        {
            icon: <FaEnvelope />,
            title: 'Email',
            details: ['info@pimsproperties.com', 'sales@pimsproperties.com'],
            link: 'mailto:info@pimsproperties.com',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Address',
            details: ['No.3, 6th floor Penthouse, Gokul Sai Heritage Building', 'Gokulam, Puttaparthi, Sri Sathya Sai District - 515134, AP'],
            link: '#map',
        },
        {
            icon: <FaClock />,
            title: 'Business Hours',
            details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'],
            link: null,
        },
    ];

    const offices = [
        {
            name: 'PIMS Properties LLP - Head Office',
            address: 'No.3, 6th floor Penthouse, Gokul Sai Heritage Building, Gokulam, Puttaparthi, Sri Sathya Sai District - 515134, AP',
            phone: '+91 98765 43210',
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <HeroSection
                title="Get In Touch"
                subtitle="We'd love to hear from you. Let's discuss your real estate needs."
                backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
            />

            {/* Contact Info Cards */}
            <section className="section-padding bg-white dark:bg-gray-900 -mt-20 relative z-10">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link || '#'}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card p-6 text-center group cursor-pointer"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-500 to-emerald-500 
                flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900 dark:text-white">
                                    {info.title}
                                </h3>
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                                        {detail}
                                    </p>
                                ))}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
                                Send us a <span className="gradient-text">Message</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="input-field"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Plot Information</option>
                                        <option>Construction Services</option>
                                        <option>Site Visit Request</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="input-field resize-none"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>

                                <Button type="submit" variant="primary" className="w-full" icon={<FaPaperPlane />}>
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>

                        {/* Map & Office Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div id="map" className="card overflow-hidden h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                <div className="text-center">
                                    <FaMapMarkerAlt className="text-6xl text-gold-500 mx-auto mb-4" />
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Google Maps Integration
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                                        (Placeholder for Google Maps / Mapbox)
                                    </p>
                                </div>
                            </div>

                            <div className="card p-6">
                                <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                                    Our Offices
                                </h3>
                                <div className="space-y-4">
                                    {offices.map((office, index) => (
                                        <div
                                            key={index}
                                            className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0"
                                        >
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                {office.name}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                                📍 {office.address}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                📞 {office.phone}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                q: 'How can I schedule a site visit?',
                                a: 'You can schedule a site visit by calling us, filling out the contact form, or clicking the "Book Site Visit" button on our website.',
                            },
                            {
                                q: 'What documents do I need to purchase a plot?',
                                a: 'You will need ID proof, address proof, PAN card, and passport-size photographs. Our team will guide you through the complete documentation process.',
                            },
                            {
                                q: 'Do you offer home loans assistance?',
                                a: 'Yes, we have tie-ups with leading banks and financial institutions to help you with home loan processing.',
                            },
                            {
                                q: 'What is the typical construction timeline?',
                                a: 'Construction timelines vary based on project size and complexity. Typically, a villa takes 12-18 months, while larger projects may take 24-30 months.',
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card p-6"
                            >
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
