import React from "react";
import { useParams, useLocation } from "react-router-dom";
import image from "../../assets/Images/table.jpg";

export default function Banner() {
  const location = useLocation();
  const path = location.pathname;
  const pageName = path.split("/").filter(Boolean)[0]; // e.g., "shop"
  const params = useParams();

  // Custom label based on page name
  const getTitle = () => {
    if (pageName === "shop") return "Products";
    return pageName || Object.values(params)[0];
  };

  return (
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
      <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold", textTransform: "capitalize" }}>
        {getTitle()}
      </h1>
    </div>
  );
}
