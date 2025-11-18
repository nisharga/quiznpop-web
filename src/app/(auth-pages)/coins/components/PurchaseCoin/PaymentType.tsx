'use client'
import { Button, Icons } from '@/components'
import { useStoreState } from '@/store';
import React, { useState } from 'react'

interface IProps{
    setStep: (step: number) => void; 
}
const PaymentType = ({ setStep }: IProps) => {
    const [type, setType] = useState(''); 
    const { paymentType, setPaymentType } = useStoreState();
    const handleSelect = (typePayment: string) => {
        setType(typePayment);
        setPaymentType(typePayment);
    }
    const buttonClass = `py-4 lg:py-8 px-3 lg:px-6 flex items-center justify-between border w-full 
        border-first-400 rounded-[8px] !mb-4`
    
    const handleSubmit = (pType: string) => {
        if(pType){
            setStep(2)
        } 
    }
    return (
        <>
            <button className={`${buttonClass} ${type === 'bank' && 'border !border-[#46B241]'}`} 
                onClick={() => handleSelect('bank')}>
                <div className="flex gap-2.5 items-center">
                    <div className=""><Icons.Bank /></div>
                    <p className='font-medium'>Bank Transfer</p>
                </div>
                <div className="">
                    {type === 'bank' && <Icons.Check />}
                </div>
            </button>
            <button className={`${buttonClass} ${type === 'card' && 'border !border-[#46B241]'}`} 
                onClick={() => handleSelect('card')}>
                <div className="flex gap-2.5 items-center">
                    <div className=""><Icons.Card /></div>
                    <p className='font-medium'>From Card</p>
                </div>
                <div className="">
                    {type === 'card' && <Icons.Check />}
                </div>
            </button>    
            <Button 
                label="Continue"
                handleClickFunc={() => handleSubmit(paymentType)}
            />
        </>
    )
}

export default PaymentType