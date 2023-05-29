import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [state, setState] = useState(0);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setState({
                    pokemon: response.results
                })
            })
    })


    return (
        <div>
            {state.pokemon ? state.pokemon.map((item, i) => {
                return (<div key={i}>{item.name}</div>)
            }):null}
        </div>
    )
}

export default Pokemon;