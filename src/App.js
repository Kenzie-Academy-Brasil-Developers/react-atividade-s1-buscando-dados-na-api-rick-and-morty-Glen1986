import './App.css';
import {  useState, useEffect } from 'react';
import Characters from './components/Characters';

function App() {
const [characters, setCharacters] = useState([]);
//const [person, setPerson] = useState({})


  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((response) => setCharacters( [{response}]))
    .catch((error) => console.log("Erro na requisição"))
  }, []);
  console.log(characters)

    return (
      <div className="App">
      <header className="App-header">
        <Characters characters={characters} />
      </header>
    </div>
  );
 
}

export default App;
