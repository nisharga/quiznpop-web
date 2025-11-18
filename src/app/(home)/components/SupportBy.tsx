'use client'
import { Icons } from '@/components'
import { SUPPORT } from '@/static'
import React from 'react'
import { motion } from "framer-motion";

const BoxIcon = ({ isActive }: {isActive?: boolean}) =>{
    return (
        <div className={`w-16 h-16 rounded-full border border-purple-500 
        center ${isActive ? 'bg-purple-500' : 'bg-transparent'}`}
        data-testid="support-by-box-icon"
        >
            <Icons.Ball className={`${isActive ? 'fill-white' : 'fill-purple-500'}`} />
        </div>
    )
} 


const SupportBy = () => {
    return (
        <div className='pb-28' data-testid="support-by">
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    
                    {/* Left Side */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="flex justify-between pr-20 mb-9">
                            {[...Array(3)].map((_, i) => 
                                <motion.div 
                                    key={i}
                                    whileInView={{ x: [0, 20, -20, 0] }} 
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                >
                                    <BoxIcon />
                                </motion.div>)}
                        </div>
                        <div className="flex justify-between pl-20">
                            {[...Array(3)].map((_, i) => 
                                <motion.div 
                                    key={i}
                                    whileInView={{ x: [0, -20, 20, 0] }} 
                                    transition={{ duration: 2, ease: "easeInOut", delay: 0.2 * i }}
                                    viewport={{ once: true }}
                                >
                                    <BoxIcon isActive={true} />
                                </motion.div>)}
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4 
                    lg:pl-20 py-8 lg:py-0 text-center lg:text-left flex flex-col items-start 
                    justify-center gap-2">
                        <h3 className='text-lg'>{SUPPORT.title}</h3> 
                        <h2>{SUPPORT.content}</h2>
                    </div> 

                    <div className="col-span-12 lg:col-span-4">
                        <div className="flex justify-between pr-20 mb-9">
                            {[...Array(3)].map((_, i) => 
                                <motion.div 
                                    key={i}
                                    whileInView={{ x: [0, -20, 20, 0] }} 
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                >
                                    <BoxIcon />
                                </motion.div>)}
                        </div>
                        <div className="flex justify-between pl-20">
                            {[...Array(3)].map((_, i) => 
                                <motion.div 
                                    key={i}
                                    whileInView={{ x: [0, 20, -20, 0] }} 
                                    transition={{ duration: 2, ease: "easeInOut", delay: 0.2 * i }}
                                    viewport={{ once: true }}
                                >
                                    <BoxIcon isActive={true} />
                                </motion.div>)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};


export default SupportBy