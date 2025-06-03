import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#243a6e",
        color: "#cfd4df",
        paddingTop: "60px",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "990px", margin: "0 auto", paddingBottom: "60px" }}
      >
        {/* Top cards: Free shipping, Card Payments, Easy Returns */}
        <div
          className="d-flex justify-content-between mb-4"
          style={{
            paddingBottom: "30px",
          }}
        >
          <div className="d-flex align-items-center" style={{ gap: "28px" }}>
            <img
              src="/src/assets/free_shipping.png"
              alt="Free Shipping"
              width="70"
            />
            <div>
              <h5 className="fw-bold mb-1">Free Shipping</h5>
              <p style={{ fontSize: "14px", margin: 0 }}>
                Capped at $39 per order
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center" style={{ gap: "28px" }}>
            <img
              src="/src/assets/card_payment.png"
              alt="Card Payments"
              width="70"
            />
            <div>
              <h5 className="fw-bold mb-1">Card Payments</h5>
              <p style={{ fontSize: "14px", margin: 0 }}>
                12 Months Installments
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center" style={{ gap: "28px" }}>
            <img
              src="/src/assets/easy_returns.png"
              alt="Easy Returns"
              width="70"
            />
            <div>
              <h5 className="fw-bold mb-1">Easy Returns</h5>
              <p style={{ fontSize: "14px", margin: 0 }}>
                Shop With Confidence
              </p>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#cfd4df", width: "100%", opacity: 0.5 }} />

        {/* Main footer content */}
        <div className="d-flex justify-content-between text-start pt-5 mt-3">
          {/* CONTACT */}
          <div className="col-4 w-25 pe-4">
            <h5 className="fw-bold">CONTACT US</h5>
            <p style={{ fontSize: "14px" }}>
              If you have any question, please contact us at{" "}
              <span style={{ color: "#fc7c7c", fontWeight: "bold" }}>
                demo@example.com
              </span>
            </p>
            <div className="d-flex align-items-start gap-2 mt-2">
              <img
                src="/src/assets/icon_location.png"
                alt="Location"
                width="26"
                height="26"
              />
              <span>Your address goes here. 123, Address.</span>
            </div>
            <div className="d-flex align-items-start gap-2 mt-2">
              <img
                src="/src/assets/icon_phone.png"
                alt="Phone"
                width="26"
                height="26"
              />
              <span>
                <p className="mb-0">+ 0 123 456 789</p>
                <p className="mb-0">+ 0 123 456 789</p>
              </span>
            </div>
          </div>
          {/* INFORMATION + ACCOUNT */}
          <div className="col-4 d-flex">
            {/* INFORMATION */}
            <div
              className="w-50"
              style={{
                borderLeft: "1px solid rgba(207, 212, 223, 0.5)",
                paddingLeft: "55px",
              }}
            >
              <h5 className="fw-bold">INFORMATION</h5>
              <ul className="list-unstyled" style={{ fontSize: "14px" }}>
                <li>About us</li>
                <li>Delivery info</li>
                <li>Privacy Policy</li>
                <li>Sales</li>
                <li>Terms & Conditions</li>
                <li>Shipping Policy</li>
                <li>EMI Payment</li>
              </ul>
            </div>

            {/* ACCOUNT */}
            <div className="w-50 ps-5">
              <h5 className="fw-bold">ACCOUNT</h5>
              <ul className="list-unstyled" style={{ fontSize: "14px" }}>
                <li>My account</li>
                <li>My orders</li>
                <li>Returns</li>
                <li>Shipping</li>
                <li>Wishlist</li>
                <li>How Does It Work</li>
                <li>Merchant Sign Up</li>
              </ul>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div
            className="w-25"
            style={{
              borderLeft: "1px solid rgba(207, 212, 223, 0.5)",
              paddingLeft: "55px",
            }}
          >
            <h5 className="fw-bold">NEWSLETTER</h5>
            <p style={{ fontSize: "14px" }}>
              If you have any question, please contact us at{" "}
              <span style={{ color: "#fc7c7c", fontWeight: "bold" }}>
                Send Us a Email
              </span>
            </p>
            <div className="d-flex">
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  fontSize: "14px"
                }}
                className="form-control rounded-start rounded-end"
              />
              <button
                className="btn rounded-start rounded-end"
                style={{ backgroundColor: "#fc7c7c", color: "white" }}
              >
                →
              </button>
            </div>
            <div className="mt-3">
              <img
                src="/src/assets/payment_cards.png"
                alt="Payment Options"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          borderColor: "#cfd4df",
          width: "990px",
          margin: "0 auto",
          opacity: 0.5,
        }}
      />
      <div className="text-center py-3" style={{ fontSize: "14px" }}>
        © 2022 Bucker. Made With ❤️ by CodeCarnival
      </div>
    </footer>
  );
}

export default Footer;