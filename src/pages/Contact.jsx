import React from "react";

export default function Contact() {
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
          <h2 style={{ fontWeight: "700", fontSize: "36px", marginBottom: "10px" }}>
            Contact Us
          </h2>
          <p style={{ fontSize: "16px", fontWeight: "500" }}>
            <span style={{ color: "#000" }}>Home</span>{" "}
            <span style={{ color: "#fc7c7c" }}>// Contact Us</span>
          </p>
        </div>
      </section>

      {/* Main Contact */}
      <div className="container my-5" style={{ maxWidth: "990px" }}>
        <div className="row">
          {/* LEFT: Title + Search + Store Info */}
          <div className="col-md-6 pe-md-5">
            <h2 className="fw-bold" style={{ fontSize: "36px", lineHeight: "1.3" }}>
              We Are Here To Help You!
              <br />
              Please Contact Us.
            </h2>

            {/* Search input */}
            <div className="input-group my-4" style={{ maxWidth: "400px" }}>
              <input
                type="text"
                className="form-control py-2"
                placeholder="Enter your country or city"
              />
              <button
                className="btn text-white"
                style={{ backgroundColor: "#fc7c7c" }}
              >
                🔍
              </button>
            </div>

            {/* Store Info x2 */}
            {[1, 2].map((_, i) => (
              <div className="mb-4" key={i}>
                <h5 className="fw-bold">STORE IN NEW WORK</h5>
                <p className="mb-1">Your address goes here.</p>
                <p className="mb-1">0123456789</p>
                <p className="mb-1">demo@example.com</p>
                <p className="mb-1">www.example.com</p>
                <p className="text-danger fw-bold">SEE ON THE MAP</p>
              </div>
            ))}
          </div>

          {/* RIGHT: Contact Form */}
          <div className="col-md-6 d-flex justify-content-end">
            <div
              className="p-5"
              style={{
                width: "470px",
                height: "756px",
                backgroundColor: "#f9f9f9",
                backgroundImage: "url('/src/assets/contact_bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              <h4 className="fw-bold mb-4">Send A Quest</h4>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name*"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-Mail*"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message Hare"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn text-white px-4 py-2 fw-bold"
                  style={{ backgroundColor: "#fc7c7c", borderRadius: "16px" }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="row mt-5">
          <div className="col-12">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.133661784316!2d106.70080661526093!3d10.800995161707651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528dce56f7727%3A0x78c85fc55ad8c070!2zQmFrZXJ5IFNob3A!5e0!3m2!1sen!2s!4v1678552831456!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}