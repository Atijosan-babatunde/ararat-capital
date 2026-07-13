import Reveal from "./Reveal";
import { Workflow, Route, TrendingUp, ClipboardList, Users, Cpu, ShieldCheck, Gauge, Headset, BarChart3, Repeat } from "lucide-react";

const AREAS = [
  { icon: Workflow, label: "Business processes" },
  { icon: Route, label: "Customer journeys" },
  { icon: TrendingUp, label: "Sales and revenue operations" },
  { icon: ClipboardList, label: "Management reporting" },
  { icon: Users, label: "Team roles and responsibilities" },
  { icon: Cpu, label: "Systems and technology" },
  { icon: ShieldCheck, label: "Governance and controls" },
  { icon: Gauge, label: "Operational efficiency" },
  { icon: Headset, label: "Service delivery" },
  { icon: BarChart3, label: "Data visibility" },
  { icon: Repeat, label: "Scalability and repeatability" },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">What We Do</span>
          <h2>Strengthening the operating model behind the business</h2>
          <p>Ararat Capital Holdings acquires and develops established businesses with the potential to grow through better structure, stronger operations and clearer strategic direction. We believe many established businesses do not need to be reinvented. They need to be understood properly, stabilised where necessary, and supported with the right operating model for growth.</p>
        </Reveal>

        <Reveal as="div">
          <div className="tag-carousel">
            <div className="tag-track">
              {[...AREAS, ...AREAS].map(({ icon: Icon, label }, i) => (
                <div className="tag-pill" key={`${label}-${i}`}>
                  <Icon size={16} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* <Reveal as="p" className="section-footnote">
          We believe many established businesses do not need to be reinvented. They need to be
          understood properly, stabilised where necessary, and supported with the right operating
          model for growth.
        </Reveal> */}
      </div>
    </section>
  );
}
