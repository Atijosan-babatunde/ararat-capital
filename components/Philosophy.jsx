import Reveal from "./Reveal";
import { Landmark, LayoutGrid, Anchor, TrendingUp, Infinity as InfinityIcon } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Landmark,
    title: "Stewardship",
    desc: "We see ourselves as responsible custodians of the businesses we acquire.",
  },
  {
    icon: LayoutGrid,
    title: "Structure",
    desc: "We believe clarity of people, process, systems and governance creates stronger businesses.",
  },
  {
    icon: Anchor,
    title: "Continuity",
    desc: "We prioritise stability for employees, customers and suppliers during transition.",
  },
  {
    icon: TrendingUp,
    title: "Improvement",
    desc: "We look for practical, measurable ways to improve how the business operates.",
  },
  {
    icon: InfinityIcon,
    title: "Long-term value",
    desc: "We are focused on sustainable growth, not short-term gain.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">Our Philosophy</span>
          <h2>Acquired with respect. Operated with discipline. Grown with purpose.</h2>
        </Reveal>

        <div className="philosophy-grid">
          {PRINCIPLES.map((p) => (
            <Reveal className="philosophy-card" key={p.title}>
              <div className="icon">
                <p.icon size={24} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
