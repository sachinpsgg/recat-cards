import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Button from './Button';
import CardImage from './CardImage';
import CardText from './CardText';
import CardInput from './CardInput';

interface CardProps {
    id: number;
    name: string;
    created_at: string;
    content: string;
    author: string;
    status: string;
    image: string;
    onEditClick: (id: number, newTitle: string) => Promise<void>;
    onDeleteClick: (id: number) => Promise<void>;
}

const Card: React.FC<CardProps> = ({
                                       id,
                                       name,
                                       created_at,
                                       content,
                                       author,
                                       status,
                                       image,
                                       onEditClick,
                                       onDeleteClick,
                                   }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(name);
    const [loading, setLoading] = useState(false);

    const handleEditClick = async () => {
        if (isEditing) {
            setLoading(true);
            await onEditClick(id, newTitle);
            setLoading(false);
        }
        setIsEditing(!isEditing);
    };

    const handleDeleteClick = async () => {
        setLoading(true);
        await onDeleteClick(id);
        setLoading(false);
    };

    return (
        <div className="relative w-90 h-full gap-5  bg-white shadow-md rounded-lg p-4 mb-4 ">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                    <ClipLoader size={40} color="#000" />
                </div>
            )}
            <div className={`${loading ? 'opacity-50' : 'opacity-100'} transition-opacity`}>
                <CardImage src={image} alt={name} />
                {isEditing ? (
                    <CardInput value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                ) : (
                    <h2 className="text-xl font-bold mt-2">Name: {name}</h2>
                )}
                <CardText label="Code" value={content} />
                <CardText label="Created Time" value={created_at} />
                <CardText label="Author" value={author} />
                <CardText label="Status" value={status} />
                <div className="mt-4 flex justify-between">
                    <Button
                        onClick={handleEditClick}
                        label={isEditing ? 'Save' : 'Edit'}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        disabled={loading}
                    />
                    <Button
                        onClick={handleDeleteClick}
                        label="Delete"
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        disabled={loading}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
