import Reveal from "./Reveal";

const ADVISORS = [
  {
    name: "[Advisor Name]",
    title: "Strategic Advisor",
    company: "[Title / Company]",
    photo: "/images/advisor-1.jpg",
    bio: "[Advisor Name] brings [X] years of experience in corporate strategy, business analysis, and project management, including direct M&A and acquisition experience of their own.",
  },
  {
    name: "[Advisor Name]",
    title: "Executive Advisor",
    company: "[Title / Company]",
    photo: "/images/advisor-2.jpg",
    bio: "[Advisor Name] brings [X] years of executive leadership experience across a diverse set of industries, with deep skills in strategic planning and operational excellence.",
  },
  {
    name: "[Advisor Name], CFP®",
    title: "Financial Advisor",
    company: "[Title / Company]",
    photo: "/images/advisor-3.jpg",
    bio: "[Advisor Name] brings [X] years of experience in financial analysis, planning, and strategy, with direct experience advising business owners and families.",
  },
];

export default function Advisors() {
  return (
    <section id="advisors" className="section section-alt">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">Advisors & Investors</span>
          <h2>Ararat Capital&apos;s Advisory & Investment Team</h2>
          <p>
            Our advisory and investment team brings a wide range of experience in business
            leadership, operations, and finance.
          </p>
        </Reveal>

        <div className="advisors-grid">
          {ADVISORS.map((a) => (
            <Reveal className="advisor-card" key={a.name}>
              <div className="photo">
                <img src={a.photo} alt={a.name} />
              </div>
              <div className="body">
                <h3>{a.name}</h3>
                <div className="title">{a.title}</div>
                <div className="company">{a.company}</div>
                <p>{a.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
