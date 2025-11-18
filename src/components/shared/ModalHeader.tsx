import React from 'react'

interface IProps{
    title: string;
    content?: string;
    titleClassName?: string;
}
const ModalHeader = ({ title, content, titleClassName }: IProps) => {
    return (
        <div className="text-center">
            <h2 className={`font-semibold mb-4 ${titleClassName}`}>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default ModalHeader