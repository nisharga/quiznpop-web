'use client'
import { Avatar } from '@/components' 
import { FEATURE_CATEGORY } from '@/static';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { CategoryProps } from '@/utils';

const Cards = ({ title, content, fee, image, id, bgColor }: CategoryProps) => {
    const cardRef = useRef(null);
    const [isFirstView, setIsFirstView] = useState(false);
    const [marginClass, setMarginClass] = useState("mt-12");  
  
    useEffect(() => {
        if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
        const currentCardRef = cardRef.current; 
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isFirstView) {
                    setIsFirstView(true);
    
                    setTimeout(() => {
                        setMarginClass(id % 2 === 0 ? "-mt-12" : "mt-12");
                    }, 500);
                }
            },
            { threshold: 0.3 }
        );
        if (currentCardRef) {
            observer.observe(currentCardRef);
        }
        return () => {
            if (currentCardRef) {
                observer.unobserve(currentCardRef);
            }
        };
    }, [isFirstView, id]);
    
  
    return (
        <motion.div
            data-testid="category-card"
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 1 }}  
            className={`!w-[95px] h-28 ${bgColor} rounded-xl p-2 relative mr-2 md:mr-4 
            transition-all duration-1000 ${marginClass}`}
        >
            <div>
                <h1 className="text-xs md:text-sm font-semibold text-white"
                >{title}</h1>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-[9px] md:text-[11px] text-white">{content}</p>
                    <div className="flex items-center">
                        <p className="text-xs text-white font-semibold">{fee}</p>
                        <div className="w-3 h-3">
                            <Avatar src={image} className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[36px] md:w-[54px] h-auto py-2 absolute -bottom-1 -right-1">
                <Avatar src={image} className="w-full h-full" />
            </div>
        </motion.div>
    );
};
  
const Category = () => {
    return (
        <div className='bg-first-500 p-4 md:p-8 rounded-xl'>
            <h2 
                data-testid="category-title"
                className='mb-4'>{FEATURE_CATEGORY.title}</h2>
            <p className='font-light pb-2'>{FEATURE_CATEGORY.content}</p>
            <div className="flex items-center justify-between 
                my-8 relative">
                <div className="w-full border-2 border-dashed border-[#757575] 
                absolute -left-2"></div>
                {FEATURE_CATEGORY.categoryList?.map(
                    ({ id, title, content, fee, image, bgColor }) => 
                        <Cards 
                            key={id} 
                            title={title} 
                            content={content} 
                            fee={fee} 
                            image={image}
                            id={id}
                            bgColor={bgColor}
                        /> 
                )}
            </div>
        </div>
    )
}
export default Category