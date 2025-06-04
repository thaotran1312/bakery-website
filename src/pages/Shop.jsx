import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import cakes from "../data/cakes.json";
import "./Shop.css";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(cakes.flatMap((cake) => cake.category)),
  ];

  const filtered = cakes
    .filter((cake) => cake.name.toLowerCase().includes(search.toLowerCase()))
    .filter((cake) =>
      category === "All" ? true : cake.category.includes(category)
    )
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

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
            Shop
          </h2>
          <p style={{ fontSize: "16px", fontWeight: "500" }}>
            <span style={{ color: "#000" }}>Home</span>{" "}
            <span style={{ color: "#fc7c7c" }}>// Shop</span>
          </p>
        </div>
      </section>
      <div
        className="container py-5"
        style={{ maxWidth: "990px", margin: "0 auto" }}
      >
        <h2 className="fw-bold text-center mb-4">SHOPPING NOW!!!</h2>

        {/* Filters */}
        <div className="d-flex flex-wrap justify-content-between gap-3 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ maxWidth: "250px" }}
          />

          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ maxWidth: "180px" }}
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{ maxWidth: "180px" }}
          >
            <option value="default">Sort by Price</option>
            <option value="asc">Price: Low - High</option>
            <option value="desc">Price: High - Low</option>
          </select>
        </div>

        {/* Product List */}
        <div className="row">
          {filtered.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <ProductCard
                id={item.id}
                image={item.image}
                name={item.name}
                short_description={item.short_description}
                category={item.category.join(", ")}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}