// Break Out Activity #2: Create a <Button /> Component to enable each Button to 
// manage its own isToggled state. 💡 To configure each <Button />, try passing a 
// “name” prop from Card.js

import { useState } from 'react';

function Button({ name, toggleVisibility }) {

    // Create ONE state (isToggled) that will keep track of whether
    // a Button has been toggled. What initial value will be most appropriate?

    function toggleButton() {

        // Use state setter function (setToggled) to switch "isToggled" state

        // If "toggleVisibility" is passed as a prop,
        // invoke the function to toggle the "isVisible"
        // state in Card.js 
    }

    return (
        // <>...</> is shorthand for <React.Fragment></React.Fragment>
        <>
            {name === "cart" ? (
                <button className="button" onClick={toggleButton}>
                    {/* Use "isToggled" State to render "Remove From Cart" / "Add to Cart" */}
                </button>
            ) : (
                <button className="button" onClick={toggleButton}>
                    {/* Use "isToggled" State to render "❤️" / "♡" */}
                </button>
            )}
        </>
    );
}

export default Button;