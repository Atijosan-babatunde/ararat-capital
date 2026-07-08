"use client";

import Reveal from "./Reveal";

export default function ForOwners() {
  return (
    <section id="for-owners" className="section owners-banner">
      <div className="container">
        <Reveal className="owners-inner" as="div">
          <span className="eyebrow eyebrow-light">For Business Owners</span>
          <h2>Choosing the right buyer matters</h2>
          <p>
            You may be ready to retire, reduce your involvement, solve a succession challenge, or
            find a partner who can take the business into its next stage. At Ararat Capital
            Holdings, we offer more than capital — we bring a structured operating approach,
            practical transformation experience and a long-term mindset.
          </p>
          <p>
            We take time to understand your business before making changes. We care about
            protecting the trust you have built with your customers, employees and suppliers. Our
            aim is to create a smooth transition and help the business continue to thrive after
            acquisition.
          </p>

          <blockquote>
            Ararat Capital Holdings exists to acquire, strengthen and grow established businesses.
            We are interested in businesses with strong foundations, loyal customers and untapped
            potential — especially where clearer structure, better systems and a stronger
            operating model can unlock the next stage of growth.
            <footer>
              For owners considering succession or a responsible exit, we provide a thoughtful,
              capable and long-term home for the business they have built.
            </footer>
          </blockquote>

          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start a Confidential Conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
