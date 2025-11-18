import React from 'react'

const CardSkeleton = () => {
    return (
        <div className="relative col-span-12 sm:col-span-6 lg:col-span-4 min-h-[456px] 
        w-full rounded-xl overflow-hidden bg-gray-300 animate-pulse">
            <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="h-8 bg-gray-200 w-3/4 mb-2"></div>
                <div className="h-6 bg-gray-200 w-5/6"></div>
            </div>
        </div>
    )
}

export default CardSkeleton