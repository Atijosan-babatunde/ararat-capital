"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "This field is mandatory";
    if (!form.email.trim()) {
      next.email = "This field is mandatory";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "The e-mail address is invalid";
    }
    if (!form.message.trim()) next.message = "This field is mandatory";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      // TODO: wire this up to a real form backend before going live, e.g.:
      //   1. Formspree (easiest): create a form at https://formspree.io,
      //      then set the action below to your endpoint and use method="POST".
      //   2. Or build a Next.js API route (app/api/contact/route.js) that
      //      sends the email via Resend/SendGrid/Nodemailer.
      //
      // For now this just simulates success so the form is fully testable.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section owners-banner">
      <div className="container">
        <div className="contact-wrap">
          <Reveal className="owners-inner owners-inner-left" as="div">
            <span className="eyebrow eyebrow-light">For Business Owners</span>
            <h2>Choosing the right buyer matters</h2>
            {/* <p>
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
            </p> */}

            <blockquote>
              Ararat Capital Holdings exists to acquire, strengthen and grow established businesses. We are interested in businesses with strong foundations, loyal customers and untapped potential — especially where clearer structure, better systems and a stronger operating model can unlock the next stage of growth.
              <footer>For owners considering succession or a responsible exit, we provide a thoughtful, capable and long-term home for the business they have built.</footer>
            </blockquote>
          </Reveal>

          <Reveal className="contact-form" as="div">
            <span className="eyebrow">Contact Us</span>
            <h3>Let&apos;s start a conversation</h3>
            {status === "success" ? (
              <div className="form-success">Thank you! We will get back to you as soon as possible.</div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <label htmlFor="name">Name*</label>
                  <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>

                <div className="form-row">
                  <label htmlFor="email">E-mail*</label>
                  <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>

                <div className="form-row">
                  <label htmlFor="message">Message*</label>
                  <textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>

                {status === "error" && (
                  <div className="form-error" style={{ marginBottom: 16 }}>
                    There was an error submitting your message. Please try again.
                  </div>
                )}

                <button type="submit" className="btn btn-outline-navy" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
