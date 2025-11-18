import React from 'react'   
import { RewardCard, RewardTable } from './components'

const page = () => {
    return (
        <div>
            <h4 className='mb-8' data-testid="coin-title">Rewards</h4>
            <div className="mb-4">
                <RewardCard />
            </div>
            <div className="mb-4">
                <RewardTable />
            </div>
        </div>
    )
}

export default page