"use client";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* <img src="/images/logo.png" alt="Ararat Capital Holdings" className="hero-logo" /> */}
          <h1>Built on Solid Ground. Rising to the Next Summit.</h1>
          <p className="lead">Ararat Capital Holdings acquires and operates established, owner-led businesses — preserving what already works while providing the leadership and resources to reach new heights.</p>
          <div className="hero-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </a>
            {/* <span className="hero-email">
              or email <a href="mailto:info@araratcapitalholdings.com">info@araratcapitalholdings.com</a>
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
