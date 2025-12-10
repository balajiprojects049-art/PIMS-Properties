import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    type = 'button',
    icon,
    ...props
}) => {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type={type}
            onClick={onClick}
            className={`${variants[variant]} ${className} flex items-center gap-2 justify-center`}
            {...props}
        >
            {icon && <span>{icon}</span>}
            {children}
        </motion.button>
    );
};

export default Button;
