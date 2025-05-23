import React from "react";
import { Route, Routes } from "react-router-dom";
import { Shop } from "../Pages/shop";
import CardDetails from "./Carddetails";
import { Cart } from "../Pages/Cart";
import { Home } from "../Pages/Home";
export default function Navigation(){
    return(<>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shop/:id" element={<CardDetails/>}/>
    </Routes>
    </>)
}