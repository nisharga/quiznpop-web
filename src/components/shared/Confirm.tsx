import { useRewardStore } from '@/store';
import React from 'react'
import Button from './Button';

const ConfirmBox = ({ title, content }: {title: string; content: string}) => {
    return (
        <div className="text-first-100 flex items-center justify-between mb-2">
            <p className='text-base lg:text-lg'>{title}</p>
            <p className='text-base lg:text-lg'>{content}</p>
        </div>
    )
}

interface IProps{
    setStep: (step: number) => void;
    type: string;
}

const Confirm = ({ setStep, type }: IProps ) => {
    const { amount, country, bank, holderName, accountNo } = useRewardStore();
    return (
        <>
            {
                type === 'reward_confirm' ? <>
                    <ConfirmBox title="Amount" content={`${amount}$`}  />
                    <ConfirmBox title="Country" content={country}  />
                    <ConfirmBox title="Bank" content={bank}  />
                    <ConfirmBox title="Holder Name" content={holderName}  />
                    <ConfirmBox title="Account No" content={accountNo}  />
                    <Button 
                        label="Yes" 
                        handleClickFunc={() => setStep(4)}
                        className="!mt-4"
                    />
                </> : ""
            }
        </>
    )
}

export default Confirm