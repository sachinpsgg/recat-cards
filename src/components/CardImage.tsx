import React from 'react';

interface CardImageProps {
    src: string;
    alt: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
    return (
        <img className="h-full w-80 object-cover rounded-md" src={src} alt={alt} />
    );
};

export default CardImage;
