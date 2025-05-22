import React, { useContext } from "react";
import SliderComp from "./HomeComponets/SliderComp"
import ServiceComp from "./HomeComponets/ServiceComp";
import DiscountComp from "./HomeComponets/DiscountComp";
import NewArrivalComp from "./HomeComponets/NewArrivalComp";
import BestSalesComp from "./HomeComponets/BestSaleComp";

export function Home(){
    
    return(<>
    
      <SliderComp/>
      <ServiceComp/>
      <DiscountComp/>
      <NewArrivalComp/>
      <BestSalesComp/>
    </>)
}