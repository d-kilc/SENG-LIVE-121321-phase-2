function ToyCard(props) {
    return(
      <div key={props.id}>
        <h1>{props.name}</h1>
        <img style={{width: "100%"}} src={props.image}/>
        <h4>Likes: {props.likes}</h4>
      </div>
    )
}

export default ToyCard