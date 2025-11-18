'use client'
import { HERO } from "@/static";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedCounter = ({ count, type }: { count: number; type: string }) => {
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayCount((prev) => {
                if (prev >= count) {
                    clearInterval(interval);
                    return count;
                }
                return prev + Math.ceil(count / 50);  
            });
        }, 20);  

        return () => clearInterval(interval);
    }, [count]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl lg:text-3xl text-first-300 font-semibold py-2.5"
            data-testid="animated-counter"
        >
            +{displayCount}{type}
        </motion.div>
    );
};


const AchievementList = () => {
    return (
        <div className='flex gap-4'>
            {HERO?.achievementList?.map(({ id, label, icon, count, type }) => 
                <div className={`relative ${id == 2 ? 'pr-10' : 'pr-6'}`} key={id}>
                    <div>{icon}</div> 
                    <AnimatedCounter count={count} type={type} />
                    <p className='py-1 px-2.5 border inline-block border-first-300 
                    rounded-[8px] text-sm mb-2.5'>{label}</p>
                    {id !== 3 && <div className="absolute right-0 top-[15%] h-[70%] w-[2px] 
                    bg-first-400 rounded"></div>}
                </div>)}
        </div>
    );
};
 

export default AchievementList;
