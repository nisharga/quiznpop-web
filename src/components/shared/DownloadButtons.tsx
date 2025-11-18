import { RoundedBtn } from '@/components'
import { DOWNLOAD_BUTTONS } from '@/static'
import React from 'react'

const DownloadButtons = ({ type }: {type?: 'horizontal' | 'vertical'}) => {
    return (
        <div className={`flex ${type && type === 'horizontal' ? 'flex-col' : ''} 
        gap-4 mb-10`} data-testid="download-buttons">
            {DOWNLOAD_BUTTONS.map(
                ({ id, route, label, icon }) => 
                    <RoundedBtn
                        key={id}
                        href={route}
                        className={` flex items-center justify-center gap-2 pl-4 pr-5 
                            !rounded-[8px] !text-sm
                    ${id === 1
            ? 'bg-purple-500'
            : 'bg-transparent border border-purple-500'} `}
                    >
                        {icon}
                        <span className={`flex flex-col ${id == 2 ? 'text-purple-500' : ''}`}>
                            <span className='text-[10px] md:text-xs text-center'>
                    DownLoad On
                            </span>
                            <span className='text-sm md:text-base font-medium 
                            text-center -mt-1'>{label}</span>
                        </span>
                    </RoundedBtn>
    
            )}
        </div>
    )
}

export default DownloadButtons