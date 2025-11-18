'use client'
import { FEATURES } from '@/static'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { Avatar } from '@/components'

const balloonImages = [
    "/home/features/blue_ballon.png",
    "/home/features/yellow_ballon.png",
    "/home/features/gray_ballon.png",
    "/home/features/pink_ballon.png",
    "/home/features/red_ballon.png",
];
 
const Balloon = () => {
    const [randomLeft, setRandomLeft] = useState("50%");
    const [randomImage, setRandomImage] = useState(balloonImages[0]);
    const [randomDelay, setRandomDelay] = useState(0);
    const [key, setKey] = useState(Math.random());  
  
    useEffect(() => {
        const newRandomDelay = Math.random() * 2;  
        setRandomLeft(`${Math.random() * 70 + 10}%`);  
        setRandomImage(balloonImages[Math.floor(Math.random() * balloonImages.length)]);  
        setRandomDelay(newRandomDelay);  
    
        const interval = setInterval(() => {
            setKey(Math.random());
        }, 3000 + newRandomDelay * 1000);  
    
        return () => clearInterval(interval);
    }, []); 
  
    return (
        <motion.div 
            data-testid="pop-and-match-balloon"
            key={key}  
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: -320, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 3,
                delay: randomDelay,  
                repeat: Infinity,
                repeatType: "loop",
            }}
            className="absolute bottom-0 w-[60px] h-[132px]"
            style={{ left: randomLeft }}
        >
            <Avatar src={randomImage} className="w-full h-full" />
        </motion.div>
    );
};
  
  

const PopAndMatch = () => {
     
    return (
        <div className='bg-first-500 pt-8 pb-16 rounded-xl relative min-h-[450px] overflow-hidden'>
        
            {Array.from({ length: 12 }).map((_, index) => 
                <Balloon key={index} />)}
        
            <div className="absolute left-8 bottom-8">
                <h2 
                    data-testid="pop-match-title"
                    className='mb-4'>{FEATURES.popMatch.title}</h2>
                <p className='font-light pb-2'>{FEATURES.popMatch.content}</p>
            </div>
        </div>
    )
}


export default PopAndMatch