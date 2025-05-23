import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/home";
import { Shop } from "../Pages/shop";
import { Cart } from "../Pages/cart";
import CardDetails from "./Carddetails";
export default function Navigation(){
    return(<>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Workout/:productName || title" element={<CardDetails/>}/>
    </Routes>
    </>)
}