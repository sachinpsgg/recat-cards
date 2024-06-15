import { useState, useEffect } from 'react';
import { getCards } from '../api/getCards'
import {cardType} from "../types/cardType";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const useGetCards = () => {
    const [cards, setCards] = useState<cardType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const data = await getCards();
                setCards(data.data[0]);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchCards();
    }, [cards]);

    const editCard = async (id: number, newTitle: string) => {
        try {
            const data = await getCards();
            setCards(data.data[0]);
            toast.success('Card updated successfully!');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.message);
            } else {
                toast.error("Unable to Edit")
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    const deleteCard = async (id: number) => {
        try {
            const data = await getCards();
            setCards(data.data[0]);
            toast.info('Card deleted successfully!');
        }catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.message);
            } else {
                toast.error("Unable to Delete");
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };
    return { cards ,loading, error, editCard , deleteCard  };
};

export default useGetCards;
