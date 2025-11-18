'use client'
import { motion } from "framer-motion";
import { Avatar } from "@/components";
import { TESTIMONIAL } from "@/static";
import React from "react";

interface IProps {
    avatar: string;
    name: string;
    position: string;
    content: string;
}

const TestimonialItems = ({ avatar, name, position, content }: IProps) => {
    return (
        <motion.div 
            className="bg-first-500 p-4 md:p-8 rounded-xl col-span-12 lg:col-span-4"
            whileInView={{ scale: 1, opacity: 1 }}   
            initial={{ scale: 0.8, opacity: 0 }}   
            transition={{ duration: 0.6, ease: "easeOut" }} 
            viewport={{ once: false, amount: 0.2 }}
            data-testid="testimonial-box"  
        > 
            <div className="flex gap-4">
                <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full">
                        <Avatar src={avatar} className="w-full h-full" />
                    </div>
                </div>
                <div>
                    <div className="mb-1"
                        data-testid="testimonial-icon"
                    >{TESTIMONIAL.icon}</div>
                    <p className="mb-4 font-light text-[14px]"
                        data-testid="testimonial-content">{content}</p>
                    <p className="text-sm font-medium"
                        data-testid="testimonial-name">{name}</p>
                    <p className="text-xs font-normal"
                        data-testid="testimonial-position">{position}</p>
                </div>
            </div>     
        </motion.div>
    );
};

export default TestimonialItems;
