'use client'
import React, { useState } from 'react'
import {
    AlertDialog, AlertDialogContent, AlertDialogHeader,  AlertDialogTrigger,
} from "@/components/ui/alert-dialog" 
import { AlertSectionTitle, Button, Confirm } from '@/components/shared'  
import { useStoreState } from '@/store' 
import { CardPayment } from '@/app/(auth-pages)/components'
import { Avatar } from '@/components'
import { useRouter } from 'next/navigation'
import RewardType from './RewardType' 
import RewardBankForm from './Form/RewardBankForm'

 
const ClaimRewardsModal = () => {
    const [open, setOpen] = useState(false);
    const { paymentType, reset, step, setStep } = useStoreState();   
    const router = useRouter(); 
    const handleFinishPayment = () => { 
        router.push('/rewards');
        setOpen(false);
        reset();
    }
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild className=''>
                <button className='text-white text-right text-sm font-semibold'
                    data-testid="claim-reward-button"> 
            Claim Rewards </button> 
            </AlertDialogTrigger>
            <AlertDialogContent className="mt-4 lg:mt-16 max-h-[460px] overflow-y-auto 
            lg:max-h-none lg:overflow-y-visible">
                <AlertDialogHeader>
                    {
                        step === 1 ? <>
                            <AlertSectionTitle 
                                title="Redeem Rewards"
                                content="Please select redeem method."
                                setOpen={setOpen}
                            /> 
                            <RewardType setStep={setStep} />
                        </> : 
                            step === 2 && paymentType === 'card' ? <>
                                <AlertSectionTitle 
                                    title={`Redeem rewards`}
                                    content="Please enter following details to redeem your 
                            win rewards through bank transfer"
                                    setOpen={setOpen}
                                />
                                <CardPayment />
                            </> 
                                : step === 2 && paymentType === 'bank' ? <>
                                    <AlertSectionTitle 
                                        title={`Redeem rewards`}
                                        content="Please enter following details to redeem your win 
                                        rewards through bank transfer"
                                        setOpen={setOpen}
                                    />
                                    <RewardBankForm setStep={setStep} />
                                </> 
                                    : step === 3 ? <>
                                        <AlertSectionTitle 
                                            title={`Are you sure ?`}
                                            titleClassName="text-[#FF4040]"
                                            content="You want to redeem 100 $."
                                            setOpen={setOpen}
                                        />
                                        <Confirm type="reward_confirm" setStep={setStep} />
                                    </> 
                                        : step === 4 ? <>
                                            <AlertSectionTitle 
                                                title={`Successful !!`}
                                                titleClassName="text-[#46B241]"
                                                content="Your redeem request has been send. Please 
                                                wait for confirmation"
                                                setOpen={setOpen}
                                            />
                                            <div className=" flex items-center justify-center pb-4">
                                                <Avatar src="/auth_user/check.gif" 
                                                    className='!max-w-[220px] h-auto' />
                                            </div>
                                            <Button 
                                                label="Close"
                                                handleClickFunc={() => handleFinishPayment()}
                                            />
                                        </> : ''
                    } 
                </AlertDialogHeader>  
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ClaimRewardsModal
