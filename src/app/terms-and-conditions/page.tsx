import { Slider } from '@/components'
import { PRIVACY_POLICY, TERMS_AND_CONDITIONS } from '@/static'
import React from 'react' 

const imageList = [
    TERMS_AND_CONDITIONS?.imageList.imageOne,
    TERMS_AND_CONDITIONS?.imageList.imageTwo,
    TERMS_AND_CONDITIONS?.imageList.imageThree,
    TERMS_AND_CONDITIONS?.imageList.imageFour,
]

const page = () => { 
    return (
        <div className='pb-[80px] xl:pb-[200px] pt-16'>
            <div className="container mb-12">
                <div className="flex flex-col xl:flex-row items-center justify-between mb-8 gap-4">
                    <h4
                        data-testid="terms-condition-title">{TERMS_AND_CONDITIONS.title}</h4>
                    <p 
                        data-testid="terms-condition-content"
                        className='lg:w-[400px] text-center xl:text-right'>
                        {TERMS_AND_CONDITIONS.content}
                    </p>
                </div>
            </div>
            <div className="container"> 
                <div className="grid grid-cols-12 gap-6 h-full"> 
                    <div className="col-span-12 xl:col-span-6 h-full order-2 
                    lg:order-1">
                        {PRIVACY_POLICY.policyList?.map(
                            ({ id, title, content }) => 
                                <div key={id} className='mb-5'>
                                    <div className='mb-4'> 
                                        <h3 data-testid="terms-condition-item-title">{title}</h3>
                                    </div>
                                    <div className='mb-4'> 
                                        <p data-testid="terms-condition-item-content"
                                            className='font-light'>{content}</p>
                                    </div>
                                </div>
                        )}
                    </div> 

                    <div className="hidden xl:block col-span-12 lg:col-span-6 h-full order-1 
                    lg:order-2 lg:py-20 lg:mr-5"> 
                        <Slider imageList={imageList} type='left' />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default page