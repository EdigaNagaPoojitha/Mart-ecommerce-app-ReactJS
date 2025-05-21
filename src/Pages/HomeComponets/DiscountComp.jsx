import React, { useContext } from "react";
import Card from "../../Components/Card";
import { DiscountData } from "../../Components/ContextApi";
export default function DiscountComp(){
    const Discount=useContext(DiscountData)
    console.log("Discount",Discount)
  return(<>
 
  <Card  Data={Discount} />
  
  </>)
}