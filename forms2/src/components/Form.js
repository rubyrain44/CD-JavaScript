import React, { useState } from 'react';

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");

    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "The form has been submitted!";
        } else {
            return "Please submit the form!";
        }
    };

    const validate = (e) => {
        e.preventDefault();
        let errors = 0;

        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFirstnameError("First name must be at least 2 characters");
            errors++;
        }
        else {
            setFirstnameError("");
        }
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastnameError("Last name must be at least 2 characters");
            errors++;
        }
        else {
            setLastnameError("");
        }
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Field must be at least 5 characters");
            errors++;
        }
        else {
            setEmailError("");
        }
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            errors++;
        }
        else {
            setPasswordError("");
        }
    }

    return (
        <div>
            <form onSubmit={ createUser }>
                <h3>{ formMessage() }</h3>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ validate } />
                    {
                        <p>{ firstnameError }</p>
                    }
                </div>

                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ validate } />
                    {
                        <p>{ lastnameError }</p>
                    }
                </div>

                <div>
                    <label>Email: </label>
                    <input type="email" onChange={ validate } />
                    {
                        <p>{ emailError }</p>
                    }
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ validate } />
                    {
                        <p>{ passwordError }</p>
                    }
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