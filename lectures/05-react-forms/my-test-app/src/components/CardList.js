import Card from './Card';

// Will accept an array of Card objects as props
function CardList({ cards}) {
    // cards => props object
    // { cards } => props.cards

    return (
        <div className="card-list">
            {/* Avoid direct state mutation using spread operator */}
            {[...cards].reverse().map(card => {
                return (
                    <Card 
                        key={card.id} 
                        title={card.title} 
                        content={card.content} 
                    />
                );
            })}
        </div>
    );
}

export default CardList;