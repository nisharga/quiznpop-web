import { HOW_TO_PLAY } from '@/static'
import React from 'react' 
import { PlayAvatar, ProcessList } from '.'

const HowToPlay = () => {
    return (
        <div className='pb-28'
            data-testid="how-to-play">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-6 gap-4">
                    <h4>{HOW_TO_PLAY.title}</h4>
                    <p className='lg:w-[400px] text-center lg:text-right'>{HOW_TO_PLAY.content}</p>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-4">
                        <PlayAvatar />
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <ProcessList />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default HowToPlay