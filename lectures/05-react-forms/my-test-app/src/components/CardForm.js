// Breakout Activity #1: Add Necessary Callback Functions / JSX Attributes to Control All <input>s
    // Extra Credit: Create a state (formData) to manage all of our form data
    // Extra Credit: Create ONE callback function to manage the onChange behavior 
    // for any of our controlled inputs

// Breakout Activity #2: Dynamically display a list of Added Cards as we continue 
// to submit new Card entries.

// What hook will we need to use to manage states for CardForm?
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function CardForm({ handleAddCard, cards }){
    // Create states we will use to handle title and content
    // const [ title, titleSetter ] = useState("");
    // const [ content, contentSetter ] = useState("");

    // Create callback functions to manage the onChange behavior for each of our controlled inputs
    
    // function manageTitle(e) {
    //     const value = e.target.value;

    //     titleSetter(value);
    // }

    // function manageContent(e) {
    //     const value = e.target.value;

    //     contentSetter(value);
    // }

    // Extra Credit: Create a state (formData) to manage all of our form data (JS Object)
    const [ formData, formDataSetter ] = useState({
        title: "",
        content: ""
    });

    // Extra Credit: Create ONE callback function (manageFormData) to manage the onChange 
    // behavior for any of our controlled inputs
    function manageFormData(e) {
        // console.log("test");
        
        // Capture name and value from target of event
        const value = e.target.value;
        const name = e.target.name;

        // console.log(value);
        // console.log(name);

        // Update formData state with new form submission data
        formDataSetter({
            ...formData,
            [name]: value
        });
    }

    // Breakout Activity #2: Create a callback function to handle onSubmit behavior for our controlled form
    function handleSubmit(event) {
        // Prevent default form submission behavior
        event.preventDefault()
        
        const newCard = {
            id: uuidv4(),
            title: event.target[0].value,
            content: event.target[1].value
        }

        console.log(newCard)
        handleAddCard(newCard)

        // Clear out input values upon form submission using formDataSetter
        //cant do this bc its a controlled form
        // event.target[0].reset()
        // event.target[1].reset()

        //have to do this instead
        formDataSetter({title: '', content: ''})

    }

    return (
        <div>
            <h1> Add New Card</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    name="title"
                    className="input"
                    onChange={manageFormData}
                    value={formData.title}
                />
                <input 
                    type="text" 
                    placeholder="Content" 
                    name="content"
                    className="input"
                    onChange={manageFormData}
                    value={formData.content}
                />

                <input 
                    type="submit" 
                    value="Submit"
                    className="input"
                />
            </form>

            {/* Check "title" and "content" states here */}
            <h2>{formData.title} {formData.content}</h2>
        </div>
    );
}

export default CardForm;