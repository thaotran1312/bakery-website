import React from "react";
import { useWishlist } from "./WishlistContext";
import { useNavigate } from "react-router-dom";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const navigate = useNavigate();

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
            Wishlist
          </h2>
          <p style={{ fontSize: "16px", fontWeight: "500" }}>
            <span style={{ color: "#000" }}>Home</span>{" "}
            <span style={{ color: "#fc7c7c" }}>// Wishlist</span>
          </p>
        </div>
      </section>

      <div
        className="container py-5"
        style={{ maxWidth: "990px", margin: "0 auto" }}
      >
        <h3 className="mb-4" style={{ fontWeight: "600" }}>
          My Wishlist
        </h3>
        {wishlist.length === 0 ? (
          <div className="text-center text-muted py-5">
            <p className="fs-5">Your wishlist is currently empty.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">Remove</th>
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">View Detail</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => toggleWishlist(item)}
                      >
                        &times;
                      </button>
                    </td>
                    <td>
                      <img
                        src={item.image.replace("../", "/")}
                        alt={item.name}
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </td>
                    <td>
                      <strong>{item.name}</strong>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "14px" }}
                      >
                        {item.short_description}
                      </p>
                    </td>
                    <td>
                      <span className="text-danger fw-bold">
                        ${parseFloat(item.price).toFixed(2)}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-dark px-3 rounded-pill"
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        View Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
