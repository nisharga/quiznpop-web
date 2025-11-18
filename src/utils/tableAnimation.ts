// Animation settings
export const rowVariants = {
    hiddenLeft: {
        opacity: 0,
        x: -50,
    },
    hiddenRight: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

// Animation Variants
export const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' },
};