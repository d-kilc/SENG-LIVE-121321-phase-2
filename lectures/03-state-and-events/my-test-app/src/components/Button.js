// Break Out Activity #2: Create a <Button /> Component to enable each Button to 
// manage its own isToggled state. 💡 To configure each <Button />, try passing a 
// “name” prop from Card.js

import { useState } from 'react';
import Card from './Card'

function Button({ name, toggleVisibility }) {

    //initialize state
    const [isToggled, setToggled] = useState(false)

    //button click event handler
    function toggleButton() {
        // Use state setter function (setToggled) to switch "isToggled" state
        setToggled((prevState) => !prevState)

        // If "toggleVisibility" is passed as a prop,
        // invoke the function to toggle the "isVisible"
        // state in Card.js 
        //???
    }

    return (
        // <>...</> is shorthand for <React.Fragment></React.Fragment>
        <button className="button" onClick={toggleButton}>
            {name === "cart" ? 
                isToggled ? 'Remove from Cart' : 'Add to Cart'
            :
                isToggled ? '❤️' : '♡'
            }
        </button>
    );
}

export default Button;