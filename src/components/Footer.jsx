import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/plots', label: 'Open Plots' },
        { path: '/construction', label: 'Construction' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' },
    ];

    const services = [
        'Plot Development',
        'Architecture & Planning',
        'Construction Management',
        'Interior Design',
        'Property Consultation',
    ];

    const socialLinks = [
        { icon: <FaFacebook />, url: '#', label: 'Facebook' },
        { icon: <FaTwitter />, url: '#', label: 'Twitter' },
        { icon: <FaInstagram />, url: '#', label: 'Instagram' },
        { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
        { icon: <FaYoutube />, url: '#', label: 'YouTube' },
    ];

    return (
        <footer className="bg-navy-900 text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4">
                            <span className="gradient-text">PIMS</span> Properties
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Your trusted partner in real estate excellence. Building dreams, creating spaces, and transforming lives.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-gold-500 mt-1 flex-shrink-0" />
                                <p className="text-sm text-gray-300">
                                    No.3, 6th floor Penthouse, Gokul Sai Heritage Building, Gokulam, Puttaparthi, Sri Sathya Sai District - 515134, AP
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone className="text-gold-500 flex-shrink-0" />
                                <p className="text-sm text-gray-300">+91 98765 43210</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-gold-500 flex-shrink-0" />
                                <p className="text-sm text-gray-300">info@pimsproperties.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-heading">Our Services</h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-gray-300 text-sm hover:text-gold-400 transition-colors duration-200 cursor-pointer">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-heading">Stay Connected</h4>
                        <p className="text-gray-300 text-sm mb-4">
                            Subscribe to our newsletter for latest updates and offers.
                        </p>
                        <div className="flex gap-2 mb-6">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                focus:border-gold-500 focus:outline-none text-sm"
                            />
                            <button className="px-4 py-2 bg-gold-500 hover:bg-gold-600 rounded-lg 
              transition-colors font-medium text-sm">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 
                  flex items-center justify-center transition-all duration-300 
                  hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} PIMS Properties. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
