'use client'
import { Avatar } from '@/components';
import { HOW_TO_PLAY } from '@/static';
import { motion } from 'framer-motion';
import React from 'react';

const PlayAvatar = () => {
    return (
        <motion.div
            className=""
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <Avatar src={HOW_TO_PLAY.image} className="w-full h-full" />
        </motion.div>
    );
}

export default PlayAvatar;
