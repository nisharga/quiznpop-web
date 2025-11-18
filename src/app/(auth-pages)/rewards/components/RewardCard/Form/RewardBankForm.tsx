'use client'
import { redeemRewardSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { motion } from 'framer-motion'
import { animationVariants } from '@/utils'; 
import { useRewardStore, useStoreState } from '@/store';
import FormElements from './FormElements';
import { z } from 'zod';

interface IProps{
    setStep: (step: number) => void; 
}
const RewardBankForm = ({ setStep }: IProps) => {
    const { setBank, setCountry } = useStoreState();
    const { setReward } = useRewardStore();
    const form =  useForm<z.infer<typeof redeemRewardSchema>>({
        resolver: zodResolver(redeemRewardSchema),
        defaultValues: {
            amount: "",
            country: "",
            bank: "",
            holderName: "",
            accountNo: ""
        },
    }); 
    function onSubmit(data: FieldValues) {  
        if(data.country && data.bank && data) {
            setReward({ 
                amount: data.amount, 
                country: data.country, 
                bank: data.bank, 
                holderName: data.holderName,
                accountNo: data.accountNo,
            });
            setStep(3);
        } 
    }

    const selectedCountry = form.watch('country');
    const selectedBank = form.watch('bank');

    useEffect(() => {
        if (selectedCountry) {
            setCountry(selectedCountry);
        }
    }, [selectedCountry, setCountry]);

    useEffect(() => {
        if (selectedBank) {
            setBank(selectedBank);
        }
    }, [selectedBank, setBank]);
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col items-start"
                >
                    <div className="grid grid-cols-12 !w-full"> 
                        <div className="max-h-[360px] w-full col-span-12 overflow-y-auto">
                            <FormElements form={form} /> 
                        </div>
                        <motion.div 
                            className='col-span-12 mt-4'
                            initial="hidden" animate="visible" variants={animationVariants}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <button type="submit" className="bg-purple-500 hover:bg-purple-400 
                        rounded-[8px] text-center text-white mb-4 w-full py-2 px-4">
                        Redeem
                            </button> 
                        </motion.div>
                    </div> 
                </form>
            </Form>
        </div>
    )
}

export default RewardBankForm