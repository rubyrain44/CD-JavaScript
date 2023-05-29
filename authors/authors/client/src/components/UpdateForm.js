import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateForm = (props) => {
const { id } = useParams();
const [name, setName] = useState('');
const [errors, setErrors] = useState([]);

useEffect( () => {
    axios.get("http://localhost:8000/api/authors/" + id)
    .then(res => {
        setName(res.data.name);
    })
    .catch(err => console.log("Something went wrong with update", err))
}, [])

const onSubmitHandler = (e) => {
    e.preventDefault()

    const newAuthor = {
        name
    };

    axios.put("http://localhost:8000/api/authors/" + id, newAuthor)
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
                <label>Name</label>
                <input onChange= { (e) => setName(e.target.value) } type="text" value={ name } />
            </div>

            <div>
                <button>Update</button>
            </div>
        </form>
    </div>
)
}

export default UpdateForm;