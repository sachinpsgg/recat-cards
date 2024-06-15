import axios from 'axios';

export const getCards = async () => {
    const response = await axios.get(`https://run.mocky.io/v3/2b4b6e49-1fcf-4366-9f51-18743bde102f`);
    return response.data;
};
