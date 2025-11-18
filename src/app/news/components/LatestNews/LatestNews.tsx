"use client" 
import { LATEST_NEWS } from '@/static'
import React from 'react'
import { motion } from "framer-motion";
import ContentBox from './ContentBox';
import CardSkeleton from './CardSkeleton';

const LatestNews = () => {
    const isLoading = false;
    return ( 
        <div className='mb-20'>
            <div className='container'>
                <h4 className='mb-8'
                    data-testid="latest-news-section-title">Latest News</h4>
                <div className='grid grid-cols-12 gap-6'>
                    {isLoading ?  
                        Array(LATEST_NEWS.length).fill(0).map((_, index) => 
                            <CardSkeleton key={index} />)
                        :  
                        LATEST_NEWS?.map(({ id, title, content, thumb, time }) => 
                            <motion.div
                                data-testid="latest-news-box"
                                className="relative col-span-12 sm:col-span-6 lg:col-span-4 
                      min-h-[456px] w-full rounded-xl overflow-hidden group"
                                key={id}
                                style={{
                                    backgroundImage: `url(${thumb})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                initial="initial"
                                whileHover="hover"
                            >
                                <div className="absolute inset-0 bg-black opacity-25"></div>

                                <motion.div
                                    className="absolute bottom-0 left-0 w-full p-4"
                                    variants={{
                                        initial: { y: 0 },
                                        hover: { y: -30 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <motion.div
                                        className="absolute inset-0 flex flex-col justify-end p-4"
                                        variants={{
                                            initial: { opacity: 1 },
                                            hover: { opacity: 0 },
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ContentBox 
                                            title={title}
                                            content={content}
                                            time={time}
                                            id={id} 
                                        />
                                    </motion.div>

                                    <motion.div
                                        className="absolute -bottom-8 left-0 inset-0 flex flex-col 
                                        justify-end p-4"
                                        variants={{
                                            initial: { opacity: 0 },
                                            hover: { opacity: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut", 
                                            delay: 0.2 }}
                                    >
                                        <ContentBox 
                                            title={title}
                                            content={content}
                                            time={time}
                                            id={id}
                                            type="full"
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>)
                    }
                </div>
            </div>
        </div> 
    )
}

export default LatestNews