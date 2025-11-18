import { TESTIMONIAL } from '@/static'
import React from 'react' 
import TestimonialItems from './TestimonialItems'
import { RoundedBtn } from '@/components'

const Testimonial = () => {
    return (
        <div className='pb-28'>
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4">
                    <h4 data-testid="testimonial-title">{TESTIMONIAL.title}</h4>
                    <p className='lg:w-[400px] text-center lg:text-right'
                        data-testid="testimonial-content">{TESTIMONIAL.content}</p>
                </div>
                <div className="grid grid-cols-12 gap-6 mb-8"> 
                    {TESTIMONIAL.testimonialList.map(
                        ({ id, avatar, name, position, content }) => 
                            <TestimonialItems key={id} avatar={avatar} 
                                name={name} position={position} content={content}/> 
                    )} 
                </div>
                <div className="flex  items-center justify-center gap-4">
                    <RoundedBtn 
                        href={'/'}
                        className={` flex items-center justify-center 
                            gap-2 pl-4 pr-5 !rounded-[8px] !text-sm bg-transparent 
                            border border-purple-500 !text-purple-500 !py-3.5 
                            !px-12 hover:bg-purple-500 hover:!text-white`}
                    > 
                        Explore More
                    </RoundedBtn>
                </div>
            </div>
        </div>
    )
}

export default Testimonial