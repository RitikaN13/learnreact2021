import React, { useState, useRef, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Input from "./components/Input";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";



const App = () => {
  const [num, setNum] = useState(0);

  const incr = () => {
    setNum(num + 1)
  }

  const decr = () => {
    if (num > 0) {
      setNum(num - 1)
    }
  }

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const submitRef = useRef(null);

  const firstKeyDown = (e) => {
    if (e.key === "Enter") {
      secondRef.current.focus();
    }
  }

  const secondKeyDown = (e) => {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  }

  const submitKeyDown = () => {
    alert('submit successfully');
  }

  // useEffect(() => {
  //   firstRef.current.focus()
  // }, [])

  return (
      <Router>
          <ul>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/user">USER</Link></li>
          </ul>
          <hr/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/user" element={<User/>}/>
            {/* <Route path="/user/:userId" element={<UserDetail/>}/> */}
          </Routes>
      </Router>
  )
}

export default App