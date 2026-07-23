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
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Formspree request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section owners-banner">
      <div className="container">
        {/* <div className="contact-wrap"> */}
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
        {/* </div> */}
      </div>
    </section>
  );
}
