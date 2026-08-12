import { courses } from "../../data/courses";
import Section from "../ui/Section";
import { Card, Tag } from "../ui/Card";
import Button from "../ui/Button";

export default function Training() {
  return (
    <Section
      id="training"
      title="Learn. Build. Become job ready."
      subtitle="Practical, project-based training in the same technologies I use in production — with interview prep and career guidance built in."
    >
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {courses.map((c, i) => (
          <Card key={c.id} delay={i * 0.08}>
            <h3 className="font-display text-lg text-ink font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">{c.overview}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs text-signal-cyan">who it's for</p>
            <p className="mt-1 text-sm text-ink-muted">{c.audience}</p>
            <p className="mt-4 font-mono text-xs text-signal-cyan">outcomes</p>
            <ul className="mt-1 space-y-1.5">
              {c.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-1.5 text-sm text-ink-muted">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-signal-violet shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
            <Button href="#contact" variant="secondary" className="mt-6 !py-2.5 !px-5 text-xs">
              Enquire Now
            </Button>
          </Card>
        ))}
      </div>

      <div className="rounded-2xl border border-signal-cyan/20 bg-gradient-to-br from-signal-cyan/5 to-signal-violet/5 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-xl md:text-2xl text-ink font-semibold">
            Practical learning, doubt solving, and career guidance
          </h3>
          <p className="mt-2 text-ink-muted text-sm max-w-xl">
            Project-based curriculum, industry-oriented concepts, hands-on coding, and interview
            preparation — not just video lectures.
          </p>
        </div>
        <Button href="#contact" className="shrink-0">
          Join Training
        </Button>
      </div>
    </Section>
  );
}
