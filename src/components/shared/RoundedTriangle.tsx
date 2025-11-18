import React from 'react'

const RoundedTriangle = ({ className }: {className?: string}) => {
    return (
        <div className={`w-20 h-20 bg-purple-200 rounded-tl-[12px] rounded-tr-[12px]
    rounded-br-[12px] rounded-bl-[12px] ${className}`}>
        </div>
    )
}

export default RoundedTriangle