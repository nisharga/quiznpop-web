import { Avatar, DownloadButtons } from '@/components'
import Image from 'next/image'
import React from 'react'

const DownloadAds = () => {
    return (
        <div className='bg-purple-50 mb-5 rounded-xl p-10 min-h-[330px] flex flex-col 
    items-center justify-center relative'> 
            <Image src="/logo.svg" width={140} height={40} alt="logo" 
                className="mb-4" />
            <p className="mb-4 font-medium">Download App</p>
            <div className='w-40'>
                <DownloadButtons type="horizontal" />
            </div> 

            <Avatar src='/blog/single/1.png' className='absolute left-0 
        bottom-0  !w-[86px] h-[250px]' />
            <Avatar src='/blog/single/2.png' className='absolute left-0 
        bottom-0 !w-[166px] h-[100px]' />

            <Avatar src='/blog/single/3.png' className='absolute right-0 
        top-0 !w-[86px] h-[250px]' />
            <Avatar src='/blog/single/4.png' className='absolute right-0 
        top-0 !w-[196px] h-[100px]' />
        </div>
    )
}

export default DownloadAds