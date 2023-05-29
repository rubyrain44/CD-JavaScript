import { useState, useEffect } from 'react';
import axios from 'axios';

const Form = (props) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newProduct = {
            title, price, description
        };

        axios.post("http://localhost:8000/api/products", newProduct)
            .then( () => console.log("Creation successful on backend"))
            .catch(err => { 
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
        <div className="form">
            <h1>Form</h1>
            <form onSubmit={ onSubmitHandler }>
            { errors.length > 0 && errors.map( (error, i) => (
                <p key={i}>{ error }</p>
            )) }
                <div>
                    <label>Title</label>
                    <input onChange={ (e) => setTitle(e.target.value)} type="text" />
                </div>

                <div>
                    <label>Price</label>
                    <input onChange={ (e) => setPrice(e.target.value)} type="number" step="0.01"/>
                    {/* step 0.01 allows you to increment numbers with the decimal, ex: 9.99 */}
                </div>

                <div>
                    <label>Description</label>
                    <input onChange={ (e) => setDescription(e.target.value)} type="text" />
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;