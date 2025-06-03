import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import Checkout from "../pages/Checkout";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Wishlist from "../pages/Wishlist";

function NotFound() {
  return (
    <h1 className="text-center text-danger fw-bold mt-5 mb-5">
      404 - Page Not Found
    </h1>
  );
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}