import { HERO } from '@/static'
import React from 'react'
import { AchievementList, HeroImages, HeroSlogan } from '.'
import { DownloadButtons } from '@/components'

const HeroArea = () => {
    return (
        <div className='py-28'>
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6">
                        <HeroSlogan title={HERO.title} subtitle={HERO.subtitle} />
                        <DownloadButtons />
                        <AchievementList />
                    </div>
                    <div className="col-span-12 lg:col-span-6 mt-6">
                        <HeroImages />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroArea