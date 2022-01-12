//styles
import './App.css';

//data
import cards from './cards'

//components
import NavBar from './components/NavBar'
import Header from './components/Header'
import CardList from './components/CardList'

function App() {
  return (
    <div className="App">
      <NavBar isLoggedIn={true} />
      <Header firstName="Daniel" lastName="Kilcullen"/>
      <CardList cards={cards} />
    </div>
  )
}

export default App;