import React from 'react';

interface CardTextProps {
    label: string;
    value: string;
}

const CardText: React.FC<CardTextProps> = ({ label, value }) => {
    return (
        <p className="text-gray-700 mt-2">{label}: {value}</p>
    );
};

export default CardText;
