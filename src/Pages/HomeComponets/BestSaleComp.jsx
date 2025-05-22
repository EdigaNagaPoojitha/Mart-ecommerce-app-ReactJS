import React, { useContext, useEffect, useState } from "react";
import Card from "../../Components/Card";
import { AllProducts } from "../../Components/ContextApi";

export default function BestSalesComp() {
  const [products, setProducts] = useState([]);
  const Set = useContext(AllProducts);

  // Filter products with category "wireless" or "mobile"
  const MINE = Set.filter(
    (item) => item.category === "sofa" 
  );

  // Update state when Set changes
  useEffect(() => {
    setProducts(MINE);
  }, [Set]); // depend on Set only
console.log("Nesarrivals",products)
  return (
    <div style={{backgroundColor:"#f4f8fd"}}>
      <div style={{ textAlign: "center",  paddingTop: "100px" }}>
        <span style={{ fontSize: "2cm" }}>
          <b>Best Sales</b>
        </span>
      </div>
      <Card Data={products} />
    </div>
  );
}
