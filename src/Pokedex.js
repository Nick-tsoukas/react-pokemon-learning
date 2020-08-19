import React, { Component } from 'react';
import Pokecard from './Pokecard';
import { shuffle, pokemons } from './helpers';

let shuffled = shuffle(pokemons);

class Pokedex extends Component {
    render(){
        return (
            <div>
                <p style={{textAlign: 'center'}}>Score : {this.props.points}</p>
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