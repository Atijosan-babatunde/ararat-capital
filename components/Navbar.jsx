"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#approach", label: "Our Approach" },
  // { href: "#criteria", label: "What We Look For" },
  { href: "#process", label: "Our Process" },
  // { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar${scrolled || open ? " scrolled" : ""}`}>
      <div className="container">
        <a
          className="navbar-brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src="/images/logo.png" alt="Ararat Capital Holdings" />
          <span>Ararat Capital</span>
        </a>

        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
