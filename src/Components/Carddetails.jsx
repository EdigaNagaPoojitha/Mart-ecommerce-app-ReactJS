import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllProducts } from "./ContextApi";

export default function CardDetails() {
  const products = useContext(AllProducts);
  const { id } = useParams();  // get id param from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!products) return; // wait for products to load

    const foundProduct = products.find(
      (item) => item.id === id  // compare id as number
    );

    setProduct(foundProduct);
  }, [products, id]);

  if (!product) return <div>Loading or Product not found</div>;

  return (
    <div>
      <h1>{product.productName}</h1>
      <img src={product.imgUrl} alt={product.productName} />
      <p>Price: ${product.price}</p>
      <p>Rating: {product.avgRating}</p>
    </div>
  );
}
