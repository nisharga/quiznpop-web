"use client"
import { Avatar, Icons } from '@/components'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { HERO_IMAGES } from '@/static';

const RoundImage = ({ src, id }: { src: string; id: number }) => {
    return (
        <motion.div
            initial={{ x: 0, y: 0 }}  
            animate={{
                x: id === 0 ? 5 : id === 1 ? -5 : 0,  
                y: id !== 0 && id !== 1 ? -5 : 0,  
            }}
            transition={{
                duration: 4,  
                ease: "easeInOut",  
                repeat: Infinity,  
                repeatType: "loop",  
                delay: 0,  
            }}
            className="w-32 lg:w-40 h-32 lg:h-40 rounded-full border-2 border-purple-200 
            center"
        >
            <div className="w-28 lg:w-36 h-28 lg:h-36 rounded-full">
                <Avatar src={src} className="w-full h-full" />
            </div>
        </motion.div>
    );
};

const ArrowRounded = ({ title }: {title?: string}) => {
    return (
        <>
            {
                title ? <div className="w-32 lg:w-40 h-32 lg:h-40 rounded-full 
                flex flex-col items-center justify-center relative">
                    <div className="w-[100px] mb-3 text-center absolute -top-4 lg:top-0">
                        {title}
                    </div>
                    <div className="w-12 h-12 border border-purple-500 rounded-full 
                    center bg-[#e6d8fc]">
                        <Icons.ArrowTop className='fill-blue-500' />
                    </div>
                </div> : <div className="w-32 lg:w-40 h-32 lg:h-40 rounded-full center">
                    <div className="w-12 h-12 border border-purple-500 rounded-full center">
                        <Icons.ArrowTop className='fill-blue-500' />
                    </div>
                </div>
            }
        </>
    )
}

const HeroImages = () => {  
    const [imageOrder, setImageOrder] = useState(HERO_IMAGES);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageOrder((prev) => [prev[2], prev[0], prev[1]]); 
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className='flex gap-4 justify-between mb-8' data-testid="hero-images-top">
                <RoundImage src={imageOrder[0].src} id={0}/>
                <ArrowRounded /> 
                <RoundImage src={imageOrder[1].src} id={1}/>
            </div>
            <div className='flex gap-4 justify-between w-full' data-testid="hero-images-bottom">
                <ArrowRounded title={imageOrder[2].title} />
                <RoundImage src={imageOrder[2].src} id={2} />
                <ArrowRounded />
            </div>
        </>
    )
}

export default HeroImages