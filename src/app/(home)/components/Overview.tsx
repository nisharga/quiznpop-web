'use client' 
import { DOWNLOAD } from '@/static';
import { AnimatedCounter } from './HeroArea/AchievementList';
 
const Overview = () => {
    return (
        <div className='pb-28'>
            <div className="container"> 
                <div className="grid grid-cols-12 gap-6"> 
                    {DOWNLOAD.achievements?.map(({ id, icon, quantity, quantityType, }) => 
                        <div className={`col-span-12 sm:col-span-6 lg:col-span-3 
                        flex items-center justify-center gap-4`} key={id}>
                            <div>{icon}</div> 
                            <div className="">
                                <AnimatedCounter count={quantity} type={quantityType} />
                                <p>App Download</p>
                            </div>
                        </div>)} 
                </div>
            </div>
        </div>
    )
}

export default Overview