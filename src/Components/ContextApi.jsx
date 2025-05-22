import React, { createContext } from "react";
import { discoutProducts, products, serviceData, SliderData } from "../assets/Products"; // Adjust if path differs

export const ProductData = createContext();
export const ServiceData  = createContext();
export const DiscountData  = createContext();
export const AllProducts=createContext()

export default function ContextApi({ children }) {
  return (
    <ProductData.Provider value={SliderData}>
    <ServiceData.Provider value={serviceData}>
    <DiscountData.Provider value={discoutProducts}>
      <AllProducts.Provider value={products}>
      {children}
      </AllProducts.Provider>
      </DiscountData.Provider>
    </ServiceData.Provider>
    </ProductData.Provider>
  );
}
