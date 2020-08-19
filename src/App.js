import React, { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex';

const pokemons = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
]

let shuffled = shuffle(pokemons);


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let deckOne = shuffled.slice(0,4);
let deckTwo = shuffled.slice(4);

function getPoints(cards){
  let score = 0;
  cards.forEach(card => {
    score += card.base_experience;
  });
  return score;
}

class App extends Component {
  render(){
    return (
     <div className="App-container">
       <h1 style={{textAlign: 'center'}}>Player One</h1>
       <h2 style={{textAlign: 'center'}}>
         {
           getPoints(deckOne) > getPoints(deckTwo) ? 'winner' : 'Loser'
         }
       </h2>
      
       <Pokedex points={getPoints(deckOne)} cards={deckOne} />
       <h1 style={{textAlign: 'center'}}>Player Two</h1>
       <h2 style={{textAlign: 'center'}}>
         {
           getPoints(deckTwo) > getPoints(deckOne) ? 'winner' : 'Loser'
         }
       </h2>
      
       <Pokedex points={getPoints(deckTwo)} cards={deckTwo} />
     </div>
    )
  }
}

export default App;
