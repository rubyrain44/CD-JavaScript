import React, { useState } from 'react';
import App from '../App';

const Form = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstname, lastname, email, password
        };
    };

    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>

                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>

                <div>
                    <label>Email: </label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>

                <input type="submit" value="Create User"></input>
            </form>

            <h1>Your Form Data</h1>
            <p>First Name: { firstname }</p>
            <p>Last Name: { lastname }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
        </div>
    )
}

export default Form;




