import Link from 'next/link';
import React, { FC, ReactNode, AnchorHTMLAttributes } from 'react';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    className?: string;
    href: string;
    target?: string;
}

const RoundedBtn: FC<IProps> = ({ children, className, href, target, ...props }) => {
    return (
        <Link
            {...props}
            href={href}
            target={target}
            className={`bg-base-200 text-white px-4 py-2.5 rounded-full font-medium 
                hover:scale-105 transition-all duration-300 ${className}`}
        >
            {children}
        </Link>
    );
};

export default RoundedBtn;
