import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../pages/WishlistContext";
import "./ProductCard.css";

export default function ProductCard({
  id,
  image,
  name,
  short_description,
  category,
  price,
}) {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useWishlist();

  const isWished = wishlist.some((item) => item.id === id);

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="product-card shadow-sm rounded"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="product-img-wrapper position-relative">
        <img src={image} alt={name} className="product-img" />
        <button
          className="btn-fav position-absolute top-0 end-0 m-2"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist({
              id,
              image,
              name,
              short_description,
              category,
              price,
            });
          }}
        >
          <img
            src={
              isWished
                ? "/assets/heart-filled.png"
                : "/assets/heart.png"
            }
            alt="fav"
            style={{ width: "18px", height: "18px" }}
          />
        </button>
      </div>
      <div className="product-info p-3">
        <h5 className="fw-bold">{name}</h5>
        <p className="text-muted small mb-1">{short_description}</p>
        <div className="d-flex flex-wrap gap-1 mb-2 mt-2">
          {category.split(",").map((cat, i) => (
            <span key={i} className="badge bg-warning text-dark">
              {cat.trim()}
            </span>
          ))}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <strong className="text-danger">${Number(price).toFixed(2)}</strong>
          <button className="btn btn-sm btn-danger rounded-pill px-3">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  short_description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};