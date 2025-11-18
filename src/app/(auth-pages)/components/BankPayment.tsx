'use client'
import { bankPaymentSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { motion } from 'framer-motion'
import { animationVariants } from '@/utils';
import { Dropdown } from '@/components';
import { bankList, countryList } from '@/static';
import Card from './Card';
import { useStoreState } from '@/store';
import { z } from 'zod';

interface IProps{
    setStep: (step: number) => void; 
}
const BankPayment = ({ setStep }: IProps) => {
    const { setBank, setCountry } = useStoreState();
    const form =  useForm<z.infer<typeof bankPaymentSchema>>({
        resolver: zodResolver(bankPaymentSchema),
        defaultValues: {
            country: "",
            bank: "" 
        },
    }); 
    function onSubmit(data: FieldValues) {  
        if(data.country && data.bank) {
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
                        <motion.div 
                            className='col-span-12 mb-4'
                            initial="hidden" animate="visible" variants={animationVariants}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <div className="font-normal text-sm input-label 
                            !mb-2 text-left">Select Country</div>
                            <Dropdown 
                                form={form} 
                                name="country" 
                                dataArray={countryList} 
                                label="select a country" 
                            />
                        </motion.div>  
                        <motion.div 
                            className='col-span-12 mb-4'
                            initial="hidden" animate="visible" variants={animationVariants}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <div className="font-normal text-sm input-label 
                            !mb-2 text-left">Select Bank</div>
                            <Dropdown 
                                form={form} 
                                name="bank" 
                                dataArray={bankList} 
                                label="select a bank" 
                            />
                        </motion.div> 
                        <Card /> 
                        <motion.div 
                            className='col-span-12'
                            initial="hidden" animate="visible" variants={animationVariants}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <button type="submit" className="bg-purple-500 hover:bg-purple-400 
                        rounded-[8px] text-center text-white mb-4 w-full py-2 px-4">
                        I have paid
                            </button> 
                        </motion.div>
                    </div> 
                </form>
            </Form>
        </div>
    )
}

export default BankPayment