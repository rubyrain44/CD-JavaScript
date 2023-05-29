import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className="navbar">
            <h1>Nav</h1>
            <Link to={"/products"}>All Products</Link>
            <Link to={"/products/create"}>Create Product</Link>
        </div>
    )
}

export default Nav;