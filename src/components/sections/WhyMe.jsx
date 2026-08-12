import { whyMe } from "../../data/misc";
import Section from "../ui/Section";
import { Card } from "../ui/Card";

export default function WhyMe() {
  return (
    <Section id="why-me" title="Why work with me">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyMe.map((w, i) => (
          <Card key={w.title} delay={i * 0.06}>
            <span className="font-mono text-xs text-signal-violet">0{i + 1}</span>
            <h3 className="mt-2 font-display text-base text-ink font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">{w.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
