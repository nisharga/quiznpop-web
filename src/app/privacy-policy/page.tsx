import { Slider } from '@/components'
import { PRIVACY_POLICY } from '@/static'
import React from 'react' 

const imageList = [
    PRIVACY_POLICY?.imageList.imageOne,
    PRIVACY_POLICY?.imageList.imageTwo,
    PRIVACY_POLICY?.imageList.imageThree,
    PRIVACY_POLICY?.imageList.imageFour,
]

const page = () => { 
    return (
        <div className='pb-[80px] xl:pb-[200px] pt-16'>
            <div className="container mb-12">
                <div className="flex flex-col xl:flex-row items-center justify-between mb-8 gap-4">
                    <h4 data-testid="privacy-title">{PRIVACY_POLICY.title}</h4>
                    <p className='lg:w-[400px] text-center xl:text-right'
                        data-testid="privacy-content">
                        {PRIVACY_POLICY.content}
                    </p>
                </div>
            </div>
            <div className="container"> 
                <div className="grid grid-cols-12 gap-6 h-full">
                    <div className="hidden xl:block col-span-12 lg:col-span-6 h-full order-2 
                    lg:order-1 lg:py-20 lg:mr-5"> 
                        <Slider imageList={imageList} type='left' />
                    </div> 
                    <div className="col-span-12 xl:col-span-6 h-full order-1 
                    lg:order-2">
                        {PRIVACY_POLICY.policyList?.map(
                            ({ id, title, content }) => 
                                <div key={id}>
                                    <div className='mb-4 flex items-center gap-2'>
                                        <span className='w-2 h-2 bg-first-200 rounded-full 
                                        block' />
                                        <h3 
                                            data-testid="privacy-item-title">{title}</h3>
                                    </div>
                                    <div className='mb-4 flex gap-2 items-start justify-start 
                                    ml-4'>
                                        <span className='min-w-1.5 min-h-1.5 bg-first-200 
                                        rounded-full block mt-2.5' />
                                        <p className='font-light'
                                            data-testid="privacy-item-content">{content}</p>
                                    </div>
                                </div>
                        )}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default page