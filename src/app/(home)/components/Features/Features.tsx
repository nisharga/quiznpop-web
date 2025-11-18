import { FEATURES } from '@/static'
import React from 'react'
import { Category, RealTimeBonus, PopAndMatch, WithdrawBonus } from '.'

const Features = () => {
    return (
        <div className='pb-28'>
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-4">
                    <h4  data-testid="features-title">{FEATURES.title}</h4>
                    <p 
                        data-testid="features-content"
                        className='lg:w-[400px] text-center lg:text-right'>{FEATURES.content}</p>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-5">
                        <RealTimeBonus />
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        <Category />
                    </div> 
                    <div className="col-span-12 lg:col-span-7">
                        <PopAndMatch />
                    </div> 
                    <div className="col-span-12 lg:col-span-5">
                        <WithdrawBonus />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features