import Reveal from "./Reveal";

const TRAITS = [
  {
    photo: "/images/trait-privately-held.jpg",
    title: "Privately Held",
    desc: "We're not constrained by a fund's investment cycle or pressured by an exit deadline. Our decisions are driven by long-term judgment. That gives us the patience to strengthen businesses over time and the conviction to invest decisively when the opportunity is right.",
  },
  {
    photo: "/images/trait-hands-on.jpg",
    title: "Hands-On Operators",
    desc: "We don't just oversee the business we become part of it, working alongside the people who know it best to understand its operations from the inside out. The best opportunities to create value aren't found in presentations; they're uncovered by being close enough to see what others miss.",
  },
  {
    photo: "/images/trait-structured.jpg",
    title: "Structured Approach",
    desc: "Before accelerating growth, foundations are established people, processes, systems, financial controls, governance. Nothing is overlooked. We believe strong businesses aren't built on momentum, but on the discipline and structure that allow growth to last.",
  },
  {
    photo: "/images/trait-stewardship.jpg",
    title: "Long-Term Stewardship",
    desc: "Every business carries a legacy worth preserving. Our role isn't to reshape it for a quick exit, but to strengthen it for the long term. We invest with patience, grow with purpose and clarity, and make long-term commitments to building lasting value.",
  },
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

        {/* <div className="who-we-are-columns">
          <Reveal>
            <p>We are not passive investors. We are hands-on business builders with a structured approach to understanding how businesses operate, where value is created, and how performance can be improved.</p>
            <p style={{ marginBottom: 0 }}>Our background in business analysis, target operating model design, process improvement and technology-enabled transformation allows us to look beyond the numbers. We assess how a business works at every level — its customers, people, processes, systems, data, governance, revenue model and operational structure.</p>
          </Reveal>
          <Reveal>
            <p>This gives us a practical advantage when acquiring and scaling businesses. We can identify what already works, protect the strengths of the business, and introduce the right level of structure to help it grow sustainably.</p>
            <p style={{ marginBottom: 0 }}>We are particularly interested in owner-led businesses where the founder is considering succession, retirement, a phased exit, or a partner who can support the next stage of growth. Our goal is to provide a responsible home for good businesses and help them become stronger, more resilient and better positioned for the future.</p>
          </Reveal>
        </div> */}

        <div className="trait-grid">
          {TRAITS.map(({ photo, title, desc }) => (
            <Reveal className="trait-card" key={title}>
              <div className="trait-photo">
                <img src={photo} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
