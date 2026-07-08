import Reveal from "./Reveal";

export default function Founder() {
  return (
    <section id="founder" className="section">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">Meet the Founder</span>
          <h2>[FOUNDER NAME]</h2>
        </Reveal>

        <div className="founder">
          <Reveal className="photo" as="div">
            <img src="/images/founder.jpg" alt="[FOUNDER NAME], Managing Partner" />
          </Reveal>
          <Reveal>
            <div className="role">Managing Partner</div>
            <div className="subrole">Disciplined, People-First Operator</div>
            <p>
              [FOUNDER NAME] brings over a decade of leadership experience across [industry],
              [industry], and [industry]. [He/She/They] has led complex, high-stakes projects,
              built high-performing teams from the ground up, and developed the systems needed to
              drive operational excellence. As a hands-on operator, [FOUNDER NAME] will lead the
              day-to-day management of Ararat Capital Holdings&apos; acquired business.
            </p>
            <p>
              [FOUNDER NAME] is passionate about the small business owners who form the backbone
              of the American economy, and is committed to protecting what they&apos;ve built as
              many look toward retirement or their next chapter.
            </p>
            <p>
              [He/She/They] is excited for the opportunity to lead an established business and
              carry its legacy forward — for its employees, its customers, and the community it
              serves.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
