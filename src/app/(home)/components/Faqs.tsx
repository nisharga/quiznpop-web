import { FAQS } from '@/static'
import React from 'react' 
 
const Dot = () => {
    return (
        <div className="w-[12px] h-[12px] bg-purple-200 rounded-full -right-[80px] 
        top-[50px] sm:top-[58px] z-50 flex items-center justify-center">
            <div className="w-[5px] h-[5px] bg-purple-500 rounded-full flex items-center 
            justify-center  animate-ping">  
            </div>
        </div>
    )
}

interface IProps{
    title: string;
    content: string;
}
const FaqItem = ({ title, content }: IProps) => {
    return (
        <div className="col-span-12 lg:col-span-6 p-4 lg:p-8">
            <div className="flex gap-4 items-center mb-4"> 
                <Dot /> 
                <p className='font-medium' data-testid="faq-item-title">{title}</p>
            </div>
            <p className='text-light text-sm' data-testid="faq-item-content">{content}</p>
        </div>
    )
}

const Faqs = () => {
    return (
        <div className='pb-28'>
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-4 relative center">
                        <div className="">
                            <h4 className='mb-4 text-center lg:text-left'
                                data-testid="faq-title">{FAQS.title}</h4>  
                            <p className='text-medium'
                                data-testid="faq-subtitle">{FAQS.content}</p>
                        </div>
                        <div className="hidden lg:block absolute bg-purple-500 h-[100%] 
                        w-[2px] right-0 top-0 ml-12 sm:ml-12"></div>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="grid grid-cols-12">
                            {FAQS.faqLists.map(
                                ({ id, title, content }) => 
                                    <FaqItem key={id} title={title} content={content}/> 
                            )}
                        </div> 
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Faqs