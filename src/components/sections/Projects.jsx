import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import { projects } from "../../data/projects";
import Section from "../ui/Section";
import { Card, Tag } from "../ui/Card";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Selected work"
      subtitle="A mix of production and personal projects across the MERN and Java/Spring Boot stacks."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Card key={p.id} delay={i * 0.08}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-lg md:text-xl text-ink font-semibold">{p.name}</h3>
              <div className="flex items-center gap-2 shrink-0">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} GitHub repository`}
                    className="p-2 rounded-full border border-base-line text-ink-muted hover:text-signal-cyan hover:border-signal-cyan/40 transition-colors"
                  >
                    <GithubIcon size={14} />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} live demo`}
                    className="p-2 rounded-full border border-base-line text-ink-muted hover:text-signal-cyan hover:border-signal-cyan/40 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-3 text-sm text-ink-muted leading-relaxed">{p.description}</p>

            <p className="mt-4 font-mono text-xs text-signal-cyan">problem solved</p>
            <p className="mt-1 text-sm text-ink-muted">{p.problem}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-1.5 text-xs text-ink-muted">
                  <span className="mt-1 w-1 h-1 rounded-full bg-signal-violet shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
