import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaMoon, FaSun } from 'react-icons/fa';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/plots', label: 'Open Plots' },
        { path: '/construction', label: 'Construction' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="container-custom section-padding py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl md:text-3xl font-bold font-heading"
                        >
                            <span className="gradient-text">PIMS</span>
                            <span className={scrolled ? 'text-navy-700 dark:text-white' : 'text-white'}>
                                {' '}Properties
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors duration-200 relative group ${location.pathname === link.path
                                        ? 'text-gold-500'
                                        : scrolled
                                            ? 'text-gray-700 dark:text-gray-300 hover:text-gold-500'
                                            : 'text-white hover:text-gold-300'
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''
                                        }`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Dark Mode Toggle */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-lg transition-colors ${scrolled
                                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                    : 'hover:bg-white/10'
                                }`}
                        >
                            {darkMode ? (
                                <FaSun className={scrolled ? 'text-gold-500' : 'text-white'} size={20} />
                            ) : (
                                <FaMoon className={scrolled ? 'text-navy-700' : 'text-white'} size={20} />
                            )}
                        </button>
                        <Button variant="primary" icon={<FaPhone />}>
                            Book Site Visit
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-3">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2"
                        >
                            {darkMode ? (
                                <FaSun className={scrolled ? 'text-gold-500' : 'text-white'} size={20} />
                            ) : (
                                <FaMoon className={scrolled ? 'text-navy-700' : 'text-white'} size={20} />
                            )}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`text-2xl ${scrolled ? 'text-navy-700 dark:text-white' : 'text-white'}`}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden mt-4 overflow-hidden"
                        >
                            <div className="flex flex-col gap-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={toggleMenu}
                                        className={`font-medium py-2 transition-colors ${location.pathname === link.path
                                                ? 'text-gold-500'
                                                : 'text-gray-700 dark:text-gray-300 hover:text-gold-500'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button variant="primary" className="w-full mt-2" icon={<FaPhone />}>
                                    Book Site Visit
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
