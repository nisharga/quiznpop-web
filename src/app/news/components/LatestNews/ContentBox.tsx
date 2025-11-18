import Link from 'next/link';
import React from 'react'

interface IProps{
  title: string;
  content: string;
  time: string;
  id: number;
  type?: string;
  className?: string;
}
const ContentBox = ({ title, content, time, id, type, className, ...props }: IProps) => {
    return (
        <div {...props}>
            <div className={`bg-white/20 py-1 px-2.5 inline-block rounded-[8px] mb-2 ${className}`}>
                <p className="text-sm font-medium text-white"
                    data-testid="latest-news-box-time">{time}</p>
            </div>
            <h3 className='text-white mb-1'
                data-testid="latest-news-box-title">{title}</h3>
            <p className='text-white font-light'
                data-testid="latest-news-box-content">
                {content?.split(' ')?.slice(0, 25)?.join(' ')}
            </p>
            {
                type === 'full' && <Link
                    data-testid="latest-news-box-link"
                    href={`/news/${id}`}
                    target='_self'
                    className='font-semibold text-white text-sm cursor-pointer'
                >
          READ MORE
                </Link>
            }
        </div>
    )
}

export default ContentBox