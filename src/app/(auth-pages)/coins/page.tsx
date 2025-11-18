import React from 'react'  
import { PurchaseCoin, TransferLog } from './components'

const page = () => {
    return (
        <div>
            <h4 className='mb-8'
                data-testid="coin-title">Coins</h4>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-8">
                    <TransferLog />
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <PurchaseCoin />
                </div>
            </div>
        </div>
    )
}

export default page