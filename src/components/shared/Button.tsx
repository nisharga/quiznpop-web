import React from 'react';

interface IButtonProps {
    label: string;
    handleClickFunc: () => void;
    className?: string;
}

const Button: React.FC<IButtonProps> = ({ label, handleClickFunc, className }) => {
    return (
        <button 
            className={`bg-purple-500 hover:bg-purple-400 text-white py-1.5 
                lg:py-2.5 px-4 rounded-lg text-center ${className}`} 
            onClick={handleClickFunc}
        >
            {label}
        </button>
    );
};

export default Button;
