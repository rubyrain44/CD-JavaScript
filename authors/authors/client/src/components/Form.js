import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Form = (props) => {

    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newAuthor = {
            name
        };

        axios.post('http://localhost:8000/api/authors', newAuthor)
        .then( ()=> console.log("Creation on the backend successful."))
        .catch( err => {
            console.log(err)
            const errorRes = err.response.data.error.errors;
            const errorArray = [];

            for (const key of Object.keys(errorRes)) {
                errorArray.push(errorRes[key].message);
            }

            setErrors(errorArray);

        });
    };

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <h3>Add A New Author</h3>

            <form onSubmit={ onSubmitHandler }>

                { errors.length > 0 && errors.map( (error, i) => (
                    <p key={i}>{ error }</p>
                ))}

                <div>
                    <label>Name</label>
                    <input onChange= { (e) => setName(e.target.value) } type="text"></input>
                </div>

                <div>
                    <button>Cancel</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;