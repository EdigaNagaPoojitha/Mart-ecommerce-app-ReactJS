import React from "react";

export default function Card({ Data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 m-60 mt=0">
      {Data.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 m-6 relative overflow-hidden bg-white-500 rounded-lg max-w-xs shadow-sm "
        >
          {/* Decorative SVG */}
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          {/* Product Image */}
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
            
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img className="relative w-40" src={item.imgUrl} alt="" />
          </div>

          {/* Text Content */}
          <div className="relative text-white px-6 pb-6 mt-6">
            <div className="flex justify-between">
                <div>
              <span className="block font-semibold text-black text-xl">
                {item.productName}
              </span>

               <span className="block font-semibold text-black text-xl">
                ₹{item.price}
              </span>
              </div>
              <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                ₹{item.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
