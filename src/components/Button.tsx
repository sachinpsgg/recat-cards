import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    className: string;
    disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={className}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
