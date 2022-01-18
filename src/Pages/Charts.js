import React from "react";
import { Link , Outlet} from "react-router-dom";

const Charts = () => {
    return(
        <section>
            <h2>You can see Charts here</h2>
            <ul>
                <li>
                    <Link to="line">Line Chart</Link>
                </li>
                <li>
                    <Link to="pie">Pie Chart</Link>
                </li>
                <li>
                     <Link to="bar">Bar Chart</Link>
                </li>
            </ul>
            <Outlet/>
        </section>
    )
}

export default Charts