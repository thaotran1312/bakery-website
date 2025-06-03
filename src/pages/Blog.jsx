import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogs.json";

export default function BlogList() {
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
            Blog
          </h2>
          <p style={{ fontSize: "16px", fontWeight: "500" }}>
            <span style={{ color: "#000" }}>Home</span>{" "}
            <span style={{ color: "#fc7c7c" }}>// Blog</span>
          </p>
        </div>
      </section>

      <div
        className="container py-5"
        style={{ maxWidth: "990px", margin: "0 auto" }}
      >
        <h2 className="fw-bold text-center mb-4">Our Blog</h2>
        <div className="row">
          {blogData.map((blog) => (
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
                <div className="card-body d-flex flex-column">
                  <div>
                    <h5
                      className="card-title fw-bold mb-1"
                      style={{ minHeight: "48px" }}
                    >
                      {blog.title}
                    </h5>
                    <p className="card-text text-muted small mb-2">
                      {blog.date}
                    </p>
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
      </div>
    </>
  );
}
