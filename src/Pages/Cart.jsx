import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { increaseQuantity,decreaseQuantity } from '../Components/ProductSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cart);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return acc + price * quantity;
  }, 0);

  const tax = +(subtotal * 0.1).toFixed(2); // 10% tax
  const total = +(subtotal + tax).toFixed(2);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="container my-5">
      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", height: "150px" }}>
          <h2>🛒 Your Cart is Empty</h2>
          <Link to="/">
            <button style={{ border: "1px solid white", backgroundColor: "#182a4b", color: "white", padding: "10px", width: "500px", borderRadius: "50px" }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <h1 className="mb-4">Shopping Cart</h1>
            {cartItems.map((item, index) => (
              <div key={index} className="card mb-3 p-3 d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img src={item.imgUrl || "https://via.placeholder.com/100"} alt={item.productName} height="60" width="60" />
                  <div>
                    <h5>{item.productName}</h5>
                    <p>${Number(item.price).toFixed(2)} x {item.quantity || 1} = ${(Number(item.price) * (item.quantity || 1)).toFixed(2)}</p>
                  </div>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <button className="btn btn-outline-secondary" onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button className="btn btn-outline-secondary" onClick={() => handleIncrease(item.id)}>+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card p-4">
              <h2>Cart Summary</h2>
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Tax</span>
                <span>${tax}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <button className="btn btn-primary mt-3 w-100">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
