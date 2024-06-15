import React from 'react';

interface CardInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardInput: React.FC<CardInputProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className="w-full mt-2 p-2 border rounded"
        />
    );
};

export default CardInput;
