import { Avatar } from '@/components'
import { LATEST_BLOG } from '@/static'
import Link from 'next/link'
import React from 'react'

const SkeletonLoader = () => 
    <div className="grid grid-cols-12 gap-2 bg-gray-200 p-3 rounded-xl animate-pulse">
        <div className="col-span-3 sm:col-span-2 py-2 relative">
            <div className="bg-gray-300 h-full w-[64px] lg:w-[84px] lg:h-[56px] rounded-md"></div>
        </div>
        <div className="col-span-9 sm:col-span-10">
            <div className="flex items-center justify-between mb-1 pr-4">
                <div className="bg-gray-300 h-4 w-3/4 rounded-md"></div>
                <div className="bg-gray-300 h-4 w-1/4 rounded-md"></div>
            </div>
            <div className="bg-gray-300 h-4 w-5/6 rounded-md"></div>
            <div className="bg-gray-300 h-4 w-1/4 mt-2 rounded-md"></div>
        </div>
    </div>
  

const BlogList = ({ type }: {type?: string}) => {
    const isLoading = false;
    return (
        <div className='flex flex-col gap-4'>
            {isLoading ?  
                Array(3).fill(0).map((_, index) => <SkeletonLoader key={index} />)
                :  
                LATEST_BLOG?.map(({ id, title, content, thumb, time }) => 
                    <div key={id}>
                        <div className="grid grid-cols-12 gap-2 bg-purple-50 p-3 
                        rounded-xl hover:bg-purple-500 hover:text-white group 
                        transition-colors duration-300">
                            <div className="col-span-3 sm:col-span-2 py-2 relative">
                                <Avatar
                                    data-testid="blog-list-avatar"
                                    src={thumb}
                                    className={`h-full object-cover ${type === 'left-avatar' ? 
                                        `lg:absolute lg:-left-12 w-[64px] lg:min-w-[84px] 
                                    lg:min-h-[56px] top-0.5` : ''}`}
                                />
                            </div>
                            <div className="col-span-9 sm:col-span-10">
                                <div className="flex items-center justify-between mb-1 pr-4">
                                    <h3 className='text-base font-medium 
                                 group-hover:text-white'
                                    data-testid="blog-list-title">{title}</h3>
                                    <p className='text-xs text-first-100
                               group-hover:text-white'
                                    data-testid="blog-list-time">{time}</p>
                                </div>
                                <p className='font-light text-sm group-hover:text-white'
                                    data-testid="blog-list-content">
                                    {content
                                        ?.split(' ')
                                        ?.slice(0, 10)
                                        ?.join(' ')}
                                    <Link
                                        data-testid="blog-list-link"
                                        href={`/news/${id}`}
                                        target='_self'
                                        className='font-semibold group-hover:text-white text-sm 
                                        ml-1'> 
                                        READ MORE
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default BlogList