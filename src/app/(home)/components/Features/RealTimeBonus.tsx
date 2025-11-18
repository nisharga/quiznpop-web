import { Avatar } from '@/components'
import { FEATURES } from '@/static'
import React, { JSX } from 'react'

type IProps = { 
    icon: JSX.Element;
    name: string;
    price: number;
    position: string;
};
const BonusCard = ({ icon, name, price, position }: IProps) => {
    return (
        <div 
            data-testid="real-time-bonus-card"
            className={`absolute bg-white py-1 px-2 rounded-2xl 
            flex items-center justify-between gap-4 
            ${position === 'top' ? '-right-16 top-0' :
            position === 'bottom' ? '-right-4 -bottom-4' : '-left-20 lg:-left-24 bottom-16'}`}>
            <div className="w-6 h-6 bg-[#e6d8fc] rounded-full center"
                data-testid="real-time-bonus-icon"
            >
                {icon}
            </div>
            <div >
                <p className="text-purple-500 text-sm font-medium">{name}</p>
                <p className="text-purple-500 text-sm font-medium">+{price}$</p>
            </div>
        </div>
    )
}

const RealTimeBonus = () => {
    return (
        <div 
            className='bg-first-500 p-4 md:p-8 rounded-xl'>
            <h2
                data-testid="real-time-bonus-title"
                className='mb-4'>{FEATURES.realTimeBonus.title}</h2>
            <p className='font-light'>{FEATURES.realTimeBonus.content}</p>
            <div className="flex items-center justify-center mt-8 mb-5">
                <div className="h-[180px] w-[180px] border border-dashed border-[#757575] 
                rounded-full flex items-center justify-center relative">
                    <div className="w-16 h-16">
                        <Avatar 
                            data-testid="real-time-bonus-avatar"
                            src={FEATURES.realTimeBonus.image} className='w-full h-full'/>
                    </div>
                    {FEATURES.realTimeBonus?.bonusList?.map(
                        ({ id, name, price, icon, position }) => 
                            <BonusCard key={id} icon={icon} name={name} price={price} 
                                position={position}/> 
                    )}
                </div>
            </div>
        </div>
    )
}

export default RealTimeBonus