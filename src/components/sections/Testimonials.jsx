import { testimonialsPlaceholder } from "../../data/misc";
import Section from "../ui/Section";
import { Card } from "../ui/Card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="What people say"
      subtitle="Real testimonials from students, clients, and colleagues will go here."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {testimonialsPlaceholder.map((t, i) => (
          <Card key={t.category} delay={i * 0.08}>
            <Quote size={20} className="text-signal-cyan/50" />
            <p className="mt-4 text-sm text-ink-muted italic leading-relaxed">{t.quote}</p>
            <p className="mt-5 font-mono text-xs text-signal-violet">{t.category}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
