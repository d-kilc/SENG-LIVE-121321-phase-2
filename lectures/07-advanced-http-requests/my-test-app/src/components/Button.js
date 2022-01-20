import { useEffect, useState } from 'react';

function Button({ handleRemoveCard, handleEditCard, card, name, toggleVisibility }) {
    const [ isToggled, setToggled ] = useState(false)

    // useEffect(() => {
    //     handleEditCard(card.id, isToggled)
    // }, [isToggled])

    function toggleButton() {
        // Toggle value of "isToggled" state
        setToggled(!isToggled)

        // If "toggleVisibility" is passed as a prop,
        // invoke the function to toggle the "isVisible"
        // state in Card.js 
        if (toggleVisibility) { toggleVisibility() };
    }

    if (name === "cart") {
        return (
            <button className="button" onClick={toggleButton}>
                { isToggled ? "Remove From Cart" : "Add to Cart" }
            </button>
        );
    } else if (name === "like") {
        return (
            // 🚧 Set handleEditCard() as onClick behavior
            // ❗ Remember to pass a function reference, not invocation
            <button className="button" onClick={() => {
                // setToggled(!isToggled)
                handleEditCard(card)
            }}>
                { card.liked ? '❤️' : '♡' }
            </button>
        );
    } else {
        return (
            <button className="button" onClick={() => handleRemoveCard(card.id)}>
                🗑️
            </button>
        );
    }
}

export default Button; 