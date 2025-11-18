import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

interface IConfirmation{
    setIsSubmitted: Dispatch<SetStateAction<boolean>>
}
const ConfirmationText = ({ setIsSubmitted }: IConfirmation) => {
    return (
        <div className='min-h-[300px] flex items-center justify-center p-6'>
            <div className='w-full max-w-md transform transition-all'>
                <div className='rounded-lg bg-white p-6  dark:bg-slate-900'>
                    <div className='flex flex-col items-center space-y-4 text-center'>
                        <div className='rounded-full bg-green-100 p-3 
                        dark:bg-green-900/20'>
                            <CheckCircle2 className='h-8 w-8 text-green-600 
                            dark:text-green-400' />
                        </div>
                        <h3 className='text-2xl font-semibold text-slate-900 
                        dark:text-slate-100'>
                            Thank you!
                        </h3>
                        <p className='text-slate-600 dark:text-slate-300'>
                            Your message has been successfully sent. We
                            will get back to you soon!
                        </p>
                        <Button
                            onClick={() => setIsSubmitted(false)}
                            variant='outline'
                            className='mt-4 bg-purple-500 text-white'
                        >
                            Send another message
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationText