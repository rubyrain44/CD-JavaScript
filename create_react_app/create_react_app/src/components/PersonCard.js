import React, { useState } from 'react';
import App from '../App';

const PersonCard = (props) => {
    const [ age, setAge ] = useState(props.age);
    return (
        <div>
            <h1>{ props.name }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { props.haircolor }</p>
            <button onClick={ (e) => setAge(age + 1)}>Birthday Button for { props.name }</button>
        </div>
    )
}

export default PersonCard;