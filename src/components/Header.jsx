import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import cakesData from "../data/cakes.json";
import { useCart } from "../pages/CartContext";
import "./Header.css";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { cart, setShowCart } = useCart();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = cakesData.filter((cake) =>
    cake.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Header Top */}
      <div
        className="d-flex align-items-center"
        style={{
          backgroundColor: "#243a6e",
          color: "#cfd4df",
          height: "60px",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center px-3 w-100"
          style={{ maxWidth: "990px", margin: "0 auto" }}
        >
          <div>World Wide Completely Free Returns and Free Shipping</div>

          <div className="d-flex align-items-center gap-3">
            <span>+00 123 456 789</span>
            <div style={{ width: "2px", height: "20px", backgroundColor: "#fc7c7c" }}></div>
            <span>demo@example.com</span>
            <div style={{ width: "2px", height: "20px", backgroundColor: "#fc7c7c" }}></div>
            <span>Account</span>
          </div>
        </div>
      </div>

      {/* Logo + Navbar */}
      <div
        className="bg-white border-bottom position-relative"
        style={{ maxWidth: "990px", margin: "0 auto", display: "flex", alignItems: "center", height: "125px" }}
      >
        {/* Logo */}
        <div
          style={{
            width: "152px",
            height: "125px",
            backgroundColor: "#2b4174",
            borderRadius: "0 0 55px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NavLink to="/" className="d-block">
            <img src="/src/assets/logo.png" alt="Bucker Logo" width="132" height="80" className="d-block" />
          </NavLink>
        </div>

        {/* Menu */}
        <div className="flex-grow-1 text-center" style={{ paddingTop: "35px", paddingBottom: "35px" }}>
          <ul
            className="d-flex list-unstyled mb-0 justify-content-center align-items-center"
            style={{ gap: "35px", fontSize: "16px", fontWeight: "500", color: "#454545" }}
          >
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link custom-link ${isActive ? "active-nav" : ""}`}>
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => `nav-link custom-link ${isActive ? "active-nav" : ""}`}>
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Shop" className={({ isActive }) => `nav-link custom-link ${isActive ? "active-nav" : ""}`}>
                SHOP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Blog" className={({ isActive }) => `nav-link custom-link ${isActive ? "active-nav" : ""}`}>
                BLOG
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => `nav-link custom-link ${isActive ? "active-nav" : ""}`}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Search UI */}
        {showSearch && (
          <div
            ref={searchRef}
            className="position-absolute bg-white shadow p-3"
            style={{ top: "70%", right: "100px", width: "300px", zIndex: 9999, borderRadius: "10px" }}
          >
            <input
              type="text"
              placeholder="Search cake..."
              className="form-control mb-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="list-unstyled mb-0" style={{ maxHeight: "200px", overflowY: "auto" }}>
              {filtered.map((cake) => (
                <li
                  key={cake.id}
                  className="py-1 px-2 hover-effect"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/product/${cake.id}`);
                    setShowSearch(false);
                    setSearchTerm("");
                  }}
                >
                  {cake.name}
                </li>
              ))}
              {filtered.length === 0 && <li className="text-muted px-2">No results found</li>}
            </ul>
          </div>
        )}

        {/* Icons */}
        <div className="d-flex gap-3 align-items-center px-3">
          <button
            className="btn p-0 border-0 bg-transparent"
            style={{ width: "25px", height: "25px" }}
            onClick={() => setShowSearch(true)}
          >
            <img src="/src/assets/search.png" alt="search" style={{ width: "100%", height: "100%" }} />
          </button>

          <button
            className="btn p-0 border-0 bg-transparent"
            style={{ width: "25px", height: "25px" }}
            onClick={() => navigate("/wishlist")}
          >
            <img src="/src/assets/heart.png" alt="wishlist" style={{ width: "100%", height: "100%" }} />
          </button>

          <button
            className="btn p-0 border-0 bg-transparent position-relative"
            style={{ width: "25px", height: "25px" }}
            onClick={() => setShowCart(true)}
          >
            <img src="/src/assets/cart.png" alt="cart" style={{ width: "100%", height: "100%" }} />
            {cart.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;