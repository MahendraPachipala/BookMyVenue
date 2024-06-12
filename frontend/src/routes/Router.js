import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import UserLogin from "../pages/UserLogin";
import Home from "../pages/home";
import WeddingHome from "../pages/WeddingHome";
import VenueRegister from "../pages/venueRegister";
import E from "../pages/e"

const Routers = () => {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Navigate to="/userlogin" />} />
            <Route path="/userRegister" element={<Register />} />
            <Route path = "/userlogin" element = {<UserLogin/>}/>
            <Route path = "/home" element = {<Home/>}/>
            <Route path = "/VenueRegister" element = {<VenueRegister/>}/>
            <Route path = "/WeddingHome" element = {<WeddingHome/>}/>

            <Route path = "/e" element = {<E/>}/>
        </Routes>
        </div>
    );
};

export default Routers;
