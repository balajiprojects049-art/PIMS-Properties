import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaMap } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';
import { properties } from '../data/mockData';

const OpenPlots = () => {
    const [selectedLocation, setSelectedLocation] = useState('all');
    const [selectedPriceRange, setSelectedPriceRange] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const locations = ['all', ...new Set(properties.map(p => p.location.split(',')[1]?.trim() || p.location))];
    const priceRanges = ['all', 'Under 1 Cr', '1-3 Cr', '3-5 Cr', 'Above 5 Cr'];
    const statuses = ['all', 'Available', 'Sold Out'];

    const filteredProperties = properties.filter(property => {
        const locationMatch = selectedLocation === 'all' || property.location.includes(selectedLocation);
        const statusMatch = selectedStatus === 'all' || property.status === selectedStatus;

        let priceMatch = true;
        if (selectedPriceRange !== 'all') {
            const priceValue = parseFloat(property.price.replace(/[^0-9.]/g, ''));
            if (selectedPriceRange === 'Under 1 Cr') priceMatch = priceValue < 1;
            else if (selectedPriceRange === '1-3 Cr') priceMatch = priceValue >= 1 && priceValue <= 3;
            else if (selectedPriceRange === '3-5 Cr') priceMatch = priceValue >= 3 && priceValue <= 5;
            else if (selectedPriceRange === 'Above 5 Cr') priceMatch = priceValue > 5;
        }

        return locationMatch && priceMatch && statusMatch;
    });

    return (
        <div>
            {/* Hero Section */}
            <HeroSection
                title="Premium Open Plots"
                subtitle="Discover the perfect plot for your dream home or investment"
                backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop"
            >
                <Button variant="primary">Browse All Plots</Button>
            </HeroSection>

            {/* Filters Section */}
            <section className="section-padding bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-effect rounded-2xl p-6"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <FaFilter className="text-gold-500" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Filter Properties
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Location
                                </label>
                                <select
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    className="input-field"
                                >
                                    {locations.map((location) => (
                                        <option key={location} value={location}>
                                            {location === 'all' ? 'All Locations' : location}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Price Range
                                </label>
                                <select
                                    value={selectedPriceRange}
                                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                                    className="input-field"
                                >
                                    {priceRanges.map((range) => (
                                        <option key={range} value={range}>
                                            {range === 'all' ? 'All Prices' : range}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Status
                                </label>
                                <select
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    className="input-field"
                                >
                                    {statuses.map((status) => (
                                        <option key={status} value={status}>
                                            {status === 'all' ? 'All Status' : status}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex items-end">
                                <Button variant="secondary" className="w-full" icon={<FaMap />}>
                                    View on Map
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    <div className="mt-6 flex justify-between items-center">
                        <p className="text-gray-600 dark:text-gray-400">
                            Showing <span className="font-semibold text-gray-900 dark:text-white">
                                {filteredProperties.length}
                            </span> properties
                        </p>
                        <select className="input-field w-auto">
                            <option>Sort: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    {filteredProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProperties.map((property) => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                No properties found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Try adjusting your filters to see more results
                            </p>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    setSelectedLocation('all');
                                    setSelectedPriceRange('all');
                                    setSelectedStatus('all');
                                }}
                            >
                                Reset Filters
                            </Button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                            Explore <span className="gradient-text">Our Locations</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Find properties on the map
                        </p>
                    </motion.div>

                    <div className="card overflow-hidden h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                        <div className="text-center">
                            <FaMap className="text-6xl text-gold-500 mx-auto mb-4" />
                            <p className="text-gray-600 dark:text-gray-400">
                                Interactive Map Integration (Google Maps / Mapbox)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OpenPlots;
