'use client';  
import { Avatar, RoundedBtn } from '@/components'; 
import { TRENDING } from '@/static';
import { settings } from '@/utils';  
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SliderArrow from './SliderArrow';

const TrendingBlog = () => { 
 
    const sliderRef = useRef<Slider | null>(null);

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    return (
        <div className='mb-6'>
            <div className='container'>
                <h4 className='mb-8'
                    data-testid="treading-news-section-title">Trending News</h4>
                <div className='grid grid-cols-12 gap-4 rounded-3xl'>     
                    <div className='col-span-12'> 
                        <Slider ref={sliderRef} {...settings}>
                            {TRENDING?.map(
                                ({ id, title, content, thumb }) => 
                                    <div
                                        className='h-full pr-2'
                                        key={id}
                                        data-aos='fade-down'
                                    >
                                        <div className='bg-white dark:!bg-main-600 rounded-2xl 
                                        h-full'>
                                            <div className='grid grid-cols-12 gap-4'>
                                                <div className='col-span-12 sm:col-span-4'>
                                                    <Avatar src={thumb} className='w-full h-full' 
                                                        data-testid="treading-news-item-avatar"/>
                                                </div>
                                                <div className='col-span-12 sm:col-span-8'>
                                                    <h3 className='mb-2 text-lg'
                                                        data-testid="treading-news-item-title">
                                                        {title}
                                                    </h3>
                                                    <p className='mb-4'
                                                        data-testid="treading-news-item-content">
                                                        {content
                                                            ?.split(' ')
                                                            ?.slice(0, 24)
                                                            ?.join(' ')}
                                                    </p>
                                                    <RoundedBtn
                                                        data-testid="treading-news-item-button" 
                                                        href={`/news/${id}`}
                                                        className='bg-purple-500 text-sm 
                                                    py-2 rounded-xl'>
                                                    Read More
                                                    </RoundedBtn>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                            )}
                        </Slider>
                    </div> 
                    <SliderArrow prevSlide={prevSlide} nextSlide={nextSlide} />
                </div>
            </div>
        </div>
    );
};

export default TrendingBlog;
