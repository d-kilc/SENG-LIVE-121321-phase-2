function Card({title, content="blank"}) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default Card