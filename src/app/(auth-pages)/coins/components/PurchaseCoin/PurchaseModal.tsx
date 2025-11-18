'use client'
import React, { useState } from 'react'
import {
    AlertDialog, AlertDialogContent, AlertDialogHeader,  AlertDialogTrigger,
} from "@/components/ui/alert-dialog" 
import { AlertSectionTitle, Button } from '@/components/shared'  
import { useStoreState } from '@/store'
import PaymentType from './PaymentType'
import { BankPayment, CardPayment } from '@/app/(auth-pages)/components'
import { Avatar } from '@/components'
import { useRouter } from 'next/navigation'

interface IProps{
    coin: number;
    price: number;
}
const PurchaseModal = ({ coin, price }: IProps) => {
    const [open, setOpen] = useState(false);
    const { setCart, getCart, paymentType, reset, step, setStep } = useStoreState();   
    const router = useRouter(); 
    const handleFinishPayment = () => { 
        router.push('/rewards');
        setOpen(false);
        reset();
    }
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild className=''>
                <button className='bg-purple-500 hover:bg-purple-400 
            text-white py-1.5 px-4 rounded-lg text-right'
                data-testid="coin-buy-now-button"
                onClick={() => setCart(coin, price)}
                > Buy Now </button> 
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    {
                        step === 1 ? <>
                            <AlertSectionTitle 
                                title="Purchase Coin"
                                content="Please select Payment method."
                                setOpen={setOpen}
                            />
                            <PaymentType setStep={setStep}/>
                        </> : 
                            step === 2 && paymentType === 'card' ? <>
                                <AlertSectionTitle 
                                    title={`Purchase ${getCart().coin} Coin for
                                    ${getCart().price}$`}
                                    content="Please enter your card details."
                                    setOpen={setOpen}
                                />
                                <CardPayment />
                            </> 
                                : step === 2 && paymentType === 'bank' ? <>
                                    <AlertSectionTitle 
                                        title={`Purchase ${getCart().coin} Coin for 
                                        ${getCart().price}$`}
                                        content="Please enter your card details."
                                        setOpen={setOpen}
                                    />
                                    <BankPayment setStep={setStep}/>
                                </> 
                                    : step === 3 ? <>
                                        <AlertSectionTitle 
                                            title={`Successful !!`}
                                            content="Your Purchase request has been send. 
                                            Please wait for confirmation"
                                            setOpen={setOpen}
                                        />
                                        <div className=" flex items-center justify-center pb-4">
                                            <Avatar src="/auth_user/check.gif" 
                                                className='!max-w-[220px] h-auto' />
                                        </div>
                                        <Button 
                                            label="Complete"
                                            handleClickFunc={() => handleFinishPayment()}
                                        />
                                    </> : ''
                    } 
                </AlertDialogHeader>  
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default PurchaseModal
