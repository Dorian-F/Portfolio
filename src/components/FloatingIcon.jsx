import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcon = ({ children, delay = 0 }) => {
    return (
        <motion.div
            animate={{
                y: [0, -8, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            style={{ display: 'inline-flex' }}
        >
            {children}
        </motion.div>
    );
};

export default FloatingIcon;
