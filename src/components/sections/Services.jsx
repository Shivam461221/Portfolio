import { services } from "../../data/services";
import Section from "../ui/Section";
import { Card } from "../ui/Card";
import Button from "../ui/Button";

export default function Services() {
  return (
    <Section
      id="services"
      title="How I can help"
      subtitle="Three ways to work with me, depending on what you need."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Card key={s.id} delay={i * 0.1} className="flex flex-col">
            <span className="font-mono text-signal-violet text-sm">{s.tag}</span>
            <h3 className="mt-3 font-display text-xl text-ink font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed">{s.description}</p>
            <ul className="mt-5 space-y-2.5 flex-1">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-signal-cyan shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href={s.cta.href} variant="secondary" className="mt-7 self-start !py-2.5 !px-5 text-xs">
              {s.cta.label}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
