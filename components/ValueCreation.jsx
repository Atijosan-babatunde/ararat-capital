import Reveal from "./Reveal";
import { LayoutGrid, Workflow, Cpu, BarChart3, ShieldCheck, Handshake, Repeat } from "lucide-react";

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

export default function ValueCreation() {
  return (
    <section id="value-creation" className="section">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">How We Create Value</span>
          <h2>We create value by strengthening the foundations of a business</h2>
        </Reveal>

        <div className="value-grid">
          {AREAS.map((a) => (
            <Reveal className="value-card" key={a.title}>
              <div className="icon">
                <a.icon size={24} />
              </div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
