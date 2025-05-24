import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AllProducts } from "./ContextApi";
import image from "../assets/Images/table.jpg";
import Card from "./Card";
import { addToCart } from "../Components/ProductSlice";

export default function CardDetails() {
  const products = useContext(AllProducts);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [toggle, setToggle] = useState("desc");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) return;

    const foundProduct = products.find((item) => item.id.toString() === id);
    setProduct(foundProduct);

    if (foundProduct) {
      const related = products
        .filter(
          (item) =>
            item.category === foundProduct.category && item.id !== foundProduct.id
        )
        .slice(0, 6);
      setRelatedProducts(related);
    }
  }, [products, id]);

  if (!products) return <div className="p-6 text-center">Loading...</div>;
  if (!product) return <div className="p-6 text-center">Product not found.</div>;



  return (
    <div className="max-w-100% mx-auto px-4 py-8">
      {/* Banner */}
      <div
        style={{
          height: "350px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="text-white text-4xl font-bold capitalize">
          {product.productName}
        </h1>
      </div>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <img
          src={product.imgUrl}
          alt={product.productName}
          className="w-full md:w-1/2 rounded-md object-cover"
        />

        <div className="flex-1 ">
          <h2 className="text-2xl font-semibold mb-2">{product.productName}</h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${i < product.avgRating ? "text-yellow-400" : "text-gray-300"
                  }`}
              >
                ★
              </span>
            ))}
            <span className="text-sm text-gray-600">{product.avgRating} ratings</span>
          </div>

          <p className="text-xl font-bold text-gray-800 mb-1">${product.price}</p>
          <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>

          <p className="text-gray-700 mb-6">
            {product.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas labore tempore!"}
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-3">

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => {
                const val = Math.max(1, Number(e.target.value));
                setQuantity(val);
              }}

              className="border px-3 py-1 w-20 rounded text-sm"
            />
            <button

              className="bg-#182a4b   px-6 py-2 rounded text-sm border-2 border-red-500"
              style={{ backgroundColor: "#182a4b", color: "white" }}
              onClick={() => dispatch(addToCart({ product, quantity }))}
            >
              Add To Cart
            </button>

          </div>
        </div>
      </div>

      {/* Description + Reviews Tabs */}
      <div className="mt-10">
        <div className="flex gap-4 border-b pb-2 text-sm">
          <span
            onClick={() => setToggle("desc")}
            className={`cursor-pointer pb-1 ${toggle === "desc" ? "font-semibold text-black" : "text-gray-500"
              }`}
          >
            Description
          </span>

          <span
            onClick={() => setToggle("reviews")}
            className={`cursor-pointer pb-1 ${toggle === "reviews" ? "font-semibold text-black" : "text-gray-500"
              }`}
          >
            Reviews (1)
          </span>
        </div>

        <p className="mt-4 text-gray-700">
          {toggle === "desc" ? product.description : product.shortDesc || "No reviews yet."}
        </p>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
          <Card Data={relatedProducts} />
        </div>
      )}
    </div>
  );
}
