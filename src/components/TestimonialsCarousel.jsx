import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsCarousel = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[400px] overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute w-full"
                    >
                        <div className="card p-8 md:p-12 text-center">
                            <FaQuoteLeft className="text-4xl text-gold-500 mx-auto mb-6 opacity-50" />

                            <div className="mb-6">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gold-500 shadow-lg"
                                />
                            </div>

                            <div className="flex justify-center gap-1 mb-4">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <FaStar key={i} className="text-gold-500" />
                                ))}
                            </div>

                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white font-heading">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 
        w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg 
        flex items-center justify-center text-gray-700 dark:text-white 
        hover:bg-gold-500 hover:text-white transition-all hover:scale-110"
                aria-label="Previous testimonial"
            >
                <FaChevronLeft />
            </button>

            <button
                onClick={() => paginate(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 
        w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg 
        flex items-center justify-center text-gray-700 dark:text-white 
        hover:bg-gold-500 hover:text-white transition-all hover:scale-110"
                aria-label="Next testimonial"
            >
                <FaChevronRight />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`h-2 rounded-full transition-all ${index === currentIndex
                                ? 'w-8 bg-gold-500'
                                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gold-400'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
