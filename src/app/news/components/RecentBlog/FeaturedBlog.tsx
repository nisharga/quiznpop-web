import { Avatar, RoundedBtn } from '@/components'
import { LATEST } from '@/static'
import React from 'react'

const FeaturedBlog = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-6">
                    <Avatar src={LATEST.thumb} className='w-full h-full object-cover' 
                        data-testid="feature-blog-avatar" />
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <h2 className='mb-4'
                        data-testid="feature-blog-title">{LATEST.title}</h2>
                    <p className='font-light mb-4'
                        data-testid="feature-blog-content">{LATEST.content}</p>
                    <RoundedBtn 
                        data-testid="feature-blog-link"
                        href={`/news/${LATEST.id}`}
                        className='bg-purple-500 text-sm 
                    py-2 rounded-xl'>
                    Read More
                    </RoundedBtn>
                </div>             
            </div>
        </div>
    )
}

export default FeaturedBlog