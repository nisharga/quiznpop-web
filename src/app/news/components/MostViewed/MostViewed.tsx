"use client" 
import { LATEST_NEWS } from '@/static'
import React, { useRef } from 'react' 
import SingleItem from './SingleItem';
import Slider from 'react-slick';
import { mostViewSliderSettings } from '@/utils';

const MostViewed = () => {
    const sliderRef = useRef<Slider | null>(null);
    return ( 
        <div className='mb-20'>
            <div className='container'>
                <h4 className='mb-8'
                    data-testid="most-view-section-title">Most Viewed</h4>
                <div className='' >   
                    <Slider ref={sliderRef} {...mostViewSliderSettings}>  
                        {LATEST_NEWS?.map(
                            ({ id, title, content, thumb, time }) => 
                                <div className="p-3" key={id}>
                                    <SingleItem 
                                        title={title}
                                        content={content}
                                        time={time}
                                        id={id}
                                        thumb={thumb}  
                                    />
                                </div>
                    
                        )}
                    </Slider>
                </div>
            </div>
        </div> 
    )
}

export default MostViewed