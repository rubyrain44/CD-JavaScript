import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayList = (props) => {

    const [productList, setProductList] = useState([])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then( () => {
            console.log("Successfully deleted product") 
            } )
            removeFromDom(productId)
            .catch(err => console.log("Something went wrong with delete", err))
        }

        const removeFromDom = (productId) => {
            setProductList(productList.filter(i => i._id !== productId))
            }

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then( (response) => setProductList(response.data) )
            .catch( (error) => console.log(error) );
    }, []);

    return (
        <div className="displayList">
            { productList.length > 0 && productList.map( (product, i) => (
                <div key={ i } className="displayItem">
                    <Link to={ '/products/' + product._id }>
                        <h1> { product.title }</h1>
                    </Link>
                    <Link to={'/products/update/' + product._id}>Update</Link>
                    <button onClick={ () => deleteProduct(product._id) }>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default DisplayList;