import React from "react";
import { Link, Outlet } from "react-router-dom"

const Courses = () => {
    return(
    <>
      <ul>
          <li>
              <Link to="react">React</Link>
          </li>
          <li>
              <Link to="Java">Java</Link>
          </li>
          <li>
              <Link to="AI">AI</Link>
          </li>
          <li>
              <Link to="Php">PHP</Link>
          </li>
      </ul>
      <Outlet/>
      </>
    )
}

export default Courses