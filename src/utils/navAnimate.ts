export const navVariants = {
    hidden: { opacity: 1 },  
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,  
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const sentenceVariants = {
    hidden: {}, 
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
  
export const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};
  


export const ProfileDetailsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const ProfileDetailsItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};


export const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}