import { Icons } from '@/components'
import React from 'react'

interface IProps {
    prevSlide: () => void;
    nextSlide: () => void;
}
const SliderArrow = ({ prevSlide, nextSlide }: IProps) => {
    return (
        <div className='col-span-12'>
            <div className='flex items-center justify-end gap-4 p-4'>
                <Icons.LongArrow
                    className='rotate-180 cursor-pointer hover:fill-gray-700'
                    onClick={prevSlide}
                />
                <Icons.LongArrow
                    className='cursor-pointer hover:fill-gray-700 '
                    onClick={nextSlide}
                />
            </div>
        </div>
    )
}

export default SliderArrow