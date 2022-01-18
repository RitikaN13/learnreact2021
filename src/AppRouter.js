import React from "react";
import {  Routes, Navlink, Link, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import MainHeader from "./components/ReactRouterUpdate/MainHeader";
import Products from "./Pages/Products";
import Welcome from "./Pages/Welcome";
import ProductDetails from "./Pages/ProductDetails";
import Charts from "./Pages/Charts";
import ChartCode from "./Pages/ChartCode";
import Learn from "./Pages/Learn";
import Courses from "./Pages/Courses";
import { useParams } from "react-router-dom"

const CourseId  = () => {
    const course = useParams();
    return(
        <div>
            <p>URL param is {course.courseId}</p>
        </div>
    )  
}

const AppRouter = () => {
    return(
        <div>
            <MainHeader/>
            <main>
                    <Routes>
                        <Route path ="/" element={<Navigate replace to ="/welcome"/>}/>
                        <Route path ="/welcome/*" element = {<Welcome/>}>
                             <Route path="newuser" element={<p>Welcome! new user</p>}/>        
                        </Route>
                        <Route path ="/products" element = {<Products/>}/>
                        <Route path ="/products/:productId" element = {<ProductDetails/>}/>
                        <Route path ="/charts" element = {<Charts/>}>
                            <Route path ="line" element = {<ChartCode chartType="line"/>}/>
                            <Route path ="pie" element = {<ChartCode chartType="pie"/>}/>
                            <Route path ="bar" element = {<ChartCode chartType="bar"/>}/>
                        </Route>
                        <Route path="/learn" element={<Learn/>}>
                            <Route path="courses" element={<Courses/>}>
                                <Route path = ":courseId" element ={<CourseId/>}/>
                            </Route>
                        </Route>
                    </Routes>
                    <nav>

                    </nav>
            </main>
        </div>
    )
}

export default AppRouter