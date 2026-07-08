import Reveal from "./Reveal";
import {
  Building2,
  Settings2,
  Users,
  CheckCircle2,
  Briefcase,
  Home,
  Wrench,
  HeartPulse,
  GraduationCap,
  FileCheck2,
  Hammer,
  Handshake,
  Laptop2,
  Repeat2,
} from "lucide-react";

const BUSINESS_CHARACTERISTICS = [
  "A proven trading history",
  "Loyal customers and repeat revenue",
  "Stable or growing demand",
  "Positive cash flow",
  "A clear product or service offering",
  "A good reputation in the market",
  "A capable team or key staff members",
  "Opportunities to improve operations, systems or scale",
  "Potential to reduce founder dependency",
  "A business model that can be made more repeatable",
];

const OPERATIONAL_CHARACTERISTICS = [
  "Better process design",
  "Clearer roles and responsibilities",
  "Improved management information",
  "Technology adoption",
  "Automation of manual tasks",
  "Better customer onboarding or service delivery",
  "Stronger financial and operational controls",
  "Improved sales pipeline management",
  "Better use of data",
  "Standardised ways of working",
];

const OWNER_SITUATIONS = [
  "Planning retirement",
  "Considering succession",
  "Looking to step back from day-to-day operations",
  "Seeking a buyer who will protect their legacy",
  "Looking for a partner to professionalise and grow the business",
  "Managing a business that has outgrown informal processes",
  "Concerned about continuity for employees and customers",
];

const ACQUISITION_CRITERIA = [
  "Established revenue",
  "Positive cash flow",
  "A clear customer base",
  "Repeat or recurring demand",
  "Strong gross margins or room for margin improvement",
  "Limited reliance on one customer where possible",
  "A committed team or transferable operating knowledge",
  "Clear opportunities for operational improvement",
  "A seller who values continuity and responsible ownership",
];

const SECTORS = [
  { icon: Briefcase, label: "Business services" },
  { icon: Home, label: "Property services" },
  { icon: Wrench, label: "Facilities management" },
  { icon: HeartPulse, label: "Healthcare and care-related services" },
  { icon: GraduationCap, label: "Education and training" },
  { icon: FileCheck2, label: "Compliance-led services" },
  { icon: Hammer, label: "Specialist trade services" },
  { icon: Handshake, label: "B2B services" },
  { icon: Briefcase, label: "Professional services" },
  { icon: Laptop2, label: "Technology-enabled service businesses" },
  { icon: Repeat2, label: "Niche consumer services with repeat demand" },
];

export default function Criteria() {
  return (
    <section id="criteria" className="section section-alt">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">What We&apos;re Looking For</span>
          <h2>Established businesses, ready for their next chapter</h2>
          <p>
            We look for established businesses with strong foundations and clear opportunities
            for operational improvement or growth.
          </p>
        </Reveal>

        <div className="criteria-grid">
          <Reveal className="criteria-card criteria-card-list">
            <div className="icon-badge">
              <Building2 size={22} />
            </div>
            <h3>Business Characteristics</h3>
            <ul>
              {BUSINESS_CHARACTERISTICS.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={15} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="criteria-card criteria-card-list">
            <div className="icon-badge">
              <Settings2 size={22} />
            </div>
            <h3>Operational Characteristics</h3>
            <p style={{ fontSize: 14.5, marginBottom: 14 }}>
              We are especially interested in businesses where value can be created through:
            </p>
            <ul>
              {OPERATIONAL_CHARACTERISTICS.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={15} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="criteria-card criteria-card-list">
            <div className="icon-badge">
              <Users size={22} />
            </div>
            <h3>Owner Situations We Support</h3>
            <p style={{ fontSize: 14.5, marginBottom: 14 }}>We are a good fit for owners who are:</p>
            <ul>
              {OWNER_SITUATIONS.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={15} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ---- Sectors of Interest ---- */}
        <Reveal as="div" className="subsection">
          <div className="subsection-heading">
            <span className="eyebrow">Sectors of Interest</span>
            <h3>Where we focus</h3>
            <p>
              We are open to reviewing opportunities across a range of sectors, particularly
              businesses where operational structure, process improvement and technology can
              create meaningful value.
            </p>
          </div>
          <div className="tag-grid">
            {SECTORS.map(({ icon: Icon, label }) => (
              <div className="tag-pill" key={label}>
                <Icon size={16} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ---- Acquisition Criteria ---- */}
        <Reveal as="div" className="subsection">
          <div className="subsection-heading">
            <span className="eyebrow">Our Acquisition Criteria</span>
            <h3>At a glance</h3>
            <p>While we review each opportunity individually, we typically look for businesses with:</p>
          </div>
          <div className="criteria-strip">
            {ACQUISITION_CRITERIA.map((item) => (
              <div className="criteria-chip" key={item}>
                <CheckCircle2 size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="section-footnote">
            We are open to flexible deal structures depending on the business, the owner&apos;s
            goals and the transition required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
