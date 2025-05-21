import React from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navgation"
import { BrowserRouter } from "react-router-dom";
export default function App(){
  return(<>
   <BrowserRouter>
    <Header/>
  <Navigation/>
   </BrowserRouter>
  </>
  
  

  
  )
}