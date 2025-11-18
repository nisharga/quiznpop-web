import React from 'react' 
import { LatestNews, RecentBlog, TrendingBlog, MostViewed } from './components' 

const page = () => {
    return (
        <>
            <RecentBlog/>
            <LatestNews/>
            <TrendingBlog />
            <MostViewed />
        </>
    )
}

export default page