import React, { Component } from 'react';
import styles from './colorpicker.module.css';

const colorPicker = (props) => {
    const [pickColor, setPickColor] = useState("");

    const pick = (e) => {
        e.preventDefault();
        const newDiv = { color }
        
    }

    return (
        <div>
            <form onSubmit={ pickColor }>
                <label>Color: </label>
                <input className= { styles.colorpicker } type="color"></input>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default colorPicker;