'use client'
import { PROFILE_CARD_LIST } from '@/static';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const ProfileCardList = () => {
    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 mb-5"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            data-testid="profile-details-card"
        >
            {PROFILE_CARD_LIST?.map(({ id, title, value, symbol, bgColor }) => 
                <motion.div
                    key={id}
                    variants={itemVariants}
                    className={`${bgColor} p-6 flex gap-0.5 rounded-[8px] 
          flex-col min-h-[96px] items-center justify-center 
          text-[#8541B2] shadow-md hover:shadow-lg transition-shadow`}
                >
                    <p className="font-medium text-[#8541B2] text-center">{title}</p>
                    <div className="flex gap-0.5 text-xl font-medium items-center justify-center">
                        <div data-testid="profile-details-card-symbol">{symbol}</div>
                        <div data-testid="profile-details-card-value">{value}</div>
                    </div>
                </motion.div>)}
        </motion.div>
    );
};

export default ProfileCardList;
