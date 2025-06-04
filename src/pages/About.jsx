import React from "react";
import "./About.css";

const teamData = [
  {
    id: 1,
    name: "Sarah Connor",
    position: "Cake Designer",
    image: "/assets/team1.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    position: "Pastry Chef",
    image: "/assets/team2.jpg",
  },
  {
    id: 3,
    name: "Emma Watson",
    position: "Bakery Manager",
    image: "/assets/team3.jpg",
  },
];

export default function About() {
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
            About Us
          </h2>
          <p style={{ fontSize: "16px", fontWeight: "500" }}>
            <span style={{ color: "#000" }}>Home</span>{" "}
            <span style={{ color: "#fc7c7c" }}>// About Us</span>
          </p>
        </div>
      </section>

      <div
        className="container"
        style={{ maxWidth: "990px", margin: "0 auto" }}
      >
        <div className="my-5 position-relative text-center">
          <img
            src="/assets/video_banner.jpg"
            alt="Video Banner"
            className="img-fluid w-100 rounded"
          />
          <a
            href="https://www.youtube.com/watch?v=wLtVgLt7dBA"
            target="_blank"
            rel="noopener noreferrer"
            className="position-absolute top-50 start-50 translate-middle"
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <img src="/assets/icon_youtube.png" alt="Play" width="40" />
          </a>
        </div>

        {/* Vision + Mission */}
        <div className="row my-5">
          <div className="col-md-12 mb-4">
            <h4 className="fw-bold mb-3">Our Vision</h4>
            <p>
              Our vision is to be a leading name in the world of artisanal
              desserts, recognized for our unwavering commitment to quality,
              creativity, and customer delight. We strive to redefine the sweet
              experience by blending traditional baking methods with innovative
              flavors, creating a world where every bite tells a story.
              <br />
              We envision a future where our bakery is not just a place to buy
              pastries, but a destination where people come to connect,
              celebrate, and create lasting memories through the simple joy of a
              perfectly baked treat. Whether it’s a daily indulgence or a
              special celebration, we aspire to be part of life’s sweetest
              moments — both locally and beyond.
            </p>
          </div>
          <div className="col-md-12 mb-4">
            <h4 className="fw-bold mb-3">Our Mission</h4>
            <p>
              Our mission is to bring joy, warmth, and comfort to our customers
              through thoughtfully crafted baked goods made with the highest
              standards of quality and care. Every product we create is a
              reflection of our passion for baking and our dedication to
              excellence — from sourcing premium, natural ingredients to the
              precision of our baking techniques.
              <br />
              We are committed to delivering not just desserts, but experiences:
              a flaky croissant that transports you to a Parisian café, a
              decadent cake that becomes the centerpiece of your celebration, or
              a cookie that brings back childhood memories.
              <br />
              Through sustainable practices, personalized service, and a deep
              respect for culinary craftsmanship, we aim to build lasting
              relationships with our customers and contribute positively to the
              communities we serve.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container my-5"
        style={{ maxWidth: "990px", margin: "0 auto" }}
      >
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row justify-content-center">
          {teamData.map((member) => (
            <div className="col-md-4 mb-4" key={member.id}>
              <div className="card team-card p-2 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img-top team-img"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <p className="card-text">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
