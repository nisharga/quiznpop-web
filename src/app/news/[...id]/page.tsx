import React from 'react'  
import { BlogSingle, CommentList, DownloadAds } from './components'
import { BlogList, MostViewed, TrendingBlog } from '../components'

const page = () => {
    return ( 
        <div className='pt-16'>
            <div className="container mb-12">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-8 lg:pr-4">
                        <BlogSingle />
                        <CommentList />
                    </div>        
                    <div className="col-span-12 lg:col-span-4">
                        <DownloadAds />
                        <BlogList />
                    </div>        
                </div>
            </div>
            <div className="mb-12 lg:mb-24">
                <TrendingBlog />
                <MostViewed />
            </div>
        </div> 
    )
}

export default page