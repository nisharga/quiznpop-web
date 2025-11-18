import { Icons } from '@/components'
import React from 'react'
import ClaimRewardsModal from './ClaimRewardsModal'

const RewardCard = () => {
    return (
        <div className="w-[286px] h-[168px] bg-card_main_bg bg-no-repeat bg-cover p-3 flex 
        flex-col justify-between">
            <div className="flex gap-1.5 items-center justify-between">
                <Icons.CardWhite className='w-6 h-6'/> 
                <p className='text-white font-medium'>Rewards</p>
            </div>
            <div className="flex items-end justify-between"> 
                <div className=""> 
                    <p className='text-white text-[13px] font-medium text-left'>Balance</p> 
                    <p className='text-white text-2xl font-medium -mt-1'>
                        <span className='text-xs mr-1'>$</span>{100}</p> 
                </div>
                <div className="mb-2">
                    <ClaimRewardsModal />
                </div>
            </div> 
        </div>
    )
}

export default RewardCard