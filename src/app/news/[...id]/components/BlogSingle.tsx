import { Avatar, Icons } from '@/components'
import { BLOG_SINGLE } from '@/static'
import React from 'react'

const BlogSingle = () => {
    return (
        <div className='mb-8'>
            <div className="w-full h-[360px] rounded-xl mb-2.5">
                <Avatar src={BLOG_SINGLE.thumb} className='w-full h-full' 
                    data-testid="single-blog-thumb"/>
            </div>
            <div className="flex items-center justify-between mb-8">
                <p className='text-sm text-first-100 italic'
                    data-testid="single-blog-author-name">{BLOG_SINGLE.author.name}</p>
                <p className='text-sm text-first-100 italic'
                    data-testid="single-blog-date">{BLOG_SINGLE.author.date}</p>
            </div>
            <div className="mb-6">
                <h2 className='mb-4'
                    data-testid="single-blog-title">{BLOG_SINGLE.title}</h2>
                <p className='font-light mb-4'
                    data-testid="single-blog-content-one">{BLOG_SINGLE.content_one}</p>
                <div className="w-full h-[160px] rounded-xl mb-4">
                    <Avatar src={BLOG_SINGLE.image} className='w-full h-full' 
                        data-testid="single-blog-image"/> 
                </div>
                <p className='font-light'
                    data-testid="single-blog-content-two">{BLOG_SINGLE.content_two}</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-2"
                    data-testid="single-blog-like-count">
                    <Icons.Like /> <p className='text-first-100 font-light'>{BLOG_SINGLE.like}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {BLOG_SINGLE.tags?.map(({ id, label }) => { 
                        return (
                            <div className="py-1.5 px-2.5 border border-first-100 rounded
                        inline-block" key={id}>
                                <p className='text-sm font-light'
                                    data-testid="single-blog-keyword">{label}</p>
                            </div>
                        );
                    })} 
                </div>
            </div>
        </div>
    )
}

export default BlogSingle