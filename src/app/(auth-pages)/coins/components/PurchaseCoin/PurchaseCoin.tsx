'use client';
import { Avatar } from '@/components';
import { COIN_PURCHASE } from '@/static';
import React from 'react';
import PurchaseModal from './PurchaseModal';
import { motion } from 'framer-motion';
import { cardVariants } from '@/utils';

const PurchaseCoin = () => {  
    return (
        <div className='bg-purple-50 rounded-xl p-5'>
            <h3 className='mb-6'>Purchase coin</h3>
            <div className="flex flex-col gap-4">
                {COIN_PURCHASE?.map(({ id, image, coin, price }) => 
                    <motion.div
                        key={id}
                        className="grid grid-cols-12 border border-[#C9C9C9] bg-white rounded-[8px]"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <div className="col-span-4 xl:col-span-5 w-full bg-[#ED4C5C] rounded-[8px] 
                        flex items-center justify-center">
                            <div className="w-[50px] h-[70px]">
                                <Avatar className='w-full h-full' src={image} />
                            </div>
                        </div>
                        <div className="col-span-8 xl:col-span-7 p-2.5">
                            <p className='text-sm text-first-100 font-semibold 
                            text-right mb-2'>Price</p>
                            <h4 className='font-semibold text-right mb-2'>$ {price}</h4>
                            <div className="flex items-end justify-end">
                                <PurchaseModal coin={coin} price={price} />
                            </div>
                        </div>
                    </motion.div>)}
            </div>
        </div>
    );
};

export default PurchaseCoin;
