"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Search, ShieldCheck, LayoutGrid, Settings2, TrendingUp, HeartHandshake, ChevronDown } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Search,
    title: "Understand before changing",
    desc: "We begin by understanding how the business truly operates — the people, processes, systems, customer experience, revenue flows, pain points and operational risks. We take time to understand what has made the business successful before deciding what needs to improve.",
  },
  {
    icon: ShieldCheck,
    title: "Protect what works",
    desc: "Every good business has strengths that should be protected — customer relationships, staff knowledge, brand reputation, supplier relationships or founder-led ways of working. We preserve the parts of the business that create value while improving the areas that limit growth.",
  },
  {
    icon: LayoutGrid,
    title: "Design the right operating model",
    desc: "A business can only scale properly when its operating model is clear. We help define how the business should work across people, process, technology, data, governance and performance management.",
  },
  {
    icon: Settings2,
    title: "Improve systems and processes",
    desc: "Many established businesses rely on manual processes, fragmented tools, spreadsheets, informal knowledge and founder dependency. We look for practical ways to improve workflows, introduce better systems, and make the business easier to manage.",
  },
  {
    icon: TrendingUp,
    title: "Build for sustainable growth",
    desc: "Our focus is not short-term change. We aim to build businesses that can operate more effectively, serve customers better, support employees properly, and grow in a controlled way.",
  },
  {
    icon: HeartHandshake,
    title: "Lead with integrity and continuity",
    desc: "We understand that selling a business is personal. We take a respectful approach to succession, transition and post-acquisition integration — our aim is to protect the business, its people and its legacy.",
  },
];

export default function Approach() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="approach" className="section section-alt">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">Our Approach</span>
          <h2>How we operate</h2>
        </Reveal>

        <Reveal className="approach-accordion" as="div">
          {PRINCIPLES.map((p, i) => {
            const isOpen = i === openIndex;
            return (
              <div className={`accordion-item${isOpen ? " open" : ""}`} key={p.title}>
                <button
                  type="button"
                  className="accordion-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="accordion-icon">
                    <p.icon size={20} />
                  </span>
                  <span className="accordion-title">{p.title}</span>
                  <ChevronDown size={18} className="accordion-chevron" />
                </button>
                <div className="accordion-panel">
                  <div className="accordion-panel-inner">
                    <p>{p.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
