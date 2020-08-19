import React, { Component } from 'react';
import Pokecard from './Pokecard';
let imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
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

class Pokedex extends Component {
    render(){

        return (
            <div>
                <p style={{textAlign: 'center'}}>{this.props.points}</p>
            <div className="Pokedex-container">
                 {
                     this.props.cards.map(p => {
                         return <Pokecard 
                                id={p.id} 
                                name={p.name}
                                type={p.type}
                                base_experience={p.base_experience}
                                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                                />
                     })
                 }
            </div>
            </div>
        )
    }
}

export default Pokedex;