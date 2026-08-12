import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import { education } from "../../data/education";
import Section from "../ui/Section";
import { Tag } from "../ui/Card";
import { GraduationCap, Briefcase } from "lucide-react";

function TimelineItem({ icon: Icon, title, subtitle, meta, body, tags, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-10 pb-10 last:pb-0 border-l border-base-line last:border-transparent"
    >
      <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-base-elevated border border-signal-cyan/40 flex items-center justify-center">
        <Icon size={12} className="text-signal-cyan" />
      </span>
      <p className="font-mono text-xs text-signal-cyan">{meta}</p>
      <h3 className="mt-1 font-display text-lg text-ink font-semibold">{title}</h3>
      <p className="text-sm text-ink-muted">{subtitle}</p>
      {body && <p className="mt-2 text-sm text-ink-muted leading-relaxed">{body}</p>}
      {tags && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Where I've worked, and where I studied">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h3 className="font-mono text-sm text-ink-muted mb-8 uppercase tracking-wider">Experience</h3>
          {experience.map((e, i) => (
            <TimelineItem
              key={e.id}
              icon={Briefcase}
              title={e.role}
              subtitle={e.org}
              meta={e.duration}
              body={e.summary}
              tags={e.tech}
              index={i}
            />
          ))}
        </div>
        <div>
          <h3 className="font-mono text-sm text-ink-muted mb-8 uppercase tracking-wider">Education</h3>
          {education.map((e, i) => (
            <TimelineItem
              key={e.id}
              icon={GraduationCap}
              title={e.degree}
              subtitle={e.institute}
              meta={`0${i + 1}`}
              body={e.note}
              index={i}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
