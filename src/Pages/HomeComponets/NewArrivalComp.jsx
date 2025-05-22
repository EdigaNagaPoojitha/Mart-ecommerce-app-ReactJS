import React, { useContext, useEffect, useState } from "react";
import Card from "../../Components/Card";
import { AllProducts } from "../../Components/ContextApi";

export default function NewArrivalComp() {
  const [products, setProducts] = useState([]);
  const Set = useContext(AllProducts);

  // Filter products with category "wireless" or "mobile"
  const MINE = Set.filter(
    (item) => item.category === "wireless" || item.category === "mobile"
  );

  // Update state when Set changes
  useEffect(() => {
    setProducts(MINE);
  }, [Set]); // depend on Set only

  return (
    <div  >
      <div style={{ textAlign: "center",  paddingTop: "100px" }}>
        <span style={{ fontSize: "2cm" }}>
          <b>New Arrivals</b>
        </span>
      </div>
      <Card Data={products} />
    </div>
  );
}
