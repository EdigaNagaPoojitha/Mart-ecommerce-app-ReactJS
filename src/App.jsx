import React from "react";
import ContextApi from "./Components/ContextApi"; // adjust path
import { Home } from "./Pages/home";
import Header from "./Components/Header"
import Navgation from "./Components/Navgation"


function App() {
  return (
    <ContextApi>
      {/* <Home/> */}
      <Header/>
      <Navgation/>
    </ContextApi>
  );
}

export default App;
