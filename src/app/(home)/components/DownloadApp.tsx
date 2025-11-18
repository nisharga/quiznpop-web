'use client'
import { Avatar, DownloadButtons } from '@/components'
import { DOWNLOAD } from '@/static';
import Image from 'next/image'
import React from 'react'  
import { motion } from "framer-motion";

const DownloadApp = () => {
    return (
        <div className="pb-28 relative">
            <div className="container bg-purple-50 min-h-[1000px] sm:min-h-[800px] 
            lg:min-h-[420px] rounded-[12px] relative z-10 p-6 !h-full">
                {/* Background Elements */}
                <div className="absolute bg-bgtop bg-no-repeat bg-cover w-[80%] h-[20px] 
                top-12 left-0 z-0"></div>
                <div className="absolute bg-bgbottom bg-no-repeat bg-cover w-[40%] h-[20px] 
                bottom-12 right-0 z-0"></div>
                <div className="absolute bg-bgleftbottom bg-no-repeat bg-cover w-[130px] 
                h-[46px] left-5 bottom-6 z-0"></div>

                {/* Content Section */}
             
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="z-20 h-[370px] hidden sm:flex flex-col lg:!items-start 
                        items-center justify-end lg:justify-center">
                            <Image src="/logo.svg" width={140} height={40} alt="logo" 
                                className="mb-4" 
                                data-testid="logo"/>
                            <h2 className="mb-4"
                                data-testid="title">Download the App</h2>
                            <div>
                                <DownloadButtons />
                            </div>
                        </div> 
                    </div> 
                    <div className="col-span-12 lg:col-span-6">
                        <div className="w-[234px] h-auto absolute right-0 lg:right-[410px] top-5">
                            <motion.div 
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Avatar data-testid="download-image-one" 
                                    alt="download-image-one"
                                    src={DOWNLOAD.imageOne} />
                            </motion.div>
                        </div>

                        <div className="w-[284px] h-auto right-2 sm:right-[100px] absolute 
                        bottom-0 sm:bottom-2">
                            <motion.div 
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Avatar src={DOWNLOAD.imageTwo} 
                                    data-testid="download-image-two"/>
                            </motion.div>
                        </div>
                       
                        <div className="z-20 min-h-[600px] flex sm:hidden flex-col lg:!items-start 
                        items-center justify-end lg:justify-center">
                            <Image src="/logo.svg" width={140} height={40} alt="logo" 
                                className="mb-4" />
                            <h2 className="mb-4">Download the App</h2>
                            <div>
                                <DownloadButtons />
                            </div>
                        </div> 
                    </div>
                </div>
              
            </div>
        </div>
    );
};


export default DownloadApp