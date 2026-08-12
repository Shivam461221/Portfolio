import { motion } from "framer-motion";
import { personal } from "../../data/personal";
import Section from "../ui/Section";
import { Tag } from "../ui/Card";

export default function About() {
  return (
    <Section id="about" title="Software developer. Also a technical trainer.">
      <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-ink-muted text-base md:text-lg leading-relaxed"
        >
          {personal.aboutSummary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-base-line bg-base-card/60 p-6 md:p-8"
        >
          <p className="font-mono text-xs text-signal-cyan mb-4"></p>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li className="flex gap-2">
              <span className="text-signal-violet">→</span> Building production apps with MERN & Java/Spring Boot
            </li>
            <li className="flex gap-2">
              <span className="text-signal-violet">→</span> Teaching MERN, Java, Cloud & DevOps fundamentals
            </li>
            <li className="flex gap-2">
              <span className="text-signal-violet">→</span> Based in {personal.location}, working remotely
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <Tag>MERN Stack</Tag>
            <Tag>Java / Spring Boot</Tag>
            <Tag>Full Stack Dev</Tag>
            <Tag>Technical Training</Tag>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
