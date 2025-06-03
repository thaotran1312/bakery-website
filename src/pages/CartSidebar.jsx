import React from "react";
import { useCart } from "./CartContext";
import "./CartSidebar.css";
import { Link } from "react-router-dom";

export default function CartSidebar() {
  const { cart, setShowCart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay" onClick={() => setShowCart(false)}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header d-flex justify-content-between align-items-center mb-3">
          <h5 className="m-0">Cart</h5>
          <button
            onClick={() => setShowCart(false)}
            className="cart-close-btn"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="d-flex mb-3 align-items-center" key={item.id}>
                <img
                  src={item.image.replace("../", "/")}
                  alt={item.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    marginRight: "10px",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <p className="mb-1">{item.name}</p>
                  <small>
                    {item.quantity} x ${item.price.toFixed(2)}
                  </small>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cart-remove-btn"
                  aria-label="Remove item"
                >
                  &times;
                </button>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between">
              <strong>Total:</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <Link to="/checkout">
              <button
                className="btn btn-dark w-100 mt-3"
                onClick={() => setShowCart(false)}
              >
                Checkout
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}