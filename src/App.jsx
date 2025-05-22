import React from "react";
import ContextApi from "./Components/ContextApi"; // adjust path
import { Home } from "./Pages/home";
import Header from "./Components/Header"
import Navgation from "./Components/Navgation"
import Footer from "./Components/Footer";


function App() {
  return (
    <ContextApi>
      {/* <Home/> */}
      <Header/>
      <Navgation/>
      <Footer/>
    </ContextApi>

  );
}

export default App;
