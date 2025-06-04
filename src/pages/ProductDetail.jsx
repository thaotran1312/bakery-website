import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import cakesData from "../data/cakes.json";
import ProductCard from "../components/ProductCard";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const { addToCart, setShowCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    const found = cakesData.find((cake) => cake.id === parseInt(id));
    setProduct(found);
    setMainImage(found?.image.replace("../", "/") || "");
    setQuantity(1);
    setActiveTab("description");
  }, [id]);

  if (!product) return <p className="text-center">Product not found.</p>;

  const isWished = wishlist.some((item) => item.id === product.id);

  const changeQty = (type) => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc") setQuantity(quantity + 1);
  };

  const relatedProducts = cakesData.filter(
    (item) =>
      item.id !== product.id &&
      item.category.some((cat) => product.category.includes(cat))
  );

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      <span className="stars">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars)
            return (
              <span key={i} className="star full">
                ★
              </span>
            );
          if (i === fullStars && hasHalfStar)
            return (
              <span key={i} className="star half">
                ★
              </span>
            );
          return (
            <span key={i} className="star empty">
              ☆
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <>
      {/* Breadcrumb */}
      <section
        style={{
          backgroundColor: "#fdf6e9",
          padding: "60px 0",
          backgroundImage: "url('/assets/breadcrumbs-bg.png')",
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
            {product.name}
          </h2>
          <p style={{ fontSize: "16px", fontWeight: "500" }}>
            <span style={{ color: "#000" }}>Home</span>{" "}
            <span style={{ color: "#fc7c7c" }}>// Shop</span>
          </p>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-5">
        <div
          className="container"
          style={{ maxWidth: "990px", margin: "0 auto" }}
        >
          <div className="row mb-5 d-flex align-items-center justify-content-start">
            {/* Image */}
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={mainImage}
                alt={product.name}
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  height: "500px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>

            {/* Info */}
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-2 mb-2">
                <h3 className="fw-bold mb-0">{product.name}</h3>
                <button
                  className="btn-fav-detail"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist({
                      id: product.id,
                      image: product.image,
                      name: product.name,
                      short_description: product.short_description,
                      category: product.category.join(", "),
                      price: product.price,
                    });
                  }}
                >
                  <img
                    src={
                      isWished
                        ? "/assets/heart-filled.png"
                        : "/assets/heart.png"
                    }
                    alt="wishlist"
                    style={{ width: "18px", height: "18px" }}
                  />
                </button>
              </div>

              <h4 className="text-dark mb-2">
                ${Number(product.price).toFixed(2)}
              </h4>
              <p>
                {renderStars(
                  product.reviews?.reduce((acc, r) => acc + r.rating, 0) /
                    (product.reviews?.length || 1)
                )}{" "}
                <span className="text-muted">
                  ({product.reviews?.length || 0} reviews)
                </span>
              </p>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                {product.short_description}
              </p>
              <div className="d-flex align-items-center gap-2 mb-3">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => changeQty("dec")}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => changeQty("inc")}
                >
                  +
                </button>
                <button
                  className="btn btn-primary px-4"
                  onClick={() => {
                    addToCart(product, quantity);
                    setShowCart(true);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
              <img
                src="/assets/payment_cards.png"
                alt="Payments"
                style={{ 
                  width: "150px",
                  height: "50px" }}
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="d-flex justify-content-center gap-3 mb-4">
            {["description", "information", "reviews"].map((key) => (
              <button
                key={key}
                className={`tab-button ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>

          {activeTab === "description" && (
            <p
              className="text-muted text-center"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              {product.description}
            </p>
          )}

          {activeTab === "information" && (
            <table
              className="table table-bordered text-center"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              <tbody>
                <tr>
                  <th>Compositions</th>
                  <td>{product.information.compositions}</td>
                </tr>
                <tr>
                  <th>Style</th>
                  <td>{product.information.style}</td>
                </tr>
                <tr>
                  <th>Properties</th>
                  <td>{product.information.properties}</td>
                </tr>
              </tbody>
            </table>
          )}

          {activeTab === "reviews" && (
            <div className="row mt-4 justify-content-center">
              <div className="col-md-8">
                <h5>Customer Reviews</h5>
                {product.reviews?.length > 0 ? (
                  product.reviews.map((r, idx) => (
                    <div key={idx} className="mb-3 border-bottom pb-3">
                      <p className="mb-1">
                        {renderStars(r.rating)}
                        <span className="text-muted small ms-2">
                          ({r.rating} stars)
                        </span>
                      </p>
                      <p className="fw-bold mb-1">{r.title}</p>
                      <small className="text-muted">{r.date}</small>
                      <p className="text-muted mt-2">{r.comment}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            </div>
          )}

          {/* Related Products */}
          <div className="text-center mt-5">
            <h2 className="fw-bold">Related Products</h2>
            <p className="text-muted">
              Customers also enjoyed these delicious options.
            </p>
            <div
              className="d-flex gap-3 overflow-auto px-3 py-4"
              style={{
                scrollSnapType: "x mandatory",
                width: "100%",
                flexWrap: "nowrap",
              }}
            >
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  style={{
                    flex: "0 0 calc(33.33% - 20px)",
                    scrollSnapAlign: "start",
                  }}
                >
                  <ProductCard
                    id={item.id}
                    image={item.image.replace("../", "/")}
                    name={item.name}
                    short_description={item.short_description}
                    category={item.category.join(", ")}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
