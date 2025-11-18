import { RoundedBtn } from '@/components'
import { FEATURES } from '@/static'

const WithdrawBonus = () => {
    return (
        <>
            <div className='bg-first-500 p-4 md:p-8 rounded-xl mb-5'>
                <div className="mb-6">
                    <div className="flex items-center justify-between my-8 relative">
                        <div className="hidden lg:block w-[80px] border-2 border-dashed 
                        border-[#757575] absolute left-[50px] transform rotate-45"></div> 
                        <div className="hidden lg:block w-[90px] border-2 border-dashed 
                        border-[#757575] absolute right-[170px] transform -rotate-45"></div>
                        <div className="hidden lg:block w-[80px] border-2 border-dashed 
                        border-[#757575] absolute right-[50px] transform rotate-45"></div>
                        {FEATURES.withdraw.process?.map(
                            ({ id, icon }) => 
                                <div 
                                    data-testid="withdraw-icon"
                                    className={`w-[56px] h-[56px] rounded-xl shadow-lg 
                                    center ${id % 2 !== 0 ? '-mt-20' : 'mt-20'} z-50`} key={id}>
                                    {icon}
                                </div>
                        )}
                    </div>
                </div>
                <h2 
                    data-testid="withdraw-title"
                    className='mb-4'>{FEATURES.withdraw.title}</h2>
                <p className='font-light'>{FEATURES.withdraw.content}</p>
            </div>
            <div className="flex gap-4 mb-10">
                {FEATURES?.withdraw?.buttons?.map(
                    ({ id, route, label }) => 
                        <RoundedBtn
                            key={id}
                            href={route}
                            className={`center gap-2 pl-4 pr-5 !rounded-[8px] !text-sm
                    ${id === 1 ? 'bg-purple-500'
            : 'bg-transparent borderborder-purple-500'} `}
                        >
                        
                            <span className={`flex flex-col ${id == 2 ? 'text-purple-500' : ''}`}>
                                <span className='text-xs md:text-sm font-medium text-center'>
                                    {label}
                                </span>
                            </span>
                        </RoundedBtn>
    
                )}
            </div>
        </>
    )
}

export default WithdrawBonus