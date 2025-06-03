import React, { useContext, useState } from "react";
import { CartContext } from "../pages/CartContext";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    alert("Order placed successfully!");
  };

  return (
    <>
      {/* Breadcrumb */}
      <section
        style={{
          backgroundColor: "#fdf6e9",
          padding: "60px 0",
          backgroundImage: "url('/src/assets/breadcrumbs-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          height: "370px",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "990px", margin: "0 auto" }}
        >
          <h2
            style={{
              fontWeight: "700",
              fontSize: "36px",
              marginBottom: "10px",
            }}
          >
            Checkout
          </h2>
          <p style={{ fontSize: "16px", fontWeight: "500" }}>
            <span style={{ color: "#000" }}>Home</span>{" "}
            <span style={{ color: "#fc7c7c" }}>// Checkout</span>
          </p>
        </div>
      </section>

      <div
        className="container py-5"
        style={{ maxWidth: "990px", margin: "0 auto" }}
      >
        <h2 className="fw-bold mb-4">Checkout</h2>

        <div className="row">
          {/* Order Summary */}
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold mb-3">Your Order</h4>
            <ul className="list-group">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image.replace("../", "/")}
                      alt={item.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "6px",
                        marginRight: "15px",
                      }}
                    />
                    <div>
                      <div className="fw-bold">{item.name}</div>
                      <small className="text-muted">
                        Quantity: {item.quantity}
                      </small>
                    </div>
                  </div>
                  <div className="fw-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}

              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-semibold">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-semibold">Shipping</span>
                <span>$5.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${(total + 5).toFixed(2)}</span>
              </li>
            </ul>
          </div>

          {/* Shipping Info */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-3"> Delivery Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address *</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone *</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Note</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button className="btn btn-dark px-4" type="submit">
                PLACE ORDER
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}