'use client'
import { Avatar, RoundedTriangle } from '@/components' 
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface IProps {
    imageList: (string | undefined)[];
    type?: string;
}
const Slider = ({ imageList, type } : IProps) => {
    const [currentImages, setCurrentImages] = useState(imageList)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImages(prev => {
                const newImages = [...prev]
                const lastImage = newImages.pop()
                newImages.unshift(lastImage as string)
                return newImages
            })
        }, 3000)  

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='relative !h-full' data-testid="slider">
            <motion.div
                className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px] rounded-[12px]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={currentImages[2]}
            >
                <Avatar src={currentImages[2] ?? ''} className='w-full h-full' />
            </motion.div>

            <motion.div
                className="w-[112px] h-[112px] sm:w-[224px] sm:h-[224px] rounded-[12px] 
        absolute left-[80px] sm:left-[160px] top-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={currentImages[1]}
            >
                <Avatar src={currentImages[1] ?? ''} className='w-full h-full' />
            </motion.div>

            <motion.div
                className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px] rounded-[12px] 
        absolute left-[198px] sm:left-[395px] top-[70px]"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={currentImages[0]}
            >
                <Avatar src={currentImages[0] ?? ''} className='w-full h-full' />
            </motion.div>

            <motion.div
                className="w-[65px] h-[65px] sm:w-[130px] sm:h-[130px] rounded-[12px] 
        absolute left-[127px] sm:left-[255px] top-[117px] sm:top-[234px]"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={currentImages[3]}
            >
                <Avatar src={currentImages[3] ?? ''} className='w-full h-full' />
            </motion.div>

            <RoundedTriangle className='!rounded-tr-[40px] absolute left-[390px] -top-20' />
            <RoundedTriangle className={`!rounded-br-[40px] absolute left-[390px] 
                -bottom-40 ${type == 'left' ? 'hidden' : 'block'}`} />
            <RoundedTriangle className='!rounded-bl-[40px] absolute left-[74px] top-[220px]' />
        </div>
    )
}

export default Slider
