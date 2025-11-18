'use client'
import { JSX } from "react";
import { motion } from "framer-motion";

interface IProps {
    icon: JSX.Element;
    title: string;
    content: string;
}

export const ContentRight = ({ icon, title, content }: IProps) => {
    return (
        <motion.div  
            className="grid grid-cols-12 gap-6 relative"
            initial={{ x: 100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="col-span-5 flex items-center justify-end mb-4">
                <div className="bg-purple-50 w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] 
                rounded-full flex items-center justify-center relative">
                    <div className="bg-purple-200 w-[28px] h-[28px] sm:w-[56px] sm:h-[56px] 
                    rounded-full flex items-center justify-center"
                    data-testid="how-to-play-content-right-icon">
                        {icon}
                    </div>
                    <div className="absolute left-10 sm:left-20 top-5 sm:top-10 w-[75px] 
                    h-[2px] bg-purple-500"></div>
                    <div className="absolute w-[12px] h-[12px] bg-purple-200 rounded-full 
                    -right-[79px] top-4 sm:top-9 z-50 flex items-center justify-center">
                        <div className="w-[5px] h-[5px] bg-purple-500 rounded-full"></div>
                    </div>
                </div> 
            </div>
            <div className="col-span-2 mb-4">
                <div className="absolute bg-purple-500 h-[100%] w-[2px] top-0 ml-12 sm:ml-12"></div>
            </div>
            <div className="col-span-5 bg-purple-50 rounded-[12px] p-2 sm:p-6 mb-4">
                <h3 className='mb-4 text-base lg:text-lg'
                    data-testid="how-to-play-content-right-title">{title}</h3>
                <p 
                    data-testid="how-to-play-content-right-content"
                    className='text-sm'>{content}</p>
            </div>  
        </motion.div>
    );
}

export const ContentLeft = ({ icon, title, content }: IProps) => {
    return (
        <motion.div 
            className="grid grid-cols-12 gap-6 relative"
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="col-span-5 bg-purple-50 rounded-[12px] p-2 sm:p-6 relative">
                <h3 className='mb-4 text-base lg:text-lg'>{title}</h3>
                <p className='text-sm'>{content}</p>
                <div className="absolute w-[12px] h-[12px] bg-purple-200 rounded-full 
                -right-[80px] top-[50px] sm:top-[58px] z-50 flex items-center justify-center">
                    <div className="w-[5px] h-[5px] bg-purple-500 rounded-full"></div>
                </div>
                <div className="absolute -right-[150px] sm:-right-40 top-[56px] sm:top-16 
                w-[70px] sm:w-[78px] h-[2px] bg-purple-500"></div>
            </div> 
            <div className="col-span-2">
                <div className="absolute bg-purple-500 h-[100%] w-[2px] top-0 ml-12 sm:ml-12"></div>
            </div>
            <div className="hidden col-span-5 xs:flex items-center justify-start">
                <div className="bg-purple-50 w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] 
                rounded-full flex items-center justify-center relative ">
                    <div className="bg-purple-200 w-[28px] h-[28px] sm:w-[56px] sm:h-[56px] 
                    rounded-full flex items-center justify-center">
                        {icon}
                    </div>  
                </div> 
            </div> 
            <div className="flex col-span-5 xs:hidden items-center justify-start">
                <div className="bg-purple-50 w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] 
                rounded-full flex items-center justify-center absolute right-12 top-10">
                    <div className="bg-purple-200 w-[28px] h-[28px] sm:w-[56px] sm:h-[56px] 
                    rounded-full flex items-center justify-center">
                        {icon}
                    </div>  
                </div> 
            </div>
        </motion.div>
    );
}
