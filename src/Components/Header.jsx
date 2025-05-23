import React from "react";
import "./header.css";
import { HiUser, HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import image from "../assets/Images/achievers_logo.png";
import { useSelector } from "react-redux";
import "../../src/index.css"

export default function Header() {
  const cartItems = useSelector((state) => state.products.cart);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid header-container">

        {/* Mobile Toggler (Left) */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Mobile Logo (Center) */}
        <Link to="/" className="navbar-brand mx-auto d-lg-none">
          <img src={image} alt="Logo" className="logo-img" />
        </Link>

        {/* Mobile Icons (Right) */}
        <div className="icons d-lg-none">
          <Link to="#">
            <button className="disable" aria-label="User Profile"><HiUser /></button>
          </Link>
          <Link to="/cart">
            <button aria-label="Shopping Cart" style={{ position: 'relative', border: 'none' }}>
              <HiShoppingCart />
              {totalQuantity > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {totalQuantity}
                </span>
              )}
            </button>
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="d-none d-lg-flex desktop-layout">
          {/* Left: Logo */}
          <div className="logo-container">
            <Link to="/" className="navbar-brand">
              <img src={image} alt="Logo" className="logo-img" />
            </Link>
          </div>

          {/* Right: Nav Links + Icons */}
          <div className="nav-icons-container" style={{ display: "flex" }}>
            <ul className="navbar-nav nav-links" >
              <li className="nav-item">
                <Link className="nav-link" to="/"><b>Home</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop"><b>Shop</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart"><b>Cart</b></Link>
              </li>
            </ul>
            <div className="icons">
              <Link to="/profile">
                <button className="disable" aria-label="User Profile"><HiUser /></button>
              </Link>
              <Link to="/cart">
                <button
                  style={{ position: 'relative', border: "none" }}
                  aria-label="Shopping Cart"
                  className="cart-icon"
                >
                  <HiShoppingCart />
                  {totalQuantity > 0 && (
                    <span className="cart-count" style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      backgroundColor: 'black',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '2px 6px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {totalQuantity}
                    </span>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Offcanvas for Mobile Nav */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" >
            <ul className="navbar-nav " >
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li><br />
              <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li><br />
              <li className="nav-item"><Link className="nav-link" to="/cart">Cart </Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
