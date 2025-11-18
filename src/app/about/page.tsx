import { DownloadButtons, Slider } from '@/components'
import { ABOUT_US_PAGE } from '@/static'
import React from 'react' 

const imageList = [
    ABOUT_US_PAGE?.imageList.imageOne,
    ABOUT_US_PAGE?.imageList.imageTwo,
    ABOUT_US_PAGE?.imageList.imageThree,
    ABOUT_US_PAGE?.imageList.imageFour,
]

const page = () => { 
    return (
        <div className='pb-[80px] lg:pb-[200px] pt-16'>
            <div className="container"> 
                <h4 className='mb-2 sm:mb-[70px] lg:mb-6'
                    data-testid="about-page-title">{ABOUT_US_PAGE.title}</h4> 
                <div className="grid grid-cols-12 gap-6 h-full">
                    <div className="col-span-12 lg:col-span-6 h-full order-2 
                    lg:order-1">
                        <p className='mb-6 sm:mt-[220px] lg:mt-0'
                            data-testid="about-page-content">{ABOUT_US_PAGE.content}</p>
                        <h3 className='mb-6'>Download App</h3> 
                        <DownloadButtons />
                    </div> 
                    <div className="hidden sm:block col-span-12 lg:col-span-6 h-full order-1 
                    lg:order-2"> 
                        <Slider imageList={imageList} />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default page