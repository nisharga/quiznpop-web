import React from 'react'
import ModalHeader from './ModalHeader'
import { AlertDialogTitle } from '../ui/alert-dialog'
import { Icons } from '../Icons';
import { useRewardStore, useStoreState } from '@/store';

interface IProps{
    title: string;
    content?: string;
    titleClassName?: string;
    setOpen: (open: boolean) => void; 
}
const AlertSectionTitle = ({ title, content, titleClassName, setOpen }: IProps) => {
    const { reset } = useStoreState(); 
    const { resetReward } = useRewardStore(); 
    return (
        <AlertDialogTitle className='relative mb-6'>
            <div className="">
                <ModalHeader 
                    title={title} 
                    content={content}
                    titleClassName={titleClassName}
                />
            </div>
            <button onClick={() => {
                setOpen(false);
                reset();
                resetReward();
            }} 
            className='absolute right-0.5 top-0.5'>
                <Icons.X className='stroke-[#FF4040]'/>
            </button>
        </AlertDialogTitle> 
    )
}

export default AlertSectionTitle