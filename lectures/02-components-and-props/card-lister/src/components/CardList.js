import Card from './Card'

function CardList(props) {
    return (
        <div className="card-list">
            <br />
            {props.cards.map((card) => {
                return <Card key={card.id} title={card.title} content={card.content} />
            })}
        </div>
    )
}

export default CardList