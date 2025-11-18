import React from 'react'

const AppScreenTitle = () => {
    return (
        <>
            <div className="block xs:hidden absolute bottom-[280px] left-[110px]">
                <h4>App Screen</h4>
            </div>

            <div className="hidden xs:flex lg:hidden flex-row items-center justify-center 
            !h-full w-full gap-2 pb-20 sm:pb-0">
                <h4>App</h4>
                <h4 className=''>Screen</h4>
            </div> 

            <div className="hidden lg:flex gap-4 flex-col xl:flex-row items-center justify-center 
            !h-full w-full"><h4>App Screen</h4></div>
        </>
    )
}

export default AppScreenTitle