'use client'
import { ABOUT_US } from '@/static'
import React from 'react' 
import { Avatar, DownloadButtons } from '@/components'
import { motion } from "framer-motion";

const AboutUs = () => {
    const tagContainer = 'xs:flex gap-4 mb-6 items-center justify-center lg:justify-start'
    const spanTag = 'mb-4 xs:mb-0 py-2.5 px-5 text-black border border-first-200 text-xs'
    return (
        <div className='pb-28'
            data-testid="about-us">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-4">
                    <h4>{ABOUT_US.title}</h4> 
                </div>
                <div className="grid grid-cols-12 gap-6 h-full">
                    <div className="col-span-12 lg:col-span-6 h-full">
                    
                        <motion.div 
                            data-testid="about-us-tag-label"
                            className={tagContainer}
                            initial="hidden"
                            whileInView="visible"
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.2 }
                                }
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {ABOUT_US.tagList.map(({ id, label }) => 
                                <motion.span
                                    key={id}
                                    className={`${spanTag} center rounded-[8px]`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {label}
                                </motion.span>)}
                        </motion.div>

                        <div className='bg-first-500 p-4 md:p-8 rounded-xl'> 
                            <p className='font-light'>{ABOUT_US.content}</p>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6 h-full bg-first-500 
                relative rounded-xl">
                        <div className="p-4 md:p-8 h-full"> 
                            <motion.div 
                                className="w-full xs:max-w-[180px] flex flex-col items-center 
                                justify-center 
                            !h-full z-50"
                                initial={{ y: 50, opacity: 0 }}  
                                whileInView={{ y: 0, opacity: 1 }}  
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} 
                                viewport={{ once: false, amount: 0.3 }} 
                            >
                                <p className="mb-4 font-medium mt-8">Download App</p> 
                                <DownloadButtons type="horizontal" /> 
                            </motion.div>
                
                            <motion.div 
                                className="max-w-[220px] h-auto hidden xs:block absolute 
                                bottom-0 right-0 z-10"
                                initial={{ x: 50, opacity: 0 }}  
                                whileInView={{ x: 0, opacity: 1 }}  
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}  
                                viewport={{ once: false, amount: 0.3 }}  
                            >
                                <Avatar src={ABOUT_US.image} className="w-full h-full" />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs