import Reveal from "./Reveal";
import { Building2, Users, Compass, ShieldCheck } from "lucide-react";

const TRAITS = [
  { icon: Building2, label: "Privately Held" },
  { icon: Users, label: "Hands-On Operators" },
  { icon: Compass, label: "Structured Approach" },
  { icon: ShieldCheck, label: "Long-Term Stewardship" },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="section section-alt">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">Who We Are</span>
          <h2>A responsible home for good businesses</h2>
        </Reveal>

        <Reveal as="p" className="lead-paragraph">
          Ararat Capital Holdings is a privately held acquisition and holding company focused on acquiring, operating and growing established businesses with strong fundamentals and long-term potential.
        </Reveal>

        <div className="who-we-are-columns">
          <Reveal>
            <p>We are not passive investors. We are hands-on business builders with a structured approach to understanding how businesses operate, where value is created, and how performance can be improved.</p>
            <p style={{ marginBottom: 0 }}>Our background in business analysis, target operating model design, process improvement and technology-enabled transformation allows us to look beyond the numbers. We assess how a business works at every level — its customers, people, processes, systems, data, governance, revenue model and operational structure.</p>
          </Reveal>
          <Reveal>
            <p>This gives us a practical advantage when acquiring and scaling businesses. We can identify what already works, protect the strengths of the business, and introduce the right level of structure to help it grow sustainably.</p>
            <p style={{ marginBottom: 0 }}>We are particularly interested in owner-led businesses where the founder is considering succession, retirement, a phased exit, or a partner who can support the next stage of growth. Our goal is to provide a responsible home for good businesses and help them become stronger, more resilient and better positioned for the future.</p>
          </Reveal>
        </div>

        <Reveal as="div" className="identity-badges">
          {TRAITS.map(({ icon: Icon, label }) => (
            <div className="identity-badge" key={label}>
              <Icon size={18} />
              <span>{label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
