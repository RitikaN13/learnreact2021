import React from "react";
import { Link } from "react-router-dom"

const Products = () => {

    // const listItem = ['Books','Furniture','Electronic']
    return(
        <section>
            <h2>The Products Page</h2>
            <nav>
                <ul>
                    {/* {listItem.map((item,index) => {
                       return <li key={index}>
                            <Link to ={`/products/${item}`}>
                                {item}
                            </Link>
                        </li>
                    })} */}
                    <li>
                        <Link to ="/products/p1">Books</Link>
                    </li>
                    <li>
                        <Link to ="/products/p2">Furnitures</Link>
                    </li>
                    <li>
                        <Link to ="/products/p3">Electronics</Link>
                    </li>
                </ul>
            </nav>
        </section>

    )
}

export default Products
