import React, { useContext } from "react";
import SliderComp from "./HomeComponets/SliderComp"
import ServiceComp from "./HomeComponets/ServiceComp";
import DiscountComp from "./HomeComponets/DiscountComp";

export function Home(){
    
    return(<>
    
      <SliderComp/>
      <ServiceComp/>
      <DiscountComp/>
    </>)
}