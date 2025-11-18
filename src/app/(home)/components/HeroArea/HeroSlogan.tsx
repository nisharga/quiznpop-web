'use client'
import React from 'react'
import { motion } from "framer-motion";
import { letterVariants, sentenceVariants } from '@/utils';
interface IProps{
    title: string;
    subtitle: string;
}
const HeroSlogan = ({ title, subtitle }: IProps) => {
    return (
        <div className="pr-8 xl:pr-16 relative mb-8">
            <h1 className='text-4xl lg:text-6xl font-extrabold mb-2 
            xl:mb-0' data-testid="hero-title">{title}</h1>
            <div className="w-full xl:w-[380px] xl:absolute bottom-1 left-36">
                <motion.h6
                    key={subtitle}
                    variants={sentenceVariants}
                    initial="hidden"
                    animate="visible" 
                    className='text-base xl:text-lg'
                    data-testid="hero-subtitle"
                >
                    {subtitle.split("").map((char, i) => 
                        <motion.span key={`${char}-${i}`} variants={letterVariants}>
                            {char}
                        </motion.span>)}
                </motion.h6> 
            </div>
        </div>
    )
}

export default HeroSlogan