import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = props => {
    const [responseData, setResponseData] = useState([])

    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => { setResponseData(response.data.results) })
    }, []);

    return (
        <div>
            { responseData ? responseData.map( (item, index) => ( <p>{ item.name }</p> ) ) : null} 
        </div>
    )
}

export default Pokemon;