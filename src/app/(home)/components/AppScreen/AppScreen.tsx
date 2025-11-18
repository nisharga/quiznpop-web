'use client'
import { APP_SCREEN } from '@/static'
import React from 'react' 
import { Avatar } from '@/components'
import { motion } from "framer-motion";
import AppScreenTitle from './AppScreenTitle';

const AppScreen = () => {
    return (
        <div className='pb-28'
            data-testid="app-screen">
            <div className="container">
                <div className="bg-first-500 p-4 md:p-8 rounded-xl h-[480px] relative">
                    <AppScreenTitle />
                    <motion.div 
                        className="absolute left-24 xs:left-6 bottom-0 w-[150px] h-auto"
                        whileInView={{ y: 0, opacity: 1 }} 
                        initial={{ y: 100, opacity: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                        viewport={{ once: false, amount: 0.2 }} 
                    >
                        <Avatar src={APP_SCREEN.one} className="w-full h-full" />
                    </motion.div>
                    <motion.div 
                        className="hidden xl:block absolute left-[450px] 
                        lg:left-[480px] xl:left-[540px] bottom-0 w-[150px] h-auto"
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}  
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Avatar src={APP_SCREEN.two} className="w-full h-full" />
                    </motion.div>
                    <motion.div 
                        className="hidden xs:block absolute right-6 bottom-0 w-[150px] h-auto"
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}  
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Avatar src={APP_SCREEN.three} className="w-full h-full" />
                    </motion.div> 
                    <motion.div 
                        className="hidden sm:block absolute left-6 top-0 w-[150px] h-auto"
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: -100, opacity: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Avatar src={APP_SCREEN.four} className="w-full h-full" />
                    </motion.div>
                    <motion.div 
                        className="hidden xl:block absolute left-[450px] lg:left-[480px] 
                        xl:left-[540px] top-0 w-[150px] h-auto"
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: -100, opacity: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}  
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Avatar src={APP_SCREEN.five} className="w-full h-full" />
                    </motion.div>
                    <motion.div 
                        className="hidden sm:block absolute right-6 top-0 w-[150px] h-auto"
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: -100, opacity: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}  
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Avatar src={APP_SCREEN.six} className="w-full h-full" />
                    </motion.div> 
                    <motion.div 
                        className="hidden lg:block absolute left-[270px] bottom-[70px] 
                        w-[150px] h-auto"
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}  
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Avatar src={APP_SCREEN.seven} className="w-full h-full" />
                    </motion.div>
                    <motion.div 
                        className="hidden lg:block absolute right-[270px] bottom-[70px] 
                        w-[150px] h-auto"
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: -100, opacity: 0 }}  
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} 
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Avatar src={APP_SCREEN.eight} className="w-full h-full" />
                    </motion.div> 
                </div>
            </div>
        </div>
    )
}
export default AppScreen