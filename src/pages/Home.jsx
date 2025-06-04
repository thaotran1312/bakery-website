import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import cakesData from "../data/cakes.json";
import ProductCard from "../components/ProductCard";
import blogData from "../data/blogs.json";
import { Link } from "react-router-dom";

export default function HomeBanner() {
  const [storyVisible, setStoryVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("cakes");
  const storyRef = useRef(null);

  // const categories = [
  //   { img: "/src/assets/category1.png", label: "PASTRY", keyword: "pastries" },
  //   { img: "/src/assets/category2.png", label: "BREAKFAST", keyword: "bread" },
  //   { img: "/src/assets/category3.png", label: "COFFEE CAKE", keyword: "cakes" },
  //   { img: "/src/assets/category4.png", label: "BAKE TOST", keyword: "cookies" },
  // ];

  const filteredCakes = cakesData.filter((cake) =>
    cake.category.includes(selectedCategory.toLowerCase())
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setStoryVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (storyRef.current) observer.observe(storyRef.current);

    return () => {
      if (storyRef.current) observer.unobserve(storyRef.current);
    };
  }, []);
  return (
    <>
      {/* Banner Section */}
      <section
        style={{
          backgroundColor: "#fdf6e9",
          position: "relative",
          overflow: "hidden",
          padding: "100px 0",
        }}
      >
        <div
          className="container d-flex justify-content-between align-items-center"
          style={{ maxWidth: "990px", margin: "0 auto" }}
        >
          <div>
            <h5 style={{ fontSize: "20px" }}>
              <span style={{ color: "#fc7c7c", fontWeight: "700" }}>70%</span>{" "}
              <span style={{ color: "#243a6e", fontWeight: "600" }}>
                Sale Off
              </span>
            </h5>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "1.2",
                marginBottom: "24px",
              }}
            >
              Quality Products
              <br /> Bakery Items
            </h1>
            <button
              className="btn text-white px-4 py-2 fw-bold"
              style={{ backgroundColor: "#fc7c7c", borderRadius: "12px" }}
            >
              SHOP NOW
            </button>
          </div>

          <div className="floating">
            <img
              src="/assets/floating_bread.png"
              alt="Floating Bread"
              style={{ width: "500px", maxWidth: "100%" }}
            />
          </div>
        </div>

        <img
          src="/assets/donut_left_1.png"
          alt="Donut Left"
          className="position-absolute"
          style={{ left: "30px", top: "40px" }}
        />
        <img
          src="/assets/pretzel_top.png"
          alt="Pretzel"
          className="position-absolute"
          style={{ top: "10px", left: "50%", transform: "translateX(-50%)" }}
        />
        <img
          src="/assets/croissant_right.png"
          alt="Croissant"
          className="position-absolute"
          style={{ right: "30px", top: "60px" }}
        />
        <img
          src="/assets/macaron_bottom.png"
          alt="Macaron"
          className="position-absolute"
          style={{ right: "100px", bottom: "20px" }}
        />
        <img
          src="/assets/donut_left_2.png"
          alt="Donut"
          className="donut-left"
          style={{ left: "30px", bottom: "20px" }}
        />
      </section>

      {/* Categories */}
      <section className="py-5 text-center">
        <div
          className="container d-flex justify-content-between flex-wrap gap-4"
          style={{ maxWidth: "990px", margin: "0 auto" }}
        >
          {[...new Set(cakesData.flatMap((cake) => cake.category))].map(
            (cat, i) => (
              <div
                key={i}
                className="category-item d-flex flex-column align-items-center"
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s",
                  width: "120px",
                }}
                onClick={() => setSelectedCategory(cat)}
              >
                <img
                  src={`/assets/category-icons/${cat}.png`}
                  alt={cat}
                  style={{ height: "80px", objectFit: "contain" }}
                />
                <p
                  className="fw-bold mt-2"
                  style={{
                    fontSize: "16px",
                    textTransform: "uppercase",
                    color: selectedCategory === cat ? "#e74c3c" : "#243a6e",
                  }}
                >
                  {cat}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Filtered Products */}
      <section className="py-5">
        <div
          className="container"
          style={{ maxWidth: "990px", margin: "0 auto" }}
        >
          <h2 className="text-center fw-bold mb-4">
            {selectedCategory.toUpperCase()} Items
          </h2>
          <div className="row">
            {filteredCakes.length === 0 ? (
              <p className="text-center">No products found.</p>
            ) : (
              filteredCakes.slice(0, 8).map((cake) => (
                <div className="col-md-4 mb-4" key={cake.id}>
                  <ProductCard
                    id={cake.id}
                    image={cake.image.replace("../", "/")}
                    name={cake.name}
                    short_description={cake.short_description}
                    category={cake.category.join(", ")}
                    price={cake.price}
                  />
                </div>
              ))
            )}
          </div>
          {/* Button View All */}
          <div className="text-center mt-4">
            <a href="/shop" className="btn btn-outline-dark px-4 rounded-pill">
              View All Cakes
            </a>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-5" style={{ backgroundColor: "#f7f8f9" }}>
        <div className="container text-center" style={{ maxWidth: "990px" }}>
          <h2 className="fw-bold mb-3">Latest Blog</h2>
          <p className="mb-5">
            Discover our latest baking stories, tips, and behind-the-scenes
            secrets.
          </p>

          <div className="row">
            {blogData.slice(0, 3).map((blog) => (
              <div key={blog.id} className="col-md-4 mb-4 d-flex">
                <div
                  className="card shadow-sm border-0 w-100 d-flex flex-column"
                  style={{ height: "100%" }}
                >
                  {/* Image */}
                  <div
                    style={{
                      height: "220px",
                      overflow: "hidden",
                      borderTopLeftRadius: "0.25rem",
                      borderTopRightRadius: "0.25rem",
                    }}
                  >
                    <img
                      src={blog.thumbnail}
                      className="w-100 h-100"
                      alt={blog.title}
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Body */}
                  <div className="card-body d-flex flex-column text-start">
                    <div>
                      <p className="text-muted small mb-1">{blog.date}</p>
                      <h5
                        className="card-title fw-bold mb-2"
                        style={{ minHeight: "48px" }}
                      >
                        {blog.title}
                      </h5>
                    </div>

                    <p className="card-text flex-grow-1">{blog.excerpt}</p>

                    <div className="mt-3">
                      <Link
                        to={`/blog/${blog.id}`}
                        className="btn btn-sm btn-primary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button View All */}
          <div className="text-center mt-4">
            <Link
              to="/blog"
              className="btn btn-outline-primary px-4 rounded-pill"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        ref={storyRef}
        className="py-5"
        style={{ backgroundColor: "#fff0e6" }}
      >
        <div
          className="container d-flex align-items-center justify-content-between flex-wrap"
          style={{ maxWidth: "990px", margin: "0 auto" }}
        >
          {/* LEFT TEXT */}
          <div
            className={`fade-in-left ${storyVisible ? "show" : ""}`}
            style={{ flex: "1 1 45%", minWidth: "280px", paddingRight: "30px" }}
          >
            <h2 className="fw-bold mb-3">Our Story</h2>
            <p>
              Founded in a cozy corner of the city, Bucker Bakery began as a
              humble passion project inspired by family recipes passed down
              through generations. What started with a handful of cookies and a
              dream has grown into a beloved destination for fresh, handcrafted
              baked goods.
            </p>
            <p>
              Our team is made up of passionate bakers who live and breathe
              pastries — we wake up before sunrise to bring joy to your
              breakfast table.
            </p>
            <p>
              We believe in tradition, creativity, and crafting each treat with
              care. Every croissant, tart, or loaf we bake has a story — and
              we’re honored to be part of yours.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`fade-in-right ${storyVisible ? "show" : ""}`}
            style={{ flex: "1 1 45%", minWidth: "280px" }}
          >
            <img
              src="/assets/ourstory.png"
              alt="Our Story"
              style={{
                maxWidth: "100%",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Customers Comments Section */}
      <section className="py-5">
        <div
          className="container"
          style={{ maxWidth: "990px", margin: "0 auto" }}
        >
          <h2 className="text-center fw-bold mb-5">What Our Customers Say</h2>
          <div className="d-flex justify-content-between gap-4 flex-wrap">
            {[
              {
                name: "Trump",
                avatar: "/assets/customer1.png",
                comment:
                  "Delicious and fresh products. Highly recommend this bakery!",
              },
              {
                name: "Taylor",
                avatar: "/assets/customer2.png",
                comment:
                  "Great taste and quality. I order weekly for my family. Luv thes kind of cake",
              },
              {
                name: "Putin",
                avatar: "/assets/customer3.png",
                comment:
                  "Fast delivery and lovely packaging. 10/10 experience!",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center" style={{ width: "30%" }}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="rounded-circle mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <p className="fw-bold">{item.name}</p>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {item.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
