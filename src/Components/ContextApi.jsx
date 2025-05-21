import React, { createContext } from "react";
import { discoutProducts, serviceData, SliderData } from "../assets/Products"; // Adjust if path differs

export const ProductData = createContext();
export const ServiceData  = createContext();
export const DiscountData  = createContext();

export default function ContextApi({ children }) {
  return (
    <ProductData.Provider value={SliderData}>
    <ServiceData.Provider value={serviceData}>
    <DiscountData.Provider value={discoutProducts}>
      {children}
      </DiscountData.Provider>
    </ServiceData.Provider>
    </ProductData.Provider>
  );
}
