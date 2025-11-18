import { Avatar } from '@/components';
import { COMMENTS } from '@/static';
import React from 'react'

const CommentList = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 data-testid="single-blog-comment-title">Comments</h3>
                <p data-testid="single-blog-comment-subtitle">Newest first</p>
            </div>
            <div className="bg-[#C9C9C9] h-[1px] w-full mb-8 mt-1"></div>
            <div className="">
                {COMMENTS?.map(({ id, userAvatar, userName, date, comment }) => { 
                    return (
                        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4" 
                            key={id}>
                            <div className="flex gap-4 !min-w-[220px]">
                                <div className="w-12 h-12 rounded-full">
                                    <Avatar src={userAvatar} className='w-full h-full' 
                                        data-testid="single-blog-comment-avatar"/>
                                </div>
                                <div className="">
                                    <p className='font-medium'
                                        data-testid="single-blog-comment-username">{userName}</p>
                                    <p className='font-light text-sm text-first-100'
                                        data-testid="single-blog-comment-date">{date}</p>
                                </div>
                            </div>
                            <p className='font-light text-sm'
                                data-testid="single-blog-comment">{comment}</p>
                        </div>
                    );
                })} 
            </div>
        </div>
    )
}

export default CommentList