import Reveal from "./Reveal";
import { MessageCircle, SearchCheck, Target, FileText, ClipboardCheck, Route, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Initial conversation",
    desc: "We begin with a confidential discussion to understand the owner's goals, the business model and whether there may be a good fit.",
  },
  {
    icon: SearchCheck,
    title: "Business and operating model review",
    desc: "We review both the financial performance and the operating structure of the business customers, processes, systems, people, data, risks and growth opportunities.",
  },
  {
    icon: Target,
    title: "Value creation assessment",
    desc: "We identify where the business is already strong and where practical improvements could support growth, resilience or efficiency.",
  },
  {
    icon: FileText,
    title: "Indicative offer",
    desc: "If there is mutual interest, we provide an initial view on valuation, deal structure and transition approach.",
  },
  {
    icon: ClipboardCheck,
    title: "Due diligence",
    desc: "We carry out financial, legal, commercial and operational due diligence in a structured and professional way.",
  },
  {
    icon: Route,
    title: "Transition planning",
    desc: "We agree how the business will transition after completion the owner's involvement, employee communication, customer continuity and operational priorities.",
  },
  {
    icon: TrendingUp,
    title: "Post acquisition improvement",
    desc: "After completion, we focus on stability first, then targeted improvements that strengthen the business without disrupting what already works.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section section-alt">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">Our Process</span>
          <h2>From first conversation to long-term stewardship</h2>
        </Reveal>

        <div className="timeline">
          {STEPS.map((step, i) => (
            <Reveal className="timeline-item" key={step.title}>
              <div className="timeline-marker">
                <step.icon size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-step">Step {i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
