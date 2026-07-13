import Reveal from "./Reveal";
import { CheckCircle2 } from "lucide-react";

const REASONS = ["A long term ownership mindset", "Business analysis and transformation experience", "Target operating model capability", "Process and systems improvement expertise", "A respectful succession approach", "A practical understanding of how businesses really work", "A commitment to continuity, integrity and sustainable growth"];

export default function WhyUs() {
  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <div className="who-we-are">
          <Reveal className="copy">
            <span className="eyebrow">Why Ararat Capital Holdings</span>
            <h2>Designed for owners who want more than capital</h2>
            <p>Ararat Capital Holdings is designed for business owners who want a buyer with both commercial discipline and operational capability. We bring:</p>
          </Reveal>
          <Reveal as="div">
            <ul className="reasons-list">
              {REASONS.map((r) => (
                <li key={r}>
                  <CheckCircle2 size={18} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal as="p" className="section-footnote" style={{ marginTop: 48 }}>
          We are looking to build a group of strong, well run businesses that can grow beyond their founders while preserving the values that made them successful.
        </Reveal>
      </div>
    </section>
  );
}
