// 💡 Break Out Activity 1: Enable POST Request to json-server to add new Cards
//   ❗ Notable files:
//      - App.js

// 💡 Break Out Activity 2: Enable DELETE Request to json-server to remove Cards
//   ❗ Notable files:
//      - App.js
//      - CardList.js
//      - Card.js
//      - Button.js

// 💡 Break Out Activity 3: Enable PATCH Request to json-server to edit Cards
//   ❗ Notable files:
//      - App.js
//      - CardList.js
//      - Card.js
//      - Button.js

// useState Hook Import
import { useState, useEffect } from 'react';

// Import CSS Styles
import './App.css';

// Component Imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import CardList from './components/CardList';
import CardForm from './components/CardForm';

function App() {
  // Set "cards" state + setter function
  const [ cards, setCards ] = useState([]);

  // 🚧 Add states to manage POST (addCard), PATCH (removeCard), and DELETE (editCard)
  // ❗ Why is setting state necessary?

  const [addCard, setAddCard] = useState(false)
  const [removeCard, setRemoveCard] = useState(false)
  const [editCard, setEditCard] = useState(false)

  function loadCards() {
    fetch("http://localhost:3005/cards")
      .then(res => res.json())
      .then(data => {
        console.log("Data fetched: ", data);
        setCards(data);
    });
  }

  useEffect(() => {
    console.log("Fetching data...")
    loadCards()
  }, [addCard, removeCard, editCard]);

  function handleAddCard(newCard) {
    fetch("http://localhost:3005/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCard)
    })
    .then(() => {
      setAddCard(!addCard)
    })
  }

  function handleRemoveCard(cardId) {
     fetch(`http://localhost:3005/cards/${cardId}`, {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json"
     }
    })
    .then(() => {
      setRemoveCard(!removeCard)
    })
  }
  console.log("Cards: ",cards)

  // 🚧 Add function to handle PATCH (handleEditCard)
  // ❗ Remember to invoke loadCards() and toggle "editCard" state after successful fetch

    function handleEditCard(card) {
      console.log(card.id)
      fetch(`http://localhost:3005/cards/${card.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          liked: !card.liked
        })
      }).then(() => {
          //❗ Remember to invoke loadCards() and toggle "editCard" state after successful fetch   
          console.log('then')
          setEditCard(!editCard)
      })
    }

  return (
    <div className="App">
      {/* NavBar Component */}
      <NavBar isLoggedIn/>

      {/* Header Component */}
      <Header 
        firstName="Louis" 
        lastName="Medina" 
      />

      <CardForm 
        handleAddCard={handleAddCard}
        cards={cards}
      />

      {/* CardList Component */}
      <CardList 
        cards={cards}
        handleRemoveCard={handleRemoveCard}
        handleEditCard={handleEditCard}

        // 🚧 Pass handleRemoveCard() and handleEditCard as props
      />
    </div>
  );
}

export default App; 