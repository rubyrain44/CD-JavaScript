import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayList = (props) => {

    const [authorList, setAuthorList] = useState([])

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
        .then( () => {
            console.log("Successfully deleted author.")
            removeFromDom(authorId)
        })
        .catch( err => console.log("Something went wrong with delete", err))
    }

    const removeFromDom = (authorId) => {
        setAuthorList(authorList.filter( i => i._id !== authorId))
    }

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
        .then( (response) => setAuthorList(response.data) )
        .catch( (error) => console.log(error) );
    }, []);

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/new">Add A New Author</Link>

            { authorList.length > 0 && authorList.map( (author, i) => (
                <div key={ i }>
                    <h1> { author.name }</h1>
                    <Link to={'/update/' + author._id}>Edit</Link>
                    <button onClick={ () => deleteAuthor(author._id) }>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default DisplayList;