import React, { Component } from 'react';

class Pokecard extends Component {
    render(){
        const { id, name, base_experience, type, img } = this.props;
        return(
            <div className="Pokecard-container card-3">
                    <div className="Pokecard-image-container">
                    <img className="Pokecard-image" alt="a pokemon" src={img} />
                    </div>
                    <p>{name}</p>
                    <p>id: {id}</p>
                    <p>exp: {base_experience}</p>
                    <p>type: {type}</p>    
            </div>
        )
    }
}

export default Pokecard;