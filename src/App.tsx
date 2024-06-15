import React from 'react';
import useGetCards from "./hooks/useGetCards";
import {cardType} from "./types/cardType";
import Card from "./components/Card";


const App: React.FC = () => {
  const { cards,loading, error, editCard , deleteCard} = useGetCards();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 w-full h-full justify-center items-center">
        {cards.map((card:cardType , key)=>(
            <Card
                key={card.id}
                id={card.id} name={card.name}
                created_at={card.created_at}
                content={card.content}
                author={card.author}
                status={card.status}
                image={card.image}
                onEditClick={editCard}
                onDeleteClick={deleteCard}
            />
        ))}
      </div>
  );
};

export default App;

// {cards.map((card:cardType , key)=>(
//     <h1 key={card.id}>{card.name}</h1>
// ))}
