// https://semantic-ui.com/
import 'semantic-ui-css/semantic.min.css';

// import all data from "painting_data.js"
import paintingsData from './paintings_data'

// import useState Hook
import { useState } from 'react';

// Component Imports
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar'
import PaintingsList from './components/PaintingsList';
import PaintingForm from './components/PaintingForm'

function App() {

  // Initialize "color", "paintings", and "formView" states
  const [color, colorSetter] = useState("red");
  const [paintings, paintingsSetter] = useState(paintingsData);
  const [formView, formViewSetter] = useState(false);
  const [searchText, setSearchText] = useState('')
  
  function changeColor() {
    //change color randomly on click
    const colors = ['red','orange','yellow','green','blue','violet','brown']
    colorSetter(colors[Math.ceil( Math.random() * colors.length - 1)])
  }

  function toggleForm() {
    formViewSetter(!formView)
  }

  function handleSearch(e) {
    setSearchText(e.target.value)

    //this is janky but kind of works
    const filteredList = paintings.filter(painting => {
      //search should not be case-sensitive
      //return true if the painting title contains the search text
      return painting.title.toUpperCase().includes(searchText.toUpperCase())
    })

    //if search text is empty, set the state back to the entire list.
    if (e.target.value.length === 0) {
      return paintingsSetter(paintingsData)
    } 

    //if search text is not empty, set the state to the filtered list.
    paintingsSetter(filteredList)

    console.log('paintings state from App.js: ', paintings)
  }

  return (
    <div>
      <NavBar
        color={color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"
        onColorChange={changeColor}
      />
      <button className="ui button" onClick={toggleForm}>Show/Hide New Painting Form</button>
      <hr />
      { formView ? <PaintingForm /> : ''}
      <SearchBar handleSearch={handleSearch}/>
      <PaintingsList paintings={paintings} /> 
    </div>
  );
}

export default App;
