import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRulerCombined, FaDownload, FaCheck } from 'react-icons/fa';
import Button from './Button';

const PropertyCard = ({ property }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card overflow-hidden group"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-64">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${property.status === 'Available'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-red-500 text-white'
                            }`}
                    >
                        {property.status}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                    {property.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                    <FaMapMarkerAlt className="text-gold-500" />
                    <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                        <FaRulerCombined className="text-gold-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {property.size}
                        </span>
                    </div>
                    <div className="text-2xl font-bold gradient-text">
                        {property.price}
                    </div>
                </div>

                <div className="mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {property.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {property.features.slice(0, 3).map((feature, index) => (
                            <span
                                key={index}
                                className="flex items-center gap-1 px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 
                text-emerald-700 dark:text-emerald-400 rounded-md text-xs"
                            >
                                <FaCheck size={10} />
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button variant="primary" className="flex-1 text-sm">
                        View Details
                    </Button>
                    <Button variant="outline" className="px-4" icon={<FaDownload />}>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default PropertyCard;
