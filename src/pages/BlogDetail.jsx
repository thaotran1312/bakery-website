import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogs.json";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="text-center mt-5">Blog not found.</p>;

  return (
    <div
      className="container py-5"
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <Link to="/blog" className="btn btn-outline-dark mb-3">
        ← Back to Blog
      </Link>
      <h2 className="fw-bold mb-2">{blog.title}</h2>
      <p className="text-muted mb-4">{blog.date}</p>
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="img-fluid rounded mb-4"
        style={{
          width: "100%",
        }}
      />
      <p>{blog.content}</p>
    </div>
  );
}
