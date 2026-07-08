import Reveal from "./Reveal";
import { HelpCircle } from "lucide-react";

const QUESTIONS = [
  "How does the business acquire customers?",
  "How does it deliver value?",
  "Where are the operational bottlenecks?",
  "Which processes are manual or inconsistent?",
  "Where is the business too dependent on the founder?",
  "What technology could improve efficiency?",
  "What data is missing for better decision-making?",
  "How clear are roles, responsibilities and controls?",
  "What would the business need to scale safely?",
];

export default function Different() {
  return (
    <section id="different" className="section">
      <div className="container">
        <div className="who-we-are">
          <Reveal className="copy">
            <span className="eyebrow">What Makes Us Different</span>
            <h2>An acquisition mindset with transformation capability</h2>
            <p>
              Many buyers focus mainly on financial performance. While financial strength is
              important, we also look deeply at the operating engine of the business. This
              structured lens allows us to identify value that may not be obvious at first
              glance.
            </p>
            <p style={{ marginBottom: 0 }}>
              We are particularly suited to businesses that are profitable but under-structured,
              growing but operationally stretched, or strong in customer demand but limited by
              outdated systems and processes.
            </p>
          </Reveal>

          <Reveal as="div">
            <div className="question-list">
              {QUESTIONS.map((q) => (
                <div className="question-item" key={q}>
                  <HelpCircle size={18} />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
