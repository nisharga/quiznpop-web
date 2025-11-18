'use client' 
import React from 'react'
import { motion } from 'framer-motion'
import { useStoreState } from '@/store';
import { HandleCopy } from '@/components';
import { CARD } from '@/static';
import { Landmark } from 'lucide-react';

export const animationVariants = {
    hidden: {
        scale: 0.8,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const Card = () => {
    const { price, bank, country } = useStoreState();
    return (
        <motion.div 
            className='col-span-12 mb-4 flex items-center justify-center'
            initial="hidden" animate="visible" variants={animationVariants}
            transition={{ duration: 0.4, delay: 0.5 }}
        >
            {bank && country ? <div className="w-[246px] h-[148px] bg-red_card bg-no-repeat 
            bg-cover p-3 flex flex-col justify-between">
                <div className="flex gap-1.5 items-center justify-end mb-1">
                    <Landmark className='w-5.5 h-5.5 fill-white stroke-white'/> 
                    <p className='text-white text-sm font-medium'>{CARD.bank}</p>
                </div>
                <div className="flex flex-col items-start justify-start mb-4"> 
                    <p className='text-white text-[13px] font-medium'>Account Number</p>
                    <div className="flex gap-0.5 items-center -mt-1">
                        <p className='text-white text-sm font-medium'>{CARD.accountNo}</p> 
                        <HandleCopy text={CARD.accountNo}/>
                    </div>
                </div>
                <div className="flex items-start justify-between"> 
                    <div className="flex flex-col items-start justify-start mb-4"> 
                        <p className='text-white text-[13px] font-medium'>Reference Number</p>
                        <div className="flex gap-0.5 items-center -mt-1">
                            <p className='text-white text-sm font-medium'>{CARD.referNo}</p> 
                            <HandleCopy text={CARD.referNo}/>
                        </div>
                    </div>
                    <div className=""> 
                        <p className='text-white text-[13px] font-medium text-right'>Amount</p> 
                        <p className='text-white text-2xl font-medium -mt-2'>$ {price}</p> 
                    </div>
                </div>
            </div> 
                : <div className="w-[246px] h-[148px] bg-card_bg bg-no-repeat bg-cover p-10 flex 
                items-center justify-center">
                    <p className='text-sm text-center'>Please select a bank for Account Details</p>
                </div>}
    
        </motion.div>
    )
}

export default Card

 