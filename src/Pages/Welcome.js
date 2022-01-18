import React from "react";
import { /*Route, Routes,*/ Link , Outlet} from "react-router-dom";

const Welcome = () => {
    return(
        <section>
            <p>This is Welcome Page</p>
            <Link to="newuser">New User</Link>
            <Outlet/>
            {/* <Routes>
                 <Route path="/newuser" element={<p>Welcome! new user</p>}/>
            </Routes> */}
        </section>
        
    )
}

export default Welcome