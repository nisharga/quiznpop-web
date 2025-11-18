import React from 'react'
import { ContentBox } from '../LatestNews'
import { motion } from "framer-motion"; 

interface IProps{
    title: string;
    content: string;
    time: string;
    id: number;
    thumb?: string; 
  }
const SingleItem = ({ title, content, time, id, thumb }: IProps) => {
    return (
        <motion.div
            className="col-span-12 relative min-h-[456px] !w-full rounded-xl overflow-hidden group" 
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
                    className="absolute -bottom-8 left-0 inset-0 flex flex-col justify-end p-4"
                    variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
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
        </motion.div> 
    )
}

export default SingleItem