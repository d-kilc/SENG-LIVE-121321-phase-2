// Accepts a Card object as a prop
import Button from './Button'
import { useState } from 'react'

function Card({ title, content="Add Some Content Here"}) {
    
    const [isAdded, setAdded] = useState(false)
    // const [isLiked, setLiked] = useState(false)
    //const [isVisible, toggleVisibility] = useState(true)

    const ColoredLine = ({ color }) => (
        <hr style={{
                color: color,
                backgroundColor: color,
                height: 2,
                width: "10rem"
        }} />
    )

    function handleCardInfo() {
        return (
            <>
            <h1>{title}</h1>
            <ColoredLine color="black" />
            <p>{content}</p>
            </>
        )
    }

    return (
        <div className="card">

            {/* Break Out Activity #1: Modify the onClick behavior of our Add to Cart <button> 
            to render only an H2 element saying “Added to Cart” in place of Card details. */}

            {/* Break Out Activity #2: Create a <Button /> Component to enable each Button to 
            manage its own isToggled state. 💡 To configure each <Button />, try passing a “name” 
            prop from Card.js */}
            { isAdded ? <h2>Added to Cart.</h2> : handleCardInfo() }
            <Button name='cart' toggleVisibility={setAdded} />
            <br />
            {/* <Button name='like' toggleVisibility={setLiked}/> */}
            <Button name='like'/>
        </div>
    );
}

export default Card; 