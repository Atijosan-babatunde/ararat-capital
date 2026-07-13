"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { LayoutGrid, Workflow, Cpu, BarChart3, ShieldCheck, Handshake, Repeat, ChevronLeft, ChevronRight } from "lucide-react";

const AREAS = [
  {
    icon: LayoutGrid,
    title: "Operating model improvement",
    desc: "We review how the business is structured and how work flows across teams, systems and customers. We then identify what needs to change to support stability and growth.",
  },
  {
    icon: Workflow,
    title: "Process optimisation",
    desc: "We improve inefficient, manual or inconsistent processes so the business can operate with greater clarity and control.",
  },
  {
    icon: Cpu,
    title: "Technology enablement",
    desc: "We identify where better tools, automation or systems can reduce friction, improve customer experience and support better management decisions.",
  },
  {
    icon: BarChart3,
    title: "Data and reporting",
    desc: "We help businesses move from informal decision-making to clearer performance visibility through dashboards, reporting and useful management information.",
  },
  {
    icon: ShieldCheck,
    title: "Governance and controls",
    desc: "We strengthen accountability, roles, responsibilities, risk management and operational controls.",
  },
  {
    icon: Handshake,
    title: "Customer and revenue operations",
    desc: "We assess how the business wins, serves and retains customers, then improve the customer journey and commercial operating rhythm.",
  },
  {
    icon: Repeat,
    title: "Scalability",
    desc: "We help the business become less dependent on individual people or informal ways of working, making it easier to grow, hire, delegate and expand.",
  },
];

const TOTAL = AREAS.length;
const CLONES = 2; // matches the max number of cards visible at once (desktop)
const SLIDES = [...AREAS.slice(TOTAL - CLONES), ...AREAS, ...AREAS.slice(0, CLONES)];
const AUTOPLAY_MS = 4000;

export default function ValueCreation() {
  const [index, setIndex] = useState(CLONES);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef(null);

  const advance = (dir) => setIndex((i) => i + dir);

  const restartTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => advance(1), AUTOPLAY_MS);
  };

  useEffect(() => {
    restartTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleTransitionEnd = () => {
    if (index >= CLONES + TOTAL) {
      setAnimate(false);
      setIndex(index - TOTAL);
    } else if (index < CLONES) {
      setAnimate(false);
      setIndex(index + TOTAL);
    }
  };

  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const goTo = (i) => {
    setIndex(i + CLONES);
    restartTimer();
  };

  const shift = (dir) => {
    advance(dir);
    restartTimer();
  };

  const activeDot = ((index - CLONES) % TOTAL + TOTAL) % TOTAL;

  return (
    <section id="value-creation" className="section">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">How We Create Value</span>
          <h2>We create value by strengthening the foundations of a business</h2>
        </Reveal>

        <Reveal as="div">
          <div className="value-carousel" onMouseEnter={() => clearInterval(timerRef.current)} onMouseLeave={restartTimer}>
            <button type="button" className="value-carousel-arrow prev" aria-label="Previous" onClick={() => shift(-1)}>
              <ChevronLeft size={20} />
            </button>

            <div className="value-viewport">
              <div
                className="value-track"
                style={{ "--index": index, transition: animate ? undefined : "none" }}
                onTransitionEnd={handleTransitionEnd}
              >
                {SLIDES.map((a, i) => (
                  <div className="value-slide" key={`${a.title}-${i}`}>
                    <div className="value-card">
                      <div className="icon">
                        <a.icon size={24} />
                      </div>
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button type="button" className="value-carousel-arrow next" aria-label="Next" onClick={() => shift(1)}>
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="value-carousel-dots">
            {AREAS.map((a, i) => (
              <button
                key={a.title}
                type="button"
                className={`value-dot${i === activeDot ? " active" : ""}`}
                aria-label={`Go to ${a.title}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
