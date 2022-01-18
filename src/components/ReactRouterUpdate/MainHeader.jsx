import React from "react";
import { NavLink } from "react-router-dom"

const MainHeader = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to ="/welcome" >Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/products" >Products</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/charts" >Charts</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/Learn" >Learn</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader