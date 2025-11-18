'use client'
import { Button, Icons } from '@/components'
import { useStoreState } from '@/store';
import React, { useState } from 'react'

interface IProps{
    setStep: (step: number) => void; 
}
const RewardType = ({ setStep }: IProps) => {
    const [type, setType] = useState(''); 
    const { paymentType, setPaymentType } = useStoreState();
    const handleSelect = (typeReward: string) => {
        setType(typeReward);
        setPaymentType(typeReward);
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
                    <p className='font-medium'>Redeem rewards through Bank transfer.</p>
                </div>
                <div className="min-w-7">
                    {type === 'bank' && <Icons.Check />}
                </div>
            </button>
            <button className={`${buttonClass} ${type === 'card' && 'border !border-[#46B241]'}`} 
                onClick={() => handleSelect('card')}>
                <div className="flex gap-2.5 items-center">
                    <div className=""><Icons.Card /></div>
                    <p className='font-medium'>Redeem rewards through Visa or master Card.</p>
                </div>
                <div className="min-w-7">
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

export default RewardType