import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./ProductSlice";

export default function DisCard({ Data }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap justify-center gap-5 px-4 py-10 lg:mx-[200px]">
      {Data.map((item) => (
        <div
          key={item.id} // use id instead of index
          className="relative overflow-hidden bg-white rounded-lg shadow-sm flex flex-col justify-between
                     h-[380px] sm:h-[400px] md:h-[450px] lg:h-[470px] w-full sm:basis-[48%] md:basis-[30%] lg:basis-[30%] max-w-sm"
        >
          {/* Decorative SVG */}
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="158"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="150"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          {/* Product Image */}
          <div className="relative px-6 flex items-center justify-center h-[150px] sm:h-[180px] md:h-[200px]">
            <div
              className="absolute w-full h-full left-0 bottom-0 opacity-10"
              style={{
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              }}
            ></div>
            <Link to={`/shop/${item.id}`} style={{ textDecoration: "none" }}>
              <img
                src={item.imgUrl}
                alt={item.productName}
                className="relative w-[120px] h-[120px] sm:w-[300px] sm:h-[140px] lg:w-[400px] lg:h-[300px] lg:mt-[100px] object-contain"
              />
            </Link>
            <span className="absolute top-1 left-1 bg-black text-white text-xs px-2 py-2 m-2 rounded-full">
              {item.discount}% Off
            </span>
          </div>

          {/* Text Content */}
          <div className="relative text-white px-6 pb-6 mt-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="block font-semibold text-black text-xl no-underline">
                  {item.productName}
                </span>
                <div className="flex mt-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < item.avgRating ? "text-yellow-400" : "text-gray-300"
                      }
                      style={{ fontSize: "0.8cm" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span
                  className="block font-bold text-black text-xl mt-2"
                  style={{ fontSize: "1cm" }}
                >
                  ${item.price}
                </span>
              </div>
              <button
                className="plus-button w-[50px] h-[50px] border border-gray-300 bg-white text-black flex items-center justify-center"
                style={{
                  borderRadius: "50px",
                  fontSize: "1cm",
                  padding: "1px",
                }}
                onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
                aria-label={`Add one ${item.productName} to cart`}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
