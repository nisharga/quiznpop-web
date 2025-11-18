import React from 'react'
import { FeaturedBlog, BlogList } from '.' 

const RecentBlog = () => {
    return (
        <div>
            <div className='pt-16'>
                <div className="container mb-12 lg:mb-24">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-8 lg:pr-4">
                            <FeaturedBlog />
                        </div>        
                        <div className="col-span-12 lg:col-span-4">
                            <BlogList type="left-avatar" />
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentBlog