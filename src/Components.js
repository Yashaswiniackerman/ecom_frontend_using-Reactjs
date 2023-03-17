import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoutes from "./auth/helpers/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import Cart from "./core/Cart";

const Components = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/signup" exact element={<Signup/>} />
                <Route path="/signin" exact element={<Signin/>} />
                <Route path="/cart" exact element={<Cart/>} />
                <Route path="/userdashbard" element={
                    <PrivateRoutes>
                        <UserDashboard/>
                    </PrivateRoutes>
                
                }/>
                
                
            </Routes>
        </BrowserRouter>

    )
}

export default Components;