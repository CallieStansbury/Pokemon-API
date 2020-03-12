import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const Pokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=964")
      .then(response => {
        return response.json();
      }).then(response => {
        console.log(response)
        setPokemon(response.results)
      }).catch(err=>{
        console.log(err);
      })
    }
  return (
    <div className="App">
      <button className="button" onClick={Pokemon}>Fetch Pokemon</button>
      <ul className="poke-list">
      {pokemon.map((poke, index) => (
        <li key={index}>{poke.name}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
