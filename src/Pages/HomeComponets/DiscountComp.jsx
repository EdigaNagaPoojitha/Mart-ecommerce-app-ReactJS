import React, { useContext } from "react";
import Card from "../../Components/Card";
import { DiscountData } from "../../Components/ContextApi";
export default function DiscountComp(){
    const Discount=useContext(DiscountData)
    console.log("Discount",Discount)
  return(<>
    <div style={{backgroundColor:"#f4f8fd"}}><div style={{textAlign:"center",marginTop:"100px",paddingTop:"100px"}}>
        <span style={{fontSize:"2cm"}}><b>Big Discount</b></span>
    </div>
  <Card  Data={Discount} />
  </div>
  </>)
}