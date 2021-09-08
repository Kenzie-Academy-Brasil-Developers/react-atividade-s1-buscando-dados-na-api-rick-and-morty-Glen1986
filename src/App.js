import './App.css';
//import CharCard from './components/CharCard'
import Characters from './components/Characters'
import { Component } from 'react';


class App extends Component {

  state = {
    characters:[], 

  }
  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
      .then(response =>{return response.json() })

      .then(response => this.setState({characters: response.results}))
      .catch(error => console.log("error"))
      }
  state = {
    characters: [],
  } 
  render(){

    const { characters } = this.state;
    
  return (
    <div className="App">
      <div className="App-header">
        <Characters
          characters = { characters }
        />
      </div>
    </div>
  );
}
}

export default App;
