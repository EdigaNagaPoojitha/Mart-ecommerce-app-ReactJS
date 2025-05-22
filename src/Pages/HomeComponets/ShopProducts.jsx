import React, { useReducer, useContext, useState, useEffect } from "react";
import { AllProducts } from "../../Components/ContextApi";
import Card from "../../Components/Card";

export default function FilterProducts() {
  const allProducts = useContext(AllProducts) || [];
  const defaultCategory = "sofa";
  const defaultProduct = allProducts.filter(
    (item) => item.category === defaultCategory
  );

  const handlebtn = (state, action) => {
    switch (action.type) {
      case "sofa":
      case "chair":
      case "watch":
      case "mobile":
      case "wireless":
        return allProducts.filter((item) => item.category === action.payload);
      default:
        return state;
    }
  };

  const [product, dispatch] = useReducer(handlebtn, defaultProduct);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(defaultProduct);
  
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFiltered(product); // Show category-filtered list by default
    } else {
      const filteredBySearch = allProducts.filter((item) => {
        const name = (item?.productName || "").toLowerCase();
        const category = (item?.category || "").toLowerCase();
        const term = searchTerm.toLowerCase();
        
        return name.startsWith(term) || category.startsWith(term);
      });
      setFiltered(filteredBySearch);
    }
  }, [searchTerm, product]);

  // Rename to isOpen for clarity, use boolean not string
  const [isOpen, setIsOpen] = useState(false);

  if (!allProducts.length) return <p className="p-4">Loading products...</p>;

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-8 py-4">
        {/* Filter Dropdown (simple button list) */}
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)} // toggle dropdown
            className="inline-flex justify-center w-full rounded-md bg-#182a4b px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-300"
            style={{ transform: "none", transition: "none" ,backgroundColor:"#182a4b",color:"white",borderRadius:"10px"}}
          >
            Filter by category
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.72-3.83a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown content only visible when isOpen */}
          {isOpen && (
            <div className="absolute mt-2 w-44 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                {["sofa", "chair", "watch", "mobile", "wireless"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      dispatch({ type: cat, payload: cat });
                      setIsOpen(false); // close dropdown after selection
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                    style={{ hover:"scale(0.8)", transition: "none",backgroundColor:"#182a4b",color:"white",border:"1px thin white" }}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-1/2  px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Render Filtered Products */}
      <Card Data={filtered} />
    </>
  );
}
