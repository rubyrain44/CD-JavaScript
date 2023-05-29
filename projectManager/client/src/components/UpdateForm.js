import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateForm = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log("Something went wrong", err))
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newProduct = {
            title, price, description
        };

        axios.put("http://localhost:8000/api/products/" + id, newProduct)
            .then( () => console.log("Update successful on backend"))
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
        <div>
            <h1>Update Form</h1>
            <form onSubmit={ onSubmitHandler }>
            { errors.length > 0 && errors.map( (error, i) => (
                <p key={i}>{ error }</p>
            )) }
                <div>
                    <label>Title</label>
                    <input onChange={ (e) => setTitle(e.target.value)} type="text" value={title}/>
                </div>

                <div>
                    <label>Price</label>
                    <input onChange={ (e) => setPrice(e.target.value)} type="number" step="0.01" value={price}/>
                    {/* step 0.01 allows you to increment numbers with the decimal, ex: 9.99 */}
                </div>

                <div>
                    <label>Description</label>
                    <input onChange={ (e) => setDescription(e.target.value)} type="text" value={description}/>
                </div>

                <div>
                    <button>Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm;