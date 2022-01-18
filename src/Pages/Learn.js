import React from "react";
import { Link, Outlet } from "react-router-dom"

const Learn = () => {
    return(
        <div>
            <Link to ="courses">Courses</Link>
            <Outlet/>
        </div>
    )
}

export default Learn